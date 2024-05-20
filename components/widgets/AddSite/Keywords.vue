<script setup>
const props = defineProps({
  modelValue: {},
  direction: {
    type: String,
    default: "rtl",
  },
});
const domain_element = ref([]);

defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-full h-1/2 items-center flex flex-row">
    <div class="w-1/2 h-full flex flex-col px-4 py-8 gap-8">
      <h2 class="border-r-2 pr-2 border-r-primary">افزودن کلمات کلیدی و صفحه هدف</h2>
      <p class="pr-3">
        برای حفظ کیفیت گزارش رتبه کلمات کلیدی باید صفحات هدف تعریف کنید. صفحات هدف، همان
        صفحات داخلی ورک‌اسپیس فعلی هستند که می‌خواهید برای کلمات کلیدی هدف، رتبه کسب کنند.
      </p>
    </div>
    <div class="w-px bg-base-400 h-[90%]"></div>
    <div class="w-1/2 h-full flex flex-col items-center justify-center px-4 py-8">
      <img src="/images/keywordStep.png" class="h-[150px]" alt="site png" />
    </div>
  </div>
  <div class="w-full h-1/2 items-center flex flex-col p-4 pt-6 gap-6 overflow-scroll">
    <div
      class="gap-1 flex flex-row-reverse w-full"
      v-for="(page, index) in modelValue.pages"
      :key="index"
      :class="index !== 0 ? '' : 'hidden'"
    >
      <div class="w-1/2 flex flex-col gap-2 px-2" dir="ltr" v-if="index !== 0">
        <div
          class="flex flex-row gap-2 items-center justify-between w-full relative"
          dir="ltr"
          v-if="index !== 0"
        >
          <svg
            @click="modelValue.pages.splice(index, 1)"
            class="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.35 13.4L7.275 18.475C7.14167 18.6083 6.971 18.679 6.763 18.687C6.55433 18.6957 6.375 18.625 6.225 18.475C6.075 18.325 6 18.15 6 17.95C6 17.75 6.075 17.575 6.225 17.425L11.3 12.35L6.225 7.275C6.09167 7.14167 6.021 6.97067 6.013 6.762C6.00433 6.554 6.075 6.375 6.225 6.225C6.375 6.075 6.55 6 6.75 6C6.95 6 7.125 6.075 7.275 6.225L12.35 11.3L17.425 6.225C17.5583 6.09167 17.7293 6.02067 17.938 6.012C18.146 6.004 18.325 6.075 18.475 6.225C18.625 6.375 18.7 6.55 18.7 6.75C18.7 6.95 18.625 7.125 18.475 7.275L13.4 12.35L18.475 17.425C18.6083 17.5583 18.679 17.729 18.687 17.937C18.6957 18.1457 18.625 18.325 18.475 18.475C18.325 18.625 18.15 18.7 17.95 18.7C17.75 18.7 17.575 18.625 17.425 18.475L12.35 13.4Z"
              fill="#F35242"
            />
            <path
              d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3Z"
              fill="#F35242"
              fill-opacity="0.1"
            />
          </svg>
          <span ref="domain_element" class="absolute left-[37px] z-10">
            {{ modelValue.website }}/
          </span>
          <InputTextMarked
            autocomplete="path"
            v-model="modelValue.pages[index].slug"
            placeholder="pricing"
            type="text"
            class="!w-[92%]"
            :input_style="`padding-left: ${
              Boolean(domain_element[0]) ? domain_element[0].offsetWidth + 6 : 18
            }px;`"
            dir="ltr"
            :id="`page-${index}`"
          >
            صفحه هدف
          </InputTextMarked>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.28349 11.3171L15.6201 11.3171L9.35665 17.7445C8.85609 18.2582 8.85609 19.1011 9.35665 19.6148C9.85721 20.1284 10.6658 20.1284 11.1664 19.6148L19.6246 10.9351C20.1251 10.4215 20.1251 9.5917 19.6246 9.07804L11.1792 0.385249C10.6786 -0.128416 9.87005 -0.128416 9.36949 0.385249C8.86892 0.898914 8.86892 1.72868 9.36949 2.24235L15.6201 8.68291L1.28349 8.68291C0.577572 8.68291 1.1061e-07 9.2756 1.19249e-07 10C1.27887e-07 10.7244 0.577572 11.3171 1.28349 11.3171Z"
              fill="#D9D9D9"
            />
          </svg>
        </div>
      </div>
      <div
        class="w-1/2 flex flex-col items-center gap-6 px-2"
        dir="ltr"
        v-if="index !== 0"
      >
        <div
          class="w-full flex flex-row items-center justify-between gap-2"
          v-for="(keyword, keyword_index) in modelValue.pages[index].keywords"
          :key="keyword_index"
        >
          <svg
            @click="modelValue.pages[index].keywords.splice(keyword_index, 1)"
            class="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.35 13.4L7.275 18.475C7.14167 18.6083 6.971 18.679 6.763 18.687C6.55433 18.6957 6.375 18.625 6.225 18.475C6.075 18.325 6 18.15 6 17.95C6 17.75 6.075 17.575 6.225 17.425L11.3 12.35L6.225 7.275C6.09167 7.14167 6.021 6.97067 6.013 6.762C6.00433 6.554 6.075 6.375 6.225 6.225C6.375 6.075 6.55 6 6.75 6C6.95 6 7.125 6.075 7.275 6.225L12.35 11.3L17.425 6.225C17.5583 6.09167 17.7293 6.02067 17.938 6.012C18.146 6.004 18.325 6.075 18.475 6.225C18.625 6.375 18.7 6.55 18.7 6.75C18.7 6.95 18.625 7.125 18.475 7.275L13.4 12.35L18.475 17.425C18.6083 17.5583 18.679 17.729 18.687 17.937C18.6957 18.1457 18.625 18.325 18.475 18.475C18.325 18.625 18.15 18.7 17.95 18.7C17.75 18.7 17.575 18.625 17.425 18.475L12.35 13.4Z"
              fill="#F35242"
            />
            <path
              d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34315 24 0 22.6569 0 21V3Z"
              fill="#F35242"
              fill-opacity="0.1"
            />
          </svg>
          <InputTextMarked
            autocomplete="keyword"
            v-model="modelValue.pages[index].keywords[keyword_index]"
            placeholder="کتاب"
            type="text"
            class="w-[92%]"
            :dir="direction"
            :id="`page-${index}-keyword-${keyword_index}`"
          >
            کلمه کلیدی
          </InputTextMarked>
        </div>
        <div class="w-full flex flex-row justify-end">
          <button
            @click="modelValue.pages[index].keywords.push('')"
            class="btn-secondary justify-center"
            :class="modelValue.pages[index].keywords.length > 0 ? 'w-[92%]' : 'w-full'"
            dir="rtl"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_7092_6452"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" />
              </mask>
              <g mask="url(#mask0_7092_6452)">
                <path
                  d="M12 18.75C11.7833 18.75 11.6043 18.6793 11.463 18.538C11.321 18.396 11.25 18.2167 11.25 18V12.75H6C5.78333 12.75 5.60433 12.679 5.463 12.537C5.321 12.3957 5.25 12.2167 5.25 12C5.25 11.7833 5.321 11.604 5.463 11.462C5.60433 11.3207 5.78333 11.25 6 11.25H11.25V6C11.25 5.78333 11.321 5.60433 11.463 5.463C11.6043 5.321 11.7833 5.25 12 5.25C12.2167 5.25 12.396 5.321 12.538 5.463C12.6793 5.60433 12.75 5.78333 12.75 6V11.25H18C18.2167 11.25 18.396 11.3207 18.538 11.462C18.6793 11.604 18.75 11.7833 18.75 12C18.75 12.2167 18.6793 12.3957 18.538 12.537C18.396 12.679 18.2167 12.75 18 12.75H12.75V18C12.75 18.2167 12.6793 18.396 12.538 18.538C12.396 18.6793 12.2167 18.75 12 18.75Z"
                />
              </g>
            </svg>
            افزودن کلمه کلیدی جدید
          </button>
        </div>
      </div>
    </div>

    <button
      @click="
        modelValue.pages.push({
          slug: '',
          is_money_page: false,
          lighthouse_tracker: false,
          keywords: [],
        })
      "
      class="btn-secondary"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_7092_6452"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" />
        </mask>
        <g mask="url(#mask0_7092_6452)">
          <path
            d="M12 18.75C11.7833 18.75 11.6043 18.6793 11.463 18.538C11.321 18.396 11.25 18.2167 11.25 18V12.75H6C5.78333 12.75 5.60433 12.679 5.463 12.537C5.321 12.3957 5.25 12.2167 5.25 12C5.25 11.7833 5.321 11.604 5.463 11.462C5.60433 11.3207 5.78333 11.25 6 11.25H11.25V6C11.25 5.78333 11.321 5.60433 11.463 5.463C11.6043 5.321 11.7833 5.25 12 5.25C12.2167 5.25 12.396 5.321 12.538 5.463C12.6793 5.60433 12.75 5.78333 12.75 6V11.25H18C18.2167 11.25 18.396 11.3207 18.538 11.462C18.6793 11.604 18.75 11.7833 18.75 12C18.75 12.2167 18.6793 12.3957 18.538 12.537C18.396 12.679 18.2167 12.75 18 12.75H12.75V18C12.75 18.2167 12.6793 18.396 12.538 18.538C12.396 18.6793 12.2167 18.75 12 18.75Z"
          />
        </g>
      </svg>
      افزودن صفحه
    </button>
  </div>
</template>
