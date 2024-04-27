<template>
    <div
        :class="`radial-progress ${bgColor}`"
        :style="`--value:${value}; --size:${size}; --thickness:${strokeWidth}; color: ${strokeColor}`" 
        role="progressbar"
    >
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    value: { type: Number, required: true },
    size: { type: String, required: true, default: '5rem' },
    bgColor: { type: String, default: 'bg-base-200' },
    strokeWidth: { type: String, default: '4px' },
    strokeColor: { type: String, default: '#0A65CD' }
})
</script>