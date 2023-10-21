<script setup>
const props = defineProps({
  headerBgColor: {
    type: String,
    default: "bg-success",
  },
  title: {
    type: String,
    required: true,
  },
  modelValue: {},
});
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <Popup
    @update:modelValue="$emit('update:modelValue', false)"
    :modelValue="modelValue"
    :bubble_bursting="true"
  >
    <div
      class="flex flex-col justify-between items-center rounded-md shadow-lg min-w-[24rem] bg-base-100"
    >
      <div class="flex flex-col gap-2 w-full">
        <!-- header -->
        <div
          class="flex w-full flex-row items-center justify-center rounded-md"
          :class="headerBgColor"
        >
          <slot name="header"></slot>
        </div>

        <!-- main -->
        <div class="flex w-full flex-col items-center gap-2">
          <h2 class="card-title">{{ title }}</h2>
          <slot name="main"></slot>
        </div>
      </div>

      <!-- footer -->
      <div class="flex w-full flex-row items-center justify-center text-primary">
        <slot name="footer"></slot>
      </div>
    </div>
  </Popup>
</template>
