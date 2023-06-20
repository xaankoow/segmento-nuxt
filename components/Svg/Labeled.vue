<template>
  <div class="flex flex-row gap-3 w-full h-full items-center cursor-pointer">
    <span :class="active ? '[&>svg]:fill-primary' : '[&>svg]:fill-base-content'">
        <slot></slot>
    </span>
    <span :class="active ? 'text-primary' : ''">
      {{ label }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true
  }
});
</script>