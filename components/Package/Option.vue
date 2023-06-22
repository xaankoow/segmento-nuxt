<template>
  <div
    class="flex flex-row justify-between items-center border border-base-200 rounded-sm p-2"
  >
    <div class="flex flex-row gap-3">
      <input type="radio" :name="`radio-${id}`" class="radio" checked />
      <span>{{ text }}</span>
    </div>
    <div style="font-size: 0.5rem">{{ discount }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
    default: "",
  },
});
</script>