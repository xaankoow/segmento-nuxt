<template>
  <div class="flex flex-col justify-between border rounded-md" :class="active ? 'shadow-md' : ''">
    <!-- title -->
    <div class="flex flex-col">
      <span class="tooltip tooltip-top flex flex-row justify-end cursor-pointer pt-1 pl-1" :data-tip="tooltip">
        <SvgHelp />
      </span>
      <span class="flex w-full justify-center items-center">{{ title }} </span>
    </div>
    <!-- content -->
    <div class="flex flex-col">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false
  }
});
</script>