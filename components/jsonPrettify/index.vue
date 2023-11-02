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
  <div class="flex w-full h-fit border-solid border border-[#D9D9D9] rounded-[3px] font-mono" dir="ltr">
    <div id="codeContainer" class="w-full h-auto bg-base-200 p-2" >
      <div class="text-[12px] h-[20px] flex flex-row items-center ">
        <span> &lt;script type="application/ld+json"&gt;</span>
      </div>
      <json-pretty :showLine="false" :data="jsonData"></json-pretty>
      <pre class=" text-[12px] h-[20px]">&lt;/script&gt;</pre>
    </div>
  </div>
</template>
