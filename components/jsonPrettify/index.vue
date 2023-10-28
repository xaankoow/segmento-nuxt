<template>
    <div class="flex w-full h-fit border-solid border-2 border-[#D9D9D9] rounded-xl ">
        <div id="codeContainer" class="w-[93%] h-auto bg-[#FCFCFB] px-8 pt-4 pb-0 rounded-r-xl" dir="ltr">
            <pre class="font-[iranyekan] text-[13px]"><span >&lt;script</span><span> </span><span>type</span><span>=</span><span>"application/ld+json"</span><span>&gt;</span></pre>
            <json-pretty :data="jsonData"></json-pretty>
            <pre class="font-[iranyekan] text-[13px]">&lt;/script&gt;</pre>
        </div>
        <div class=" w-[7%] h-fit bg-[#F2F5F7] rounded-l-xl pt-[18px] flex flex-col justify-center items-center">
            <span v-for="line in linesSum" :key="line" class="text-base-content w-6 h-[23.5px] text-xs flex flex-col justify-center items-center" >
                {{ line }}
            </span>
        </div>
    </div>
</template>

<script setup>
import JsonPretty from 'vue-json-pretty';
import { ref , onMounted , onUpdated , watch } from "vue";
const props = defineProps(["jsonData"]);

const code = ref("")
const lines = ref([]);
const linesSum = ref("")

watch(code, () => {
  lineCounter(code.value);
//   console.log(code.value);
});

function lineCounter(el) {
        for (let i=0 ; i<5 ; i++ ){
            lines.value[i] = el.split(",").length;
            lines.value[i] = el.split("[").length;
            lines.value[i] = el.split("{").length;
            lines.value[i] = el.split("}").length;
        }
        linesSum.value = lines.value.reduce(function(acc, cur) {
            return acc + cur
        })
}

onMounted(()=>{
    code.value = document.getElementById('codeContainer').innerText
})
onUpdated(()=>{
    code.value = document.getElementById('codeContainer').innerText
})
</script>
