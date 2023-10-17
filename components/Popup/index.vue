<template>
  <div
    class="fixed inset-0 z-50 top-0 left-0 w-full h-screen bg-base-350/40 flex justify-center items-center"
    @click.self="bubble_bursting ? $emit('close') : ''"
  >
    <div class="bg-white p-8 rounded shadow-lg">
      <slot></slot>
      <button
        @click="$emit('close')"
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  bubble_bursting: {
    type: Boolean,
    default: true,
  },
});
defineEmits(["close"]);
</script>
