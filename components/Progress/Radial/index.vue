<template>
  <div
    :class="`h-${size} bg-[#10CCAE33] rounded-full flex items-center justify-center bottom-2 border-4 border-base-400 text-white relative`"
    :style="`background-color: ${bg}; --value:${value}; width:${size};height:${size};`"
  >
    <div class="text-center">
      <p :style="{ color: textColor, fontSize: fontSize }">{{ remained }}</p>
      <p :style="{ color: textColor, fontSize: fontSizeText }">
        {{ textValue }}
      </p>
    </div>
    <div class="absolute">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="absolute -right-[72px] -top-[69px] w-36 h-36 -rotate-90"
      >
        <circle
          cx="75"
          cy="72"
          :r="sizeCircle"
          stroke-linecap="round"
          class="circleChart fill-none"
          :style="{ stroke: color, ...circleStyle }"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  value: {
    type: Number,
    default: 100,
  },
  remained: {
    type: Number,
    default: 70,
  },
  color: {
    type: String,
    default: "#10CCAE",
  },
  bg: {
    type: String,
    default: "#10CCAE33",
  },
  size: {
    type: String,
    default: "7rem",
  },
  sizeCircle: {
    type: Number,
    default: 58,
  },
  fontSize: {
    type: String,
    default: 10,
  },
  textValue: {
    type: String,
    default: "",
  },
  textColor: {
    type: String,
    default: "#000000",
  },
  fontSizeText: {
    type: String,
    default: "8px",
  },
});

const circleStyle = computed(() => {
  const circumference = 2 * Math.PI * props.sizeCircle; // محیط دایره
  const offset = (circumference * (props.value - props.remained)) / props.value; // محاسبه strokeDashoffset بر اساس value
  return {
    strokeDasharray: circumference,
    strokeDashoffset: offset,
  };
});
</script>
