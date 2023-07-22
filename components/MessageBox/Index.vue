<template>
  <div class="w-full h-40 rounded-md flex text-white" :class="color">
    <div class="w-3/4 h-full flex flex-col justify-evenly px-5">
      <p><slot name="header">موفقیت آمیز</slot></p>
      <p><slot name="main">کاربر عزیز اشتراک 12 ماهه طلایی با موفقیت برای شما فعال شد</slot></p>
      <p><slot name="footer"></slot></p>
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
    default: "bg-success",
  },
});
</script>