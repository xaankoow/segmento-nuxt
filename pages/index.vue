<template>
  <div class="flex w-full" id="page">صفحه اصلی</div>
</template>

<script setup>
import ConfigStore from "../store/ConfigStore";
import One from "../widget/Workspace/Add/Steps/One"

import Auth from "../middlewares/Auth";
definePageMeta({
  middleware: [Auth],
});

onMounted(() => {
  let popup = One.render();
  document.getElementById("page").appendChild(popup);
})
</script>