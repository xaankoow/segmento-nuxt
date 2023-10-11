<template>
    <div class="w-full h-full border-solid border-[#D9D9D9] ">
        <div class="w-[95%] h-full bg-[darkgray] p-8 " dir="ltr">
            <pre><span>&lt;script</span><span> </span><span>type</span><span>=</span><span>"application/ld+json"</span><span>&gt;</span></pre>
            <json-pretty :data="jsonData"></json-pretty>
            <pre>&lt;/script&gt;</pre>
        </div>
        <div class="w-[5%] h-full bg-[#F2F5F7]">
            
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import JsonPretty from 'vue-json-pretty';
const props = defineProps(["values" , "jsonData"]);

</script>
