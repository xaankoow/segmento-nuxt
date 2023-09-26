<template>
  <label class="flex items-center gap-2.5 cursor-pointer">
    <input
      type="checkbox"
      checked="checked"
      :name="name"
      :value="modelValue"
      class="absolute h-0 w-0 opacity-0"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="checkmark relative w-[22px] h-[22px] border border-base-400 rounded-[5px]"></span>
    <slot></slot>
  </label>

</template>

<script setup>
defineProps(["modelValue", 'name']);
defineEmits(["update:modelValue"]);
</script>


<style scoped>
/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #0A65CD;
  border-radius: 5px;
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
  right: 50%;
  top: 50%;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -ms-transform: rotate(45deg);
  transform: rotate(45deg) translate(-50%,-60%);
}
</style>
