<template>
  <div
    class="text-info w-5 h-5 bg-white border-[90%] border-2 rounded-full"
    :style="`--value:${value};`"
  >
    <div class="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="absolute -right-[7px] -top-[8px] w-7 h-7 -rotate-90"
      >
        <circle
          cx="12"
          cy="13"
          r="8"
          stroke-linecap="round"
          class="circleChart stroke-primary fill-none"
          :style="{
            strokeDasharray: `calc(2 * 3.14 * 8)`,
            strokeDashoffset: `calc((100 - var(--value, 0)) * (2 * 3.14 * 8) / 100)`,
          }"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
});
</script>
