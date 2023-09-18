<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    class="rounded-[3px] resize-none text-sm p-2 focus:border-b-primary border border-base-400 text-base-content placeholder:text-base-400"
  ></textarea>
</template>
