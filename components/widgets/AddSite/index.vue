<script setup>
import { defineProps, defineEmits } from "vue";
import Config from "~~/composables/Config";

const cn = new Config();
const dir = cn.by_route("config/dir");
const props = defineProps({
  modelValue: {},
});
const step = ref(0);
const max_step = 3;
const data = ref({});
const emit = defineEmits(["update:modelValue"]);

const reset_popup = () => {
  emit("update:modelValue", false);
  step.value = 0;
  data.value = {
    website: "",
    pages: [
      {
        slug: "",
        is_money_page: false,
        lighthouse_tracker: false,
        keywords: [],
      },
    ],
    competitors: [
      {
        keyword: null,
        url: null,
      },
    ],
    money_pages: [],
    lighthouse_pages: [],
  };
};

const domain_validation = () => {
  let website = data.value.website.replace(/(www\.|https?:\/\/)/g, "");
  website = website.replace(/^\/|\/$/g, "");
  website = website.trim();
  website = website.split("/")[0];
  data.value.website = website.toLowerCase();

  let domainRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-z]{2,}$/;
  return domainRegex.test(data.value.website);
};

const pages_validation = () => {
  let pages;
  switch (step.value) {
    case 0:
      pages = [data.value.pages[0]];
      break;
    case 1:
      pages = data.value.pages.slice(1);
      break;
    case 2:
      pages = data.value.money_pages;
      break;
    case 3:
      pages = data.value.lighthouse_pages;
      break;
    default:
      return true;
  }
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].slug === "" && step.value != 0) {
      return false;
    } else {
      for (let j = 0; j < pages[i].keywords.length; j++) {
        if (pages[i].keywords[j] === "") {
          return false;
        }
      }
      if (String(pages[i].slug).startsWith(data.value.website)) {
        pages[i].slug = pages[i].slug.replace(data.value.website, "");
      }
      if (String(pages[i].slug).startsWith("/")) {
        pages[i].slug = pages[i].slug.replace("/", "");
      }
    }
  }
  return true;
};

reset_popup();
</script>

<template>
  <Popup
    @update:modelValue="$emit('update:modelValue', false)"
    :modelValue="modelValue"
    :bubble_bursting="true"
  >
    <div class="shadow-lg">
      <!-- header starts -->
      <div class="flex flex-row items-center w-full p-2 gap-2">
        <div class="flex flex-row items-center justify-start w-full gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14.75C10.2167 14.75 10.396 14.6793 10.538 14.538C10.6793 14.396 10.75 14.2167 10.75 14V10.75H14.025C14.225 10.75 14.396 10.679 14.538 10.537C14.6793 10.3957 14.75 10.2167 14.75 10C14.75 9.78333 14.6793 9.604 14.538 9.462C14.396 9.32067 14.2167 9.25 14 9.25H10.75V5.975C10.75 5.775 10.6793 5.60433 10.538 5.463C10.396 5.321 10.2167 5.25 10 5.25C9.78333 5.25 9.60433 5.321 9.463 5.463C9.321 5.60433 9.25 5.78333 9.25 6V9.25H5.975C5.775 9.25 5.60433 9.32067 5.463 9.462C5.321 9.604 5.25 9.78333 5.25 10C5.25 10.2167 5.321 10.3957 5.463 10.537C5.60433 10.679 5.78333 10.75 6 10.75H9.25V14.025C9.25 14.225 9.321 14.396 9.463 14.538C9.60433 14.6793 9.78333 14.75 10 14.75ZM10 19.5C8.68333 19.5 7.446 19.25 6.288 18.75C5.12933 18.25 4.125 17.575 3.275 16.725C2.425 15.875 1.75 14.8707 1.25 13.712C0.75 12.554 0.5 11.3167 0.5 10C0.5 8.68333 0.75 7.44567 1.25 6.287C1.75 5.129 2.425 4.125 3.275 3.275C4.125 2.425 5.12933 1.75 6.288 1.25C7.446 0.75 8.68333 0.5 10 0.5C11.3167 0.5 12.5543 0.75 13.713 1.25C14.871 1.75 15.875 2.425 16.725 3.275C17.575 4.125 18.25 5.129 18.75 6.287C19.25 7.44567 19.5 8.68333 19.5 10C19.5 11.3167 19.25 12.554 18.75 13.712C18.25 14.8707 17.575 15.875 16.725 16.725C15.875 17.575 14.871 18.25 13.713 18.75C12.5543 19.25 11.3167 19.5 10 19.5ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"
              fill="#002145"
            />
          </svg>
          <div>تعریف سایت جدید</div>
        </div>
        <div class="flex flex-row items-center justify-end w-full gap-2">
          <svg
            @click="reset_popup()"
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
        </div>
      </div>
      <!-- header done -->
      <!-- body starts -->
      <div
        class="min-h-[80vh] h-[60vh] flex flex-col justify-between items-center w-[60vw]"
      >
        <!-- content starts -->
        <div class="w-full h-[88%]">
          <WidgetsAddSiteFirst v-if="step == 0" v-model="data" :direction="dir" />
          <WidgetsAddSiteKeywords v-if="step == 1" v-model="data" :direction="dir" />
          <WidgetsAddSiteMoneyPages v-if="step == 2" v-model="data" :direction="dir" />
          <WidgetsAddSiteLighthousePages
            v-if="step == 3"
            v-model="data"
            :direction="dir"
          />
        </div>
        <!-- content done -->
        <div class="h-[12%] w-full flex flex-col items-center">
          <hr class="w-[96%] border-px border-base-400 h-px" />
          <div
            class="w-full grid grid-cols-3 items-center px-4 py-1 h-full"
            :class="step > 0 ? 'justify-between' : 'justify-end'"
          >
            <div class="flex flex-row justify-start">
              <button
                class="btn-secondary"
                v-if="step > 0"
                @click="step--"
                :disabled="data.website == ''"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_5618_19570"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect
                      x="24"
                      y="24"
                      width="24"
                      height="24"
                      transform="rotate(-180 24 24)"
                    />
                  </mask>
                  <g mask="url(#mask0_5618_19570)">
                    <path
                      d="M12.9 4.89987L19.35 11.3749C19.45 11.4582 19.5207 11.5542 19.562 11.6629C19.604 11.7709 19.625 11.8832 19.625 11.9999C19.625 12.1165 19.604 12.2292 19.562 12.3379C19.5207 12.4459 19.45 12.5415 19.35 12.6249L12.9 19.0999C12.75 19.2332 12.575 19.3042 12.375 19.3129C12.175 19.3209 12 19.2499 11.85 19.0999C11.7 18.9499 11.621 18.7749 11.613 18.5749C11.6043 18.3749 11.675 18.1915 11.825 18.0249L17.125 12.7499L5.5 12.7499C5.3 12.7499 5.125 12.6792 4.975 12.5379C4.825 12.3959 4.75 12.2165 4.75 11.9999C4.75 11.7832 4.825 11.6042 4.975 11.4629C5.125 11.3209 5.3 11.2499 5.5 11.2499L17.125 11.2499L11.825 5.94987C11.6917 5.81654 11.621 5.64587 11.613 5.43787C11.6043 5.2292 11.675 5.04987 11.825 4.89987C11.975 4.74987 12.154 4.67487 12.362 4.67487C12.5707 4.67487 12.75 4.74987 12.9 4.89987Z"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div class="flex flex-row justify-center">
              <button
                @click="console.log(data)"
                class="btn-secondary"
                :disabled="
                  data.website == '' || !domain_validation() || !pages_validation()
                "
              >
                پایان
              </button>
            </div>
            <div class="flex flex-row justify-end">
              <button
                v-if="step < max_step"
                @click="step++"
                class="btn-primary"
                :disabled="
                  data.website == '' || !domain_validation() || !pages_validation()
                "
              >
                ادامه
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_7092_675"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" />
                  </mask>
                  <g mask="url(#mask0_7092_675)">
                    <path
                      d="M11.1 19.1001L4.65 12.6251C4.55 12.5418 4.47933 12.4458 4.438 12.3371C4.396 12.2291 4.375 12.1168 4.375 12.0001C4.375 11.8835 4.396 11.7708 4.438 11.6621C4.47933 11.5541 4.55 11.4585 4.65 11.3751L11.1 4.90013C11.25 4.7668 11.425 4.6958 11.625 4.68713C11.825 4.67913 12 4.75013 12.15 4.90013C12.3 5.05013 12.379 5.22513 12.387 5.42513C12.3957 5.62513 12.325 5.80846 12.175 5.97513L6.875 11.2501H18.5C18.7 11.2501 18.875 11.3208 19.025 11.4621C19.175 11.6041 19.25 11.7835 19.25 12.0001C19.25 12.2168 19.175 12.3958 19.025 12.5371C18.875 12.6791 18.7 12.7501 18.5 12.7501H6.875L12.175 18.0501C12.3083 18.1835 12.379 18.3541 12.387 18.5621C12.3957 18.7708 12.325 18.9501 12.175 19.1001C12.025 19.2501 11.846 19.3251 11.638 19.3251C11.4293 19.3251 11.25 19.2501 11.1 19.1001Z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- body done -->
    </div>
  </Popup>
</template>
