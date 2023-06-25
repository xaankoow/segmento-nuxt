<template>
    <div class="flex flex-col gap-1 px-2 py-1 rounded-md hover:bg-base-250" :class="active ? 'text-primary' : 'text-base-content'">
        <span class="cursor-pointer">{{ title }}</span>
        <hr class="w-2/3 mx-auto" :class="active ? 'border-primary' : 'border-transparent'"/>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
})
</script>