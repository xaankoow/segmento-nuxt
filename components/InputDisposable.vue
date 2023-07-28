<template>
  <div :id="id" class="flex flex-row items-center gap-4">
    <CustomInput type="text" :placeholder="placeholder" :direction="direction" @value="setValue" />
    <button class="bg-error/10 p-1 rounded-sm hover:bg-error/25 transition-all duration-200" @click="dispose()">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.35 7.4L1.275 12.475C1.14167 12.6083 0.971 12.679 0.763 12.687C0.554333 12.6957 0.375 12.625 0.225 12.475C0.0749999 12.325 0 12.15 0 11.95C0 11.75 0.0749999 11.575 0.225 11.425L5.3 6.35L0.225 1.275C0.0916666 1.14167 0.021 0.970667 0.013 0.762C0.00433335 0.554 0.0749999 0.375 0.225 0.225C0.375 0.0749999 0.55 0 0.75 0C0.95 0 1.125 0.0749999 1.275 0.225L6.35 5.3L11.425 0.225C11.5583 0.0916666 11.7293 0.0206668 11.938 0.0120001C12.146 0.00400008 12.325 0.0749999 12.475 0.225C12.625 0.375 12.7 0.55 12.7 0.75C12.7 0.95 12.625 1.125 12.475 1.275L7.4 6.35L12.475 11.425C12.6083 11.5583 12.679 11.729 12.687 11.937C12.6957 12.1457 12.625 12.325 12.475 12.475C12.325 12.625 12.15 12.7 11.95 12.7C11.75 12.7 11.575 12.625 11.425 12.475L6.35 7.4Z"
          fill="#F35242" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import UuidGenerator from "../composables/UuidGenerator";
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    default: 'rtl'
  }
})
const id = ref(0);
const emit = defineEmits(['value', 'name']);

function setValue(value) {
  emit('value', value, id.value);
}

function dispose() {
  let element = document.getElementById(id.value);
  element.remove();
}

onMounted(() => {
  id.value = UuidGenerator.generate(16);
  emit('name', id.value);
});
</script>