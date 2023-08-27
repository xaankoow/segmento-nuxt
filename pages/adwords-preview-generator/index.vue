<template>
    <div :class="[rtl ? 'rtl' : 'ltr', locale]" class="3xl:container mx-auto bg-gray-50">
        <div class="p-2">
            <h1 class="text-lg">شبیه‌ساز تبلیغات گوگل ادز</h1>
        </div>
        <div class="px-16 pb-8">
            <div class="mt-8">
                <h2 class="text-center text-lg mx-auto">این ابزار به شما کمک خواهد کرد که متن‌های مورد نظر خود برای تبلیغات
                    گوگل ادز را آماده کنید و آنها را با دیگران به اشتراک بگذارید.</h2>
                <p class="text-justify w-2/3 mx-auto pt-2 text-sm">خیلی از مواقع مطمئن نیستیم که متن و شکل تبلیغی که برای
                    گوگل ادز می‌نویسیم، به درستی نمایش داده خواهند شد یا نه. این پیش‌نمایش به شما کمک می‌کند این مشکل را یک
                    بار برای همیشه حل کنید.</p>
            </div>
            <div class="w-full flex flex-wrap justify-around mt-8">
                <div class="w-full md:w-2/5 flex flex-col py-2">
                    <div class="flex flex-col">
                        <TextInput class="my-1" lable="آدرس وبسایت (Final URL)" placeholder="مثال: segmento.ir">
                        </TextInput>
                        <TextInput class="my-1" lable="عنوان اول (Headline 1)"
                            placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل"></TextInput>
                        <TextInput class="my-1" lable="عنوان دوم (Headline 2)"
                            placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل"></TextInput>
                        <TextInput class="my-1" lable="عنوان سوم (Headline 3)"
                            placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل"></TextInput>
                        <div class="flex items-center">
                            <TextInput lable="مسیر سایت (Path)" class="input__text__path"></TextInput>
                            <div
                                class="w-[46px] h-[45px] rounded-lg bg-gray-300 mt-8 text-center flex justify-center items-center text-3xl mx-2">
                                /</div>
                            <TextInput class="mt-3 input__text__path"></TextInput>
                        </div>
                        <div class="flex flex-col">
                            <label for="" class="mt-4">توضیحات اول (Description 1)</label>
                            <textarea class="rounded border p-4 mt-2"
                                placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش "></textarea>
                        </div>
                        <div class="flex flex-col">
                            <label for="" class="mt-4">توضیحات دوم (Description 2)</label>
                            <textarea class="rounded border p-4 mt-2"
                                placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش "></textarea>
                        </div>
                        <div class="text-left mt-5">
                            <button class="rounded-xl py-2 px-5 bg-blue-600 text-white">اجرا</button>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-2/5 flex flex-col justify-center">
                    <div>
                        <h3>پیش‌نمایش تبلیغ شما در گوگل</h3>
                        <div class="rounded-tl-xl rounded-tr-xl bg-gray-600 h-[25px] mt-3 shadow"></div>
                        <div class="rounded-bl-xl rounded-br-xl bg-white h-[156px] shadow"></div>
                    </div>
                    <div class="w-[365px] h-[624px] mx-auto pt-3 relative">
                        <svg width="365" height="624" viewBox="0 0 365 624" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="365" height="624" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_1_184" transform="matrix(0.0037594 0 0 0.00201207 -0.0112782 -0.0140845)"/>
                            </pattern>
                            <image id="image0_1_184" width="269" height="508" xlink:href="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                        <img class="absolute left-10 top-20" src="@/assets/icons/Screenshot 2023-08-24 204334 1.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="rounded-lg border border-dashed bg-blue-100 border-blue-500 p-4 mt-7">
                <p class="text-center">نیاز به بهترین عنوان‌های گوگل داری؟ میتونی از ابزار عنوان ساز گوگلی سگمنتو استفاده کنی تا بهترین و بهینه‌ترین عناوین رو برای کمپین گوگل ادز استفاده کنی</p>
                <div class="rounded-lg bg-blue-600 flex items-center w-fit px-2 py-2 mx-auto mt-2">
                    <button class="border-none outline-none text-white">ابزار عنوان نویس گوگل</button>
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