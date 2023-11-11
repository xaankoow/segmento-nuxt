<template>
    <input dir="ltr" type="number" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        class="h-10 w-[75px] border border-b-[2px] border-base-400 focus:border-b-primary rounded-[3px] text-sm placeholder:text-sm p-2 text-base-content placeholder:text-base-400" />
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
