<template>
  <div class="flex w-full">صفحه اصلی</div>
</template>

<script setup>
import ConfigStore from "../store/ConfigStore";
import Auth from "../middlewares/Auth";
definePageMeta({
  middleware: [Auth],
});

</script>