<template>                                                                                              
<div>
    <div class="w-full h-auto mb-4 bg-white py-5 rounded-xl border border-base-400 flex items-center justify-center">
        <div class="min-w-fit h-full text-base-content flex items-start justify-center flex-col text-lg">
            <p class="mt-16 w-full pr-5 border-r-2 border-primary px-2 text-xsm">
            {{ props.name }} برای <i class="opacity-50" >{{ defaultPhrase.keyword }}</i>
            </p>
            <button
            class="w-40 h-10 rounded-lg cursor-pointer text-[#0A65CDB2] flex items-center justify-evenly bg-[#0A65CD26] text-xsm mt-5 mx-5">
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M6.27812 15.8008C5.76146 15.8008 5.32812 15.6258 4.97812 15.2758C4.62812 14.9258 4.45312 14.5008 4.45312 14.0008V2.62578C4.45312 2.10911 4.62812 1.67578 4.97812 1.32578C5.32812 0.975781 5.76146 0.800781 6.27812 0.800781H14.6281C15.1281 0.800781 15.5575 0.979781 15.9161 1.33778C16.2741 1.69645 16.4531 2.12578 16.4531 2.62578V14.0008C16.4531 14.5008 16.2741 14.9258 15.9161 15.2758C15.5575 15.6258 15.1281 15.8008 14.6281 15.8008H6.27812ZM6.27812 14.3008H14.6281C14.7281 14.3008 14.8075 14.2714 14.8661 14.2128C14.9241 14.1548 14.9531 14.0841 14.9531 14.0008V2.62578C14.9531 2.52578 14.9241 2.44645 14.8661 2.38778C14.8075 2.32978 14.7281 2.30078 14.6281 2.30078H6.27812C6.17812 2.30078 6.09913 2.32978 6.04113 2.38778C5.98246 2.44645 5.95312 2.52578 5.95312 2.62578V14.0008C5.95312 14.0841 5.98246 14.1548 6.04113 14.2128C6.09913 14.2714 6.17812 14.3008 6.27812 14.3008ZM2.75312 19.3008C2.25312 19.3008 1.82812 19.1258 1.47812 18.7758C1.12812 18.4258 0.953125 18.0008 0.953125 17.5008V5.55078C0.953125 5.35078 1.02379 5.17578 1.16513 5.02578C1.30713 4.87578 1.48646 4.80078 1.70312 4.80078C1.90312 4.80078 2.07812 4.87578 2.22812 5.02578C2.37812 5.17578 2.45312 5.35078 2.45312 5.55078V17.5008C2.45312 17.5841 2.48213 17.6548 2.54013 17.7128C2.59879 17.7714 2.66979 17.8008 2.75312 17.8008H11.7031C11.9031 17.8008 12.0781 17.8758 12.2281 18.0258C12.3781 18.1758 12.4531 18.3508 12.4531 18.5508C12.4531 18.7674 12.3781 18.9464 12.2281 19.0878C12.0781 19.2298 11.9031 19.3008 11.7031 19.3008H2.75312Z"
                fill="#488CDA" />
            </svg>
            کپی موضوعات
            </button>
        </div>
        <div class="w-full flex relative  h-full">
            <svg ref="svg" class="w-full flex h-fit" width="400" :height=phraseLength*33  fill="none" version="1.1" >
            <circle class="circle" cx="99%" cy="50%" r="5.5" fill="black" fill-opacity="0.7" > </circle>
            <g class="line" >
                <line v-for="word in defaultPhrase.content" :key="word" opacity="0.2"
                x1="76%" :y1=defaultPhrase.content.indexOf(word)*45+37 x2="99%" y2="50%" style="stroke:black;stroke-width:0.7" />
            </g>
            
            <g class="w-auto h-max flex flex-col">
                <a v-for="word in defaultPhrase.content" :key="word"> 
                    <circle class="circle" cx="76%" :cy=defaultPhrase.content.indexOf(word)*45+37 r="3.5" fill="gray" fill-opacity="0.2"> </circle>
                    <text x="74%" :y=defaultPhrase.content.indexOf(word)*45+40  paint-order="stroke" style="fill:navy; font-size:16px;">
                        {{ word }}
                    </text>
                </a>
            </g>
            </svg>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref , reactive , onMounted } from "vue"

const phraseLength = ref("")
const defaultPhrase = ref("")
const svg = ref(null)

const props = defineProps(["name" , "phrase"]);

onMounted(() => {
    defaultPhrase.value = props.phrase
    phraseLength.value = defaultPhrase.value.content.length
})

</script>