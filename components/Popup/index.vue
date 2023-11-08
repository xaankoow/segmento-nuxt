<script setup>
import Config from "~~/composables/Config";

const cn = new Config();
const dir = cn.by_route("config/dir");

defineProps({
  modelValue: {},
  bubble_bursting: {
    type: Boolean,
    default: true,
  },
  class: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed inset-0 z-50 top-0 left-0 w-full h-screen bg-[#E8E8E8]/50 flex justify-center items-center"
    @click.self="bubble_bursting ? $emit('update:modelValue', false) : ''"
  >
    <div :class="class" class="bg-white rounded-[9px]">
      <div v-if="$slots.header" :dir="dir">
        <div
          class="flex flex-row items-center justify-between w-full px-2 py-1 rounded-t-[9px] bg-base-500 text-white text-sm"
        >
          <span class="flex flex-row items-center w-1/4"></span>
          <span class="flex flex-row items-center w-2/4 justify-center">
            <slot name="header"></slot>
          </span>
          <span class="flex flex-row items-center w-1/4 justify-end text-xl h-full"
            ><button
              class="flex flex-row items-center font-mono px-1 h-full"
              @click="$emit('update:modelValue', false)"
            >
              ✕
            </button>
          </span>
        </div>
      </div>
      <div v-if="$slots.default">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
