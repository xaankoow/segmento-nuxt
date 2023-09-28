<template>
  <div class="flex text-sm overflow-scroll rounded-[3px]" :class="[h, w]" dir="ltr">
    <div class="py-2 border border-r-0 bg-base-200 h-fit min-h-full">
      <span
        v-for="line in lines"
        class="text-base-content flex flex-row justify-center w-6"
      >
        {{ line }}
      </span>
    </div>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="line_counter($event)"
      class="resize-none overflow-hidden border border-b-[2px] focus:border-b-primary p-2 w-full"
      :class="class"
    ></textarea>
  </div>
</template>

<script setup>
const lines = ref(1);

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  h: {
    type: String,
    default: "h-44",
  },
  w: {
    type: String,
    default: "w-1/2",
  },
  modelValue:{}
});

defineEmits(["update:modelValue"]);

function line_counter(event) {
  lines.value = event.target.value.split("\n").length;
  event.target.style.height = "100%";
  console.log(event.target.style);
}
</script>
