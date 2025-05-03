<template>
  <div
    class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
  >
    <h1 class="text-3xl font-bold text-(--ui-text-primary)">Tasks</h1>
    <div class="flex gap-4">
      <USelect
        v-model="localValue"
        value-key="value"
        :items="items"
        :icon="icon"
        class="w-96 h-12 px-4 cursor-pointer hover:shadow-2xl transition"
      ></USelect>
      <UButton
        class="w-96 flex justify-center items-center gap-4 cursor-pointer hover:shadow-2xl transition"
        :icon="newTaskVisible ? 'mdi:close' : 'mdi:book-edit'"
        :label="newTaskVisible ? 'Close' : 'Create new task'"
        color="primary"
        @click="emit('setNewTaskVisible')"
      >
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  value: String,
  newTaskVisible: Boolean,
});
const emit = defineEmits(["update:value", "setNewTaskVisible"]);

const items = ref([
  {
    label: "All",
    value: "all",
    icon: "fluent-emoji-flat:white-circle",
  },
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

const setNewTaskVisible = () => {
  emit("setNewTaskVisible");
};

const localValue = ref(props.value || items.value[0]?.value);

watch(localValue, (newValue) => {
  emit("update:value", newValue);
});

const icon = computed(
  () =>
    items.value.find((item: { value: any }) => item.value === localValue.value)
      ?.icon
);
</script>
