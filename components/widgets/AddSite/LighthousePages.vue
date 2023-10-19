<script setup>
const props = defineProps({
  modelValue: {},
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-1/2 items-center flex flex-row">
      <div class="w-1/2 h-full flex flex-col px-4 py-8 gap-8">
        <h2 class="border-r-2 pr-2 border-r-primary">رهگیری سرعت صفحات وب‌سایت</h2>
        <p class="pr-3">
          با درج آدرس‌ صفحات وب‌سایت در کادر زیر، گزارش‌ رهگیری سرعت این صفحات، را در
          پیشخان دریافت می‌کنید.
        </p>
      </div>
      <div class="w-px bg-base-400 h-[90%]"></div>
      <div class="w-1/2 h-full flex flex-col items-center justify-center px-4 py-8">
        <img src="/images/LighthousePagesStep.png" class="h-[150px]" alt="site png" />
      </div>
    </div>
    <div class="w-full h-1/2 flex flex-row justify-center items-center p-4 gap-4">
      <div class="gap-1 flex w-1/2 flex-col border h-full overflow-hidden" dir="ltr">
        <div class="flex flex-row justify-center items-center h-1/6 bg-base-200 text-sm">
          انتخاب صفحات برای رهگیری سرعت
        </div>
        <div class="w-full flex flex-col overflow-y-auto bg-white h-5/6">
          <div
            v-for="(page, index) in modelValue.pages"
            :key="index"
            class="w-full flex flex-row"
            dir="ltr"
          >
            <InputCheckbox
              v-model="modelValue.pages[index].lighthouse_tracker"
              :id="`default${index}`"
              dir="ltr"
            >
              <span
                class="text-base-content"
                v-html="
                  modelValue.pages[index].slug == ''
                    ? `${modelValue.website}`
                    : `<span class='text-base-400'>${modelValue.website}/</span>${modelValue.pages[index].slug}`
                "
              ></span>
            </InputCheckbox>
          </div>
          <div
            v-for="(page, money_page_index) in modelValue.money_pages"
            :key="money_page_index"
            class="w-full flex flex-row"
            dir="ltr"
          >
            <InputCheckbox
              v-model="modelValue.money_pages[money_page_index].lighthouse_tracker"
              :id="`money${money_page_index}`"
              dir="ltr"
            >
              <span
                class="text-base-content"
                v-html="
                  modelValue.money_pages[money_page_index].slug == ''
                    ? `${modelValue.website}`
                    : `<span class='text-base-400'>${modelValue.website}/</span>${modelValue.money_pages[money_page_index].slug}`
                "
              ></span>
            </InputCheckbox>
          </div>
        </div>
      </div>
      <div class="gap-1 flex w-1/2 flex-col border h-full overflow-hidden" dir="ltr">
        <div class="flex flex-row justify-center items-center h-1/6 bg-base-200 text-sm">
          افزودن صفحات برای رهگیری سرعت
        </div>
        <div class="w-full flex flex-col overflow-y-auto bg-white gap-2 h-5/6">
          <div
            class="gap-1 flex flex-row w-full"
            v-for="(page, lighthouse_page_index) in modelValue.lighthouse_pages"
            :key="lighthouse_page_index"
          >
            <div class="w-full flex flex-col gap-2 px-2" dir="ltr">
              <div
                class="flex flex-row gap-2 items-center justify-between w-full"
                dir="ltr"
              >
                <svg
                  @click="modelValue.lighthouse_pages.splice(lighthouse_page_index, 1)"
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
                <InputText
                  v-model="modelValue.lighthouse_pages[lighthouse_page_index].slug"
                  placeholder="blog/door-opening"
                  type="text"
                  class="!w-[92%]"
                  dir="ltr"
                />
              </div>
            </div>
          </div>
          <div class="w-full flex flex-row justify-end px-2">
            <button
              @click="
                modelValue.lighthouse_pages.push({
                  slug: '',
                  is_money_page: false,
                  lighthouse_tracker: true,
                  keywords: [],
                })
              "
              class="btn-secondary justify-center"
              :class="modelValue.lighthouse_pages.length > 0 ? 'w-[92%]' : 'w-full'"
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
              افزودن صفحه تجاری جدید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
