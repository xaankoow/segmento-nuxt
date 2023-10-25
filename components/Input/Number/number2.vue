<template>
    <input
        :id="id"
        type="number"
        min="0"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="h-full w-full border border-b-[2px] border-base-400 focus:border-b-primary rounded-[3px] text-sm p-2 text-base-content placeholder:text-base-500"
    />
</template>

<script setup>
defineProps(["modelValue" , "id"]);
defineEmits(["update:modelValue"]);
</script>