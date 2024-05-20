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
                <div class="h-[40px] flex flex-row items-center text-base-content group" v-for="word in words" :key="word">
                    <Copy :content="decodeHtml(word)" class="[&>svg]:fill-secondary-text flex flex-row items-center gap-2">
                        <span v-html="word"></span>
                        <svg
                        class="hidden group-hover:block"
                        width="12"
                        height="14"
                        viewBox="0 0 17 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M6.27812 15.8008C5.76146 15.8008 5.32812 15.6258 4.97812 15.2758C4.62812 14.9258 4.45312 14.5008 4.45312 14.0008V2.62578C4.45312 2.10911 4.62812 1.67578 4.97812 1.32578C5.32812 0.975781 5.76146 0.800781 6.27812 0.800781H14.6281C15.1281 0.800781 15.5575 0.979781 15.9161 1.33778C16.2741 1.69645 16.4531 2.12578 16.4531 2.62578V14.0008C16.4531 14.5008 16.2741 14.9258 15.9161 15.2758C15.5575 15.6258 15.1281 15.8008 14.6281 15.8008H6.27812ZM6.27812 14.3008H14.6281C14.7281 14.3008 14.8075 14.2714 14.8661 14.2128C14.9241 14.1548 14.9531 14.0841 14.9531 14.0008V2.62578C14.9531 2.52578 14.9241 2.44645 14.8661 2.38778C14.8075 2.32978 14.7281 2.30078 14.6281 2.30078H6.27812C6.17812 2.30078 6.09913 2.32978 6.04113 2.38778C5.98246 2.44645 5.95312 2.52578 5.95312 2.62578V14.0008C5.95312 14.0841 5.98246 14.1548 6.04113 14.2128C6.09913 14.2714 6.17812 14.3008 6.27812 14.3008ZM2.75312 19.3008C2.25312 19.3008 1.82812 19.1258 1.47812 18.7758C1.12812 18.4258 0.953125 18.0008 0.953125 17.5008V5.55078C0.953125 5.35078 1.02379 5.17578 1.16513 5.02578C1.30713 4.87578 1.48646 4.80078 1.70312 4.80078C1.90312 4.80078 2.07812 4.87578 2.22812 5.02578C2.37812 5.17578 2.45312 5.35078 2.45312 5.55078V17.5008C2.45312 17.5841 2.48213 17.6548 2.54013 17.7128C2.59879 17.7714 2.66979 17.8008 2.75312 17.8008H11.7031C11.9031 17.8008 12.0781 17.8758 12.2281 18.0258C12.3781 18.1758 12.4531 18.3508 12.4531 18.5508C12.4531 18.7674 12.3781 18.9464 12.2281 19.0878C12.0781 19.2298 11.9031 19.3008 11.7031 19.3008H2.75312Z"
                        />
                        </svg>
                    </Copy>
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

function decodeHtml(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    return doc.body.innerText;
}
    
onMounted(() => {
    defaultPhrase.value = props.phrase
    phraseLength.value = defaultPhrase.value.content.length
    props.phrase.content.forEach((currentValue) => {
        let newValue = currentValue.replace(props.phrase.keyword,`&thinsp;<b>${props.phrase.keyword}</b>&thinsp;`)
        words.value.push(newValue)
    });
})

</script>