<template>
    <div :class="`h-${size} bg-[#10CCAE33] rounded-full flex items-center justify-center text-white`"
        :style="`background-color: ${bg}; --value:${value}; width:${size};height:${size};`">
        <p class="text-4xl" :style="{ color: color }">{{ value }}</p>
        <div class="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
                class="absolute -right-[72px] -top-[69px] w-36 h-36 -rotate-90">
                <circle cx="75" cy="72" :r="sizeCircle" stroke-linecap="round" class="circleChart fill-none"
                    :style="{ stroke: color, ...circleStyle }" />
            </svg>
        </div>
    </div>
</template>
  
<script setup>
import { computed } from "vue";

const props = defineProps({
    value: {
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
        type: Number,
        default: '7rem',
    },
    sizeCircle: {
        type: Number,
        default: 58,
    },
});

const circleStyle = computed(() => {
    const circumference = 2 * Math.PI * props.sizeCircle; // محیط دایره
    const offset = (circumference * (100 - props.value)) / 100; // محاسبه strokeDashoffset بر اساس value
    return {
        strokeDasharray: circumference,
        strokeDashoffset: offset,
    };
});
</script>
  