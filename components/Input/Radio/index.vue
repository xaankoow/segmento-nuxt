<template>
  <label class="flex items-center gap-2.5 cursor-pointer">
    <input
      type="radio"
      :checked="isChecked"
      :name="name"
      :value="modelValue"
      class="absolute h-0 w-0 opacity-0"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="checkmark relative w-5 h-5 border border-base-400 rounded-[50%]"></span>
    <slot></slot>
  </label>

</template>

<script setup>
const { modelValue, name } = defineProps(["modelValue", "name"]);
defineEmits(["update:modelValue"]);
const value = modelValue;
const isChecked = computed(() => modelValue === value);
</script>


<style scoped>
/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #0A65CD
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  transform: translate(-50%, -50%);
}
</style>
