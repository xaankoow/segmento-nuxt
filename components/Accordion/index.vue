<template>
  <div class="flex flex-col" :class="isOpen ? 'gap-2' : '!gap-0'">
    <button
      class="flex flex-row items-center justify-between w-full py-2 group"
      @click="isOpen = !isOpen"
    >
      <div class="group-hover:text-primary">
        <slot name="label"></slot>
      </div>
      <div
        class="transition-all duration-100 w-[15px] h-[15px] flex items-center justify-center [&>svg]:fill-base-content group-hover:[&>svg]:fill-primary"
        :class="isOpen ? 'transform -rotate-90' : 'transform rotate-0'"
      >
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.47813 14.4014L0.234375 8.18247C0.171875 8.12003 0.125125 8.0481 0.0941252 7.96668C0.0626252 7.88576 0.046875 7.80159 0.046875 7.71418C0.046875 7.62676 0.0626252 7.54235 0.0941252 7.46093C0.125125 7.38 0.171875 7.30833 0.234375 7.24589L6.47813 1.00823C6.62813 0.858374 6.80313 0.783447 7.00313 0.783447C7.20313 0.783447 7.38438 0.864618 7.54688 1.02696C7.69688 1.16433 7.77187 1.33591 7.77187 1.54171C7.77187 1.74801 7.69688 1.92608 7.54688 2.07594L1.88438 7.71418L7.54688 13.3712C7.68438 13.5085 7.75313 13.6771 7.75313 13.8769C7.75313 14.0767 7.67813 14.2515 7.52813 14.4014C7.37813 14.5513 7.20313 14.6262 7.00313 14.6262C6.80313 14.6262 6.62813 14.5513 6.47813 14.4014Z"
          />
        </svg>
      </div>
    </button>
    <div
      class="overflow-hidden transition-all text-sm duration-100 px-3 flex flex-col gap-2"
      :class="!isOpen ? 'h-0' : 'h-fit'"
    >
      <slot></slot>
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
