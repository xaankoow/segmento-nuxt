<template>
  <div class="flex w-full">صفحه اصلی</div>
</template>

<script setup>
definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    let token = useCookie("token").value;
    if (token === null || token === "" || token === undefined) {
      return navigateTo("/auth/login");
    } else {
      return navigateTo("/keyword-research");
    }
  }),
});
</script>