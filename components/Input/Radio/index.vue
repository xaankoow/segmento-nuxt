<script setup>
const { modelValue, name, id } = defineProps(["modelValue", "name", "id"]);
defineEmits(["update:modelValue"]);
const value = modelValue;
const isChecked = computed(() => modelValue === value);
</script>

<template>
  <div class="flex items-center justify-center" dir="rtl">
    <input
      class="hidden"
      type="radio"
      :name="name"
      :id="id"
      :value="id"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<style scoped>
input:checked + label,
input:not(:checked) + label {
  position: relative;
  padding-right: 28px;
  cursor: pointer;
  line-height: 20px;
  display: inline-block;
  color: #666;
}

input:checked + label:before,
input:not(:checked) + label:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 100%;
  background: #fff;
}

input:checked + label:before {
  background: #0a65cd;
  border: none;
}

input:checked + label:after,
input:not(:checked) + label:after {
  content: "";
  width: 10px;
  height: 10px;
  background: #fff;
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.3s ease;
}
input:not(:checked) + label:after {
  opacity: 0;
}
input:checked + label:after {
  opacity: 1;
}
</style>
