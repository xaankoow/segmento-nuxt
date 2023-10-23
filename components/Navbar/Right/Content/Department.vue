<script setup>
const runtimeConfig = useRuntimeConfig();
const DEV_ENV = runtimeConfig.public.DEV_ENV;
</script>

<template>
  <div class="flex flex-col h-full w-full gap-2">
    <div class="flex flex-col gap-2 h-full w-full overflow-y-scroll px-2">
      <slot></slot>
      <!-- <hr /> -->
      <slot name="sites"></slot>

      <hr v-if="DEV_ENV" />
      <div class="flex flex-col gap-2 w-full h-full justify-between">
        <!-- content creating according -->
        <slot name="according"></slot>
      </div>
    </div>
    <div class="flex flex-col gap-2 px-2 pb-2 w-full h-fit justify-between">
      <!-- content creating according -->
      <slot name="message"></slot>
    </div>
  </div>
</template>
