<template>
  <div
    class="flex flex-row w-[2.621rem] cursor-pointer rounded-md items-center hover:[&>span>svg]:fill-primary"
  >
    <span class="w-full flex place-content-center [&>svg]:fill-base-content" :class="active ? 'border-r border-r-primary' : ''">
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