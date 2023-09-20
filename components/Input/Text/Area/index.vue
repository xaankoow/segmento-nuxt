<script setup>
defineProps({
  modelValue: {},
  used: { default: null, type: Number },
  use_color: { type: String, default: "bg-red-500" },
  placeholder: { type: String },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col items-start">
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="rounded-[3px] resize-none border-b-[2px] text-sm p-2 border border-base-400 text-base-content placeholder:text-base-400 w-full h-full"
      :class="used === null || used === 0 ? 'focus:border-b-primary' : 'focus:border-b-base-400'"
    ></textarea>
    <span
      v-if="used !== null"
      class="block h-[2px] transition-all ease-in-out duration-300 z-10 w-full -mt-[2px]"
      :class="[use_color]"
      :style="`width: ${used <= 100 ? used : 100}%;`"
    >
    </span>
  </div>
</template>
