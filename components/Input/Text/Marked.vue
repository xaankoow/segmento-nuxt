<template>
  <div class="flex flex-col items-start justify-center h-10" :dir="dir">
    <div class="relative h-10 w-full">
      <InputText
        :title="title"
        :autocomplete="autocomplete"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="is_focused = true"
        @blur="is_focused = false"
        type="text"
        :placeholder="is_focused ? placeholder : ''"
        :id="id"
        :dir="dir"
        class="h-10"
        :class="input_class"
        :style="input_style"
      />
      <label
        :for="id"
        class="right-0 absolute text-xs px-2 transition-all duration-300"
        :class="is_focused || modelValue !== '' ? '-top-5' : 'top-2.5'"
      >
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {},
  placeholder: { type: String },
  id: { type: String },
  dir: { type: String, default: "rtl" },
  input_class: { type: String, default: "" },
  input_style: { type: String, default: "" },
  autocomplete: { type: String, default: null},
  title: { type: String, default: null}
});
const is_focused = ref(false);
</script>
