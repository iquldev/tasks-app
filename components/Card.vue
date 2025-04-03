<template>
  <div class="relative" v-if="isLoaded">
    <div
      class="p-4 rounded-sm flex flex-col gap-y-2"
      :style="{ backgroundColor: `var(${bgColor})` }"
    >
      <div>
        <h1 class="text-2xl font-bold text-(--ui-text-primary)">{{ title }}</h1>
        <p class="text-(--ui-text-primary)">{{ desc }}</p>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <Icon
            name="material-symbols:priority-high-rounded"
            class="text-(--ui-text-primary)"
          ></Icon>
          <p class="text-(--ui-text-primary)">{{ categoryText }}</p>
        </div>
        <div class="flex items-center gap-2" :style="{ color: statusColor }">
          <Icon :name="icon"></Icon>
          <p class="text-(--ui-text-primary)">{{ statusText }}</p>
        </div>
      </div>
    </div>
    <div class="absolute top-4 right-4 flex items-center flex-col gap-2">
      <UCheckbox
        color="green"
        v-model="isChecked"
        size="xl"
        @change="changeStatus(props.id)"
      ></UCheckbox>
      <button class="bg-black rounded-sm size-5 text-white cursor-pointer">
        <Icon
          name="material-symbols:delete-forever-rounded"
          @click="removeTask(props.id)"
        ></Icon>
      </button>
    </div>
  </div>
</template>

<script setup>
const isLoaded = ref(false);

const props = defineProps({
  title: String,
  desc: String,
  category: String,
  status: Boolean,
  id: Number,
});
const emit = defineEmits(["removeTask", "changeStatus"]);

const bgColor = ref("--ui-gray");
const categoryText = ref("Low priority");

const statusText = ref("Not done");
const statusColor = ref("#0000000");

const icon = ref("material-symbols:remove-done-rounded");

const isChecked = ref(false);

const getCategory = async () => {
  if (props.category == "high") {
    categoryText.value = "High priority";
    bgColor.value = "--ui-high";
  } else if (props.category == "medium") {
    categoryText.value = "Medium priority";
    bgColor.value = "--ui-medium";
  } else if (props.category == "low") {
    categoryText.value = "Low priority";
    bgColor.value = "--ui-low";
  }
};

const getStatus = () => {
  if (props.status) {
    statusText.value = "Done";
    statusColor.value = "#016630";
    isChecked.value = true;
    icon.value = "material-symbols:done-all-rounded";
  } else {
    statusText.value = "Not done";
    statusColor.value = "#9f0712";
    icon.value = "material-symbols:remove-done-rounded";
  }
};

watch(
  () => props.status,
  (newVal, oldVal) => {
    getStatus();
  }
);

const removeTask = () => {
  emit("removeTask", props.id);
};

const changeStatus = () => {
  emit("changeStatus", props.id);
};

onMounted(() => {
  getCategory();
  getStatus();
  isLoaded.value = true;
});
</script>
