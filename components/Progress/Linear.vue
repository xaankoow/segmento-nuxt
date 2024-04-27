<template>
    <div>
        <p :class="textClass">
            <slot></slot>
        </p>
        <div class="w-[100%] h-[10px] rounded-xl bg-base-400">
            <div class="h-[10px] rounded-xl"
                :style="{ width: `${value}%`, backgroundColor: strokeColor ? strokeColor : value <= 25 ? '#F35242' : value <= 60 ? '#FFCE47' : '#10CCAE', }">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    value: { type: Number, required: true },
    textClass: { type: String, default: 'text-start' },
    strokeColor: { type: String, default: null},
})
</script>