<template>
    <div
      class="radial-progress text-info w-5 h-5 bg-white border-[90%] border-2 rounded-full"
      :style="`--value:${value};`"
    >
      <div class="relative w-10 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          class="absolute -right-[192px] -top-[32px]"
        >
          <circle
            cx="100"
            cy="40"
            r="8"
            stroke-linecap="round"
            class="circleChart stroke-primary fill-none"
            :style="{ strokeDasharray: `calc(2 * 3.14 * 8)`, strokeDashoffset: `calc((100 - var(--value, 0)) * (2 * 3.14 * 8) / 100)` }"
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
  