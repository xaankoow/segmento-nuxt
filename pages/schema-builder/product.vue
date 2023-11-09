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
            <TabItem to="/schema-builder/product" :active="true">
                Product
            </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/recipe" :active="false">
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
            <div class="w-1/2 h-full flex flex-col gap-2 align-start justify-start">
                <!-- Product start -->
                <div class="w-full ">
                    <InputText placeholder="نام محصول" @input="changeProductName()" v-model="valuesProduct.name" />
                </div>
                <div class="w-full ">
                    <InputURL placeholder="لینک تصویر" id="descriptionImageUrl" @input="changeProductImage()"
                        v-model="valuesProduct.image" />
                </div>
                <div class="w-full align-start">
                    <InputTextArea class="h-36" @input="changeProductDescription()" placeholder="توضیحات محصول"
                        v-model="valuesProduct.description" />
                </div>
                <!-- Product end -->
                <!-- _______________________________________ -->
                <!-- brand start -->
                <div class=" w-full flex gap-2">
                    <div class="w-1/2 ">
                        <InputURL placeholder="برند محصول" @input="changeBrandName()" v-model="valuesBrand.name" />
                    </div>
                    <!-- brand end -->
                    <!-- _______________________________________ -->
                    <!-- identification start -->
                    <div class="w-1/2 ">
                        <div class="w-full h-10 text-start align-center border border-base-400 rounded-[3px] ">
                            <DropdownFinalDropDown>
                                <template v-slot:title>
                                    <span>ویژگی شناسایی</span>
                                </template>
                                <template v-slot:option>
                                    <div class="gap-2 grid grid-cols-2">
                                        <InputCheckbox v-for="(element, index) in identifications" :key="index"
                                            v-model="identifications[index].is_checked"
                                            @click="changeIdentification(element.name, index)" :id="element.name">
                                            {{ element.name }}
                                        </InputCheckbox>
                                    </div>
                                </template>
                            </DropdownFinalDropDown>
                        </div>
                    </div>
                </div>
                <div class="w-full gap-2 grid grid-cols-2"
                    v-if="identifications.filter((el) => el.is_checked == true).length > 0">
                    <div class="w-full" v-for="(element, index) in identifications.filter((el) => el.is_checked == true)"
                        :key="index">
                        <InputText dir="ltr" :placeholder=element.name @input="changeIdentificationValue(element.name)"
                            v-model="identificationValue[element.name]" />
                    </div>
                </div>
                <!-- identification end -->
                <!-- _______________________________________ -->
                <!-- offer start -->
                <div class="w-full flex flex-col gap-2">
                    <div class="grid grid-cols-2 gap-2">
                        <div class="w-full h-10 text-start align-center border border-base-400 rounded-[3px] ">
                            <DropdownFinalDropDown>
                                <template v-slot:title>
                                    <span> نوع تخفیف</span>
                                </template>
                                <template v-slot:option>
                                    <div class="gap-2">
                                        <InputRadio @click="changeOffer('none')" id="none"
                                            v-model="offer.noOffer.is_checked" name="offer">بدون تخفیف</InputRadio>
                                        <InputRadio @click="changeOffer('aggregateOffer')" id="aggregateOffer"
                                            v-model="offer.aggregateOffer.is_checked" name="offer">تخفیف کلی </InputRadio>
                                        <InputRadio @click="changeOffer('offer')" id="offer"
                                            v-model="offer.offer.is_checked" name="offer">تخفیف</InputRadio>
                                    </div>
                                </template>
                            </DropdownFinalDropDown>
                        </div>
                        <div class="w-full h-10 text-start align-center border border-base-400 rounded-[3px] ">
                            <DropdownFinalDropDown :disabled="Boolean(offer.noOffer.is_checked)">
                                <template v-slot:title>
                                    {{ currency[jsonData.offers?.priceCurrency]?.title ?? "واحد پول" }}
                                </template>
                                <template v-slot:option>
                                    <div class="gap-2 grid grid-cols-2">
                                        <InputRadio v-for="(element, index) in Object.keys(currency)" :key="index"
                                            v-model="currency[element].is_checked" @click="changeAggregateCurrency(element)"
                                            :id="element" name="currency">{{ currency[element].title }}</InputRadio>
                                    </div>
                                </template>
                            </DropdownFinalDropDown>
                        </div>
                    </div>
                    <div v-if="aggregateOffer" class="w-full flex gap-2">
                        <div class="w-1/2 ">
                            <InputURL class="text-left placeholder:text-right" dir="ltr" placeholder="لینک صفحه تخفیف"
                                id="offerImageUrl" @input="changeAggregateOfferImage()"
                                v-model="valuesAggregateOffer.url" />
                        </div>
                        <div class="w-1/2 h-10 flex items-center gap-2">
                            <span class="text-sm w-48">پایین ترین قیمت</span>
                            <InputNumber dir="ltr" class="w-full" id="lowPrice" @input="changeAggregateOfferLowPrice()"
                                v-model="valuesAggregateOffer.lowPrice" />
                        </div>
                    </div>
                    <div v-if="aggregateOffer" class="w-full flex gap-2">
                        <div class="w-1/2 h-10 flex items-center gap-2">
                            <span class="text-sm w-48"> تعداد تخفیفات</span>
                            <InputNumber dir="ltr" class="w-full" id="offerCount" @input="changeAggregateOfferCount()"
                                v-model="valuesAggregateOffer.offerCount" />
                        </div>
                        <div class="w-1/2 h-10 flex items-center gap-2">
                            <span class="text-sm w-48">بالاترین قیمت</span>
                            <InputNumber dir="ltr" class="w-full" id="highPrice" @input="changeAggregateOfferHighPrice()"
                                v-model="valuesAggregateOffer.highPrice" />
                        </div>
                    </div>
                    <div v-if="normalOffer" class="w-full flex gap-2">
                        <div class="w-1/2">
                            <InputURL class="text-left placeholder:text-right" dir="ltr" placeholder="لینک صفحه تخفیف"
                                id="offerImageUrl" @input="changeNormalOfferImage()" v-model="valuesNormalOffer.url" />
                        </div>
                        <div class="w-1/2 h-10 flex items-center gap-2">
                            <span class="text-sm w-20">قیمت</span>
                            <InputNumber class="text-left placeholder:text-right w-full" dir="ltr" id="price"
                                @input="changeNormalOfferPrice()" v-model="valuesNormalOffer.price" />
                        </div>
                    </div>
                    <div v-if="normalOffer" class="w-full flex gap-2">
                        <div class="w-1/2 h-10 text-start align-center border border-base-400 rounded-[3px] ">
                            <DropdownFinalDropDown>
                                <template v-slot:title>
                                    <span>موجودی</span>
                                </template>
                                <template v-slot:option>
                                    <div class="gap-2">
                                        <InputRadio v-for="(element, index) in Object.keys(avalibleStuff)" :key="index"
                                            v-model="avalibleStuff[element].is_checked" @click="changeAvailability(element)"
                                            :id="element" name="count">{{ avalibleStuff[element].title }}</InputRadio>
                                    </div>
                                </template>
                            </DropdownFinalDropDown>
                        </div>
                        <div class="w-1/2 h-10 text-start align-center border border-base-400 rounded-[3px] ">
                            <DropdownFinalDropDown>
                                <template v-slot:title>
                                    <span>وضعیت کالا</span>
                                </template>
                                <template v-slot:option>
                                    <InputRadio v-for="(element, index) in Object.keys(conditionStuff)" :key="index"
                                        v-model="conditionStuff[element].is_checked" @click="changeItemCondition(element)"
                                        :id="element+'Condition'" name="stuff">{{ conditionStuff[element].title }}</InputRadio>
                                </template>
                            </DropdownFinalDropDown>
                        </div>
                    </div>
                    <div v-if="normalOffer" class="grid grid-cols-2 gap-2">
                        <div class="w-full h-10 flex items-center gap-2">
                            <span class="text-sm w-48">تاریخ تخفیف</span>
                            <InputDate class="w-full" @change="changeNormalOfferDate" id="priceValid"
                                v-model="valuesNormalOffer.priceValidUntil"></InputDate>
                        </div>
                    </div>
                </div>
                <!-- offer end -->
                <!-- _______________________________________ -->
                <!-- aggregateRating start -->
                <div class="w-full gap-2 grid grid-cols-2">
                    <div class="h-10 flex flex-row items-center gap-2">
                        <span class="w-48 text-sm">مجموع رتبه</span>
                        <InputNumber dir="ltr" class="w-full" :readonly="readOnlyOk"
                            :class="readOnlyOk ? 'text-gray-400' : ''" id="totalTime" @input="changeAggregateRating()"
                            v-model="valuesAggregateRating.ratingValue" />
                    </div>
                    <div class="h-10 flex flex-row items-center gap-2">
                        <span class="w-48 text-sm">تعداد رتبه</span>
                        <InputNumber dir="ltr" class="w-full" :readonly="readOnlyOk"
                            :class="readOnlyOk ? 'text-gray-400' : ''" id="price" @input="changeNumberOfRating()"
                            v-model="valuesAggregateRating.ratingCount" />
                    </div>
                    <div class="h-10 flex flex-row items-center gap-2">
                        <span class="w-48 text-sm">بالاترین رتبه</span>
                        <InputNumber dir="ltr" class="w-full" id="totalTime" @input="changeHighestRating()"
                            v-model="valuesAggregateRating.bestRating" />
                    </div>
                    <div class="h-10 flex flex-row items-center gap-2">
                        <span class="w-48 text-sm">پایین ترین رتبه</span>
                        <InputNumber dir="ltr" class="w-full" id="price" @input="changeLowestRating()"
                            v-model="valuesAggregateRating.worstRating" />
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
                            class="w-[20px] h-[20px] flex items-center justify-center rounded-[3px]-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                            ✕
                        </button>
                    </div>
                    <div class="w-full h-full align-start">
                        <InputTextArea class="h-36" @input="changeReviewBody(index)" placeholder="توضیحات محصول"
                            v-model="valuesReview[index].reviewBody" />
                    </div>
                    <div class="w-full flex gap-2">
                        <div class="w-2/5 h-10 flex items-center gap-2">
                            <span class="text-sm">رتبه</span>
                            <InputNumber dir="ltr" class="w-full" id="totalTime" @input="changeReviewRating(index)"
                                v-model="valuesReview[index].reviewRating.ratingValue"
                                :min="valuesAggregateRating.worstRating ? valuesAggregateRating.worstRating : 0"
                                :max="valuesAggregateRating.bestRating ? valuesAggregateRating.bestRating : 0" />
                        </div>
                        <div class="w-3/5 h-10 flex items-center gap-2">
                            <span class="text-sm w-24">تاریخ انتشار</span>
                            <InputDate dir="ltr" class="w-full" id="date" @change="changeDatePublished(index)"
                                v-model="valuesReview[index].datePublished" />
                        </div>
                    </div>
                    <div class="w-full flex gap-2">
                        <div class="w-1/2">
                            <InputText class="w-full align-start" placeholder=" نام نویسنده"
                                @input="changeAuthorName(index)" v-model="valuesReview[index].author.name" />
                        </div>
                        <div class="w-1/2">
                            <InputText class="w-full align-start" placeholder="ناشر"
                            @input="changePublisherName(index)" v-model="valuesPublisher[index].name" />
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
                            <mask id="mask0_164_21" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
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
import { ref } from "vue"
const jsonData = ref(
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "",
        "image": ""
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
    jsonData.value =
    {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "",
        "image": ""
    };
    valuesProduct.value =
    {
        name: "",
        image: "",
        description: "",
    };
    valuesBrand.value =
    {
        "@type": "Brand",
        "name": ""
    };
    identificationValue.value =
    {
        sku: "",
        gtin8: "",
        gtin13: "",
        gtin14: "",
        mpn: ""
    }
    aggregateOffer.value = false
    valuesAggregateOffer.value =
    {
        "@type": "AggregateOffer",
        "url": "",
        "priceCurrency": "",
        "lowPrice": "",
    }
    normalOffer.value = false
    valuesNormalOffer.value =
    {
        "@type": "Offer",
        "url": "",
        "priceCurrency": "",
        "price": "",
        "priceValidUntil": "",
        "availability": "",
        "itemCondition": ""
    }
    aggregateAllow.value = false
    valuesAggregateRating.value =
    {
        "@type": "AggregateRating",
        "ratingValue": "",
        "ratingCount": "",
        "bestRating": "",
        "worstRating": ""
    };
    readOnlyOk.value = false
    reviewNumber.value = 0
    valuesReview.value = [
    ];
    valuesPublisher.value =
        { "@type": "Organization", "name": "" }
}
// for product //
const valuesProduct = ref(
    {
        name: "",
        image: "",
        description: "",
    }
);
function changeProductName() {
    jsonData.value.name = valuesProduct.value.name
}
function changeProductImage() {
    jsonData.value.image = valuesProduct.value.image
}
function changeProductDescription() {
    const newJson = addElementToObject(jsonData.value, "description", "image");
    jsonData.value = newJson
    jsonData.value.description = valuesProduct.value.description

    if (valuesProduct.value.description == "") {
        delete jsonData.value.description;
    }
}

// for brand
const valuesBrand = ref(
    {
        "@type": "Brand",
        "name": ""
    },
);

function changeBrandName() {
    const newJson = addElementToObject(jsonData.value, "brand", "description");
    jsonData.value = newJson
    jsonData.value.brand = valuesBrand.value

    if (jsonData.value.brand.name === "") {
        delete jsonData.value.brand;
    }
}

// for identification
const identificationValue = ref({
    sku: "",
    gtin8: "",
    gtin13: "",
    gtin14: "",
    mpn: ""
})
const identifications = ref([
    {
        name: "sku",
        is_checked: false,
        value: "sku"
    },
    {
        name: "gtin8",
        is_checked: false,
        value: "gtin8"
    },
    {
        name: "gtin13",
        is_checked: false,
        value: "gtin13"
    },
    {
        name: "gtin14",
        is_checked: false,
        value: "gtin14"
    },
    {
        name: "mpn",
        is_checked: false,
        value: "mpn"
    },
]);
function changeIdentification(el, index) {
    if (!identifications.value[index].is_checked) {
        let newJson = []
        newJson = addElementToObject(jsonData.value, el, "image");
        jsonData.value = newJson
        jsonData.value[el] = ""
    } else {
        delete jsonData.value[el]
    }
}
function changeIdentificationValue(el) {
    jsonData.value[el] = identificationValue.value[el]
}
// for offer
const offer = ref({
    aggregateOffer: {
        is_checked: false,
        value: "aggregateOffer"
    },
    offer: {
        is_checked: false,
        value: "offer"
    },
    noOffer: {
        is_checked: true,
        value: "euro"
    },
});
function changeOffer(el) {
    if (el == "aggregateOffer") {
        for (let i in offer.value) {
            if (i == el) {
                offer.value[i].is_checked = true
            } else {
                offer.value[i].is_checked = false
            }
        }
        aggregateOffer.value = true
        normalOffer.value = false
        let newJson = {}
        if (jsonData.value.brand) {
            newJson = addElementToObject(jsonData.value, "offers", "brand");
        } else {
            newJson = addElementToObject(jsonData.value, "offers", "image");
        }
        jsonData.value = newJson
        jsonData.value.offers = valuesAggregateOffer.value
    } else if (el == "offer") {
        for (let i in offer.value) {
            if (i == el) {
                offer.value[i].is_checked = true
            } else {
                offer.value[i].is_checked = false
            }
        }
        normalOffer.value = true
        aggregateOffer.value = false
        let newJson = {}
        if (jsonData.value.brand) {
            newJson = addElementToObject(jsonData.value, "offers", "brand");
        } else {
            newJson = addElementToObject(jsonData.value, "offers", "image");
        }
        jsonData.value = newJson
        jsonData.value.offers = valuesNormalOffer.value
    } else {
        for (let i in offer.value) {
            if (i == el) {
                offer.value[i].is_checked = true
            } else {
                offer.value[i].is_checked = false
            }
        }
        normalOffer.value = false
        aggregateOffer.value = false
        if (jsonData.value.offers) {
            delete jsonData.value.offers
        }
    }
}
// // aggregate
const aggregateOffer = ref(false)
const valuesAggregateOffer = ref(
    {
        "@type": "AggregateOffer",
        "url": "",
        "priceCurrency": "",
        "lowPrice": "",
    }
)
const currency = ref({
    IRR: {
        is_checked: false,
        value: "IRR",
        title: "ریال",
    },
    USD: {
        is_checked: false,
        value: "USD",
        title: "دلار",
    },
    GBP: {
        is_checked: false,
        value: "GBP",
        title: "پوند",
    },
    EUR: {
        is_checked: false,
        value: "EUR",
        title: "یورو",
    },
    AED: {
        is_checked: false,
        value: "AED",
        title: "درهم امارات",
    },
});
function changeAggregateCurrency(el) {
    valuesAggregateOffer.value.priceCurrency = el
    jsonData.value.offers.priceCurrency = el
}
function changeAggregateOfferImage() {
    jsonData.value.offers.url = valuesAggregateOffer.value.url
}
function changeAggregateOfferCount() {
    jsonData.value.offers.offerCount = valuesAggregateOffer.value.offerCount;
    if (jsonData.value.offers.offerCount === "") {
        delete jsonData.value.offers.offerCount;
    }
}
function changeAggregateOfferLowPrice() {
    jsonData.value.offers.lowPrice = valuesAggregateOffer.value.lowPrice
}
function changeAggregateOfferHighPrice() {
    jsonData.value.offers.highPrice = valuesAggregateOffer.value.highPrice
    if (jsonData.value.offers.highPrice === "") {
        delete jsonData.value.offers.highPrice;
    }
}
// // normal
const normalOffer = ref(false)
const valuesNormalOffer = ref(
    {
        "@type": "Offer",
        "url": "",
        "priceCurrency": "",
        "price": "",
        "priceValidUntil": "",
        "availability": "",
        "itemCondition": ""
    }
)
const avalibleStuff = ref({
    inStock: {
        is_checked: false,
        value: "inStock",
        title: "موجود"
    },
    outOfStock: {
        is_checked: false,
        value: "outOfStock",
        title: "ناموجود"
    },
    onlineOnly: {
        is_checked: false,
        value: "onlineOnly",
        title: "غیرحضوری"
    },
    inStoreOnly: {
        is_checked: false,
        value: "inStoreOnly",
        title: "حضوری"
    },
    preOrder: {
        is_checked: false,
        value: "preOrder",
        title: "پیش سفارش"
    },
    preSale: {
        is_checked: false,
        value: "preSale",
        title: "پیش فروش"
    },
    limitedAvailability: {
        is_checked: false,
        value: "limitedAvailability",
        title: "در دسترس بودن محدود"
    },
    soldOut: {
        is_checked: false,
        value: "soldOut",
        title: "فروخته شد"
    },
    discontinued: {
        is_checked: false,
        value: "discontinued",
        title: "متوقف شد"
    },
    notSpecified: {
        is_checked: false,
        value: "notSpecified",
        title: "مشخص نشده است"
    },
});
const conditionStuff = ref({
    New: {
        is_checked: false,
        value: "New",
        title: "جدید"
    },
    Used: {
        is_checked: false,
        value: "Used",
        title: "استفاده شده"
    },
    Refurbished: {
        is_checked: false,
        value: "Refurbished",
        title: "مرمت شده"
    },
    Damaged: {
        is_checked: false,
        value: "Damaged",
        title: "آسیب دیده"
    },
    notSpecified: {
        is_checked: false,
        value: "notSpecified",
        title: "مشخص نشده است"
    },
})
function changeAvailability(el) {
    if (!jsonData.value.offers.availability) {
        let newJson = {}
        newJson = addElementToObject(jsonData.value, "availability", "priceValidUntil");
        jsonData.value - newJson
    }
    valuesNormalOffer.value.availability = `https://schema.org/${el}`
    jsonData.value.offers.availability = `https://schema.org/${el}`
    if (el == "notSpecified") {
        delete jsonData.value.offers.availability
    }
}
function changeItemCondition(el) {
    if (!jsonData.value.offers.itemCondition) {
        let newJson = {}
        if (jsonData.value.offers.availability) {
            newJson = addElementToObject(jsonData.value, "itemCondition", "availability");
        } else {
            newJson = addElementToObject(jsonData.value, "itemCondition", "priceValidUntil");
        }
        jsonData.value = newJson
    }
    valuesNormalOffer.value.itemCondition = `https://schema.org/${el}Condition`
    jsonData.value.offers.itemCondition = `https://schema.org/${el}Condition`
    if (el == "notSpecified") {
        delete jsonData.value.offers.itemCondition
    }
}
function changeNormalOfferImage() {
    jsonData.value.offers.url = valuesNormalOffer.value.url
}
function changeNormalOfferPrice() {
    jsonData.value.offers.price = valuesNormalOffer.value.price
}
function changeNormalOfferDate() {
    jsonData.value.offer.priceValidUntil = valuesNormalOffer.value.priceValidUntil
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
    valuesPublisher.value[reviewNumber.value-1] = { "@type": "Organization", "name": "" }
    let newJson = {}
    if (!jsonData.value.review) {
        if (jsonData.value.aggregateRating) {
            newJson = addElementToObject(jsonData.value, "review", "aggregateRating");
        } else if (jsonData.value.mpn) {
            newJson = addElementToObject(jsonData.value, "review", "mpn");
        } else if (jsonData.value.gtin14) {
            newJson = addElementToObject(jsonData.value, "review", "gtin14");
        } else if (jsonData.value.gtin13) {
            newJson = addElementToObject(jsonData.value, "review", "gtin13");
        } else if (jsonData.value.gtin8) {
            newJson = addElementToObject(jsonData.value, "review", "gtin8");
        } else if (jsonData.value.sku) {
            newJson = addElementToObject(jsonData.value, "review", "sku");
        } else if (jsonData.value.brand) {
            newJson = addElementToObject(jsonData.value, "review", "brand");
        } else {
            newJson = addElementToObject(jsonData.value, "review", "image");
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
function changeDatePublished(taskIndex) {
    jsonData.value.review[taskIndex].datePublished = valuesReview.value[taskIndex].datePublished
}
function changeAuthorName(taskIndex) {
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
    if(valuesPublisher.value[taskIndex].name == ""){
        delete jsonData.value.review[taskIndex].publisher
    }
}
</script>
