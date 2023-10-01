<template>
  <div class="w-full h-14">
    <!-- header -->
    <p class="mb-2">
      <slot name="title"></slot>
    </p>
    <!-- content -->
    <select class="w-full h-11 border border-base-400 rounded p-2">
      <slot name="option">
        <option value="" class="text-base-500">لطفا یک گزینه را انتخاب کنید</option>
      </slot>
    </select>
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
