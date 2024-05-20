<template>
  <input
    :title="title"
    :autocomplete="autocomplete"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="resize-none w-full border border-b-[2px] border-base-400 focus:border-b-primary rounded-[3px] text-sm placeholder:text-sm p-2 h-10 text-base-content placeholder:text-base-400"
  />
</template>

<script setup>
defineProps(["modelValue", "autocomplete", "title"]);
defineEmits(["update:modelValue"]);
</script>
