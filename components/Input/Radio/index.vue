<script setup>
const { modelValue, name, id } = defineProps(["modelValue", "name", "id"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-row items-center justify-center" dir="rtl">
    <input
      class="hidden"
      type="radio"
      :name="name"
      :id="id"
      :value="id"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <label
      class="w-full h-full p-2 pr-8 relative flex flex-row items-center cursor-pointer"
      :for="id"
    >
      <span
        class="radio border-2 border-base-300 h-[18px] w-[18px] absolute right-2 flex items-center justify-center radio-blue"
      >
        <span class="h-[10px] w-[10px] bg-white rounded-full"></span>
      </span>
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>
input[type="radio"]:checked + label .radio {
  background-color: #0a65cd; /* Red background color when checked */
  border: none;
}
input[type="radio"]:not(:checked) + label .radio * {
  opacity: 0;
}
</style>
