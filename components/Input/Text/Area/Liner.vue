<template>
  <div class="card flex flex-row text-sm overflow-scroll rounded-[3px]" :class="[h, w]" dir="ltr">
    <div class=" number-card py-2 border border-r-0 bg-base-200 h-fit min-h-full" ref="numberCardDiv">
      <span
        v-for="line in lines"
        class="text-base-content flex flex-row justify-center w-6"
      >
        {{ line }}
      </span>
    </div>
    <textarea
    ref="textAreaDiv"
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
const numberCardDiv = ref(null)
const textAreaDiv = ref(null)

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
  // event.target.style.height = "100%";
  if (lines.value > 7) {
    numberCardDiv.value.style.height = "1000px";
    textAreaDiv.value.style.height = "1000px";
  }else {
    numberCardDiv.value.style.height = "170px";
    textAreaDiv.value.style.height = "170px";
  }
}
</script>