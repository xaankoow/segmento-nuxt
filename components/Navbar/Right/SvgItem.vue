<template>
  <div
    class="flex flex-row mt-[0.888rem] w-[2.621rem] h-[2.277rem] cursor-pointer rounded-md items-center
    hover:bg-base-250" :class="active ? 'bg-base-250' : ''"
  >
    <span class="w-full flex place-content-center" :class="active ? '[&>svg]:fill-primary  border-r border-r-primary' : '[&>svg]:fill-base-content'">
      <slot></slot>
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
</script>