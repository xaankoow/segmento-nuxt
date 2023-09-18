<template>
  <div class="p-2 flex flex-col gap-2 h-full">
    <div
      class="w-full text-base-content h-[17%] p-2 justify-around flex flex-col items-center bg-base-200 rounded-[3px]"
    >
      <div class="text-lg text-center">
        فقط عنوان و توضیحات متا خود را وارد کنید تا یک پیش نمایش از وبسایت خودتان را در
        صفحه سرچ گوگل مشاهده کنید:
      </div>
      <div class="text-xs w-[73%]">
        خیلی از مواقع مطمئن نیستیم که عنوان و توضیحات متایی (Meta Title and Description)
        که برای گوگل می‌نویسیم، به درستی نمایش داده خواهند شد یا نه. این پیش‌نمایش به شما
        کمک می‌کند این مشکل را یک بار برای همیشه حل کنید.
      </div>
    </div>
    <div class="w-full flex flex-row gap-2 h-[68%]">
      <div class="flex flex-col justify-around h-full border w-2/5 rounded-[3px] p-2">
        <div class="gap-1 flex flex-col">
          <label class="text-sm flow-root font-bold">آدرس وبسایت (URL)</label>
          <div class="flex justify-between h-10 gap-2">
            <InputText
              v-model="site.url"
              placeholder="example:www.segmento.ir"
              @keyup="minimizeParams(site.url)"
              type="text"
              class="w-4/5 ltr"
            />
            <button
              class="btn-primary rounded-[3px] text-sm w-1/5 h-full"
              :disabled="site.url.length === 0"
              @click="checkHttpRegex()"
            >
              دریافت
            </button>
          </div>
        </div>
        <div class="title gap-1 flex flex-col">
          <label class="flex justify-between text-sm font-bold text-base-content">
            عنوان (Title)
            <span class="ltr">({{ site.title.length }}/69px)</span>
          </label>
          <div class="w-full flex flex-col items-end">
            <span
              class="h-px w-full transition-all ease-in-out duration-300 z-10"
              id="tProgressBar"
            >
            </span>
            <InputText
              v-model="site.title"
              @keydown="progressBar(site.title.length, `title`)"
              placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل"
              type="text"
              :class="`w-full text-right`"
              maxlength="69"
            />
          </div>
        </div>
        <div class="Desc text-base-content gap-1 flex flex-col">
          <label class="flex justify-between text-sm font-bold">
            توضیحات (Description)
            <span class="ltr">({{ site.description.length }}/156px)</span>
          </label>
          <div class="w-full flex flex-col items-end">
            <span
              class="h-px w-full transition-all ease-in-out duration-300 z-10"
              id="descProgressBar"
            >
            </span>
            <InputTextArea
              v-model="site.description"
              @keydown="progressBar(site.description.length, `desc`)"
              placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش "
              class="w-full h-24 -mt-px"
              maxlength="156"
            />
          </div>
        </div>
        <div class="gap-1 flex flex-col">
          <label class="flow-root text-sm font-bold text-base-content">
            نمایش کلمات کلیدی (Bold Keyword)
          </label>
          <InputText placeholder="درج کلمه کلیدی" type="text" class="w-full text-right" />
        </div>
      </div>
      <div class="w-3/5 h-full border p-4 inline-block float-left rounded-[3px]">
        <div>
          <div class="content p-1 py-3">
            <div class="flex flex-row-reverse items-center">
              <div v-if="site.url.length > 0" class="w-[70px] inline-block h-10">
                <img class="w-full h-full" src="../../assets/icons/google.png" />
              </div>
              <div class="minimize">
                <h2 class="w-full ltr">{{ site.url }}</h2>
                <NuxtLink
                  class="minimize float-left text-neutral-500 text-xs ltr"
                  href="/"
                >
                  {{ minimizeUrl }}
                </NuxtLink>
              </div>
            </div>
            <h1
              class="minimize minimizeTitle w-full text-base text-left text-blue-700 py-1 float-left"
            >
              {{ site.title }}
            </h1>
            <div class="description flow-root text-xs w-full text-left">
              <p class="text-neutral-500 minimize float-left">
                {{ site.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-base-250 border-dashed border-2 border-primary rounded-[3px] flex flex-col items-center justify-between h-[15%] p-2"
    >
      <div class="w-full flex justify-center">
        تبلیغات برای گوگل ادز داری و نمیدونی چطوری برای کاربر میخوای نمایشش بدی، میتونی از
        ابزار پیش نمایش متن تبلیغات گوگل ادز سگمنتو استفاده کنی؛
      </div>
      <NuxtLink to="/g-ads-preview" class="btn-primary">
        برو به ابزار
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_68_46"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_68_46)">
            <path
              d="M11.1 19.1L4.65 12.625C4.55 12.5417 4.47933 12.4457 4.438 12.337C4.396 12.229 4.375 12.1167 4.375 12C4.375 11.8833 4.396 11.7707 4.438 11.662C4.47933 11.554 4.55 11.4583 4.65 11.375L11.1 4.90001C11.25 4.76668 11.425 4.69568 11.625 4.68701C11.825 4.67901 12 4.75001 12.15 4.90001C12.3 5.05001 12.379 5.22501 12.387 5.42501C12.3957 5.62501 12.325 5.80834 12.175 5.97501L6.875 11.25H18.5C18.7 11.25 18.875 11.3207 19.025 11.462C19.175 11.604 19.25 11.7833 19.25 12C19.25 12.2167 19.175 12.3957 19.025 12.537C18.875 12.679 18.7 12.75 18.5 12.75H6.875L12.175 18.05C12.3083 18.1833 12.379 18.354 12.387 18.562C12.3957 18.7707 12.325 18.95 12.175 19.1C12.025 19.25 11.846 19.325 11.638 19.325C11.4293 19.325 11.25 19.25 11.1 19.1Z"
              fill="white"
            />
          </g>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.minimize {
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

.minimizeTitle {
  width: calc(100% - 130px);
  -webkit-line-clamp: 1;
}
</style>
<script setup>
import axios from "axios";

const site = ref({
  url: "",
  title: "",
  description: "",
  keyword: ""
});
const txtUrl = ref("");
const minimizeUrl = ref("");
const progressBar = (length, type) => {
  let progress = document.getElementById("tProgressBar");
  let descProgress = document.getElementById("descProgressBar");
  switch (type) {
    case "title":
      if (length < 10) progress.style.width = "20px";
      else if (length < 15) {
        progress.style.width = "30%";
        progress.style.background = "red";
      } else if (length < 30) {
        progress.style.width = "50%";
        progress.style.background = "orange";
      } else if (length >= 30) {
        progress.style.width = "100%";
        progress.style.background = "#1bc31b";
      }
      if (length === 0 || length === 1) {
        progress.style.width = "0px";
        progress.style.background = "red";
      }
      break;
    case "desc":
      if (length < 10) descProgress.style.width = "20px";
      else if (length < 15) {
        descProgress.style.width = "30%";
        descProgress.style.background = "red";
      } else if (length < 30) {
        descProgress.style.width = "50%";
        descProgress.style.background = "orange";
      } else if (length >= 30) {
        descProgress.style.width = "100%";
        descProgress.style.background = "#1bc31b";
      }
      if (length === 0 || length === 1) {
        descProgress.style.width = "0px";
        descProgress.style.background = "red";
      }
      break;
  }
};
const checkHttpRegex = () => {
  // const regex = /^https:\/\/[a-zA-Z0-9.-]+[a-zA-Z0-9\/]*$/;
  if (!txtUrl.value) {
    alert("آدرس وبسایت مورد نظر صحیح نمی باشد.");
    return false;
  } else {
    sendRequest();
  }
};
const minimizeParams = (el) => {
  let regex = /^www/;
  // if (minimizeUrl.value.length===11) minimizeUrl.value = ""
  minimizeUrl.value = "";
  if (el.match(regex).length > 0) {
    console.log("yes");
    let text = el.split("/");
    let first, last, middle;
    if (text[0].includes("https") || text[0].includes("http")) {
      first = `${text[0]}//${text[2]}`;
      last = text[text.length - 1] !== "" ? text[text.length - 1] : text[text.length - 2];
      if (text.length > 4) middle = " >...> ";
      else middle = ">";
    } else {
      first = `https://${text[0]}`;
      last = text[text.length - 1] !== "" ? text[text.length - 1] : text[text.length - 2];
      switch (text[text.length - 1] !== "" ? text.length : text.length - 1) {
        case 1:
          last = "";
          middle = "";
          break;
        case 2:
          middle = ">";
          break;
        default:
          middle = " >...> ";
          break;
      }
    }
    minimizeUrl.value = `${first}${middle}${
      last?.length > 16 ? last.substring(0, 13) + "..." : last
    }`;
    return true;
  }
};

const sendRequest = () => {
  let res = axios.get("https://www.google.com", txtUrl.value).then(async (result) => {
    let response = await result.data;
    console.log(response);
  });
};
</script>
