<template>
  <div
    v-if="isPopupVisible"
    class="fixed inset-0 z-50 top-0 left-0 w-full h-screen bg-[#E8E8E8]/50 flex justify-center items-center"
    @click.self="bubble_bursting ? $emit('close') : ''"
  >
    <div :class="class" class="bg-white rounded-[3px]">
      <slot></slot>
      <button
        @click="$emit('update:isPopupVisible', false)"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { isPopupVisible } = defineProps(["isPopupVisible"]);
const emits = defineEmits(["update:isPopupVisible", "close"]);
</script>
