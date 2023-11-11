<template>
  <div class="w-full h-14 inline-block relative">
    <!-- header -->
    <p class="mb-2 ">
      <slot name="title"></slot>
    </p>
    <!-- content -->
    <select @change="getValue($event)" class="w-full h-11 border border-base-400 rounded p-2" :name=props.title>
      <slot name="option">
        
      </slot>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  title: String,
});

function getValue(el) {
  console.log(el);
}
</script>