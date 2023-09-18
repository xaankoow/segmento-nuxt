<template>
  <div class="p-2 flex flex-col gap-2 h-full">
    <div class="w-full flex flex-row gap-2 h-[85%]">
      <div class="flex flex-col justify-around h-full border w-2/5 rounded-[3px] p-2">
        <div class="title gap-1 flex flex-col">
          <label class="flex justify-between text-sm text-base-content">
            برند (Brand)
          </label>
          <div class="w-full flex flex-col items-end">
            <InputText
              v-model="site.brand"
              placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل"
              type="text"
              :class="`w-full text-right`"
            />
          </div>
        </div>

        <div class="gap-1 flex flex-col">
          <label class="text-sm flow-root text-[#041e49]">آدرس وبسایت (URL)</label>
          <div class="flex justify-between h-10 gap-2">
            <InputText
              v-model="site.url"
              placeholder="segmento.ir/hi"
              type="text"
              class="w-4/5 ltr"
            />
            <button
              class="btn-primary rounded-[3px] text-sm w-1/5 h-full"
              :disabled="site.url.length === 0 || true"
              @click="receive_from_google(site.url)"
            >
              دریافت
            </button>
          </div>
        </div>
        <div class="title gap-1 flex flex-col">
          <label class="flex justify-between text-sm text-base-content">
            عنوان (Title)
            <span class="ltr">({{ site.title.length }}/61)</span>
          </label>
          <div class="w-full flex flex-col items-end">
            <span
              class="h-px transition-all ease-in-out duration-300 z-10"
              :class="input_quality(site.title.length, 'title')"
            >
            </span>
            <InputText
              v-model="site.title"
              placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل"
              type="text"
              :class="`w-full text-right`"
            />
          </div>
        </div>
        <div class="Desc text-base-content gap-1 flex flex-col">
          <label class="flex justify-between text-sm">
            توضیحات (Description)
            <span class="ltr">({{ site.description.length }}/158)</span>
          </label>
          <div class="w-full flex flex-col items-end">
            <span
              class="h-px transition-all ease-in-out duration-300 z-10"
              :class="input_quality(site.description.length, 'desc')"
            >
            </span>
            <InputTextArea
              v-model="site.description"
              placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش "
              class="w-full h-24 -mt-px"
            />
          </div>
        </div>
        <div class="gap-1 flex flex-col">
          <label class="flow-root text-sm text-[#041e49] text-base-content">
            نمایش کلمات کلیدی (Bold Keyword)
          </label>
          <InputText
            v-model="site.keyword"
            placeholder="درج کلمه کلیدی"
            type="text"
            class="w-full text-right"
          />
        </div>
      </div>
      <div class="w-3/5 h-full border p-4 rounded-[3px]" dir="ltr">
        <div class="w-[652px] flex flex-col gap-[5px] text-left">
          <!-- head -->
          <div class="flex flex-row h-[38px] items-center">
            <div
              class="w-[28px] h-[28px] mr-[12px] bg-[#f1f3f4] border-x border-[#ecedef] rounded-[100%] flex justify-center items-center"
            >
              <img class="w-[18px] h-[18px]" src="/favicon.ico" />
            </div>
            <div class="flex flex-col">
              <div class="h-1/2 text-[14px]" dir="rtl" v-if="site.brand === ''">
                سگمنتو
              </div>
              <div class="h-1/2 text-[14px]" dir="rtl" v-else>
                {{ site.brand }}
              </div>
              <div class="h-1/2 text-[12px]">
                {{
                  url_regex.test(site.url)
                    ? url_humanity(site.url)
                    : "https://segmento.ir"
                }}
              </div>
            </div>
          </div>
          <!-- content -->
          <div class="flex flex-col">
            <div
              class="flex flex-row h-[35px] text-left text-[20px] text-[#1a0dab] w-[600] overflow-hidden"
            >
              <span dir="rtl" v-if="site.title === ''">
                پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو
              </span>
              <span dir="rtl" v-else>
                {{ text_humanity(site.title, 61) }}
              </span>
            </div>
            <div
              class="flex flex-row h-[47.11px] w-[600px] text-[14px] text-left overflow-hidden text-[#4d5156]"
            >
              <p dir="rtl" v-if="site.description === ''">
                پلتفرم <b>سگمنتو</b> ابزارهای کاملی برای سئو سایت در اختیارتان قرار می‌دهد
                و پیداکردن کلمات کلیدی برای استراتژی سئو، تولید محتوا، تبلیغات گوگل یا
                بلاگری را برای شما ...
              </p>
              <p
                dir="rtl"
                v-else
                v-html="
                  text_humanity(site.description, 158).replaceAll(
                    site.keyword,
                    `<b>${site.keyword}</b>`
                  )
                "
              ></p>
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

<script setup>
const site = ref({
  url: "",
  title: "",
  description: "",
  keyword: "",
  brand: "",
});
const url_regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;

const input_quality = (length, type) => {
  switch (type) {
    case "title":
      if (length === 0 || length === 1) {
        return "w-0 bg-red-600";
      } else if (length < 10) {
        return "w-[10%] bg-red-600";
      } else if (length < 15) {
        return "w-[30%] bg-red-600";
      } else if (length < 30) {
        return "w-[50%] bg-orange-500";
      } else {
        return "w-[100%] bg-[#1bc31b]";
      }
    case "desc":
      if (length === 0 || length === 1) {
        return "w-0 bg-red-600";
      } else if (length < 10) {
        return "w-[10%] bg-red-600";
      } else if (length < 15) {
        return "w-[30%] bg-red-600";
      } else if (length < 30) {
        return "w-[50%] bg-orange-500";
      } else {
        return "w-[100%] bg-[#1bc31b]";
      }
  }
};

const receive_from_google = (query) => {
  if (url_regex.test(query)) {
    alert("true address format");
  } else {
    alert("false address format");
  }
};

const text_humanity = (text, length) => {
  text = text.trim();
  let words = text.split(" ");
  if (text.length <= length) {
    return text;
  } else if (words.length > 1) {
    while (text.length > length) {
      if (words.length <= 1) {
        return `${text.substring(0, length - 4)} ...`;
      } else {
        words = text.split(" ");
        text = words.slice(0, words.length - 1).join(" ");
      }
    }
    return `${text} ...`;
  } else {
    return `${text.substring(0, length - 4)} ...`;
  }
};

const url_humanity = (url) => {
  if (url_regex.test(url)) {
    url = url.replace(/^\/+|\/+$/g, "");
    // to check is the string in url format that we want or not
    let text = url.split("/");
    let first, last, middle;
    if (/(http:\/\/|https:\/\/)/.test(url)) {
      // to check if the string has http or https or not
      first = `${text[0]}//${text[2]}`;
      last = text[text.length - 1] !== "" ? text[text.length - 1] : text[text.length - 2];
      if (text.length > 4) middle = " › ... › ";
      else middle = " › ";
    } else {
      first = `https://${text[0]}`;
      last = text[text.length - 1] !== "" ? text[text.length - 1] : text[text.length - 2];
      switch (text[text.length - 1] !== "" ? text.length : text.length - 1) {
        case 1:
          last = "";
          middle = "";
          break;
        case 2:
          middle = " › ";
          break;
        default:
          middle = " › ... › ";
          break;
      }
    }
    return `${first}${middle}${last?.length > 16 ? last.substring(0, 13) + "..." : last}`;
  }
};
</script>
