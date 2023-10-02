<template>
  <div class="p-2 flex flex-col gap-2 h-full">
    <div class="w-full flex flex-row gap-2 h-[85%]">
      <div class="flex flex-col justify-around h-full w-full rounded-[3px] p-2">
        <div class="title gap-1 flex flex-col">
          <label class="flex justify-between text-sm text-base-content">
            برند (Brand)
          </label>
          <div class="w-full flex flex-col items-end">
            <InputText
              v-model="site.brand"
              placeholder="سگمنتو"
              type="text"
              :class="`w-full text-right`"
            />
          </div>
        </div>

        <div class="gap-1 flex flex-col">
          <label class="text-sm">آدرس وبسایت (URL)</label>
          <div class="flex justify-between h-10 gap-2">
            <InputText
              v-model="site.url"
              placeholder="https://segmento.ir/hi"
              type="text"
              class="w-full ltr"
            />
            <!-- <button
              class="btn-primary rounded-[3px] text-sm w-1/5 h-full"
              :disabled="site.url.length === 0 || true"
              @click="receive_from_google(site.url)"
            >
              دریافت
            </button> -->
          </div>
        </div>
        <div class="title gap-1 flex flex-col">
          <label class="flex justify-between text-sm text-base-content">
            عنوان (Title)
            <span class="ltr">({{ site.title.length }}/63)</span>
          </label>
          <InputTextProgressed
            v-model="site.title"
            placeholder="پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو"
            class="w-full"
            :used="(site.title.length / 63) * 100"
            :use_color="input_quality(site.title.length, 'title')"
          />
        </div>
        <div class="Desc text-base-content gap-1 flex flex-col">
          <label class="flex justify-between text-sm">
            توضیحات (Description)
            <span class="ltr">({{ site.description.length }}/158)</span>
          </label>
          <InputTextArea
            v-model="site.description"
            placeholder="پلتفرم سگمنتو ابزارهای کاملی برای سئو سایت در اختیارتان قرار می‌دهد و پیداکردن کلمات کلیدی برای استراتژی سئو، تولید محتوا، تبلیغات گوگل یا بلاگری را برای شما آسان می‌کند."
            class="w-full h-28 -mt-px"
            :used="(site.description.length / 158) * 100"
            :use_color="input_quality(site.description.length, 'desc')"
          />
        </div>
        <div class="gap-1 flex flex-col">
          <label class="text-sm text-base-content">
            نمایش کلمات کلیدی (Bold Keyword)
          </label>
          <InputText
            v-model="site.keyword"
            placeholder="سئو"
            type="text"
            class="w-full text-right"
          />
        </div>
      </div>
      <div class="h-full border p-4 rounded-[3px]" dir="ltr">
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
                  site.url !== '' && site.url !== undefined
                    ? url_humanity(site.url)
                    : url_humanity("https://segmento.ir/hi")
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
                {{ text_humanity(site.title, 63) }}
              </span>
            </div>
            <div
              class="flex flex-row h-[47.11px] w-[600px] text-[14px] text-left text-[#4d5156] break-words"
            >
              <p dir="rtl" v-if="site.description === ''">
                پلتفرم سگمنتو ابزارهای کاملی برای <b>سئو</b> سایت در اختیارتان قرار می‌دهد
                و پیداکردن کلمات کلیدی برای استراتژی <b>سئو</b>، تولید محتوا، تبلیغات گوگل
                یا بلاگری را برای شما ...
              </p>
              <p
                dir="rtl"
                class="break-words w-[600px]"
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
      if (length === 0) {
        return "bg-danger";
      } else if (length < 40) {
        return "bg-warning";
      } else if (length <= 63) {
        return "bg-success";
      } else {
        return "bg-danger";
      }
    case "desc":
      if (length === 0) {
        return "bg-danger";
      } else if (length < 80) {
        return "bg-warning";
      } else if (length <= 155) {
        return "bg-success";
      } else {
        return "bg-danger";
      }
  }
};

const text_humanity = (text, length) => {
  text = text.trim();
  if (text.length <= length) {
    return text;
  } else {
    return `${text.substring(0, length)} ...`;
  }
};

const url_humanity = (url) => {
  url = url.replace(/(http:\/\/|https:\/\/)/, "");
  url = url.replace(/^\/+|\/+$/g, "");
  if (url_regex.test(url)) {
    let url_parts = url.split("/");
    let first, last, middle;
    first = `https://${url_parts[0]}`;
    last = url_parts[url_parts.length - 1];
    switch (url_parts.length) {
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

    return `${first}${middle}${last?.length > 16 ? last.substring(0, 13) + "..." : last}`;
  } else {
    return `https://${url?.length > 16 ? url.substring(0, 13) + "..." : url}`;
  }
};
</script>
