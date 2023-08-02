<template>
    <div>Update later !</div>
</template>

<script setup>

definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    return navigateTo('/money-pages/template');
  })
})

</script>