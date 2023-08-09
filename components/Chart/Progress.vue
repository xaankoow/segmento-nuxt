<template>
    <div class="w-[434px] h-auto flex flex-col items-end justify-center">
        <p class="ml-5 text-xs">{{ value }} درصد</p>
        <div class="w-full bg-gray-300 h-[10px] overflow-hidden rounded-xl">
            <div class="h-full rounded-xl" :style="`background-color: ${color}; width:${value}%;`"></div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 70,
  },
  color: {
    type: String,
    default: "#10CCAE",
  },
});
</script>