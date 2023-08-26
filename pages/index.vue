<template>
  <div class="flex w-full"></div>
</template>

<script setup>
import Auth from "../middlewares/Auth";
definePageMeta({
  middleware: [Auth],
});

</script>