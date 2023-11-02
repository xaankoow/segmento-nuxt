<template>
  <div class="w-full h-full inline-block relative group">
    <!-- header -->
    <div class="h-full w-full flex justify-between px-2 items-center">
      <span :class="disabled ? 'text-gray-400' : ''">
        <slot name="title"></slot>
      </span>
      <span class="">
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.66797 1L7.0013 6.33333L12.3346 1"
            stroke="#002145"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="disabled ? 'stroke-gray-400' : ''"
          />
        </svg>
      </span>
    </div>
    <!-- content -->
    <div
      class="hidden w-full top-10 pt-2 absolute z-[2000] group-hover:flex"
      v-if="!disabled"
    >
      <div
        class="w-full max-h-48 overflow-y-auto flex-col gap-4 text-center border border-base-400 rounded bg-base-200"
        :name="props.title"
      >
        <slot name="option"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  title: String,
});
</script>

<style scoped></style>
