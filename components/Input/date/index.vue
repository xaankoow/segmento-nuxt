<template>
  <input
    date-format="DD MMMM YYYY" 
    min="2018-01-01"
    type="date"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="h-10 border border-b-[2px] border-base-400 focus:border-b-primary rounded-[3px] text-sm placeholder:text-sm p-2 text-base-content placeholder:text-base-400"
  />
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
