<template>
    <div class="w-full h-full">
        <!-- Tabs -->
        <div class="flex flex-row items-center gap-3 px-2 h-[7%] bg-base-200">
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
            <TabItem to="/schema-builder/recipe" :active="true">
                Recipe
            </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/video" :active="false">
                video
            </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/website" :active="false">
                Website
            </TabItem>
        </div>
        <div class="flex justify-start items-start gap-2 w-full h-full p-2">
            <!-- _______________________________________ -->
            <!-- right part -->
            <!-- _______________________________________ -->
            <div id="inputsCard" class="w-1/2 h-full flex flex-col gap-2 align-start justify-start">
                <div class="flex flex-col gap-2">
                    <div class="w-full">
                        <InputText class="w-full align-start" placeholder="عنوان دستور پخت" @input="changeName(0)"
                            v-model="values.name" />
                    </div>
                    <div class="w-full h-full align-start">
                        <InputTextArea class="h-36 w-full" @input="changeDescription(0)" placeholder="توضیحات دستور پخت"
                            v-model="values.description" />
                    </div>
                    <div class="w-full">
                        <InputText class="w-full align-start" placeholder="کلمات کلیدی" @input="changeKeywords(0)"
                            v-model="values.keywords" />
                    </div>
                </div>

                <div v-for="(value, index) in imageNumber" :key="index">
                    <div class="w-full flex items-center gap-2">
                        <InputURL class="w-full align-start" placeholder="آدرس تصویر " @keyup="changeimage(index)"
                            v-model="values.image[index]" />
                        <button @click="deleteOneImage(index)" v-if="imageNumber > 1"
                            class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                            ✕
                        </button>
                    </div>
                </div>
                <button class="btn-secondary" @click="addImage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    افزودن تصویر
                </button>

                <div class="w-full grid grid-cols-2 gap-2">
                    <div class="w-full">
                        <InputURL class="w-full" placeholder="لینک ویدیو" @input="changecontentUrl()"
                            v-model="valuesVideo.contentUrl" />
                    </div>
                    <div class="w-full">
                        <InputURL class="w-full" placeholder="آدرس درج embed" @input="changeEmberUrl()"
                            v-model="valuesVideo.embedUrl" />
                    </div>
                    <div class="w-full">
                        <InputText class="w-full h-10" placeholder="نام سازنده" @input="changeAuthorName()"
                            v-model="values.author.name" />
                    </div>
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-28">تاریخ انتشار</span>
                        <InputDate class="w-full h-10" @change="changeDatePublished()" id="uploadDate"
                            v-model="values.datePublished"></InputDate>
                    </div>
                </div>

                <!-- time spending -->
                <div class="w-full grid grid-cols-2 gap-2">
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-52">آماده سازی(دقیقه)</span>
                        <InputNumber dir="ltr" class="w-full" id="min" @input="changePrepTime()"
                            v-model="values.prepTime" />
                    </div>
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-28">پختن(دقیقه)</span>
                        <InputNumber dir="ltr" class="w-full" id="sec" @input="changecookTime()"
                            v-model="values.cookTime" />
                    </div>
                </div>
                <!-- food -->
                <div class="w-full flex gap-2">
                    <div class="w-1/2 h-10 text-start align-center border border-base-400 rounded-3px">
                        <DropdownFinalDropDown>
                            <template v-slot:title>
                                <span>نوع غذا</span>
                            </template>
                            <template v-slot:option>
                                <InputRadio v-for="(element, index) in Object.keys(recipeCategory)" :key="index"
                                    v-model="recipeCategory[element].is_checked" @click="changeRecipeCategory(element)"
                                    :id="element" name="currency">{{ recipeCategory[element].title }}</InputRadio>
                            </template>
                        </DropdownFinalDropDown>
                    </div>
                    <div class="w-1/2">
                        <InputText class="w-1/2 align-start" placeholder="نام غذا" @input="changeRecipeCuisine()"
                            v-model="values.recipeCuisine" />
                    </div>
                </div>
                <div class="w-full grid grid-cols-2 gap-2">
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-72">قابل سرو برای چند نفر</span>
                        <InputNumber dir="ltr" class="w-full" id="sec" @input="changeRecipeYield()"
                            v-model="values.recipeYield" />
                    </div>
                </div>
                <!-- nutrition -->
                <div class="w-full flex gap-2 ">
                    <div class="w-[40%] h-10 flex items-center gap-2">
                        <span class="text-sm w-24">انداه وعده</span>
                        <InputText class="w-full align-start" @input="changeServingSize()"
                            v-model="values.nutrition.servingSize" />
                    </div>
                    <div class="w-[30%] h-10 flex items-center gap-2">
                        <span class="text-sm w-36">میزان کالری</span>
                        <InputNumber class="w-full" id="min" @input="changecalories()" v-model="values.nutrition.calories" />
                    </div>
                    <div class="w-[30%] h-10 flex items-center gap-2">
                        <span class="text-sm w-36">میزان چربی</span>
                        <InputNumber class="w-full" id="sec" @input="changeFatContent()" v-model="values.nutrition.fatContent" />
                    </div>
                </div>
                <!-- Ingredient -->
                <div class="w-full flex flex-col gap-2 ">
                    <div class="w-full flex flex-col items-center gap-2" v-for="(value, index) in valuesIngredient"
                        :key="index">
                        <div class="w-full flex items-center gap-2">
                            <InputText class="w-full align-start" placeholder="ماده تشکیل دهنده "
                                @input="changeIngredient(index)" v-model="valuesIngredient[index]" />
                            <button @click="deleteOneIngredient(index)"
                                class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                                ✕
                            </button>
                        </div>
                    </div>
                    <button class="btn-secondary" @click="addIngredient">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        افزودن مواد تشکیل دهنده
                    </button>
                </div>
                <!-- step -->
                <div class="w-full flex flex-col gap-2 ">
                    <div class="w-full flex flex-col gap-2" v-for="(value, index) in valuesStep" :key="index">
                        <div class="w-full flex items-center gap-2">
                            <InputText class="w-full align-start" placeholder="مرحله"
                                @input="changeStepName(index)" v-model="valuesStep[index].name" />
                            <button @click="deleteOneStep(index)"
                                class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                                ✕
                            </button>
                        </div>
                        <div class="w-full h-full align-start">
                            <InputTextArea class="h-36 w-full" @input="changeStepText(index)" placeholder="توضیحات "
                                v-model="valuesStep[index].text" />
                        </div>
                        <div class="w-full flex gap-2">
                            <div class="w-1/2">
                                <InputURL class="w-full align-start" placeholder="لینک " @input="changeStepUrl(index)"
                                    v-model="valuesStep[index].url" />
                            </div>
                            <div class="w-1/2">
                                <InputURL class="w-full align-start" placeholder="آدرس تصویر"
                                    @input="changeStepImage(index)" v-model="valuesStep[index].image" />
                            </div>
                        </div>
                    </div>
                    <button class="btn-secondary" @click="addStep">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        افزودن مرحله
                    </button>
                </div>
                <!-- aggregateRating start -->
                <div class="w-full grid grid-cols-2 gap-2">
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-40">مجموع رتبه</span>
                        <InputNumber class="w-full" :readonly="readOnlyOk" :class="readOnlyOk ? 'text-gray-400' : ''" id="totalTime"
                            @input="changeAggregateRating()" v-model="valuesAggregateRating.ratingValue" />
                    </div>
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-40">تعداد رتبه</span>
                        <InputNumber class="w-full" :readonly="readOnlyOk" :class="readOnlyOk ? 'text-gray-400' : ''" id="price"
                            @input="changeNumberOfRating()" v-model="valuesAggregateRating.ratingCount" />
                    </div>
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-40">بالاترین رتبه</span>
                        <InputNumber class="w-full" id="totalTime" @input="changeHighestRating()"
                            v-model="valuesAggregateRating.bestRating" />
                    </div>
                    <div class="w-full h-10 flex items-center gap-2">
                        <span class="text-sm w-40">پایین ترین رتبه</span>
                        <InputNumber class="w-full" id="price" @input="changeLowestRating()" v-model="valuesAggregateRating.worstRating" />
                    </div>
                </div>
                <!-- aggregateRating end -->
                <!-- _______________________________________ -->
                <!-- review start -->
                <div class="w-full flex flex-col gap-2" v-if="reviewNumber > 0" v-for="(value, index) in valuesReview"
                    :key="index">
                    <div class="w-full flex items-center gap-2">
                        <InputText class="w-full align-start" placeholder="عنوان بررسی"
                            @input="changeReviewName(index)" v-model="valuesReview[index].name" />
                        <button @click="deleteOneReview(index)"
                            class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                            ✕
                        </button>
                    </div>
                    <div class="w-full h-full align-start">
                        <InputTextArea class="h-36" @input="changeReviewBody(index)" placeholder=" توضیحات محصول"
                            v-model="valuesReview[index].reviewBody" />
                    </div>
                    <div class="w-full flex gap-2">
                        <div class="w-[35%] h-10 flex items-center gap-2">
                            <span class="text-sm">رتبه</span>
                            <InputNumber class="w-full" id="totalTime" @input="changeReviewRating(index)"
                                v-model="valuesReview[index].reviewRating.ratingValue"
                                :min="valuesAggregateRating.worstRating ? valuesAggregateRating.worstRating : 0"
                                :max="valuesAggregateRating.bestRating ? valuesAggregateRating.bestRating : 0" />
                        </div>
                        <div class="w-[65%] h-10 flex items-center gap-2">
                            <span class="text-sm w-24">تاریخ انتشار</span>
                            <InputDate class="w-full" id="date" @change="changeReviewDatePublished(index)"
                                v-model="valuesReview[index].datePublished" />
                        </div>
                    </div>
                    <div class="w-full flex gap-2">
                        <div class="w-[35%]">
                            <InputText class="w-full align-start" placeholder=" نام نویسنده"
                                @input="changeReviewAuthorName(index)" v-model="valuesReview[index].author.name" />
                        </div>
                        <div class="w-[65%]">
                            <InputText class="w-full align-start" placeholder=" ناشر" @input="changePublisherName(index)"
                                v-model="valuesPublisher[index].name" />
                        </div>
                    </div>
                </div>
                <button class="btn-secondary" @click="addReview">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    افزودن بررسی
                </button>
                <!-- review end -->
            </div>
            <!-- _______________________________________ -->
            <!-- left part -->
            <!-- _______________________________________ -->
            <div class="w-1/2 flex flex-col gap-2">
                <div class="flex gap-2 w-full">
                    <button @click="deleteAll" class="btn-primary px-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_162_227" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_162_227)">
                                <path
                                    d="M7.3 20.5C6.8 20.5 6.375 20.325 6.025 19.975C5.675 19.625 5.5 19.2 5.5 18.7V6H4.5V4.5H9V3.625H15V4.5H19.5V6H18.5V18.7C18.5 19.2 18.325 19.625 17.975 19.975C17.625 20.325 17.2 20.5 16.7 20.5H7.3ZM17 6H7V18.7C7 18.7667 7.03333 18.8333 7.1 18.9C7.16667 18.9667 7.23333 19 7.3 19H16.7C16.7667 19 16.8333 18.9667 16.9 18.9C16.9667 18.8333 17 18.7667 17 18.7V6ZM9.4 17H10.9V8H9.4V17ZM13.1 17H14.6V8H13.1V17Z"
                                    fill="white" />
                            </g>
                        </svg>
                        حذف
                    </button>
                    <form method="post" target="_blank" action="https://search.google.com/test/rich-results">
                        <button class="btn-primary px-4" type="submit" id="validate_schema2" href="https://www.google.com"
                            target="_blank">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.99998 17.5C1.36665 17.5 0.912651 17.2167 0.637985 16.65C0.362651 16.0833 0.424985 15.55 0.824985 15.05L6.49998 8.175V2H5.29998C5.09999 2 4.92498 1.929 4.77498 1.787C4.62498 1.64567 4.54998 1.46667 4.54998 1.25C4.54998 1.03333 4.62498 0.854 4.77498 0.712C4.92498 0.570667 5.09999 0.5 5.29998 0.5H12.7C12.9 0.5 13.075 0.570667 13.225 0.712C13.375 0.854 13.45 1.03333 13.45 1.25C13.45 1.46667 13.375 1.64567 13.225 1.787C13.075 1.929 12.9 2 12.7 2H11.5V8.175L17.175 15.05C17.575 15.5333 17.6377 16.0623 17.363 16.637C17.0877 17.2123 16.6333 17.5 16 17.5H1.99998ZM1.99998 16H16L9.99998 8.7V2H7.99998V8.7L1.99998 16Z"
                                    fill="white" />
                            </svg>

                            آزمایش
                        </button>

                        <textarea :value="`<script type='application/ld+json'>${JSON.stringify(
                            jsonData
                        )}</script>`" name="code_snippet" class="hidden"></textarea>
                    </form>
                    <Copy class="btn-primary px-4"
                        :content="`<script type='application/ld+json'>${JSON.stringify(jsonData)}</script>`">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_164_21" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_164_21)">
                                <path
                                    d="M9.24995 17.7998C8.74995 17.7998 8.32495 17.6248 7.97495 17.2748C7.62495 16.9248 7.44995 16.4998 7.44995 15.9998V4.6248C7.44995 4.10814 7.62495 3.6748 7.97495 3.3248C8.32495 2.9748 8.74995 2.7998 9.24995 2.7998H17.625C18.1416 2.7998 18.575 2.9748 18.925 3.3248C19.275 3.6748 19.45 4.10814 19.45 4.6248V15.9998C19.45 16.4998 19.275 16.9248 18.925 17.2748C18.575 17.6248 18.1416 17.7998 17.625 17.7998H9.24995ZM9.24995 16.2998H17.625C17.7083 16.2998 17.7833 16.2705 17.85 16.2118C17.9166 16.1538 17.95 16.0831 17.95 15.9998V4.6248C17.95 4.54147 17.9166 4.46647 17.85 4.3998C17.7833 4.33314 17.7083 4.2998 17.625 4.2998H9.24995C9.16662 4.2998 9.09595 4.33314 9.03795 4.3998C8.97928 4.46647 8.94995 4.54147 8.94995 4.6248V15.9998C8.94995 16.0831 8.97928 16.1538 9.03795 16.2118C9.09595 16.2705 9.16662 16.2998 9.24995 16.2998ZM5.74995 21.2998C5.24995 21.2998 4.82495 21.1248 4.47495 20.7748C4.12495 20.4248 3.94995 19.9998 3.94995 19.4998V6.7998H5.44995V19.4998C5.44995 19.5831 5.47895 19.6538 5.53695 19.7118C5.59562 19.7705 5.66662 19.7998 5.74995 19.7998H15.45V21.2998H5.74995Z"
                                    fill="white" />
                            </g>
                        </svg>

                        کپی
                    </Copy>
                </div>
                <div class="w-full h-full">
                    <div id="code" ref="code" class="w-full min-h-[500px]">
                        <JsonPrettify :jsonData="jsonData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref, onMounted } from "vue"

const values = ref(
    {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": "",
        "image": [],
        "description": "",
        "keywords": "",
        "author": {
            "@type": "Person",
            "name": ""
        },
        "datePublished": "",
        "prepTime": "",
        "cookTime": "",
        "totalTime": "",
        "recipeCategory": "",
        "recipeCuisine": "",
        "recipeYield": "",
        "nutrition": {
            "@type": "NutritionInformation",
            "servingSize": "",
            "calories": "",
            "fatContent": ""
        }
    }
);
const valuesVideo = ref(
    {
        "@type": "VideoObject",
        "name": "",
        "description": "",
        "thumbnailUrl": "",
        "uploadDate": "",
        "contentUrl": "",
        "embedUrl": ""
    }
)
const jsonData = ref(
    {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": "",
        "image": "",
        "description": "",
        "keywords": "",
        "author": {
            "@type": "Person",
            "name": ""
        },
        "datePublished": "",
        "prepTime": "",
        "cookTime": "",
        "totalTime": "",
        "nutrition": {
            "@type": "NutritionInformation",
            "calories": ""
        }
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
onMounted(() => {
    dataForCopy.value = document.getElementById("code").textContent
})
// for delete button //
function deleteAll() {
    values.value =
    {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": "",
        "image": [],
        "description": "",
        "keywords": "",
        "author": {
            "@type": "Person",
            "name": ""
        },
        "datePublished": "",
        "prepTime": "",
        "cookTime": "",
        "totalTime": "",
        "recipeCategory": "",
        "recipeCuisine": "",
        "recipeYield": "",
        "nutrition": {
            "@type": "NutritionInformation",
            "servingSize": "",
            "calories": "",
            "fatContent": ""
        }
    };
    valuesVideo.value =
    {
        "@type": "VideoObject",
        "name": "",
        "description": "",
        "thumbnailUrl": "",
        "uploadDate": "",
        "contentUrl": "",
        "embedUrl": ""
    }
    jsonData.value =
    {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": "",
        "image": "",
        "description": "",
        "keywords": "",
        "author": {
            "@type": "Person",
            "name": ""
        },
        "datePublished": "",
        "prepTime": "",
        "cookTime": "",
        "totalTime": "",
        "nutrition": {
            "@type": "NutritionInformation",
            "calories": ""
        }
    };
    imageNumber.value = 1
    ingredientNumber.value = 0
    valuesIngredient.value = [

    ]
    stepNumber.value = 0
    valuesStep.value = [

    ]
    aggregateAllow.value = false
    valuesAggregateRating.value =
    {
        "@type": "AggregateRating",
        "ratingValue": "",
        "ratingCount": "",
        "bestRating": "",
        "worstRating": ""
    },
        readOnlyOk.value = false
    reviewNumber.value = 0
    valuesReview.value = [
    ];
    valuesPublisher.value =
        { "@type": "Organization", "name": "" }
}
// for details //
// function deleteQuestions() {
//     questionNumber.value = 1
//     values.value = [
//     {
//         question: "",
//         answer: ""
//     }
//     ];
//     jsonData.value =
//     {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": [{
//         "@type": "Question",
//         "name": "",
//         "acceptedAnswer": {
//             "@type": "Answer",
//             "text": ""
//         }
//     }]
//     }
// }
// for  video//
function changeName() {
    jsonData.value.name = values.value.name
    valuesVideo.value.name = values.value.name
}
function changeDescription() {
    jsonData.value.description = values.value.description
    valuesVideo.value.description = values.value.description
}
function changeKeywords() {
    jsonData.value.keywords = values.value.keywords
}
// for image
const imageNumber = ref(1)
function addImage() {
    imageNumber.value++
    values.value.image[imageNumber.value - 1] = ""
    jsonData.value.image = values.value.image
    valuesVideo.value.thumbnailUrl = values.value.image
}
function changeimage(taskIndex) {
    if (imageNumber.value == 1) {
        jsonData.value.image = values.value.image[0]
        valuesVideo.value.image = values.value.image[0]
    } else {
        jsonData.value.image[taskIndex] = values.value.image[taskIndex]
        valuesVideo.value.thumbnailUrl[taskIndex] = values.value.image[taskIndex]
    }
}
function deleteOneImage(taskIndex) {
    if (imageNumber.value > 1) {
        imageNumber.value--
        jsonData.value.image.splice(taskIndex, 1)
        if (jsonData.value.video) {
            jsonData.value.video.thumbnailUrl.splice(taskIndex, 1)
        }
        // values.value.splice(taskIndex, 1)
        // valuesVideo.value.splice(taskIndex, 1)
    }
}
// for url
function changecontentUrl() {
    if (!jsonData.value.video) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value, "video", "nutrition");
        jsonData.value = newJson
        jsonData.value.video = valuesVideo.value
    } else {
        jsonData.value.video.contentUrl = valuesVideo.value.contentUrl
    }
    if (valuesVideo.value.contentUrl == "" && valuesVideo.value.embedUrl == "") {
        delete jsonData.value.video
    }
}
function changeEmberUrl() {
    if (!jsonData.value.video) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value, "video", "nutrition");
        jsonData.value = newJson
        jsonData.value.video = valuesVideo.value
    } else {
        jsonData.value.video.embedUrl = valuesVideo.value.embedUrl
    }
    if (valuesVideo.value.contentUrl == "" && valuesVideo.value.embedUrl == "") {
        delete jsonData.value.video
    }
}
// for Author and date
function changeAuthorName() {
    jsonData.value.author.name = values.value.author.name
}
function changeDatePublished() {
    jsonData.value.datePublished = values.value.datePublished
    valuesVideo.value.uploadDate = values.value.datePublished
}
// time spending
function changePrepTime() {
    jsonData.value.prepTime = values.value.prepTime
    if (values.value.cookTime) {
        values.value.totalTime = Number(values.value.cookTime) + Number(values.value.prepTime)
        jsonData.value.totalTime = values.value.totalTime
    }
}
function changecookTime() {
    jsonData.value.cookTime = values.value.cookTime
    if (values.value.prepTime) {
        values.value.totalTime = Number(values.value.cookTime) + Number(values.value.prepTime)
        jsonData.value.totalTime = values.value.totalTime
    }
}
//for food 
const recipeCategory = ref({
    appetizer: {
        is_checked: false,
        value: "appetizer",
        title: "پیش غذا"
    },
    entree: {
        is_checked: false,
        value: "entree",
        title: "غذای اصلی"
    },
    dessert: {
        is_checked: false,
        value: "dessert",
        title: "دسر"
    },
    notSpecified: {
        is_checked: false,
        value: "notSpecified",
        title: "مشخص نشده است"
    },
})
function changeRecipeCategory(el) {
    if (!jsonData.value.recipeCategory) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value, "recipeCategory", "totalTime");
        jsonData.value = newJson
    }
    values.value.recipeCategory = el
    jsonData.value.recipeCategory = el
    if (el == "notSpecified") {
        delete jsonData.value.recipeCategory
    }
}
function changeRecipeCuisine() {
    if (!jsonData.value.recipeCuisine) {
        let newJson = {}
        if (jsonData.value.recipeCategory) {
            newJson = addElementToObject(jsonData.value, "recipeCuisine", "recipeCategory");
        } else {
            newJson = addElementToObject(jsonData.value, "recipeCuisine", "totalTime");
        }
        jsonData.value = newJson
    }
    jsonData.value.recipeCuisine = values.value.recipeCuisine
}
function changeRecipeYield() {
    if (!jsonData.value.recipeYield) {
        let newJson = {}
        if (jsonData.value.recipeCuisine) {
            newJson = addElementToObject(jsonData.value, "recipeYield", "recipeCuisine");
        } else if (jsonData.value.recipeCategory) {
            newJson = addElementToObject(jsonData.value, "recipeYield", "recipeCategory");
        } else {
            newJson = addElementToObject(jsonData.value, "recipeYield", "totalTime");
        }
        jsonData.value = newJson
    }
    jsonData.value.recipeYield = values.value.recipeYield
    if (values.value.recipeYield == "") {
        delete jsonData.value.recipeYield
    }
}
// for nutrition
function changeServingSize() {
    if (!jsonData.value.nutrition.servingSize) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value.nutrition, "servingSize", "@type");
        jsonData.value.nutrition = newJson
    }
    jsonData.value.nutrition.servingSize = values.value.nutrition.servingSize
    if (values.value.nutrition.servingSize == "") {
        delete jsonData.value.nutrition.servingSize
    }
}
function changecalories() {
    jsonData.value.nutrition.calories = values.value.nutrition.calories
}
function changeFatContent() {
    if (!jsonData.value.nutrition.fatContent) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value.nutrition, "fatContent", "calories");
        jsonData.value.nutrition = newJson
    }
    jsonData.value.nutrition.fatContent = values.value.nutrition.fatContent
    if (values.value.nutrition.fatContent == "") {
        delete jsonData.value.nutrition.fatContent
    }
}
// for Ingredient
const ingredientNumber = ref(0)
const valuesIngredient = ref([

]
)
function addIngredient() {
    ingredientNumber.value++
    valuesIngredient.value[ingredientNumber.value - 1] = ""
    if (!jsonData.value.recipeIngredient) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value, "recipeIngredient", "nutrition");
        jsonData.value = newJson
    }else{
        jsonData.value.recipeIngredient = valuesIngredient.value
    }
    
}
function deleteOneIngredient(taskIndex) {
    if (ingredientNumber.value > 1) {
        ingredientNumber.value--
        // jsonData.value.recipeIngredient.splice(taskIndex, 1)
        valuesIngredient.value.splice(taskIndex, 1)
    } else {
        ingredientNumber.value--
        delete jsonData.value.recipeIngredient
        // jsonData.value.recipeIngredient.splice(taskIndex, 1)
        valuesIngredient.value.splice(taskIndex, 1)
    }
}
function changeIngredient(taskIndex) {
    if (ingredientNumber.value == 1) {
        jsonData.value.recipeIngredient = valuesIngredient.value[0]
    } else {
        jsonData.value.recipeIngredient[taskIndex] = valuesIngredient.value[taskIndex]
    }
}
// for step
const stepNumber = ref(0)
const valuesStep = ref([

]
)
function addStep() {
    stepNumber.value++
    valuesStep.value[stepNumber.value - 1] =
    {
        "@type": "HowToStep",
        "name": "",
        "text": "",
        "url": "",
        "image": ""
    }
    if (!jsonData.value.recipeInstructions) {
        let newJson = {}
        if (jsonData.value.recipeIngredient) {
            newJson = addElementToObject(jsonData.value, "recipeInstructions", "recipeIngredient");
        } else {
            newJson = addElementToObject(jsonData.value, "recipeInstructions", "nutrition");
        }
        jsonData.value = newJson
    }
    jsonData.value.recipeInstructions = valuesStep.value
}
function deleteOneStep(taskIndex) {
    if (stepNumber.value > 1) {
        stepNumber.value--
        valuesStep.value.splice(taskIndex, 1)
    } else {
        stepNumber.value--
        jsonData.value.recipeInstructions.splice(taskIndex, 1)
        delete jsonData.value.recipeInstructions
        valuesStep.value.splice(taskIndex, 1)
    }
}
function changeStepName(taskIndex) {
    if (stepNumber.value == 1) {
        jsonData.value.recipeInstructions.name = valuesStep.value[0].name
    } else {
        jsonData.value.recipeInstructions[taskIndex].name = valuesStep.value[taskIndex].name
    }
}
function changeStepText(taskIndex) {
    if (stepNumber.value == 1) {
        jsonData.value.recipeInstructions.text = valuesStep.value[0].text
    } else {
        jsonData.value.recipeInstructions[taskIndex].text = valuesStep.value[taskIndex].text
    }
}
function changeStepUrl(taskIndex) {
    if (stepNumber.value == 1) {
        jsonData.value.recipeInstructions.url = valuesStep.value[0].url
    } else {
        jsonData.value.recipeInstructions[taskIndex].url = valuesStep.value[taskIndex].url
    }
}
function changeStepImage(taskIndex) {
    if (stepNumber.value == 1) {
        jsonData.value.recipeInstructions.image = valuesStep.value[0].image
    } else {
        jsonData.value.recipeInstructions[taskIndex].image = valuesStep.value[taskIndex].image
    }
}
// for aggregate rating
const aggregateAllow = ref(false)
const valuesAggregateRating = ref(
    {
        "@type": "AggregateRating",
        "ratingValue": "",
        "ratingCount": "",
        "bestRating": "",
        "worstRating": ""
    },
)
function addAggregateRating() {
    if (!jsonData.value.aggregateRating) {
        let newJson = {}
        if (jsonData.value.mpn) {
            newJson = addElementToObject(jsonData.value, "aggregateRating", "mpn");
        } else if (jsonData.value.gtin14) {
            newJson = addElementToObject(jsonData.value, "aggregateRating", "gtin14");
        } else if (jsonData.value.gtin13) {
            newJson = addElementToObject(jsonData.value, "aggregateRating", "gtin13");
        } else if (jsonData.value.gtin8) {
            newJson = addElementToObject(jsonData.value, "aggregateRating", "gtin8");
        } else if (jsonData.value.sku) {
            newJson = addElementToObject(jsonData.value, "aggregateRating", "sku");
        } else if (jsonData.value.brand) {
            newJson = addElementToObject(jsonData.value, "aggregateRating", "brand");
        } else {
            newJson = addElementToObject(jsonData.value, "aggregateRating", "image");
        }
        jsonData.value = newJson
        jsonData.value.aggregateRating = valuesAggregateRating.value
    }
}
function changeAggregateRating() {
    addAggregateRating()
    aggregateAllow.value = true
    jsonData.value.aggregateRating.ratingValue = valuesAggregateRating.value.ratingValue
    if (!valuesAggregateRating.value.ratingValue) {
        delete jsonData.value.aggregateRating
    }
}
function changeNumberOfRating() {
    if (jsonData.value.aggregateRating) {
        addAggregateRating()
        jsonData.value.aggregateRating.ratingCount = valuesAggregateRating.value.ratingCount
    }
}
function changeHighestRating() {
    if (jsonData.value.aggregateRating) {
        addAggregateRating()
        jsonData.value.aggregateRating.bestRating = valuesAggregateRating.value.bestRating
    }
}
function changeLowestRating() {
    if (jsonData.value.aggregateRating) {
        addAggregateRating()
        jsonData.value.aggregateRating.worstRating = valuesAggregateRating.value.worstRating
    }
}
// for review
const readOnlyOk = ref(false)
const reviewNumber = ref(0)
const valuesReview = ref([
]);
const valuesPublisher = ref(
    [
        { "@type": "Organization", "name": "" }
    ]
)
function deleteOneReview(taskIndex) {
    if (reviewNumber.value > 1) {
        reviewNumber.value--
        valuesReview.value.splice(taskIndex, 1)
    } else {
        reviewNumber.value--
        jsonData.value.review.splice(taskIndex, 1)
        delete jsonData.value.review
        valuesReview.value.splice(taskIndex, 1)
    }
}
function addReview() {
    reviewNumber.value++
    valuesReview.value[reviewNumber.value - 1] =
    {
        "@type": "Review",
        "name": "",
        "reviewBody": "",
        "datePublished": "",
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "",
            "bestRating": "",
            "worstRating": ""
        },
        "author": { "@type": "Person", "name": "" },
    }
    valuesPublisher.value[reviewNumber.value - 1] = { "@type": "Organization", "name": "" }
    let newJson = {}
    if (!jsonData.value.review) {
        if (jsonData.value.aggregateRating) {
            newJson = addElementToObject(jsonData.value, "review", "aggregateRating");
        } else if (jsonData.value.recipeInstructions) {
            newJson = addElementToObject(jsonData.value, "review", "recipeInstructions");
        } else {
            newJson = addElementToObject(jsonData.value, "review", "nutrition");
        }
        jsonData.value = newJson
        jsonData.value.review = valuesReview.value
    } else {
        jsonData.value.review[reviewNumber.value - 1] = valuesReview.value[reviewNumber.value - 1]
    }
}
function changeReviewName(taskIndex) {
    jsonData.value.review[taskIndex].name = valuesReview.value[taskIndex].name
}
function changeReviewBody(taskIndex) {
    jsonData.value.review[taskIndex].reviewBody = valuesReview.value[taskIndex].reviewBody
}
function changeReviewRating(taskIndex) {
    if (valuesReview.value[taskIndex].reviewRating.ratingValue) {
        readOnlyOk.value = true
    } else {
        readOnlyOk.value = false
    }
    addAggregateRating()
    jsonData.value.review[taskIndex].reviewRating.ratingValue = valuesReview.value[taskIndex].reviewRating.ratingValue
    let sum = 0
    let sumRatingNumber = 0
    for (let i = 0; i < valuesReview.value.length; i++) {
        sum += Number(valuesReview.value[i].reviewRating.ratingValue)
        if (valuesReview.value[i].reviewRating.ratingValue) {
            sumRatingNumber++
        }
    }
    jsonData.value.aggregateRating.ratingValue = sum / sumRatingNumber
    jsonData.value.aggregateRating.ratingCount = sumRatingNumber
    valuesAggregateRating.value.ratingValue = sum / sumRatingNumber
    valuesAggregateRating.value.ratingCount = sumRatingNumber
}
function changeReviewDatePublished(taskIndex) {
    jsonData.value.review[taskIndex].datePublished = valuesReview.value[taskIndex].datePublished
}
function changeReviewAuthorName(taskIndex) {
    jsonData.value.review[taskIndex].author.name = valuesReview.value[taskIndex].author.name
}
function changePublisherName(taskIndex) {
    if (!jsonData.value.review[taskIndex].publisher) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value.review[taskIndex], "publisher", "author");
        jsonData.value.review[taskIndex] = newJson
        jsonData.value.review[taskIndex].publisher = valuesPublisher.value[taskIndex]
    }
    jsonData.value.review[taskIndex].publisher.name = valuesPublisher.value[taskIndex].name
    if (valuesPublisher.value[taskIndex].name == "") {
        delete jsonData.value.review[taskIndex].publisher
    }
}
</script>