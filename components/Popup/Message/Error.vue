<template>
  <PopupMessage headerBgColor="bg-error" :title="title">
    <template v-slot:header>
      <slot name="header"></slot>
    </template>

    <template v-slot:main>
      <slot name="main"></slot>
    </template>

    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </PopupMessage>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>