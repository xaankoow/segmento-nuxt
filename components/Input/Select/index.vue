<template>
  <div class="relative">
    <!-- header -->
    <div class="cursor-pointer" @click="isOpen = !isOpen">
      <slot name="title"></slot>
    </div>
    <!-- content -->
    <div class="py-2 w-full bg-base-100 z-50 shadow-sm" :class="isOpen ? 'absolute' : 'hidden'">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
