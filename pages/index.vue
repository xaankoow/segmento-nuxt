<template>
  <div class="flex w-full">صفحه اصلی</div>
</template>

<script setup>
onBeforeMount(() => {
  navigateTo("/auth/login");
});
</script>