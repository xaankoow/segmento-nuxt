<template>
    <div class="w-full h-full">
        <!-- Tabs -->
        <div class="flex flex-row items-center gap-3 px-2 h-[7%] bg-base-200">
            <TabItem to="/schema-builder/faq" :active="false"> FAQ page </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/how-to" :active="false"> How to </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/local-business" :active="false">
                Local Business
            </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/product" :active="false"> Product </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/recipe" :active="false"> Recipe </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/video" :active="false"> Video </TabItem>
            <TabSeparator></TabSeparator>
            <TabItem to="/schema-builder/website" :active="true"> Website </TabItem>
        </div>
        <div class="flex justify-start items-start gap-2 w-full h-[93%] p-2">
            <!-- _______________________________________ -->
            <!-- right part -->
            <!-- _______________________________________ -->
            <div id="inputsCard" class="w-1/2 h-full flex flex-col gap-2 align-start justify-start">
                <div class="w-full">
                    <InputText class="w-full" placeholder="نام وب‌سایت"
                        @input="changeWebSiteName()" v-model="values.name" />
                </div>
                <div class="w-full">
                    <InputURL class="w-full placeholder:text-right text-left" placeholder="آدرس وب‌سایت"
                        @input="changeWebSiteURL()" v-model="values.url" />
                </div>
                <div class="w-full">
                    <InputURL class="w-full placeholder:text-right text-left" placeholder="آدرس صفحه جستجو داخل سایت"
                        @input="changeInternalURL()" v-model="values.target" />
                </div>
                <div class="w-full">
                    <InputURL :dir="values.targetQuery === '' || !Boolean(values.targetQuery) ? 'rtl' : 'ltr'"
                        class="w-full placeholder:text-right text-left"
                        placeholder="عبارت اضافی برای افزودن به آدرس جست‌وجو (مشابه utm - اختیاری)"
                        @input="changeInternalURLString()" v-model="values.targetQuery" />  
                </div>
            </div>
            <!-- _______________________________________ -->
            <!-- left part -->
            <!-- _______________________________________ -->
            <div class="w-1/2 flex flex-col gap-2">
                <div class="flex gap-2 w-full h-10">
                    <button @click="deleteQuestions" class="btn-primary px-4 h-10">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_162_227" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0"
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
                        <button class="btn-primary px-4 h-10" type="submit" id="validate_schema2" href="https://www.google.com"
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
                    <Copy class="btn-primary px-4 h-10" :content="`<script type='application/ld+json'>${JSON.stringify(
                        jsonData
                    )}</script>`">
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
import { ref, onMounted } from "vue";
import Config from "~~/composables/Config";

const config = new Config();
const values = ref([
    {
        name: "",
        url: "",
        target: "{search_term_string}",
        targetQuery: "",
    },
]);
const jsonData = ref({
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "",
    url: "",
    potentialAction: {
        "@type": "SearchAction",
        target: "{search_term_string}",
        "query-input": "required name=search_term_string",
    },
});
// for copy button //
const dataForCopy = ref("");
onMounted(() => {
    dataForCopy.value = document.getElementById("code").textContent;
});
// for delete button //
function deleteQuestions() {
    values.value = [
        {
            name: "",
            url: "",
            target: "{search_term_string}",
            targetQuery: "",
        },
    ];
    jsonData.value = {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "",
        url: "",
        potentialAction: {
            "@type": "SearchAction",
            target: "{search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };
}
// for Web site name //
function changeWebSiteName() {
    jsonData.value.name = values.value.name;
}
// for Web site url
function changeWebSiteURL() {
    jsonData.value.url = values.value.url;
}
// for Web site internal url
function changeInternalURL() {
    if (values.value.targetQuery) {
        jsonData.value.potentialAction.target =
            values.value.target + "{search_term_string}" + values.value.targetQuery;
    } else {
        jsonData.value.potentialAction.target = values.value.target + "{search_term_string}";
    }
}
// for Web site url Query
function changeInternalURLString() {
    if (values.value.target) {
        jsonData.value.potentialAction.target =
            values.value.target + "{search_term_string}" + values.value.targetQuery;
    } else {
        jsonData.value.potentialAction.target =
            "{search_term_string}" + values.value.targetQuery;
    }
}
</script>
