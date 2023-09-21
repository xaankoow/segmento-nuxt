<template>
  <div class="p-2 flex flex-col">
    <div class="flex flex-row gap-2">
      <!-- inputs section started -->
      <div class="w-full flex flex-row gap-2">
        <div class="flex flex-col justify-between h-full w-full rounded-[3px]">
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
            <label class="text-sm flow-root text-[#041e49]"
              >آدرس وب‌سایت (Final URL)</label
            >
            <div class="flex justify-between h-10 gap-2">
              <InputText
                v-model="site.url"
                placeholder="https://segmento.ir/hi"
                type="text"
                class="w-full ltr"
              />
            </div>
          </div>
          <div class="gap-1 flex flex-col">
            <label class="flex justify-between text-sm text-base-content">
              عنوان اول (Headline 1)
              <span class="ltr">({{ site.title.one.length }}/30)</span>
            </label>
            <InputTextProgressed
              v-model="site.title.one"
              placeholder="پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو"
              class="w-full"
              :used="(site.title.one.length / 30) * 100"
              :use_color="input_quality(site.title.one.length, 'title')"
            />
          </div>
          <div class="gap-1 flex flex-col">
            <label class="flex justify-between text-sm text-base-content">
              عنوان دوم (Headline 2)
              <span class="ltr">({{ site.title.two.length }}/30)</span>
            </label>
            <InputTextProgressed
              v-model="site.title.two"
              placeholder="پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو"
              class="w-full"
              :used="(site.title.two.length / 30) * 100"
              :use_color="input_quality(site.title.two.length, 'title')"
            />
          </div>
          <div class="gap-1 flex flex-col">
            <label class="flex justify-between text-sm text-base-content">
              عنوان سوم (Headline 3)
              <span class="ltr">({{ site.title.three.length }}/30)</span>
            </label>
            <InputTextProgressed
              v-model="site.title.three"
              placeholder="پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو"
              class="w-full"
              :used="(site.title.three.length / 30) * 100"
              :use_color="input_quality(site.title.three.length, 'title')"
            />
          </div>
          <div class="gap-1 flex flex-col">
            <label class="flex justify-between text-sm text-base-content ا">
              مسیر سایت (Path)
            </label>
            <div class="flex justify-between gap-3 align-center" dir="ltr">
              <InputText
                v-model="site.path.one"
                :class="`w-full text-left`"
                maxlength="69"
              />
              <span class="bg-[#D9D9D9] p-2 px-4 rounded-[5px] text-[14px] flex items-end"
                >/</span
              >
              <InputText
                v-model="site.path.two"
                :class="`w-full text-left`"
                maxlength="69"
              />
            </div>
          </div>
          <div class="Desc text-base-content gap-1 flex flex-col">
            <label class="flex justify-between text-sm">
              توضیحات (Description)
              <span class="ltr">({{ site.description.one.length }}/90)</span>
            </label>
            <InputTextArea
              v-model="site.description.one"
              placeholder="پلتفرم سگمنتو ابزارهای کاملی برای سئو سایت در اختیارتان قرار می‌دهد و پیداکردن کلمات کلیدی برای استراتژی سئو، تولید محتوا، تبلیغات گوگل یا بلاگری را برای شما آسان می‌کند."
              class="w-full h-28 -mt-px"
              :used="(site.description.one.length / 90) * 100"
              :use_color="input_quality(site.description.one.length, 'desc')"
            />
          </div>
          <div class="Desc text-base-content gap-1 flex flex-col">
            <label class="flex justify-between text-sm">
              توضیحات (Description)
              <span class="ltr">({{ site.description.two.length }}/90)</span>
            </label>
            <InputTextArea
              v-model="site.description.two"
              placeholder="پلتفرم سگمنتو ابزارهای کاملی برای سئو سایت در اختیارتان قرار می‌دهد و پیداکردن کلمات کلیدی برای استراتژی سئو، تولید محتوا، تبلیغات گوگل یا بلاگری را برای شما آسان می‌کند."
              class="w-full h-28 -mt-px"
              :used="(site.description.two.length / 90) * 100"
              :use_color="input_quality(site.description.two.length, 'desc')"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[5px]">
        <div class="title gap-1 flex flex-col text-sm text-base-content">
          پیش‌ نمایش تبلیغ شما در گوگل
        </div>

        <div class="h-full border p-4 rounded-[3px]" dir="ltr">
          <div class="text-[14px] text-[#202124] mr-[px] mb-[6px] font-bold">
            Sponsored
          </div>

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
                  {{ checkRoute(site.path.one, site.path.two, site.url) }}
                </div>
              </div>
            </div>
            <!-- content -->
            <div class="flex flex-col">
              <div
                class="flex flex-row h-[35px] text-left text-[20px] text-[#1a0dab] w-[600] overflow-hidden"
              >
                <span
                  dir="rtl"
                  v-if="
                    site.title.one === '' &&
                    site.title.two === '' &&
                    site.title.three === ''
                  "
                >
                  پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو
                </span>
                <span dir="rtl" v-else>
                  {{ text_humanity(site.title.one, 30) }}
                  {{
                    site.title.two.length > 0
                      ? ` - ${text_humanity(site.title.two, 30)}`
                      : ""
                  }}
                </span>
              </div>
              <div
                class="h-fit w-[600px] text-[14px] text-left text-[#4d5156] break-words"
              >
                <p
                  dir="rtl"
                  v-if="site.description.one === '' && site.description.two === ''"
                  class="w-[600px] break-words"
                >
                  پلتفرم سگمنتو ابزارهای کاملی برای سئو سایت در اختیارتان قرار
                  می‌دهد. پیداکردن کلمات کلیدی برای استراتژی سئو، تولید محتوا،
                  تبلیغات گوگل یا بلاگری را برای شما.
                </p>
                <p dir="rtl" v-else>
                  {{ text_humanity(site.description.one, 90) }}.
                  {{ site.description.two.length > 0 ? `${text_humanity(site.description.two, 90)}.` : "" }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--      mobile mode    -->
        <div class="flex flex-col justify-center">
          <div class="w-[490px] h-full m-auto relative">
            <div class="flex flex-col gap-[8px] absolute top-[62.5px] right-[49.7px]">
              <div
                class="border shadow-[0px_8px_16px_0px_rgba(0, 0, 0, 0.14)] inline-block m-auto w-[390px] rounded-[10px] text-base-content overflow-hidden"
              >
                <div class="content p-4">
                  <div
                    class="text-[12px] tracking-[0.2px] text-[#202124] mb-[6px] font-bold text-end"
                  >
                    Sponsored
                  </div>
                  <div class="w-full flex flex-col text-left">
                    <!-- head -->
                    <div class="flex flex-row-reverse h-[38px] items-center">
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
                          {{ checkRoute(site.path.one, site.path.two, site.url) }}
                        </div>
                      </div>
                    </div>
                    <!-- content -->
                    <div class="flex flex-col">
                      <div
                        class="flex flex-row-reverse py-2.5 text-left text-[20px] text-[#1a0dab] w-[600]"
                      >
                        <span
                          dir="rtl"
                          v-if="
                            site.title.one === '' &&
                            site.title.two === '' &&
                            site.title.three === ''
                          "
                        >
                          پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو
                        </span>
                        <span dir="rtl" v-else>
                          {{ text_humanity(site.title.one, 30) }}
                          {{ site.title.two.length > 0 ? ` - ${text_humanity(site.title.two, 30)}` : "" }}
                        </span>
                      </div>
                      <div
                        class="h-fit w-full text-[14px] text-left text-[#4d5156] break-words"
                      >
                        <p
                          dir="rtl"
                          v-if="
                            site.description.one === '' && site.description.two === ''
                          "
                          class="w-full text-[14px] break-words"
                        >
                          پلتفرم سگمنتو ابزارهای کاملی برای سئو سایت در اختیارتان
                          قرار می‌دهد. پیداکردن کلمات کلیدی برای استراتژی سئو،
                          تولید محتوا، تبلیغات گوگل یا بلاگری را برای شما.
                        </p>
                        <p dir="rtl" v-else>
                          {{ text_humanity(site.description.one, 90) }}.
                          {{ site.description.two.length > 0 ? `${text_humanity(site.description.two, 90)}.` : "" }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="
                  site.description.one.length > 0 ||
                  site.description.two.length > 0 ||
                  site.description.two.length > 0 ||
                  site.description.one.length > 0 ||
                  site.path.one.length > 0 ||
                  site.path.two.length > 0 ||
                  site.url.length > 0 ||
                  site.brand.length > 0 ||
                  site.title.one.length > 0 ||
                  site.title.two.length > 0 ||
                  site.title.three.length > 0
                "
                class="border shadow-[0px_8px_16px_0px_rgba(0, 0, 0, 0.14)] inline-block m-auto w-[390px] rounded-[10px] text-base-content overflow-hidden"
              >
                <div class="content p-4">
                  <div
                    class="text-[12px] tracking-[0.2px] text-[#202124] mb-[6px] font-bold text-end"
                  >
                    Sponsored
                  </div>
                  <div class="w-full flex flex-col text-left">
                    <!-- head -->
                    <div class="flex flex-row-reverse h-[38px] items-center">
                      <div
                        class="w-[28px] h-[28px] mr-[12px] bg-[#f1f3f4] border-x border-[#ecedef] rounded-[100%] flex justify-center items-center"
                      >
                        <img class="w-[18px] h-[18px]" src="/favicon.ico" />
                      </div>
                      <div class="flex flex-col">
                        <div class="h-1/2 text-[14px]" dir="rtl">
                          سگمنتو
                        </div>
                        <div class="h-1/2 text-[12px]">https://segmento.ir/hi</div>
                      </div>
                    </div>
                    <!-- content -->
                    <div class="flex flex-col">
                      <div
                        class="flex flex-row-reverse py-2.5 text-left text-[20px] text-[#1a0dab] w-[600]"
                      >
                        <span dir="rtl">
                          پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل • سگمنتو
                        </span>
                      </div>
                      <div
                        class="h-fit w-full text-[14px] text-left text-[#4d5156] break-words"
                      >
                        <p dir="rtl" class="w-full text-[14px] break-words">
                          پلتفرم سگمنتو ابزارهای کاملی برای سئو سایت در اختیارتان
                          قرار می‌دهد. پیداکردن کلمات کلیدی برای استراتژی سئو،
                          تولید محتوا، تبلیغات گوگل یا بلاگری را برای شما.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full h-[100%] overflow-hidden">
            <img
              src="../../assets/images/iphoneImg.png"
              alt="test"
              class="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="additional bg-[#F2F5F7] mt-8 text-center border-dashed border-2 px-4 pt-3 border-sky-500 rounded-xl"
    >
      <span class="w-full flow-root"
        >نیاز به بهترین عنوان‌های گوگل داری؟ میتونی از ابزار عنوان ساز گوگلی سگمنتو
        استفاده کنی تا بهترین و بهینه‌ترین عناوین رو برای کمپین گوگل ادز استفاده کنی</span
      >
      <NuxtLink to="/google-title-builder" class="btn-primary my-4 mx-auto">
        ابزار عنوان‌ساز گوگل
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
  brand: "",
  url: "",
  title: {
    one: "",
    two: "",
    three: "",
  },
  path: {
    one: "",
    two: "",
  },
  description: {
    one: "",
    two: "",
  },
});

const checkRoute = (first, second, url) => {
  const url_regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
  if (url_regex.test(url)) {
    url = url.replace(/^\/+|\/+$/g, "");
    url = url.replace(/(http:\/\/|https:\/\/)/, "");
    let final = "https://";
    let url_parts = url.split("/");
    if (first === "") {
      return `https://${url}`;
    } else {
      final += `${url_parts[0]}/${first}`;
      if (second === "") {
        return final;
      } else {
        final += `/${second}`;
        return final;
      }
    }
  } else {
    return "https://segmento.ir/hi";
  }
};

const text_humanity = (text, length) => {
  text = text.trim();
  if (text.length <= length) {
    return text;
  } else {
    return `${text.substring(0, length)}`;
  }
};

const input_quality = (length, type) => {
  switch (type) {
    case "title":
      if (length === 0) {
        return "bg-danger";
      } else if (length < 15) {
        return "bg-warning";
      } else if (length <= 30) {
        return "bg-success";
      } else {
        return "bg-danger";
      }
    case "desc":
      if (length < 5) {
        return "bg-danger";
      } else if (length < 75) {
        return "bg-warning";
      } else if (length <= 90) {
        return "bg-success";
      } else {
        return "bg-danger";
      }
  }
};
</script>
