<template>
    <div :class="[rtl ? 'rtl' : 'ltr', locale]" class="3xl:container mx-auto bg-gray-50">
        <div class="p-2">
            <h1 class="text-lg">شبیه‌ساز نتایج گوگل</h1>
        </div>
        <div class="px-16 pb-8">
            <div class="mt-8">
                <h2 class="text-center text-lg mx-auto">
                    فقط عنوان و توضیحات متا خود را وارد کنید تا یک پیش نمایش از وبسایت خودتان را در صفحه سرچ گوگل مشاهده کنید:
                </h2>
                <p class="text-justify w-2/3 mx-auto pt-2 text-sm">
                    خیلی از مواقع مطمئن نیستیم که عنوان و توضیحات متایی (Meta Title and Description) که برای گوگل می‌نویسیم، به درستی نمایش داده خواهند شد یا نه. این پیش‌نمایش به شما کمک می‌کند این مشکل را یک بار برای همیشه حل کنید.
                </p>
            </div>
            <div class="w-full flex flex-wrap justify-around mt-8">
                <form class="w-full md:w-5/12 flex flex-col p-5 shadow-lg rounded border" @submit.prevent="false">
                    <div class="flex flex-col">
                        <TextInput class="my-1" lable="آدرس وبسایت (Final URL)" placeholder="مثال: segmento.ir">
                        </TextInput>
                        <TextInput class="my-1" lable="آدرس وبسایت (URL)"
                            placeholder="مثال: segmento.ir"></TextInput>
                        <TextInput class="my-1" lable="عنوان (Title)"
                            placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل"></TextInput>
                        <div class="flex flex-col">
                            <textarea-field class="mt-2"  lable="توضیحات (Description)" placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش "></textarea-field>
                        </div>
                        <TextInput class="my-1" lable="نمایش کلمات کلیدی (Bold Keyword)"
                            placeholder="درج کلمه کلیدی (جداشونده با ویرگول و یا فاصله)"></TextInput>
                        <div class="text-left mt-5">
                            <button class="rounded-xl py-2 px-5 bg-blue-50 text-blue-500">اجرا</button>
                        </div>
                    </div>
                </form>
                <div class="w-full md:w-2/5">
                    <div class="shadow-lg rounded">
                        <div class="rounded-tl-xl rounded-tr-xl bg-gray-600 h-[25px]"></div>
                        <div class="bg-white h-[548px] relative">
                            <img src="@/assets/icons/simulatorPage.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded-lg border border-dashed bg-blue-100 border-blue-500 p-4 mt-7">
                <p class="text-center">
                    تبلیغات برای گوگل ادز داری و نمیدونی چطوری برای کاربر میخوایی نمایشش بدی، میتونی از ابزار پیش نمایش متن تبلیغات گوگل ادز سگمنتو استفاده کنی؛
                </p>
                <div class="rounded-lg bg-blue-600 flex items-center w-fit px-2 py-2 mx-auto mt-2">
                    <button class="border-none outline-none text-white">برو به ابزار</button>
                    <icon class="text-xl text-white mr-1">mdi-arrow-left</icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
})

const { rtl, locale } = useSegmentoApp()
</script>

<style scoped lang="postcss">
lable, h1,h2,h3,h4,p {
    @apply text-gray-900;
}
</style>