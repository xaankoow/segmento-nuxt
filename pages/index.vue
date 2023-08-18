<template>
  <div class="flex w-full">صفحه اصلی</div>
</template>

<script setup>
import Auth from "../middlewares/Auth";
definePageMeta({
  middleware: [Auth],
});

</script>