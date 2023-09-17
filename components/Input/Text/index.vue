<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    class="resize-none border border-base-400 rounded-[3px] text-sm p-2 focus:border-b-primary h-10 text-base-content placeholder:text-base-400">
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>