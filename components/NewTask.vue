<template>
  <div class="flex flex-col gap-2">
    <UInput
      type="text"
      placeholder="Name"
      class="w-full"
      size="xl"
      v-model="title"
    />
    <UInput
      type="text"
      placeholder="Description"
      class="w-full"
      size="xl"
      v-model="desc"
    />
    <div class="flex gap-4 justify-between">
      <USelect
        v-model="category"
        value-key="value"
        :items="items"
        :icon="icon"
        size="xl"
        class="w-96 px-4 cursor-pointer hover:shadow-2xl transition"
      ></USelect>
      <UButton
        class="w-96 h-12 flex justify-center items-center gap-4 cursor-pointer hover:shadow-2xl transition"
        icon="mdi:book-edit"
        label="Create new task"
        color="primary"
        @click="createTask"
      >
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const addTask =
  inject<(title: string, desc: string, category: string) => void>("addTask");

const items = ref([
  {
    label: "High priority",
    value: "high",
    icon: "fluent-emoji-flat:red-circle",
  },
  {
    label: "Medium priority",
    value: "medium",
    icon: "fluent-emoji-flat:yellow-circle",
  },
  {
    label: "Low priority",
    value: "low",
    icon: "fluent-emoji-flat:green-circle",
  },
]);
const icon = computed(
  () =>
    items.value.find((item: { value: any }) => item.value === category.value)
      ?.icon
);

const title = ref("");
const desc = ref("");
const category = ref("high");

const createTask = () => {
  if (addTask) {
    addTask(title.value, desc.value, category.value);
  }
};
</script>
