<script setup>
// TODO: about this componen, I have to redesign it!
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
    type: [String, Boolean],
    default: false,
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
  strokeSize: {
    type: String,
    default: "8px",
  },
  backStrokeSize: {
    type: [String, Boolean],
    default: false,
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

<template>
  <div
    :class="`h-${size} relative rounded-full flex items-center justify-center bottom-2 ${
      !bg ? 'border-base-400' : ''
    } text-white relative`"
    :style="`background-color: ${
      bg !== false ? bg : 'white'
    }; --value:${value}; width:${size};height:${size}; border-width: ${
      !backStrokeSize ? strokeSize : backStrokeSize
    };`"
  >
    <div class="text-center">
      <p :style="{ color: textColor, fontSize: fontSize }">{{ remained }}</p>
      <p :style="{ color: textColor, fontSize: fontSizeText }">
        {{ textValue }}
      </p>
    </div>
    <div class="absolute flex items-center justify-center w-full h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        class="absolute w-36 h-36 -rotate-90"
      >
        <circle
          cx="75"
          cy="75"
          :r="sizeCircle"
          stroke-linecap="round"
          class="fill-none"
          :style="{ stroke: color, ...circleStyle, strokeWidth: props.strokeSize }"
        />
      </svg>
    </div>
  </div>
</template>
<style scoped></style>
