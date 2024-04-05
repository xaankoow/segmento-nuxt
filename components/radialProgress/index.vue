<template>
    <div
        :class="`radial-progress ' + ${bgColor}`"
        :style="`--value:${valueProps}; --size:${sizeProps}; --thickness:${strokeWidth}; color: ${strokeColor}`" 
        role="progressbar"
    >
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    valueProps: { type: Number, required: true },
    sizeProps: { type: String, required: true },
    bgColor: { type: String, default: 'bg-base-200' },
    strokeWidth: { type: String, default: '4px' },
    strokeColor: { type: String, default: '#0A65CD' }
})
</script>