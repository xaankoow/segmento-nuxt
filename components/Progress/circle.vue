<template>
    <div class="rounded-full flex items-center justify-center bottom-2">
      <div class="text-center">
        <slot name="content"></slot>
      </div>
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="-rotate-90 w-[140px] h-[140px]">
          <circle
            cx="75"
            cy="72"
            :stroke-width="strokeBgWidth"
            :stroke="strokeBgColor"
            :r="size/2"
            :fill="bg"
            stroke-linecap="round"
            class="circleChart fill-none"
            :style="{ ...bgcircleStyle }"
          />
          <circle
            cx="75"
            cy="72"
            :stroke-width="strokeWidth"
            :stroke="strokeColor"
            :r="size/2"
            :fill="bg"
            stroke-linecap="round"
            class="circleChart fill-none"
            :style="{ ...circleStyle }"
          />
        </svg>
      </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
  
const props = defineProps({
    remain: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    strokeColor: {
        type: String,
        default: "#0A65CD"
    },
    bg: {
      type: String,
      default: "bg-base-200",
    },
    strokeWidth: {
      type: String,
      default: "4px",
    },
    strokeBgWidth: {
      type: String,
      default: "4px",
    },
    strokeBgColor: {
      type: String,
      default: "#D7D7D7",
    },
});
  
const circleStyle = computed(() => {
    const circumference = 2 * Math.PI * props.size/2;
    const offset = (circumference * (100 - props.remain)) / 100;
    return {
      strokeDasharray: circumference,
      strokeDashoffset: offset,
    };
});
const bgcircleStyle = computed(() => {
    const circumference = 2 * Math.PI * props.size/2;
    const offset = -(circumference * (props.remain)) / 100;
    return {
      strokeDasharray: circumference,
      strokeDashoffset: offset,
    };
});
</script>
  