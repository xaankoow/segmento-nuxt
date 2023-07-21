<template>
  <div class="flex w-full">صفحه اصلی</div>
</template>

<script setup>
onBeforeMount(() => {
  if (useCookie("token").value !== '') navigateTo("/keyword-research");
  else navigateTo("/auth/login");
});
</script>