<template>
  <div class="relative">
    <input
      :type="type"
      v-model="text"
      class="py-2 pl-2 pr-8 border text-base-content w-full border-gray-300 rounded focus:outline-none focus:border-blue-500"
      @focus="focus()"
      @blur="leave()"
    />
    <label
      for="my-input"
      class="absolute right-2 top-2 transition-all duration-300 transform text-sm"
      :class="placeholder_style()"
    >
      {{ placeHolder }}
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  placeHolder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});
const text = ref("");
const move_out = ref(false);
const placeholder_style = () => {
  return move_out.value || text.value !== ""
    ? "-translate-y-8 text-base-100"
    : "text-base-500";
};
const focus = () => {
  move_out.value = true;
  placeholder_style();
};
const leave = () => {
  placeholder_style();
  move_out.value = false;
};
</script>