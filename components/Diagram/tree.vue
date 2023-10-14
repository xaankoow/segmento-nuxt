<template>                                                                                              
<div>
    <div class="w-full h-auto bg-white flex items-center justify-center">
        <div class="w-fit flex relative" :class="`h-[${phraseLength*40}px]`">
            <svg ref="svg" class="w-[200px] flex h-full" width=200 :height=phraseLength*40 fill="none" version="1.1" >
                <g class="line z-[100]" >
                    <line v-for="(word, index) in defaultPhrase.content" :key="word"
                    x1="5%" :y1="index*40+20" x2="96%" y2="50%" class="stroke-base-400" style="z-index: 50;" />
                </g>
                
                <g class="w-auto h-max flex flex-col">
                    <a v-for="(word , index) in defaultPhrase.content" :key="word">
                        <circle class="circle fill-base-400" cx="5%" :cy=index*40+20 r="3.5"> </circle>
                    </a>
                </g>
                <circle class="circle fill-base-500" style="z-index: 100;" cx="96%" cy="50%" r="5.5"> </circle>
            </svg>
        </div>
        <div class="w-full h-full flex relative flex-col">
            <div class="h-[40px] flex flex-row items-center text-base-content" v-for="word in words" :key="word" v-html="word">
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref , onMounted } from "vue"

const phraseLength = ref("")
const defaultPhrase = ref("")
const words = ref([])
const svg = ref(null)

const props = defineProps(["phrase"]);

onMounted(() => {
    defaultPhrase.value = props.phrase
    phraseLength.value = defaultPhrase.value.content.length
    props.phrase.content.forEach((currentValue) => {
        let newValue = currentValue.replace(props.phrase.keyword,`&thinsp;<b>${props.phrase.keyword}</b>&thinsp;`)
        words.value.push(newValue)
    });
})

</script>