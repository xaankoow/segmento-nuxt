<template>
    <div class="w-full h-auto">
            <!-- Tabs -->
            <div class="flex flex-row items-center gap-3 text-xs px-2 py-4 h-[10%] bg-base-200">
                <TabItem to="/schema-builder/faq" :active="false">
                     FAQ page
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/how-to" :active="false">
                    How to
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/local-business" :active="false">
                    Local Business
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/product" :active="false">
                    Product
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/recipe" :active="false">
                    Recipe
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/video" :active="true">
                    video
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/website" :active="false">
                    Website
                </TabItem>
            </div>
            <div class="flex justify-start items-start gap-2 w-full h-full p-2" >
            <!-- _______________________________________ -->
            <!-- right part -->
            <!-- _______________________________________ -->
            <div id="inputsCard" class="w-1/2 h-full flex flex-col gap-2 align-start justify-start">
                <div class="flex flex-col gap-2">
                    <div class="w-full" >
                        <InputText class="w-full align-start" placeholder="عنوان ویدیو" @keyup="changeVideoName(0)" v-model="valuesVideo.name" />
                    </div>
                    <div class="w-full h-full align-start" >
                        <InputTextArea class="h-36 w-full" @keyup="changeVideoDescription(0)" placeholder="توضیحات ویدیو" v-model="valuesVideo.description" />
                    </div>
                </div>
                <div class="w-full flex ">
                    <div class="w-[40%] h-[45px] flex items-center gap-2">
                        <span class="text-sm" >دقیقه</span>
                        <InputNumber id="min"  @input="changeVideoMin()" v-model="videoDuration.min"/>
                    </div>
                    <div class="w-[40%] h-[45px] flex items-center gap-2">
                        <span class="text-sm" >ثانیه</span>
                        <InputNumber id="sec"  @input="changeVideoSec()" v-model="videoDuration.sec"/>
                    </div>
                </div>
                <div class="w-[60%] h-[45px] flex items-center gap-2">
                    <span class="text-sm w-fit" >تاریخ انتشار</span>
                    <InputDate class="w-[160px]" @change="changeUploadDate" id="uploadDate" v-model="valuesVideo.uploadDate"></InputDate>
                </div>
                <div v-if="imageNumber == 1" >
                    <div class="w-full" >
                        <InputURL class="w-full align-start" placeholder="آدرس  تصویر بندانگشتی" @keyup="changeimage(0)" v-model="valuesVideo.thumbnailUrl[0]" />
                    </div>
                </div>
                <div v-if="imageNumber > 1" v-for="(value , index) in imageNumber" :key="index">
                    <div class="w-full flex items-center gap-2" >
                        <InputURL class="w-[80%] align-start" style="width: 80%;" placeholder="آدرس  تصویر بندانگشتی" @keyup="changeimage(index)" v-model="valuesVideo.thumbnailUrl[index]" />
                        <button @click="deleteOneImage(index)" class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                            ✕  
                        </button>
                    </div>
                </div>
                <button class="btn-secondary" @click="addImage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    افزودن تصویر بندانگشتی 
                </button>
                <div class="w-full flex gap-2">
                    <div class="w-1/2" >
                        <InputURL class="w-full align-start" placeholder="لینک محتوی" @keyup="changecontentUrl()" v-model="contentUrl" />
                    </div>
                    <div class="w-1/2" >
                        <InputURL class="w-full align-start" placeholder="embed Url" @keyup="changeEmbedUrl()" v-model="embedUrl" />
                    </div>
                </div>
                <div>
                    <div class="w-full" >
                        <InputURL class="w-full align-start" placeholder="seek toAction Target Url" @keyup="changeSeekTarget()" v-model="seekTargetUrl" />
                    </div>
                </div>
            </div>
            <!-- _______________________________________ -->
            <!-- left part -->
            <!-- _______________________________________ -->
            <div class="w-1/2 flex flex-col gap-2">
                <div class="flex gap-2 w-full" >
                    <button @click="deleteAll" class="btn-primary px-4" >
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
                        <JsonPrettify  :jsonData="jsonData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref , onMounted } from "vue"

const valuesVideo = ref(
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "",
        "description": "",
        "thumbnailUrl": [""],
        "uploadDate": "",
        "duration": ""
    }
);
const videoDuration = ref({
    min : "" ,
    sec : ""
})
const jsonData = ref(
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "",
        "description": "",
        "thumbnailUrl": "",
        "uploadDate": "",
        "duration": ""
    });
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
function deleteAll() {
    imageNumber.value = 1
    valuesVideo.value = 
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "1",
        "description": "2",
        "thumbnailUrl": [],
        "uploadDate": "",
        "duration": ""
    };
    videoDuration.value = {
    min : "" ,
    sec : ""
    };
    jsonData.value =
    {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "1",
        "description": "2",
        "thumbnailUrl": "",
        "uploadDate": "",
        "duration": ""
    };
    contentUrl.value = ""
    embedUrl.value = ""
    seekTargetUrl.value = ""
    potentialAction.value =
    {
        "@type": "SeekToAction",
        "target": "={seek_to_second_number}",
        "startOffset-input": "required name=seek_to_second_number"
    }
}
// for  video//
function changeVideoName() {
    jsonData.value.name = valuesVideo.value.name
}
function changeVideoDescription() {
    jsonData.value.description = valuesVideo.value.description
}
function changeUploadDate() {
    jsonData.value.uploadDate = valuesVideo.value.uploadDate
}
function changeVideoMin() {
    if(videoDuration.value.sec){
        jsonData.value.duration = "PT" + videoDuration.value.min + "M" + videoDuration.value.sec + "S"
    }else{
        jsonData.value.duration = "PT" + videoDuration.value.min + "M" + 0 + "S"
    }
}
function changeVideoSec() {
    if(videoDuration.value.min){
        jsonData.value.duration = "PT" + videoDuration.value.min + "M" + videoDuration.value.sec + "S"
    }else{
        jsonData.value.duration = "PT" + 0 + "M" + 0 + "S"
    }
}
// for image
const imageNumber = ref(1)
function addImage() {
    imageNumber.value ++
    valuesVideo.value.thumbnailUrl[imageNumber.value-1] = ""
    jsonData.value.thumbnailUrl = valuesVideo.value.thumbnailUrl
}
function changeimage(taskIndex) {
    if(imageNumber.value == 1){
        jsonData.value.thumbnailUrl = valuesVideo.value.thumbnailUrl[0]
    }else{
        jsonData.value.thumbnailUrl[taskIndex] = valuesVideo.value.thumbnailUrl[taskIndex]
    }
}
function deleteOneImage(taskIndex){
    if (imageNumber.value > 1) {
        imageNumber.value--;
        // valuesVideo.value["thumbnailUrl"].splice(taskIndex, 1)
        jsonData.value.thumbnailUrl.splice(taskIndex, 1)
    }
}
const contentUrl = ref("")
const embedUrl = ref("")
const seekTargetUrl = ref("")
const potentialAction = ref(
    {
        "@type": "SeekToAction",
        "target": "={seek_to_second_number}",
        "startOffset-input": "required name=seek_to_second_number"
    }
)
function changecontentUrl() {
    let newJson = {}
    newJson = addElementToObject(jsonData.value, "contentUrl", "duration");
    jsonData.value = newJson
    jsonData.value.contentUrl = contentUrl.value
}
function changeEmbedUrl() {
    let newJson = {}
    if(jsonData.value.contentUrl){
        newJson = addElementToObject(jsonData.value, "embedUrl", "contentUrl");
    }else{
        newJson = addElementToObject(jsonData.value, "embedUrl", "duration");
    }
    jsonData.value = newJson
    jsonData.value.embedUrl = embedUrl.value
}
function changeSeekTarget() {
    let newJson = {}
    if(jsonData.value.embedUrl){
            newJson = addElementToObject(jsonData.value, "potentialAction", "embedUrl");
    }else if (jsonData.value.contentUrl){
            newJson = addElementToObject(jsonData.value, "potentialAction", "contentUrl");
    }else{
        newJson = addElementToObject(jsonData.value, "potentialAction", "duration");
    }
    jsonData.value = newJson
    potentialAction.value.target = seekTargetUrl.value + "={seek_to_second_number}"
    jsonData.value.potentialAction = potentialAction.value
}
</script>