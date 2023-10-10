<template>
<div class="flex items-center justify-center">
    <input
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

<script setup>
const { modelValue, name , id } = defineProps(["modelValue", "name", "id"]);
defineEmits(["update:modelValue"]);
const value = modelValue;
const isChecked = computed(() => modelValue === value);

</script>

<style scoped>
input:checked,
input:not(:checked) {
    display: none;
}
input:checked + label,
input:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
}
input:checked + label:before,
input:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
input:checked + label:after,
input:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #0A65CD;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.3s ease;
}
input:not(:checked) + label:after {
    opacity: 0;
    /* -webkit-transform: scale(0);
    transform: scale(0); */
}
input:checked + label:after {
    opacity: 1;
    /* -webkit-transform: scale(1);
    transform: scale(1); */
}
</style>
