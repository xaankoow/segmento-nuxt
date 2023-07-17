<template>
  <div
    class="w-full h-40 rounded-md flex text-white"
    :style="{ backgroundColor: color }"
  >
    <div class="w-3/4 h-full flex flex-col justify-evenly px-5">
      <p>{{ title }}</p>
      <p>{{ meta_title }}</p>
      <slot name="paragraph"></slot>
    </div>
    <div class="w-1/4 h-full flex items-center justify-end px-10">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#10CCAE",
  },
  title: {
    type: String,
    default: "موفقیت آمیز!",
  },
  meta_title: {
    type: String,
    required: true,
  },
});
</script>
