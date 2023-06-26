<template>
  <div class="flex flex-col gap-2 w-full flex-grow">
    <!-- title and tabs and update -->
    <div class="flex flex-row justify-between items-center">
      <!-- title and tabs -->
      <div class="flex flex-col">
        <!-- title -->
        <div class="flex items-center h-11 w-full">
          <span>
            <svg
              width="2"
              height="20"
              viewBox="0 0 2 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2" height="20" rx="1" fill="#002145" />
            </svg>
          </span>
          <span class="mx-5">
            {{ content.title }}
          </span>
        </div>
        <!-- Tabs -->
        <Tab class="px-3">
          <TabItem
            v-for="tab in content.tabs"
            :key="tab.title"
            :title="tab.title"
            :active="tab.active"
          />
        </Tab>
      </div>
      <!-- update title -->
      <div class="flex flex-col gap-2 px-3 items-center text-base-500">
        <span>آخرین بروزرسانی: 1401/03/25</span>
        <span>دوره بروزرسانی: هر 48 ساعت</span>
      </div>
    </div>
    <!-- page content -->
    <div class="flex flex-col gap-2">
      <!-- Top charts -->
      <div class="flex flex-row gap-2 w-full p-5">
        <CardHelp
          tooltip="hello I am tooltip"
          title="I am title"
          :active="true"
        />
        <CardHelp
          tooltip="hello I am tooltip"
          title="I am title"
          :active="true"
        />
        <CardHelp
          tooltip="hello I am tooltip"
          title="I am title"
          :active="true"
        />
        <CardHelp
          tooltip="hello I am tooltip"
          title="I am title"
          :active="true"
        />
      </div>

      <hr class="border-base-350 mx-4" />
      <!-- filters -->
      <div class="flex flex-col gap-2 mx-4 py-2">
        <!-- fiters -->
        <div class="flex flex-row gap-5 items-center">
          <!-- title -->
          <div class="flex flex-row gap-3 items-center w-2/12">
            <button
              class="rounded-lg bg-base-250 w-10 h-10 flex flex-col items-center transition-all duration-200 hover:bg-base-350"
            >
              <svg
                class="my-auto"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.49993 8.825V14.625C9.49993 14.875 9.4166 15.0833 9.24993 15.25C9.08327 15.4167 8.87493 15.5 8.62493 15.5H7.37493C7.12493 15.5 6.9166 15.4167 6.74993 15.25C6.58327 15.0833 6.49993 14.875 6.49993 14.625V8.825L0.899933 1.725C0.7166 1.45833 0.6916 1.18733 0.824933 0.912C0.958266 0.637334 1.18327 0.5 1.49993 0.5H14.4999C14.8166 0.5 15.0416 0.637334 15.1749 0.912C15.3083 1.18733 15.2833 1.45833 15.0999 1.725L9.49993 8.825ZM7.99993 8.3L12.9499 2H3.04993L7.99993 8.3Z"
                  fill="#002145"
                />
              </svg>
            </button>
            <span> فیلتر بر اساس </span>
          </div>
          <!-- content -->
          <div
            class="flex flex-row items-center text-base-500 gap-2 w-10/12 justify-between"
          >
            <!-- filter hour -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>48 ساعت</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-1"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>1 ساعت</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-2"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>2 ساعت</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-3"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>4 ساعت</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-4"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>8 ساعت</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>

            <!-- rank -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>تمام رتبه ها</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-1"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>1 رتبه</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-2"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>2 رتبه</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-3"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>4 رتبه</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-4"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>8 رتبه</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>

            <!-- desktop -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>دسکتاپ</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-1"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>1 موبایل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-2"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>2 موبایل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-3"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>4 موبایل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-4"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>8 موبایل</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>

            <!-- time picker -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>{{ date }}</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <Vue3PersianDatetimePicker
                  v-model="date"
                  format="jYYYY jMMMM jDD"
                  initial-value="1402/03/25"
                  simple
                  popover
                />
              </template>
            </Dropdown>
          </div>
        </div>

        <!-- compaire -->
        <div class="flex flex-row gap-5 items-center">
          <!-- title -->
          <div class="flex flex-row gap-3 items-center w-2/12">
            <button
              class="rounded-lg bg-base-250 w-10 h-10 flex flex-col items-center transition-all duration-200 hover:bg-base-350"
            >
              <svg
                class="my-auto"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 21.625C8.03333 21.625 7.85433 21.55 7.713 21.4C7.571 21.25 7.5 21.075 7.5 20.875V19.5H2.3C1.8 19.5 1.375 19.325 1.025 18.975C0.675 18.625 0.5 18.2 0.5 17.7V4.3C0.5 3.8 0.675 3.375 1.025 3.025C1.375 2.675 1.8 2.5 2.3 2.5H7.5V1.125C7.5 0.925 7.571 0.75 7.713 0.6C7.85433 0.45 8.03333 0.375 8.25 0.375C8.46667 0.375 8.646 0.45 8.788 0.6C8.92933 0.75 9 0.925 9 1.125V20.875C9 21.075 8.92933 21.25 8.788 21.4C8.646 21.55 8.46667 21.625 8.25 21.625ZM2 17H7.5V10.4L2 17ZM11 19.5V11L16 17V4.3C16 4.23333 15.9667 4.16667 15.9 4.1C15.8333 4.03333 15.7667 4 15.7 4H11V2.5H15.7C16.2 2.5 16.625 2.675 16.975 3.025C17.325 3.375 17.5 3.8 17.5 4.3V17.7C17.5 18.2 17.325 18.625 16.975 18.975C16.625 19.325 16.2 19.5 15.7 19.5H11Z"
                  fill="#002145"
                />
              </svg>
            </button>
            <span> مقایسه بر اساس </span>
          </div>
          <!-- content -->
          <div
            class="flex flex-row items-center text-base-500 gap-2 w-10/12 justify-between"
          >
            <!-- compaire week -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>4 هفته قبل</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-1"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>1 هفته قبل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-2"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>2 هفته قبل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-3"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>4 هفته قبل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-4"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>8 هفته قبل</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>

            <!-- workspace -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>سایت 1</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-1"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>1 سایت</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-2"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>2 سایت</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-3"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>4 سایت</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-4"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>8 سایت</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>

            <!-- desktop -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>دسکتاپ</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-1"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>1 موبایل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-2"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>2 موبایل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-3"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>4 موبایل</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-4"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>8 موبایل</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>

            <!-- competitors -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>رقیب شماره 1</span>
                  <span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-1"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>1 رقیب</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-2"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>2 رقیب</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-3"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>4 رقیب</span>
                    </li>
                    <li
                      class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="id-4"
                        class="accent-primary w-4 h-4 cursor-pointer"
                      />
                      <span>8 رقیب</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PolylineChart } from "../../composables/Component/PolylineChart";
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";

const date = ref("1402/03/25");
const points = new PolylineChart(
  ["10,25", "15,25", "20,15", "30,25", "40,35"],
  50,
  35
);

const content = ref({
  title: "ابزار رتبه سنج (رنک ترکینگ)",
  tabs: [
    {
      title: "نمای کلی",
      active: true,
    },
    {
      title: "کلمات کلیدی",
      active: false,
    },
    {
      title: "رقبا",
      active: false,
    },
  ],
});
</script>