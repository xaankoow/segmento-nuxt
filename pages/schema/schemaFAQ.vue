<template>
<div class="w-full h-auto rounded">
    <div class="w-full h-full p-7">
        <p class="text-base-content text-[18px]"> ساخت اسکیما FAQ </p>
    </div>

    <div class="flex justify-start items-start gap-4 w-full h-full p-7" >
        <!-- _______________________________________ -->
        <!-- right part -->
        <!-- _______________________________________ -->
        <div id="inputsCard" class="w-1/2 h-full flex flex-col gap-10 align-start justify-start">
            <div class="flex flex-col gap-10" v-if="questionNumber == 1">
                <div class="w-full" >
                    <InputText class="w-full align-start" placeholder="متن نمونه" @keyup="changeQuestionName(0)" v-model="values[0].question" />
                </div>
                <div class="w-full h-full align-start" >
                    <InputTextArea class="h-36 w-full" @keyup="changeAnswer(0)" placeholder="متن نمونه" v-model="values[0].answer" />
                </div>
            </div>
            <div class="flex flex-col gap-10" v-if="questionNumber > 1" v-for="(value , index) in values" :key="value">
                <div class="w-full flex items-center gap-6" >
                    <InputText class="w-[80%] align-start" style="width: 80%;" placeholder="متن نمونه" @keyup="changeQuestionName(index)" v-model="values[index].question" />
                    <button @click="deleteOneQuestion(index)" class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                        ✕  
                    </button>
                </div>
                <div class="w-full h-full align-start" >
                    <InputTextArea class="h-36 w-[80%]" @keyup="changeAnswer(index)" placeholder="متن نمونه" v-model="values[index].answer" />
                </div>
            </div>
            <button class="btn-primary px-5 bg-[#F2F5F7] px-5 text-[#488CDA]" @click="addQuestion">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                افزودن سوال 
            </button>
        </div>
        <!-- _______________________________________ -->
        <!-- left part -->
        <!-- _______________________________________ -->
        <div class="w-1/2 flex flex-col gap-10">
            <div class="flex gap-10 w-full" >
                <button @click="deleteQuestions" class="btn-primary px-4" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    حذف 
                </button>
                <a class="btn-primary px-4" href="https://www.google.com" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                    آزمایش 
                </a>
                <Copy class="btn-primary px-4" :content="dataForCopy" >   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>
                    کپی
                </Copy>
            </div>
            <div class="w-full h-full" >
                <div id="code" ref="code" class="w-full min-h-[500px]">
                    <SchemaCode  :jsonData="jsonData" />
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script setup>
import { ref , onMounted } from "vue"

const questionNumber = ref(1)
const values = ref([
    {
        question: "",
        answer: ""
    }
]);
const jsonData = ref(
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": ""
        }
    }]
}
);
// for copy button //
const dataForCopy = ref("")
onMounted(()=>{
    dataForCopy.value = document.getElementById("code").textContent
})
// for delete button //
function deleteQuestions() {
    questionNumber.value = 1
    values.value = [
    {
        question: "",
        answer: ""
    }
    ];
    jsonData.value =
    {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": ""
        }
    }]
    }
}
// for delete one added question
function deleteOneQuestion(taskIndex){
    if (questionNumber.value > 1) {
        let inputsCard = document.getElementById("inputsCard")
        inputsCard.removeChild(inputsCard.children[taskIndex])
        // questionNumber.value = questionNumber.value-1
        delete jsonData.value.mainEntity[taskIndex]
        delete values.value[taskIndex]
    }
}
// for inputs //
function changeQuestionName(taskIndex) {
    jsonData.value.mainEntity[taskIndex].name = values.value[taskIndex].question
    console.log(taskIndex);
}
function changeAnswer(taskIndex) {
    jsonData.value.mainEntity[taskIndex].acceptedAnswer.text = values.value[taskIndex].answer
}
// for add button //
function addQuestion() {
    questionNumber.value ++
    jsonData.value.mainEntity[questionNumber.value-1] = 
    {
        "@type": "Question",
        "name": "",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": ""
        }
    },
    values.value[questionNumber.value-1] =     
    {
        question: "",
        answer: ""
    }
}
</script>