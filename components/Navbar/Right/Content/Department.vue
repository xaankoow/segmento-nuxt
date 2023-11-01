<script setup></script>

<template>
  <div class="flex flex-col h-full w-full gap-2">
    <div class="flex flex-col gap-2 h-full w-full overflow-y-auto px-2">
      <slot></slot>
      <!-- <hr /> -->
      <slot name="sites"></slot>

      <hr />
      <div class="flex flex-col gap-2 w-full h-full justify-between">
        <!-- content creating accordion -->
        <slot name="accordion"></slot>
      </div>
    </div>
    <div class="flex flex-col gap-2 px-2 pb-2 w-full h-fit justify-between">
      <!-- content creating accordion -->
      <slot name="message"></slot>
    </div>
  </div>
</template>
