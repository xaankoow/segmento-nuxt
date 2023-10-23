<script setup>
import Request from "~~/Api/Request";
import { defineProps, defineEmits } from "vue";
import Config from "~~/composables/Config";

const request = new Request("v1");
const cn = new Config();
const dir = cn.by_route("config/dir");
const props = defineProps({
  modelValue: {},
});
const step = ref(0);
const adding_status = ref(false);
const max_step = 3;
const data = ref({});
const emit = defineEmits(["update:modelValue", "reload"]);

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
    // competitors: [
    //   {
    //     keyword: null,
    //     url: null,
    //   },
    // ],
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
  let pages = [];
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

async function send_data_to_server() {
  let res = await request
    .post("workspaces/add", data.value)
    .then((res) => {
      // this code will add new data to previous one to the table when the argument 'update' be true and else, previous data will get overwriden.
      if (res.ok === true) {
        adding_status.value = true;
        emit("reload");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
const end_progress = () => {
  data.value.pages.push(...data.value.money_pages);
  data.value.pages.push(...data.value.lighthouse_pages);
  delete data.value.money_pages;
  delete data.value.lighthouse_pages;
  send_data_to_server();
  reset_popup();
};

reset_popup();
</script>

<template>
  <!-- loading -->
  <div
    v-if="request.pending.value"
    class="top-0 left-0 w-full h-screen fixed z-50 bg-base-350/40 flex justify-center items-center"
  >
    <ToolsLoading class="w-32 h-32" />
  </div>
  <Popup
    @update:modelValue="$emit('update:modelValue', false)"
    :modelValue="modelValue"
    :bubble_bursting="true"
  >
    <div class="shadow-lg">
      <!-- header starts -->
      <WidgetsAddSiteHeader @close="reset_popup()" />
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
                @click="end_progress()"
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
  <PopupMessage v-model="adding_status" title="سایتت اضافه شد!" v-if="true">
    <template v-slot:header>
      <div class="p-2">
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.1601 51.0438L20.5873 41.6474C19.5114 40.5913 17.7734 40.5913 16.6975 41.6474C15.6217 42.7035 15.6217 44.4094 16.6975 45.4655L28.229 56.7845C29.3049 57.8405 31.0429 57.8405 32.1187 56.7845L61.3059 28.1351C62.3818 27.079 62.3818 25.373 61.3059 24.317C60.23 23.2609 58.492 23.2609 57.4161 24.317L30.1601 51.0438Z"
            fill="white"
          />
          <circle cx="39" cy="39" r="37.5" stroke="white" stroke-width="3" />
        </svg>
      </div>
    </template>
    <template v-slot:main>
      <div class="p-2">حالا دیگه هوای سایتت رو داریم:)</div>
    </template>
    <template v-slot:footer>
      <div class="p-2 cursor-pointer" @click="adding_status = false">بزن بریم!</div>
    </template>
  </PopupMessage>
</template>
