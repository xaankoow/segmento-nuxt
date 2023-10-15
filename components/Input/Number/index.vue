<template>
    <label class="text-sm" :for="id">{{ labelValue }}</label>
    <input
        :id="id"
        type="number"
        min="0"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="h-full w-[75px] border border-b-[2px] border-base-400 focus:border-b-primary rounded-[3px] text-sm p-2 text-base-content placeholder:text-base-500"
    />
</template>

<script setup>
defineProps(["modelValue" , "placeholder" , "labelValue" , "id"]);
defineEmits(["update:modelValue"]);
</script>