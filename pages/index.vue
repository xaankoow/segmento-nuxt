<template>
  <div class="flex w-full">صفحه اصلی</div>
</template>

<script setup>
import ConfigStore from "../store/ConfigStore";

definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {

    let token = ConfigStore.token();
    console.log(token);
    if (token === null || token === "" || token === undefined) {
      return navigateTo("/auth/login");
    }
  }),
});

</script>