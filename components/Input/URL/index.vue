<template>
    <input
        :id="id"
        :placeholder="placeholder"
        type="url"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="h-full w-full border border-b-[2px] border-base-400 focus:border-b-primary rounded-[3px] text-sm p-2 text-base-content placeholder:text-base-400"
    />
</template>

<script setup>
defineProps(["modelValue" , "id"]);
defineEmits(["update:modelValue"]);
</script>