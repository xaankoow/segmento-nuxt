<template>
  <div
    class="card flex flex-row text-sm overflow-hidden rounded-[3px] h-44 w-1/2"
    :dir="dir"
  >
    <div
      class="number-card py-2 border bg-base-200 h-fit min-h-full"
      :class="dir == 'rtl' ? 'border-l-0' : 'border-r-0'"
      ref="firstTextarea"
    >
      <span
        v-for="line in lines"
        :key="line"
        class="text-base-content flex flex-row justify-center w-6"
      >
        {{ line }}
      </span>
    </div>
    <textarea
      ref="secendTextarea"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="line_counter($event)"
      @scroll="scroll_changed($event)"
      class="text-base-content resize-none overflow-sroll border border-b-[2px] focus:border-b-primary p-2 w-full"
    ></textarea>
  </div>
</template>

<script setup>
const lines = ref("");
const firstTextarea = ref(null);
const secendTextarea = ref(null);

const props = defineProps({
  modelValue: {
    default: "",
  },
  dir: {
    type: String,
    default: "ltr",
  },
});

defineEmits(["update:modelValue"]);

function line_counter(event) {
  lines.value = event.target.value.split("\n").length;
  firstTextarea.value.style.transform = `translateY(${-event.target.scrollTop}px)`;
}
function scroll_changed(event) {
  firstTextarea.value.style.transform = `translateY(${-event.target.scrollTop}px)`;
}
</script>
