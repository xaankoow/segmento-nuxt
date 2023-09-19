<template>
  <div class="flex flex-col items-end">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="resize-none w-full border border-b-[2px] border-base-400 rounded-[3px] text-sm p-2 h-10 text-base-content placeholder:text-base-400"
      :class="used === null || used === 0 ? 'focus:border-b-primary' : 'focus:border-b-base-400'"
    />
    <span
      v-if="used !== null"
      class="block h-[2px] transition-all ease-in-out duration-300 z-10 w-full -mt-[2px]"
      :class="[use_color]"
      :style="`width: ${used <= 100 ? used : 100}%;`"
    >
    </span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {},
  used: { default: null, type: Number },
  use_color: { type: String, default: "bg-red-500" },
  placeholder: { type: String },
});
defineEmits(["update:modelValue"]);
</script>
