<template>
  <div class="mx-12 my-6 min-h-[calc(100vh-3rem)]" v-auto-animate>
    <TitleBar
      v-model:value="currentCategory"
      :new-task-visible="newTaskVisible"
      @set-new-task-visible="setNewTaskVisible"
    ></TitleBar>
    <NewTask class="mt-6" v-if="newTaskVisible"></NewTask>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
      v-auto-animate
      v-if="tasks.length > 0"
    >
      <Card
        v-for="item in tasks.filter(
          (item) =>
            currentCategory === 'all' || item.category === currentCategory
        )"
        :key="item._id"
        :id="item._id"
        :title="item.title"
        :desc="item.desc"
        :category="item.category"
        :status="item.status"
        @remove-task="removeTask"
        @change-status="changeStatus"
      ></Card>
    </div>
    <div
      v-if="tasks.length === 0 && !isLoading"
      class="flex flex-col justify-center items-center h-[calc(100vh-12rem)]"
    >
      <h1 class="text-2xl font-bold text-(--ui-primary)">No tasks</h1>
      <p class="text-xl text-(--ui-text-gray)">
        Create a new task to get started
      </p>
    </div>
    <div
      role="status"
      v-if="isLoading"
      class="flex justify-center items-center h-[calc(100vh-12rem)]"
    >
      <svg
        aria-hidden="true"
        class="w-8 h-8 text-gray-200 animate-spin fill-(--ui-primary)"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { $fetch } from "ofetch";

const toast = useToast();

const showToast = (title: string, color: string, icon: string) => {
  toast.add({
    title: title,
    color: color,
    icon: icon,
  });
};

const isLoading = ref(true);

interface Task {
  _id: string;
  title: string;
  desc: string;
  category: string;
  status: boolean;
}

const tasks = ref<Task[]>([]);

const newTaskVisible = ref(false);
const setNewTaskVisible = () => {
  newTaskVisible.value = !newTaskVisible.value;
};

const currentCategory = ref("all");

const removeTask = async (_id: string) => {
  tasks.value = tasks.value.filter((task) => task._id !== _id);
  try {
    await $fetch(`/api/tasks/${_id}`, { method: "DELETE" });
  } catch (e) {
    console.error("Error removing task:", e);
    return;
  }

  showToast("Task removed!", "red", "material-symbols:delete-forever-rounded");
};

const changeStatus = async (_id: string) => {
  const idx = tasks.value.findIndex((task) => task._id === _id);
  if (idx === -1) return;

  try {
    const updated = await $fetch<Task>(`/api/tasks/${_id}`, {
      method: "PUT",
      body: { ...tasks.value[idx], status: !tasks.value[idx].status },
    });

    tasks.value[idx] = updated;
  } catch (e) {
    console.error("Error changing task status:", e);
    return;
  }

  showToast(
    "Task status changed!",
    "info",
    "material-symbols:done-all-rounded"
  );
};

const addTask = async (title: string, desc: string, category: string) => {
  showToast("Adding task...", "info", "material-symbols:downloading-rounded");

  try {
    const newTask = await $fetch<Task>("/api/tasks", {
      method: "POST",
      body: { title, desc, category, status: false },
    });

    tasks.value.push(newTask);
  } catch (e) {
    console.error("Error adding task:", e);
    return;
  }

  newTaskVisible.value = false;
  showToast("Task successfully added!", "green", "mdi:check");
};

onMounted(async () => {
  isLoading.value = true;
  try {
    tasks.value = await $fetch<Task[]>("/api/tasks");
  } finally {
    isLoading.value = false;
  }
});

provide("addTask", addTask);
</script>
