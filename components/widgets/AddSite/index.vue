<script setup>
import { defineProps, defineEmits } from "vue";
import Config from "~~/composables/Config";

const cn = new Config();
const dir = cn.by_route("config/dir");

const props = defineProps({
  modelValue: {},
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <Popup
    @update:modelValue="$emit('update:modelValue', false)"
    :modelValue="modelValue"
    :bubble_bursting="true"
  >
    <template v-slot:header>
      <div>this is a header</div>
    </template>
    <div class="h-full flex flex-col justify-center items-center py-5 w-[80vw]" dir="ltr">
      <h2>Hello, this is a popup!</h2>
      <p>Popup content goes here.</p>
    </div>
  </Popup>
</template>
