<template>
    <div class="rounded-full flex items-center justify-center bottom-2 relative">
      <div class="text-center z-20 absolute">
        <slot></slot>
      </div>
      <div class="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" :width=size :height=size class="-rotate-90">
          <circle
            :cx=(size/2)
            :cy=(size/2)
            :stroke="strokeBgColor"
            :stroke-width="strokeBgWidth"
            :r="(size/2)-5"
            stroke-linecap="round"
            class="fill-none"
            :style="{ ...bgcircleStyle }"
          />
          <circle
            :cx=(size/2)
            :cy=(size/2)
            :stroke="strokeColor"
            :stroke-width="strokeWidth"
            :r="(size/2)-5"
            stroke-linecap="round"
            class="fill-none"
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
    strokeWidth: {
      type: String,
      default: "8px"
    },
    strokeBgWidth: {
      type: String,
      default: "8px"
    },
    strokeBgColor: {
      type: String,
      default: "#D7D7D7"
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
  