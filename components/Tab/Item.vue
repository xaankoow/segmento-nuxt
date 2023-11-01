<template>
  <NuxtLink :to="to ?? ''"
    class="flex flex-col justify-between h-full px-2 rounded-sm">
    <div
      class="flex flex-col justify-center h-full px-2 rounded-sm text-sm"
      :class="active ? 'text-primary' : 'text-[#354a60]'">
      <span>
        <slot>
        </slot>
      </span>
    </div>
    <hr class="w-2/5 mx-auto" :class="active ? 'border-primary' : 'border-transparent'" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: false,
    default: false
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
