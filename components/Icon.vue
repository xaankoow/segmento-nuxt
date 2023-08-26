<template>
    <i class="icon" :class="[group ,icon]" :key="icon"></i>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    icon?: string
}>(), {
    icon: "mdi-icon"
})

const slots = useSlots();

const icon = computed(() => {
  if (slots.default) {
    switch (typeof slots.default()[0].children) {
      case "string":
        return (slots.default()[0].children as string)!.trim()
    }
    return props.icon
  }
})
const group = computed(() => icon.value?.split("-")[0]);

</script>

<style scoped>

</style>