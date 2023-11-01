<script setup>
import JsonPretty from "vue-json-pretty";
import { ref, onMounted, onUpdated, watch } from "vue";
const props = defineProps(["jsonData"]);

const code = ref("");
const lines = ref([]);
const linesSum = ref("");

watch(code, () => {
  lineCounter(code.value);
});

function lineCounter(el) {
  for (let i = 0; i < 5; i++) {
    lines.value[i] = el.split(",").length;
    lines.value[i] = el.split("[").length;
    lines.value[i] = el.split("{").length;
    lines.value[i] = el.split(/}(?!,)/).length;
  }
  linesSum.value = lines.value.reduce(function (acc, cur) {
    return acc + cur;
  });
}

onMounted(() => {
  code.value = document.getElementById("codeContainer").innerText;
});
onUpdated(() => {
  code.value = document.getElementById("codeContainer").innerText;
});
</script>

<style scoped>

</style>

<template>
  <div class="flex w-full h-fit border-solid border border-[#D9D9D9] rounded-[3px]">
    <div id="codeContainer" class="w-[93%] h-auto bg-base-200 px-8 py-2" dir="ltr">
      <div class="text-[12px] h-[20px] flex flex-row items-center font-mono">
        <span> &lt;script type="application/ld+json"&gt;</span>
      </div>
      <json-pretty :showLine="false" :data="jsonData"></json-pretty>
      <pre class="font-mono text-[12px] h-[20px]">&lt;/script&gt;</pre>
    </div>
    <div
      class="w-[7%] bg-base-250 flex flex-col justify-start items-center py-2"
      :class="`h-[${linesSum.length * 20}px]`"
    >
      <span
        v-for="line in linesSum"
        :key="line"
        class="text-base-content w-6 h-[20px] text-xs flex flex-row justify-center items-center"
      >
        <span class="h-full flex justify-center items-center font-mono">
          {{ line }}
        </span>
      </span>
    </div>
  </div>
</template>
