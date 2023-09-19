<template>
  <div class="p-2">
    <div class="mt-4 leading-loose">
      <h1 class="font-bold text-lg text-center">این ابزار به شما کمک خواهد کرد که متن‌های مورد نظر خود برای تبلیغات گوگل
        ادز را آماده کنید و آنها را با دیگران به اشتراک بگذارید.</h1>
      <span class="text-sm">خیلی از مواقع مطمئن نیستیم که متن و شکل تبلیغی که برای گوگل ادز می‌نویسیم، به درستی نمایش داده خواهند شد یا نه. این پیش‌نمایش به شما کمک می‌کند این مشکل را یک بار برای همیشه حل کنید.</span>
    </div>
    <div class="searchBox p-4 pt-0 inline-block w-[45%]  rounded-[10px] ">
      <div class="searchTitle mb-6">
        <label class="text-sm flow-root my-2.5 font-bold">آدرس وبسایت (Final URL)</label>
        <div class="flex justify-between gap-4 w-full">
          <input @input="checkUrl($event.target.value)" placeholder="example:www.segmento.ir"
                 type="text"
                 class="w-full h-11 text-black placeholder:text-base-400 border border-base-400 rounded-[5px] ltr"/>
        </div>
      </div>
      <div class="title mb-6">
        <label class="flex justify-between text-sm mb-2.5 font-bold">
          عنوان اول (Headline 1)
          <span class="ltr text-[#10CCAE]">{{ titleLength.length }}</span>
        </label>
        <input @input="titleLength=$event.target.value"
               placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل" type="text"
               :class="`w-full text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right`"
               maxlength="69"/>
        <!--        <span class="titleProgress" id="tProgressBar"></span>-->
      </div>
      <div class="title mb-6">
        <label class="flex justify-between text-sm mb-2.5 font-bold">
          عنوان دوم (Headline 2)
          <span class="ltr text-[#10CCAE]">{{ secondTitle.length }}</span>
        </label>
        <input @input="secondTitle=$event.target.value"
               placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل" type="text"
               :class="`w-full text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right`"
               maxlength="69"/>
        <!--        <span class="titleProgress" id="tProgressBar"></span>-->
      </div>
      <div class="title mb-6">
        <label class="flex justify-between text-sm mb-2.5 font-bold">
          عنوان سوم (Headline 3)
          <span class="ltr text-[#10CCAE]">{{ thirdTitle.length }}</span>
        </label>
        <input @input="thirdTitle=$event.target.value"
               placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل" type="text"
               :class="`w-full text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right`"
               maxlength="69"/>
        <!--        <span class="titleProgress" id="tProgressBar"></span>-->
      </div>
      <div class="route mb-6">
        <label class="flex justify-between text-sm mb-2.5 font-bold">
          مسیر سایت (Path)
          <!--          <span class="ltr text-[#10CCAE]">{{ route.length }}</span>-->
        </label>
        <div class="flex justify-between gap-3 align-center">
          <InputText v-model="secondRoute"
                     :class="`w-full text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-left`"
                     maxlength="69"
                     @keyup="checkRoute($event.target.value)"
          />
          <span class="bg-[#D9D9D9] p-2 px-4 rounded-[5px] text-[14px] flex items-end">/</span>
          <input @input="FirstRoute= $event.target.value"
                 :class="`w-full text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-left`"
                 maxlength="69"
                 @keyup="checkRoute($event.target.value)"
          />
        </div>
      </div>
      <div class="Desc mb-6">
        <label class="flex justify-between text-sm mb-2.5 font-bold">توضیحات اول (Description 1)
          <span class="ltr text-[#10CCAE]">{{ descTitle.length }}</span>
        </label>
        <InputTextArea @input="descTitle=$event.target.value"
                       placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش "
                       class="w-full h-24 text-right"
                       maxlength="156"></InputTextArea>
      </div>
      <div class="Desc mb-6">
        <label class="flex justify-between text-sm mb-2.5 font-bold">توضیحات دوم (Description 2)
          <span class="ltr text-[#10CCAE]">{{ secondDesc.length }}</span>
        </label>
        <InputTextArea @input="secondDesc=$event.target.value"
                       placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش "
                       class="w-full h-24 py-2 text-right"
                       maxlength="156"></InputTextArea>
      </div>
    </div>
    <div class="inline-block w-[55%] align-top relative">
      <h1 class="text-[#002145] text-[18px] font-normal pb-4 pr-4 w-max">پیش‌ نمایش تبلیغ شما در گوگل</h1>
      <!--   deskMode   -->
      <div class="deskMode flow-root w-[630px] h-[200px]  rounded-[10px] m-auto border border-base-400 overflow-hidden">
        <span class="headBox flow-root w-full h-[30px] bg-[#7D7D7D] rounded-t-[10px] mb-5"></span>
        <div class="content p-1 float-left w-full">

          <h1 v-if="newVal.length >0" class="text-xs text-[darkslategrey] text-left font-bold ml-1.5">Sponsored</h1>

          <div dir="ltr" class="flex flex-row h-[38px] pt-4 items-center">

            <div
              v-if="newVal.length > 0"
              class="w-[28px] h-[28px] mr-[12px] bg-[#f1f3f4] border-x border-[#ecedef] rounded-[100%] flex justify-center items-center">
              <img class="w-[18px] h-[18px]" src="/favicon.ico">
            </div>

            <div class="flex flex-col w-1/2">
              <div v-if="newVal.length >0" class="h-1/2 text-[14px]" dir="ltr"> سگمنتو </div>
              <div class="h-1/2 text-[14px] w-full float-left minimize ltr">
                {{
                  newVal.length > 0 && finallRoute.length === 0 ? newVal : finallRoute
                }}
              </div>
              <div class="h-1/2 text-[12px] minimize float-left text-neutral-500 text-xs ltr">{{
                  minimizeUrl
                }}

              </div>
            </div>
          </div>

          <span class="minimize w-full  minimizeTitle text-base ltr text-blue-700 float-left p-2.5">
                  <h1 class="inline-block" v-if="titleLength.length > 0">
                    {{ titleLength }}
                  </h1>
                  <h1 class="inline-block" v-if="secondTitle.length> 0">{{ '-' + secondTitle }}</h1>
                  <h1 class="inline-block" v-if="thirdTitle.length > 0">{{ '-' + thirdTitle }}</h1>
                </span>
          <div class="description flow-root text-xs text-left w-[70%] float-left px-2.5">
            <p class="text-neutral-500 summarizeText   text-align: left;">
              {{ descTitle + secondDesc }}
            </p>
          </div>
        </div>
      </div>

      <!--      mobile mode    -->
      <div class="flex flex-col justify-center">
        <div class="w-[400px] h-full m-auto relative">
          <div
            class="preview border h-[160px] shadow-[0px_8px_16px_0px_rgba(0, 0, 0, 0.14)]  inline-block m-auto w-[300px] absolute top-[80px] right-[48px]  rounded-[10px] text-black overflow-hidden">
            <div class="content pt-4 ">
              <h1 v-if="newVal.length >0" class="text-xs text-[darkslategrey] text-left font-bold ml-2.5">
                Sponsored</h1>


              <div dir="ltr" class="flex flex-row h-[38px] pt-4 items-center">
                <div
                  v-if="newVal.length > 0"
                  class="w-[28px] h-[28px] mr-[12px] bg-[#f1f3f4] border-x border-[#ecedef] rounded-[100%] flex justify-center items-center">
                  <img class="w-[18px] h-[18px]" src="/favicon.ico">
                </div>
                <div class="flex flex-col w-1/2">
                  <div v-if="newVal.length >0" class="h-1/2 text-[14px]" dir="ltr"> سگمنتو </div>
                  <div class="h-1/2 text-[14px] w-full float-left minimize ltr">
                    {{
                      newVal.length > 0 && finallRoute.length === 0 ? newVal : finallRoute
                    }}
                  </div>
                  <div class="h-1/2 text-[12px] minimize float-left text-neutral-500 text-xs ltr">{{
                      minimizeUrl
                    }}

                  </div>
                </div>
              </div>

              <span class="minimize minimizeTitle w-full text-base ltr text-blue-700 float-left p-2.5">
                  <h1 class="contents" v-if="titleLength.length > 0">
                    {{ titleLength }}
                  </h1>
                  <h1 class="contents" v-if="secondTitle.length> 0">{{ '-' + secondTitle }}</h1>
                  <h1 class="contents" v-if="thirdTitle.length > 0">{{ '-' + thirdTitle }}</h1>
                </span>
              <div class="description flow-root text-xs w-full text-left px-2.5">
                <p class="text-neutral-500 summarizeText float-left text-justify">
                  {{ descTitle + secondDesc }}
                </p>
              </div>
            </div>
          </div>
          <img src="../../assets/icons/iphoneImg.png" alt="test" class="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
    <div class="additional bg-[#F2F5F7] mt-8 text-center border-dashed border-2 px-4 pt-3 border-sky-500 rounded-xl">
      <span class="w-full flow-root">نیاز به بهترین عنوان‌های گوگل داری؟ میتونی از ابزار عنوان ساز گوگلی سگمنتو استفاده کنی تا بهترین و بهینه‌ترین عناوین رو برای کمپین گوگل ادز استفاده کنی</span>
      <button class="btn-primary">ابزار عنوان نویس گوگل
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <mask id="mask0_68_46" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_68_46)">
            <path
              d="M11.1 19.1L4.65 12.625C4.55 12.5417 4.47933 12.4457 4.438 12.337C4.396 12.229 4.375 12.1167 4.375 12C4.375 11.8833 4.396 11.7707 4.438 11.662C4.47933 11.554 4.55 11.4583 4.65 11.375L11.1 4.90001C11.25 4.76668 11.425 4.69568 11.625 4.68701C11.825 4.67901 12 4.75001 12.15 4.90001C12.3 5.05001 12.379 5.22501 12.387 5.42501C12.3957 5.62501 12.325 5.80834 12.175 5.97501L6.875 11.25H18.5C18.7 11.25 18.875 11.3207 19.025 11.462C19.175 11.604 19.25 11.7833 19.25 12C19.25 12.2167 19.175 12.3957 19.025 12.537C18.875 12.679 18.7 12.75 18.5 12.75H6.875L12.175 18.05C12.3083 18.1833 12.379 18.354 12.387 18.562C12.3957 18.7707 12.325 18.95 12.175 19.1C12.025 19.25 11.846 19.325 11.638 19.325C11.4293 19.325 11.25 19.25 11.1 19.1Z"
              fill="white"/>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>
<style scoped>
.additional .btn-primary {
  margin: 10px auto;
}


.minimize {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /*width: 100%;*/
}

.minimizeTitle {
  -webkit-line-clamp: 2;
  /*width: 50%;*/
}

.summarizeText {
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
}


</style>
<script setup>
import {watch} from "vue";

const titleLength = ref('');
const descTitle = ref('');
const secondTitle = ref('');
const thirdTitle = ref('')
const FirstRoute = ref('');
const secondRoute = ref('');
const secondDesc = ref('')
const txtUrl = ref('');
const minimizeUrl = ref('');
const newVal = ref('');
const finallRoute = ref('')

watch(() => {
  console.log(txtUrl.value.split("/")[2]);
  console.log(txtUrl.value.split("/")[0]);
})

const checkUrl = (val) => {
  let splitVal = val.split("/")
  if (val.length > 0 && splitVal[0].includes('https') && splitVal[2] !== undefined) {
    newVal.value = `${splitVal[0]}//${splitVal[2]}/${splitVal[3]}`;
    console.log(newVal.value)
  } else if (!splitVal[0].includes('http') && FirstRoute.value.length === 0 && secondRoute.value.length === 0) newVal.value = val
}
const checkRoute = (val) => {
  if (FirstRoute.value.length > 0 && newVal.value.length > 0 && newVal.value.split("/")[0].includes("http")) finallRoute.value = `${newVal.value.split("/")[0]}//${newVal.value.split("/")[2]}/${FirstRoute.value}`
  else finallRoute.value = `${newVal.value.split("/")[0]}/${FirstRoute.value}`
  if (secondRoute.value.length > 0 && newVal.value.length > 0 && newVal.value.split("/")[0].includes("http")) finallRoute.value = `${newVal.value.split("/")[0]}//${newVal.value.split("/")[2]}/${FirstRoute.value}/${secondRoute.value}`
  else if (secondRoute.value.length > 0 && newVal.value.length > 0) finallRoute.value = `${newVal.value.split("/")[0]}/${FirstRoute.value}/${secondRoute.value}`
  if (newVal.value.length === 0) finallRoute.value = `${newVal.value.split("/")[0]}/${FirstRoute.value}`
}


</script>
