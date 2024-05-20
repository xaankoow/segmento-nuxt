<template>
  <div class="flex flex-col items-start h-10 !text-right">
    <InputText
      :title="title"
      :autocomplete="autocomplete"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      :placeholder="placeholder"
      :id="id"
      :class="
        used === null || used === 0 ? 'focus:border-b-primary' : 'focus:!border-b-base-400'
      "
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
  id: { type: String },
  autocomplete: { type: String, default: null},
  title: { type: String, default: null}
});
</script>
