<template>
  <div class="flex flex-col w-full h-full">
    <!-- loading -->
    <div
      v-if="request.pending()"
      class="top-0 left-0 w-full h-screen fixed z-50 bg-base-350/40 flex justify-center items-center"
    >
      <ToolsLoading class="w-32 h-32" />
    </div>

    <!-- Tabs -->
    <div class="flex flex-row items-center gap-3 px-2 py-1 bg-base-200">
      <NuxtLink to="/">
        <TabItem
          :title="config.by_route(`${current_page}/search/title`)"
          :active="true"
        />
      </NuxtLink>
      <TabSeparator></TabSeparator>
      <!-- <NuxtLink to="/"> -->
      <TabItem :title="config.by_route(`${current_page}/my-lists`)" :active="false" />
      <!-- </NuxtLink> -->
    </div>

    <!-- page content -->
    <div class="flex flex-col gap-4 p-2 w-full pt-6"
    :class="data === null ? 'h-full' : 'h-fit'"
    >
      <!-- search box -->
      <form
        @submit.prevent="search_keywords_request()"
        class="flex flex-row items-center w-full gap-2"
      >
        <div class="flex flex-row items-center w-full justify-between gap-2 h-10">
          <div class="custom_input_box w-[65%] text-base-500">
            <input
              class="border border-base-400 rounded-md"
              v-model="form.keyword"
              type="text"
              @focus="search_class.focus()"
              @blur="search_class.leave()"
            />
            <label
              class="!text-base-400"
              :class="search_class.transitionStyle(form.keyword, 'text-base-400')"
              >{{ config.by_route(`${current_page}/place-holder`) }}</label
            >
          </div>

          <div class="flex flex-row items-center justify-center w-[30%]">
            <select
              class="w-full rounded-md border border-base-400 px-2 py-2"
              v-model="form.lang"
            >
              <option value="FA">فارسی</option>
              <option value="EN">انگلیسی</option>
              <option value="AR">عربی</option>
              <option value="DU">آلمانی</option>
              <option value="FR">فرانسوی</option>
              <option value="SP">اسپانیایی</option>
              <option value="IT">ایتالیایی</option>
              <option value="RU">روسی</option>
              <option value="TR">ترکی</option>
              <option value="PO">لهستانی</option>
            </select>
          </div>

          <button type="submit" class="btn-primary w-[5%] h-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0234 17.05L10.2484 11.3C9.74844 11.7167 9.17344 12.0417 8.52344 12.275C7.87344 12.5083 7.20677 12.625 6.52344 12.625C4.80677 12.625 3.35677 12.0333 2.17344 10.85C0.990104 9.66667 0.398438 8.21667 0.398438 6.5C0.398438 4.8 0.990104 3.354 2.17344 2.162C3.35677 0.970667 4.80677 0.375 6.52344 0.375C8.22344 0.375 9.6651 0.966667 10.8484 2.15C12.0318 3.33333 12.6234 4.78333 12.6234 6.5C12.6234 7.21667 12.5068 7.9 12.2734 8.55C12.0401 9.2 11.7234 9.76667 11.3234 10.25L17.0984 16.025C17.2318 16.1583 17.2984 16.325 17.2984 16.525C17.2984 16.725 17.2234 16.9 17.0734 17.05C16.9234 17.2 16.7444 17.275 16.5364 17.275C16.3278 17.275 16.1568 17.2 16.0234 17.05ZM6.52344 11.125C7.80677 11.125 8.89444 10.675 9.78644 9.775C10.6778 8.875 11.1234 7.78333 11.1234 6.5C11.1234 5.21667 10.6778 4.125 9.78644 3.225C8.89444 2.325 7.80677 1.875 6.52344 1.875C5.22344 1.875 4.12777 2.325 3.23644 3.225C2.34444 4.125 1.89844 5.21667 1.89844 6.5C1.89844 7.78333 2.34444 8.875 3.23644 9.775C4.12777 10.675 5.22344 11.125 6.52344 11.125Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </form>

      <!-- page content label -->
      <span v-if="data !== null">
        {{
          config
            .by_route(`${current_page}/search/sentence`)
            [Number(data !== null)].replace(
              "[count]",
              Object.values(data ?? []).reduce(
                (sum, innerArray) => sum + innerArray.length,
                0
              )
            )
        }}
      </span>

      <!-- page content -->
      <div
        class="flex flex-row justify-between w-full gap-4"
        :class="data === null ? 'h-full' : 'h-fit'"
      >
        <!-- form -->
        <div
          class="flex flex-col rounded-md border border-base-400"
          :class="data === null ? 'h-full w-full' : 'h-fit w-[65%]'"
        >
          <!-- header -->
          <div
            class="flex flex-row justify-between px-2 py-2"
            :class="`${data === null ? 'text-primary-disabled' : ''}`"
          >
            <div class="flex items-center">
              <span class="w-12 flex justify-center">
                {{ config.by_route(`${current_page}/table/select`) }}
              </span>
              <span class="w-12 flex justify-center">
                {{ config.by_route(`${current_page}/table/row`) }}
              </span>
              <span class="w-fit">
                {{ config.by_route(`${current_page}/table/result`) }}
              </span>
            </div>

            <!-- TODO: uncomment this section when copy all get ready to use. -->
            <!-- <button class="w-28 p-1 rounded-lg btn-secondary" disabled>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.27812 15.7998C5.76146 15.7998 5.32812 15.6248 4.97812 15.2748C4.62812 14.9248 4.45312 14.4998 4.45312 13.9998V2.6248C4.45312 2.10814 4.62812 1.6748 4.97812 1.3248C5.32812 0.974805 5.76146 0.799805 6.27812 0.799805H14.6281C15.1281 0.799805 15.5575 0.978805 15.9161 1.3368C16.2741 1.69547 16.4531 2.1248 16.4531 2.6248V13.9998C16.4531 14.4998 16.2741 14.9248 15.9161 15.2748C15.5575 15.6248 15.1281 15.7998 14.6281 15.7998H6.27812ZM6.27812 14.2998H14.6281C14.7281 14.2998 14.8075 14.2705 14.8661 14.2118C14.9241 14.1538 14.9531 14.0831 14.9531 13.9998V2.6248C14.9531 2.5248 14.9241 2.44547 14.8661 2.3868C14.8075 2.3288 14.7281 2.2998 14.6281 2.2998H6.27812C6.17812 2.2998 6.09913 2.3288 6.04113 2.3868C5.98246 2.44547 5.95312 2.5248 5.95312 2.6248V13.9998C5.95312 14.0831 5.98246 14.1538 6.04113 14.2118C6.09913 14.2705 6.17812 14.2998 6.27812 14.2998ZM2.75312 19.2998C2.25312 19.2998 1.82812 19.1248 1.47812 18.7748C1.12812 18.4248 0.953125 17.9998 0.953125 17.4998V5.5498C0.953125 5.3498 1.02379 5.17481 1.16513 5.02481C1.30713 4.8748 1.48646 4.7998 1.70312 4.7998C1.90312 4.7998 2.07812 4.8748 2.22812 5.02481C2.37812 5.17481 2.45312 5.3498 2.45312 5.5498V17.4998C2.45312 17.5831 2.48213 17.6538 2.54013 17.7118C2.59879 17.7705 2.66979 17.7998 2.75312 17.7998H11.7031C11.9031 17.7998 12.0781 17.8748 12.2281 18.0248C12.3781 18.1748 12.4531 18.3498 12.4531 18.5498C12.4531 18.7665 12.3781 18.9455 12.2281 19.0868C12.0781 19.2288 11.9031 19.2998 11.7031 19.2998H2.75312Z"
                  fill="#FFFFFF" />
              </svg>

              <span>{{
                config.by_route(`${current_page}/table/buttons/copy`)
              }}</span>
            </button> -->
          </div>

          <!-- when we haven't content this div will show -->
          <div
            class="flex flex-col items-center justify-center h-full gap-3"
            v-if="data === null"
          >
            <svg
              width="109"
              height="108"
              viewBox="0 0 109 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.2317 84.584C30.4566 84.584 31.5284 84.1512 32.4471 83.2856C33.3657 82.4159 33.8251 81.3176 33.8251 79.9906V49.3685C33.8251 48.0415 33.3657 46.9432 32.4471 46.0735C31.5284 45.208 30.4566 44.7752 29.2317 44.7752C27.9048 44.7752 26.8085 45.208 25.9429 46.0735C25.0732 46.9432 24.6384 48.0415 24.6384 49.3685V79.9906C24.6384 81.3176 25.0732 82.4159 25.9429 83.2856C26.8085 84.1512 27.9048 84.584 29.2317 84.584ZM52.9639 84.584C54.2909 84.584 55.3892 84.1512 56.2589 83.2856C57.1244 82.4159 57.5572 81.3176 57.5572 79.9906V30.9952C57.5572 29.6682 57.1244 28.572 56.2589 27.7064C55.3892 26.8367 54.2909 26.4019 52.9639 26.4019C51.6369 26.4019 50.5407 26.8367 49.6751 27.7064C48.8054 28.572 48.3706 29.6682 48.3706 30.9952V79.9906C48.3706 81.3176 48.8054 82.4159 49.6751 83.2856C50.5407 84.1512 51.6369 84.584 52.9639 84.584ZM76.6961 84.584C78.023 84.584 79.1213 84.1512 79.991 83.2856C80.8566 82.4159 81.2894 81.3176 81.2894 79.9906V67.7418C81.2894 66.4148 80.8566 65.3165 79.991 64.4468C79.1213 63.5812 78.023 63.1485 76.6961 63.1485C75.4712 63.1485 74.3994 63.5812 73.4808 64.4468C72.5621 65.3165 72.1028 66.4148 72.1028 67.7418V79.9906C72.1028 81.3176 72.5621 82.4159 73.4808 83.2856C74.3994 84.1512 75.4712 84.584 76.6961 84.584ZM11.9302 107.551C8.86801 107.551 6.26513 106.479 4.12158 104.335C1.97803 102.192 0.90625 99.5888 0.90625 96.5266V14.4592C0.90625 11.397 1.97803 8.79414 4.12158 6.65059C6.26513 4.50704 8.86801 3.43526 11.9302 3.43526H63.3754C64.7024 3.43526 65.8007 3.86805 66.6704 4.73364C67.536 5.60331 67.9688 6.70162 67.9688 8.02858C67.9688 9.35554 67.536 10.4518 66.6704 11.3174C65.8007 12.1871 64.7024 12.6219 63.3754 12.6219H11.9302C11.4199 12.6219 10.9871 12.8016 10.6318 13.1609C10.2725 13.5161 10.0929 13.9489 10.0929 14.4592V96.5266C10.0929 97.037 10.2725 97.4718 10.6318 97.8311C10.9871 98.1863 11.4199 98.3639 11.9302 98.3639H93.9976C94.508 98.3639 94.9428 98.1863 95.3021 97.8311C95.6573 97.4718 95.8349 97.037 95.8349 96.5266V45.0814C95.8349 43.7544 96.2677 42.6561 97.1333 41.7864C98.003 40.9209 99.1013 40.4881 100.428 40.4881C101.755 40.4881 102.854 40.9209 103.723 41.7864C104.589 42.6561 105.022 43.7544 105.022 45.0814V96.5266C105.022 99.5888 103.95 102.192 101.806 104.335C99.6627 106.479 97.0598 107.551 93.9976 107.551H11.9302ZM91.2416 34.0574C89.9146 34.0574 88.8163 33.6226 87.9466 32.7529C87.0811 31.8873 86.6483 30.791 86.6483 29.4641V21.8086H78.9927C77.6658 21.8086 76.5695 21.3737 75.7039 20.504C74.8343 19.6385 74.3994 18.5422 74.3994 17.2152C74.3994 15.8883 74.8343 14.792 75.7039 13.9264C76.5695 13.0567 77.6658 12.6219 78.9927 12.6219H86.6483V4.96637C86.6483 3.63941 87.0811 2.54109 87.9466 1.67143C88.8163 0.805839 89.9146 0.373047 91.2416 0.373047C92.5686 0.373047 93.6669 0.805839 94.5365 1.67143C95.4021 2.54109 95.8349 3.63941 95.8349 4.96637V12.6219H103.49C104.817 12.6219 105.916 13.0567 106.785 13.9264C107.651 14.792 108.084 15.8883 108.084 17.2152C108.084 18.5422 107.651 19.6385 106.785 20.504C105.916 21.3737 104.817 21.8086 103.49 21.8086H95.8349V29.4641C95.8349 30.791 95.4021 31.8873 94.5365 32.7529C93.6669 33.6226 92.5686 34.0574 91.2416 34.0574Z"
                fill="#D9D9D9"
              />
            </svg>
            <span class="text-base-350">
              {{ config.by_route(`${current_page}/table/empty`) }}
            </span>
          </div>

          <!-- when have content this div will show -->
          <div class="flex flex-col pl-2" v-else>
            <!-- this must be component -->
            <div
              v-for="(item, index) in data"
              :key="index"
              :class="item.length <= 0 ? 'hidden' : ''"
              class="flex flex-col px-2 text-sm"
            >
              <!-- header -->
              <div class="flex flex-row w-full items-center py-2 pr-2">
                <span class="flex justify-center">
                  <span
                    class="w-8 bg-gray-200 text-base-content rounded-md flex justify-center"
                  >
                    {{ index }}
                  </span>
                </span>
                <hr class="w-full border-gray-200" />
              </div>

              <!-- table content -->
              <div class="flex flex-col">
                <!-- row -->
                <div
                  v-for="(letter, index) in item"
                  :key="index"
                  class="flex flex-row items-center py-2"
                  :class="
                    Number(index) + 1 !== item.length ? 'border-b border-gray-100' : ''
                  "
                >
                  <span class="w-12 h-fit flex justify-center items-center">
                    <label class="flex justify-center items-center">
                      <input type="checkbox" class="w-5 h-5" />
                    </label>
                  </span>
                  <span class="w-12 flex justify-center items-center">
                    {{ Number(index) + 1 }}
                  </span>
                  <span class="w-fit flex justify-center items-center pr-3.5">
                    {{ letter }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- options -->
        <div class="flex justify-center w-[35%] h-[200vh]" v-if="data !== null">
          <div class="flex flex-col gap-4 items-center w-full">
            <!-- drop down disabled -->
            <!-- <div class="flex flex-row items-center w-full bg-base-400 text-base-500 justify-between rounded-md">
              <span class="w-10/12 px-3 py-2">{{
                config.by_route(`${current_page}/search/word`)
              }}</span>
              <span class="w-2/12 border-r border-r-base-500 flex flex-row items-center justify-center h-full">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.075 9.29961L9.375 0.974609C9.45833 0.891276 9.55433 0.828943 9.663 0.78761C9.771 0.74561 9.88333 0.724609 10 0.724609C10.1167 0.724609 10.2293 0.74561 10.338 0.78761C10.446 0.828943 10.5417 0.891276 10.625 0.974609L18.95 9.29961C19.15 9.49961 19.25 9.73294 19.25 9.99961C19.25 10.2663 19.1417 10.5079 18.925 10.7246C18.7417 10.9246 18.5127 11.0246 18.238 11.0246C17.9627 11.0246 17.725 10.9246 17.525 10.7246L10 3.17461L2.45 10.7246C2.26667 10.9079 2.04167 10.9996 1.775 10.9996C1.50833 10.9996 1.275 10.8996 1.075 10.6996C0.875 10.4996 0.775 10.2663 0.775 9.99961C0.775 9.73294 0.875 9.49961 1.075 9.29961Z"
                    fill="#7D7D7D" />
                </svg>
              </span>
            </div> -->

            <div class="flex flex-row justify-center items-center w-full">
              {{ config.by_route(`${current_page}/search/alphabet`) }}
            </div>

            <!-- word list -->
            <div class="sticky top-20 left-10 rounded-sm grid grid-cols-8 w-full gap-2">
              <button
                class="alphabet btn-secondary bg-[#F2F5F770] text-base-content"
                v-for="(data, index) in cache"
                :class="data.length <= 0 ? 'hidden' : ''"
                :key="index"
                :id="`alpha-${index}`"
                @click="update_list_by_alphabet(index, `alpha-${index}`)"
              >
                {{ index }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Request from "../../Api/Request";
import Config from "../../composables/Config";
import Auth from "../../middlewares/Auth";

import { CustomTextBox } from "../../composables/CustomTextBox";

const current_page = "pages/keyword-research";
const config = new Config();
const search_class = new CustomTextBox();
const data = ref(null);
const cache = ref(null);
const old_alphabet_id = ref(null);
const request = new Request();
const form = ref({
  keyword: "",
  lang: "FA",
});

definePageMeta({
  middleware: [Auth],
});
onBeforeMount(() => {
  let token = useCookie("token").value;
  if (token === null || token === "" || token === undefined) {
    return navigateTo("/auth/login");
  }
});

function toggle_active_alphabet(id) {
  if (old_alphabet_id.value !== null) {
    let old_alphabet = document.getElementById(old_alphabet_id.value);
    old_alphabet.classList.toggle("active");
  }
  let current_alphabet = document.getElementById(id);
  current_alphabet.classList.toggle("active");
  old_alphabet_id.value = id;
}

function update_list_by_alphabet(item, id) {
  if (id === old_alphabet_id.value) {
    let old_alphabet = document.getElementById(old_alphabet_id.value);
    old_alphabet.classList.toggle("active");
    data.value = cache.value;
    old_alphabet_id.value = null;
  } else {
    // TODO : Fix this ugly section later :))
    let cacheToArray = Object.entries(cache.value);
    let custom_array = cacheToArray.filter((itm) => {
      return itm[0] === item;
    });
    if (custom_array !== null && custom_array.length > 0) {
      custom_array = custom_array.map((item) => {
        return Object.values(item[1]) ?? [];
      });
    } else {
      custom_array = [[]];
    }

    data.value = {
      [item]: custom_array[0],
    };
    toggle_active_alphabet(id);
  }
}

async function search_keywords_request() {
  let res = await request.get("keyword-research/generate", form.value, "v2");

  data.value = res.data();
  cache.value = data.value;
}
</script>
