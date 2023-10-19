<script setup>
import Config from "~~/composables/Config";

const cn = new Config();
const props = defineProps({
  modelValue: {},
  name: { type: String },
  id: { type: (String, Number) },
  value: { type: String },
  dir: { type: String, default: false },
});
if (props.dir) {
  const dir = props.dir;
} else {
  const dir = cn.by_route("config/dir");
}
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-row items-center justify-center" :dir="dir">
    <input
      :checked="modelValue"
      class="hidden"
      type="checkbox"
      :name="name"
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label
      class="w-full h-full p-2 relative flex flex-row items-center cursor-pointer"
      :class="dir == 'ltr' ? 'pl-8' : 'pr-8'"
      :for="id"
    >
      <span
        class="checkbox rounded-[1px] border-2 border-base-300 h-[18px] w-[18px] absolute flex items-center justify-center"
        :class="dir == 'ltr' ? 'left-2' : 'right-2'"
      >
        <span class="h-[10px] w-[10px]">
          <img class="h-full w-full" src="/images/checked.png" alt="checked" />
        </span>
      </span>
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>
input[type="checkbox"]:checked + label .checkbox {
  background-color: #0a65cd;
  border: none;
}
input[type="checkbox"]:not(:checked) + label .checkbox * {
  opacity: 0;
}
</style>
