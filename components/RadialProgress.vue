<template>
    <div class="radial-progress text-info" :style="`--value:${value};`"></div>
</template>

<script setup>
const props = defineProps({
    value: {
        type: Number,
        required: true
    }
})
</script>