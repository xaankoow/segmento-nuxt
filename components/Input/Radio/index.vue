<script setup>
import Config from "~~/composables/Config";

const cn = new Config();
const dir = cn.by_route("config/dir");
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
      class="w-full h-full p-2 relative flex flex-row items-center cursor-pointer"
      :class="dir == 'ltr' ? 'pl-8' : 'pr-8'"
      :for="id"
    >
      <span
        class="radio border-2 border-base-300 h-[18px] w-[18px] absolute flex items-center justify-center radio-blue"
        :class="dir == 'ltr' ? 'left-2' : 'right-2'"
      >
        <span class="h-[10px] w-[10px] bg-white rounded-full"></span>
      </span>
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>
input[type="radio"]:checked + label .radio {
  background-color: #0a65cd;
  border: none;
}
input[type="radio"]:not(:checked) + label .radio * {
  opacity: 0;
}
</style>
