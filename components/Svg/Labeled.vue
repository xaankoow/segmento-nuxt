<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  label_direction: {
    type: String,
    default: "rtl",
  },
});
</script>

<template>
  <div
    class="flex flex-row gap-3 w-full h-full items-center cursor-pointer hover:text-primary group"
  >
    <span class="w-5 flex justify-center">
      <span
        :class="
          active
            ? '[&>svg]:fill-primary'
            : '[&>svg]:fill-base-content group-hover:[&>svg]:fill-primary'
        "
      >
        <slot></slot>
      </span>
    </span>
    <span :dir="label_direction" :class="active ? 'text-primary' : ''">
      {{ label }}
    </span>
  </div>
</template>

<style scoped></style>
