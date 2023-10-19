<template>
  <div class="flex flex-col items-start justify-center h-10" :dir="dir">
    <div class="relative h-10 w-full">
      <InputText
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="discount_box_focus = true"
        @blur="discount_box_focus = false"
        type="text"
        :placeholder="discount_box_focus ? placeholder : ''"
        :id="id"
        :dir="dir"
        class="h-10"
      />
      <span
        class="right-0 absolute text-xs pointer-events-none px-2 transition-all duration-300"
        :class="discount_box_focus ? '-top-5' : 'top-2.5'"
      >
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {},
  placeholder: { type: String },
  id: { type: String },
  dir: { type: String, default: "rtl" },
});
const discount_box_focus = ref(false);
</script>
