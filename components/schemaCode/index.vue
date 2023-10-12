<template>
    <div class="w-full h-full border-solid border-[#D9D9D9] ">
        <div  id="codeContainer" class="w-[95%] h-full bg-[darkgray] p-8 " dir="ltr">
            <pre><span >&lt;script</span><span> </span><span>type</span><span>=</span><span>"application/ld+json"</span><span>&gt;</span></pre>
            <json-pretty :data="jsonData"></json-pretty>
            <pre>&lt;/script&gt;</pre>
        </div>
        <div class="w-[5%] h-full bg-[#F2F5F7]">
            <span v-for="line in lines" :key="line" class="text-base-content flex flex-row justify-center w-6" >
                {{ line }}
            </span>
        </div>
    </div>
</template>

<script setup>
import JsonPretty from 'vue-json-pretty';
import { onMounted } from "vue";
const props = defineProps(["jsonData"]);

const lines = ref("");

// onMounted(()=>{
//     const code = document.getElementById('codeContainer').innerHTML

//     function line_counter(el) {
//     lines.value = el.innerHTML.split("\n").length;
//     }
//     line_counter(code)
//     console.log(lines.value);
// })


</script>
