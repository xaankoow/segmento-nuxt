<template>
    <div class="w-full h-auto rounded">
        <div class="w-full h-full p-7">
            <p class="text-base-content text-[18px]"> ساخت اسکیما How To </p>
        </div>
    
        <div class="flex justify-start items-start gap-4 w-full h-full p-7" >
            <!-- _______________________________________ -->
            <!-- right part -->
            <!-- _______________________________________ -->
            <div class="w-1/2 h-full flex flex-col gap-10 align-start justify-start">
                <!-- description start -->
                <div class="w-full " >
                    <InputText placeholder="نام" @keyup="changeDescriptionName()" v-model="valuesDescription.name" />
                </div>
                <div class="w-full h-full align-start" >
                    <InputTextArea class="h-36" @keyup="changeDescriptionDescription()" placeholder="توضیحات" v-model="valuesDescription.description" />
                </div>
                <div class="w-full " >
                    <InputURL placeholder="آدرس تصویر" id="descriptionImageUrl" @keyup="changeDescriptionImage()" v-model="valuesDescription.image" />
                </div>
                <div class="w-full flex gap-3">
                    <div class="w-[40%] h-[45px] flex items-center gap-6">
                        <span class="text-sm" >مجموع زمان</span>
                        <InputNumber id="totalTime"  @input="changeDescriptionTotalTime()" v-model="valuesDescription.totalTime"/>
                    </div>
                <!-- description end -->
                <!-- _______________________________________ -->
                <!-- Currency start -->
                    <div class="w-[40%] h-[45px] flex items-center gap-6">
                        <span class="text-sm">قیمت تخمینی</span>
                        <InputNumber id="price" @input="changeCurrencyValue()" v-model="valuesCurrency.value"/>
                    </div>
                </div>
                <div class="w-[260px] h-[45px] text-start align-center border border-base-400 rounded rounded-b-none z-index-[1100]">
                    <DropdownFinalDropDown class="z-index-[1100]">
                        <template v-slot:title>
                            <span> واحد پول</span>
                        </template>
                        <template v-slot:option >
                            <InputRadio @click="changeCurrencyCurrency('rial')" :name="Currency" :id="rial" >ریال</InputRadio>
                            <InputRadio @click="changeCurrencyCurrency('dollar')" :name="Currency" :id="usDollar" >دلار آمریکا</InputRadio>
                            <InputRadio @click="changeCurrencyCurrency('euro')" :name="Currency" :id="euro">یورو</InputRadio>
                        </template>
                    </DropdownFinalDropDown>
                </div>
                <!-- Currency end -->
                <!-- _______________________________________ -->
                <!-- supply start -->
                <div class="w-full flex items-center gap-6 z-[1000]" v-if="supplyNumber" v-for="(value , index) in valuesSupply" :key="index" >
                    <InputText class="w-[80%] align-start" style="width: 80%;" placeholder = "موجودی" @keyup="changeSupplyName(index)" v-model="valuesSupply[index].name"/>
                    <button @click="deleteOneSupply(index)" class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                        ✕  
                    </button>
                </div>
                <button class="btn-secondary z-[1000]" @click="addSupply()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    افزودن موجودی 
                </button>
                <!-- supply end -->
                <!-- _______________________________________ -->
                <!-- tools start -->
                <div class="w-full flex items-center gap-6" v-if="toolsNumber" v-for="(value , index) in valuesTools" :key="index" >
                    <InputText class="w-[80%] align-start" style="width: 80%;" placeholder = "ابزار" @keyup="changeToolsName(index)" v-model="valuesTools[index].name"/>
                    <button @click="deleteOneTool(index)" class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                        ✕  
                    </button>
                </div>
                <button class="btn-secondary" @click="addTools()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    افزودن ابزار 
                </button>
                <!-- tools end -->
                <!-- _______________________________________ -->
                <!-- steps start -->
                <div class="w-full flex flex-col gap-10" v-if="stepNumber == 1 ">
                    <div class="w-full">
                        <InputText class="w-full align-start" placeholder="قدم اول" @keyup="changeStepText(0)" v-model="valuesStep[0].text" />
                    </div>
                    <div class="w-full " >
                        <InputURL placeholder="آدرس تصویر" @keyup="changeStepImage(0)" v-model="valuesStep[0].image" />
                    </div>
                    <div class=" w-full flex gap-[5%]">
                        <div class="w-[60%] " >
                            <InputURL placeholder="آدرس" @keyup="changeStepAddress(0)" v-model="valuesStep[0].address" />
                        </div>
                        <div class="w-[35%] " >
                            <InputText placeholder="نام" @keyup="changeStepName(0)" v-model="valuesStep[0].name" />
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col gap-10" v-if="stepNumber > 1 "  v-for="(value , index) in valuesStep" :key="index">
                    <div class="w-full flex items-center gap-6" >
                        <InputText class="w-[80%] align-start" style="width: 80%;" placeholder="قدم اول" @keyup="changeStepText(index)" v-model="valuesStep[index].text" />
                        <button @click="deleteOneStep(index)" class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                            ✕  
                        </button>
                    </div>
                    <div class="w-[80%] " >
                        <InputURL placeholder="آدرس تصویر" @keyup="changeStepImage(index)" v-model="valuesStep[index].image" />
                    </div>
                    <div class=" w-[80%] flex gap-[5%]">
                        <div class="w-[60%] " >
                            <InputURL placeholder="آدرس" @keyup="changeStepAddress(index)" v-model="valuesStep[index].address" />
                        </div>
                        <div class="w-[35%] " >
                            <InputText placeholder="نام" @keyup="changeStepName(index)" v-model="valuesStep[index].name" />
                        </div>
                    </div>
                </div>
                <button class="btn-secondary" @click="addStep">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    افزودن قدم 
                </button>
                <!-- steps end -->
            </div>
            <!-- _______________________________________ -->
            <!-- left part -->
            <!-- _______________________________________ -->
            <div class="w-1/2 flex flex-col gap-10">
                <div class="flex gap-10 w-full" >
                    <button @click="deleteAllData" class="btn-primary px-4" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_162_227" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_162_227)">
                            <path d="M7.3 20.5C6.8 20.5 6.375 20.325 6.025 19.975C5.675 19.625 5.5 19.2 5.5 18.7V6H4.5V4.5H9V3.625H15V4.5H19.5V6H18.5V18.7C18.5 19.2 18.325 19.625 17.975 19.975C17.625 20.325 17.2 20.5 16.7 20.5H7.3ZM17 6H7V18.7C7 18.7667 7.03333 18.8333 7.1 18.9C7.16667 18.9667 7.23333 19 7.3 19H16.7C16.7667 19 16.8333 18.9667 16.9 18.9C16.9667 18.8333 17 18.7667 17 18.7V6ZM9.4 17H10.9V8H9.4V17ZM13.1 17H14.6V8H13.1V17Z" fill="white"/>
                            </g>
                        </svg>
                        حذف 
                    </button>
                    <a class="btn-primary px-4" href="https://www.google.com" target="_blank">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.99998 17.5C1.36665 17.5 0.912651 17.2167 0.637985 16.65C0.362651 16.0833 0.424985 15.55 0.824985 15.05L6.49998 8.175V2H5.29998C5.09999 2 4.92498 1.929 4.77498 1.787C4.62498 1.64567 4.54998 1.46667 4.54998 1.25C4.54998 1.03333 4.62498 0.854 4.77498 0.712C4.92498 0.570667 5.09999 0.5 5.29998 0.5H12.7C12.9 0.5 13.075 0.570667 13.225 0.712C13.375 0.854 13.45 1.03333 13.45 1.25C13.45 1.46667 13.375 1.64567 13.225 1.787C13.075 1.929 12.9 2 12.7 2H11.5V8.175L17.175 15.05C17.575 15.5333 17.6377 16.0623 17.363 16.637C17.0877 17.2123 16.6333 17.5 16 17.5H1.99998ZM1.99998 16H16L9.99998 8.7V2H7.99998V8.7L1.99998 16Z" fill="white"/>
                        </svg>

                        آزمایش 
                    </a>
                    <Copy class="btn-primary px-4" :content="dataForCopy" >   
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_164_21" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_164_21)">
                            <path d="M9.24995 17.7998C8.74995 17.7998 8.32495 17.6248 7.97495 17.2748C7.62495 16.9248 7.44995 16.4998 7.44995 15.9998V4.6248C7.44995 4.10814 7.62495 3.6748 7.97495 3.3248C8.32495 2.9748 8.74995 2.7998 9.24995 2.7998H17.625C18.1416 2.7998 18.575 2.9748 18.925 3.3248C19.275 3.6748 19.45 4.10814 19.45 4.6248V15.9998C19.45 16.4998 19.275 16.9248 18.925 17.2748C18.575 17.6248 18.1416 17.7998 17.625 17.7998H9.24995ZM9.24995 16.2998H17.625C17.7083 16.2998 17.7833 16.2705 17.85 16.2118C17.9166 16.1538 17.95 16.0831 17.95 15.9998V4.6248C17.95 4.54147 17.9166 4.46647 17.85 4.3998C17.7833 4.33314 17.7083 4.2998 17.625 4.2998H9.24995C9.16662 4.2998 9.09595 4.33314 9.03795 4.3998C8.97928 4.46647 8.94995 4.54147 8.94995 4.6248V15.9998C8.94995 16.0831 8.97928 16.1538 9.03795 16.2118C9.09595 16.2705 9.16662 16.2998 9.24995 16.2998ZM5.74995 21.2998C5.24995 21.2998 4.82495 21.1248 4.47495 20.7748C4.12495 20.4248 3.94995 19.9998 3.94995 19.4998V6.7998H5.44995V19.4998C5.44995 19.5831 5.47895 19.6538 5.53695 19.7118C5.59562 19.7705 5.66662 19.7998 5.74995 19.7998H15.45V21.2998H5.74995Z" fill="white"/>
                            </g>
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

const jsonData = ref(
{
    "@context": "https://schema.org/", 
    "@type": "HowTo", 
    "name": "",
    "step": [{
        "@type": "HowToStep",
        "text": "",
    },
]
}
);
function addElementToObject(object, newProperty, beforNewProperty) {
    let newObject = {};
    for (const property in object) {
        newObject[property] = object[property];
        if (property === beforNewProperty) {
        newObject[newProperty] = newProperty;
        }
    }
    return newObject;
}

// for copy button //
const dataForCopy = ref("")
onMounted(()=>{
    dataForCopy.value = document.getElementById("code").textContent
})
// for delete button //
function deleteAllData() {
    supplyNumber.value = 0
    toolsNumber.value = 0
    stepNumber.value = 1
    valuesDescription.value = [
    {
        name: "",
        description: "",
        image: "",
        totalTime: "",
    }
    ];
    valuesCurrency.value = ref(
    {
        currency: "",
        value: "",
    }
    );
    valuesSupply.value = ref([

    ]);
    valuesTools.value = ref([

]);
    valuesStep.value = ref([
        {
            text: "",
            image: "",
            address: "",
            name: "",
        }
    ]);
    jsonData.value = ref(
    {
        "@context": "https://schema.org/", 
        "@type": "HowTo", 
        "name": "",
        "step": [{
            "@type": "HowToStep",
            "text": "",
        },
    ]
    }
    );
}
// for Description //
const valuesDescription = ref(
    {
        name: "",
        description: "",
        image: "",
        totalTime: "",
    }
);
function changeDescriptionName() {
    jsonData.value.name = valuesDescription.value.name
}
function changeDescriptionDescription() {
    const newJson = addElementToObject(jsonData.value, "description", "name");
    jsonData.value = newJson
    jsonData.value.description = valuesDescription.value.description
}
function changeDescriptionImage() {
    let newJson = {}
    if(jsonData.value.description){
        newJson = addElementToObject(jsonData.value, "image", "description");
    }else{
        newJson = addElementToObject(jsonData.value, "image", "name");
    }
    jsonData.value = newJson
    jsonData.value.image = valuesDescription.value.image
}
function changeDescriptionTotalTime() {
    let newJson={}
    if(jsonData.value.image){
        newJson = addElementToObject(jsonData.value, "totalTime", "image");
    }else if(jsonData.value.description){
        newJson = addElementToObject(jsonData.value, "totalTime", "description");
    }else{
        newJson = addElementToObject(jsonData.value, "totalTime", "name");
    }
    jsonData.value = newJson
    jsonData.value.totalTime = valuesDescription.value.totalTime
}
// for Currency //
const valuesCurrency = ref(
    {
        currency: "",
        value: "",
    }
);
function changeCurrencyValue() {
    let newJson={}
    if(!jsonData.value.estimatedCost){
        if(jsonData.value.totalTime){
            newJson = addElementToObject(jsonData.value, "estimatedCost", "totalTime");
        }else if(jsonData.value.image){
            newJson = addElementToObject(jsonData.value, "estimatedCost", "image");
        }else if(jsonData.value.description){
            newJson = addElementToObject(jsonData.value, "estimatedCost", "description");
        }else{
            newJson = addElementToObject(jsonData.value, "estimatedCost", "name");
        }
        jsonData.value = newJson
        jsonData.value.estimatedCost = 
        {
        "@type": "MonetaryAmount",
        "currency": "",
        "value": "" ,
        }
    }
    jsonData.value.estimatedCost.value = valuesCurrency.value.value
}
function changeCurrencyCurrency(el) {
    let newJson={}
    
    if(!jsonData.value.estimatedCost){
        if(jsonData.value.totalTime){
            newJson = addElementToObject(jsonData.value, "estimatedCost", "totalTime");
        }else if(jsonData.value.image){
            newJson = addElementToObject(jsonData.value, "estimatedCost", "image");
        }else if(jsonData.value.description){
            newJson = addElementToObject(jsonData.value, "estimatedCost", "description");
        }else{
            newJson = addElementToObject(jsonData.value, "estimatedCost", "name");
        }
        jsonData.value = newJson
        jsonData.value.estimatedCost = 
        {
        "@type": "MonetaryAmount",
        "currency": "",
        "value": "" ,
        }
    }jsonData.value.estimatedCost.currency = valuesCurrency.value.currency
    if (el == "rial") {
        valuesCurrency.value.currency = "rial"
        jsonData.value.estimatedCost.currency = "rial"
    }else if(el == "dollar"){
        valuesCurrency.value.currency = "dollar"
        jsonData.value.estimatedCost.currency = "dollar"
    }else {
        valuesCurrency.value.currency = "euro"
        jsonData.value.estimatedCost.currency = "euro"
    }
    
}
// for supply //
const supplyNumber= ref(0)
const valuesSupply = ref([

]);
function deleteOneSupply(taskIndex){
    supplyNumber.value --
    jsonData.value.supply.splice(taskIndex, 1)
    valuesSupply.value.splice(taskIndex, 1)
    if(supplyNumber.value == 0){
        delete jsonData.value.supply
    }
}
function addSupply() {
    supplyNumber.value ++
    valuesSupply.value[supplyNumber.value-1] = {
        "@type": "HowToSupply",
        "name": ""
    }
    if(!jsonData.value.supply){
        let newJson={}
        if(jsonData.value.estimatedCost){
            newJson = addElementToObject(jsonData.value, "supply", "estimatedCost");
        }else if(jsonData.value.totalTime){
            newJson = addElementToObject(jsonData.value, "supply", "totalTime");
        }else if(jsonData.value.image){
            newJson = addElementToObject(jsonData.value, "supply", "image");
        }else if(jsonData.value.description){
            newJson = addElementToObject(jsonData.value, "supply", "description");
        }else{
            newJson = addElementToObject(jsonData.value, "supply", "name");
        }
        jsonData.value = newJson
        jsonData.value.supply = [
        {
            "@type": "HowToSupply",
            "name": ""
        }
        ]
    }else{
        jsonData.value.supply[supplyNumber.value-1] =
        {
            "@type": "HowToSupply",
            "name": ""
        }
    }
}
function changeSupplyName(taskIndex) {
    jsonData.value.supply[taskIndex].name = valuesSupply.value[taskIndex].name
}
// for tools //
const toolsNumber= ref(0)
const valuesTools = ref([

]);
function deleteOneTool(taskIndex){
    toolsNumber.value --
    jsonData.value.tool.splice(taskIndex, 1)
    valuesTools.value.splice(taskIndex, 1)
    if(toolsNumber.value == 0){
        delete jsonData.value.tool
    }
}
function addTools() {
    toolsNumber.value ++
    valuesTools.value[toolsNumber.value-1] = {
        "@type": "HowToTool",
        "name": ""
    }
    if(!jsonData.value.tool){
        let newJson={}
        if(jsonData.value.supply){
            newJson = addElementToObject(jsonData.value, "tool", "supply");
        }else if(jsonData.value.estimatedCost){
            newJson = addElementToObject(jsonData.value, "tool", "estimatedCost");
        }else if(jsonData.value.totalTime){
            newJson = addElementToObject(jsonData.value, "tool", "totalTime");
        }else if(jsonData.value.image){
            newJson = addElementToObject(jsonData.value, "tool", "image");
        }else if(jsonData.value.description){
            newJson = addElementToObject(jsonData.value, "tool", "description");
        }else{
            newJson = addElementToObject(jsonData.value, "tool", "name");
        }
        jsonData.value = newJson
        jsonData.value.tool = [
        {
            "@type": "HowToSupply",
            "name": ""
        }
        ]
    }else{
        jsonData.value.tool[toolsNumber.value-1] =
        {
            "@type": "HowToTool",
            "name": ""
        }
    }
}
function changeToolsName(taskIndex) {
    jsonData.value.tool[taskIndex].name = valuesTools.value[taskIndex].name
}
// for steps //
const stepNumber = ref(1)
const valuesStep = ref([
    {
        text: "",
        image: "",
        address: "",
        name: "",
    }
]);
function deleteOneStep(taskIndex){
    stepNumber.value --
    jsonData.value.step.splice(taskIndex, 1)
    valuesStep.value.splice(taskIndex, 1)
    if(stepNumber.value == 0){
        delete jsonData.value.step
    }
}
function addStep() {
    stepNumber.value ++
    jsonData.value.step[stepNumber.value-1] = 
    {
        "@type": "HowToStep",
        "text": "",
    }, 
    valuesStep.value[stepNumber.value-1] =     
    {
        question: "",
        answer: ""
    }
}
function changeStepText(taskIndex) {
    jsonData.value.step[taskIndex].text = valuesStep.value[taskIndex].text
}
function changeStepImage(taskIndex) {
    jsonData.value.step[taskIndex].image = valuesStep.value[taskIndex].image
}
function changeStepAddress(taskIndex) {
    jsonData.value.step[taskIndex].url = valuesStep.value[taskIndex].address
}
function changeStepName(taskIndex) {
    jsonData.value.step[taskIndex].name = valuesStep.value[taskIndex].name
}
</script>