<script setup>
import Config from "~~/composables/Config";

const cn = new Config();
const dir = cn.by_route("config/dir");
const props = defineProps({
  modelValue: {},
  name: { type: String },
  id: { type: String },
  value: { type: String },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-row items-center justify-center" dir="rtl">
    <input
      class="hidden"
      type="radio"
      :name="name"
      :id="id"
      :value="value ?? id"
      :checked="modelValue === value ?? id"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <label
      class="w-full h-full relative flex flex-row items-center cursor-pointer"
      :class="dir == 'ltr' ? 'pl-8' : 'pr-8'"
      :for="id"
    >
      <span
        class="radio border-2 border-base-300 h-[18px] w-[18px] absolute flex items-center justify-center"
        :class="dir == 'ltr' ? 'left-2' : 'right-2'"
      >
      </span>
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>
input[type="radio"]:checked + label .radio {
  border-color: #0a65cd;
  border-width: 4px;
}
</style>
