<template>
  <div class="flex flex-col gap-3 h-full w-full px-2 pb-2">
    <slot></slot>
    <!-- <hr /> -->
    <slot name="sites"></slot>

    <!-- <hr /> -->
    <div class="flex flex-col gap-2 w-full h-full justify-between">
      <!-- content creating according -->
      <slot name="according"></slot>
    </div>
  </div>
</template>
