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

        <!-- chrat section -->
        <div class="flex flex-col gap-2 rounded-sm border p-2 mt-10">
          <!-- header -->
          <div class="flex flex-row items-center justify-between">
            <!-- compaire week -->
            <Dropdown class="w-52" style="font-size: 0.75rem">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
                >
                  <span>نمودار میانگین کل کلمات کلیدی</span>
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

            <div class="flex flex-row gap-4 items-center">
              <button
                class="rounded-lg bg-base-250 w-10 h-10 flex flex-col items-center transition-all duration-200 hover:bg-base-350"
              >
                <svg
                  class="my-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_929_1095"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_929_1095)">
                    <path
                      d="M6 19.75C5.51667 19.75 5.10433 19.5793 4.763 19.238C4.421 18.896 4.25 18.4833 4.25 18V11C4.25 10.5167 4.421 10.104 4.763 9.762C5.10433 9.42067 5.51667 9.25 6 9.25C6.48333 9.25 6.896 9.42067 7.238 9.762C7.57933 10.104 7.75 10.5167 7.75 11V18C7.75 18.4833 7.57933 18.896 7.238 19.238C6.896 19.5793 6.48333 19.75 6 19.75ZM12 19.75C11.5167 19.75 11.104 19.5793 10.762 19.238C10.4207 18.896 10.25 18.4833 10.25 18V6C10.25 5.51667 10.4207 5.104 10.762 4.762C11.104 4.42067 11.5167 4.25 12 4.25C12.4833 4.25 12.896 4.42067 13.238 4.762C13.5793 5.104 13.75 5.51667 13.75 6V18C13.75 18.4833 13.5793 18.896 13.238 19.238C12.896 19.5793 12.4833 19.75 12 19.75ZM18 19.75C17.5167 19.75 17.1043 19.5793 16.763 19.238C16.421 18.896 16.25 18.4833 16.25 18V15C16.25 14.5167 16.421 14.104 16.763 13.762C17.1043 13.4207 17.5167 13.25 18 13.25C18.4833 13.25 18.896 13.4207 19.238 13.762C19.5793 14.104 19.75 14.5167 19.75 15V18C19.75 18.4833 19.5793 18.896 19.238 19.238C18.896 19.5793 18.4833 19.75 18 19.75Z"
                      fill="#488CDA"
                    />
                  </g>
                </svg>
              </button>
              <button
                class="rounded-lg bg-base-250 w-10 h-10 flex flex-col items-center transition-all duration-200 hover:bg-base-350"
              >
                <svg
                  class="my-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_929_1151"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_929_1151)">
                    <path
                      d="M3 17.5C2.51667 17.5 2.104 17.3293 1.762 16.988C1.42067 16.646 1.25 16.2333 1.25 15.75C1.25 15.2667 1.42067 14.854 1.762 14.512C2.104 14.1707 2.51667 14 3 14C3.11667 14 3.22067 14.004 3.312 14.012C3.404 14.0207 3.49167 14.05 3.575 14.1L8.35 9.325C8.3 9.24167 8.27067 9.154 8.262 9.062C8.254 8.97067 8.25 8.86667 8.25 8.75C8.25 8.26667 8.42067 7.854 8.762 7.512C9.104 7.17067 9.51667 7 10 7C10.4833 7 10.896 7.17067 11.238 7.512C11.5793 7.854 11.75 8.26667 11.75 8.75C11.75 8.81667 11.7167 9 11.65 9.3L14.45 12.1C14.5333 12.05 14.6167 12.0207 14.7 12.012C14.7833 12.004 14.8833 12 15 12C15.1167 12 15.2167 12.004 15.3 12.012C15.3833 12.0207 15.4667 12.05 15.55 12.1L19.35 8.3C19.3 8.21667 19.271 8.13333 19.263 8.05C19.2543 7.96667 19.25 7.86667 19.25 7.75C19.25 7.26667 19.421 6.854 19.763 6.512C20.1043 6.17067 20.5167 6 21 6C21.4833 6 21.896 6.17067 22.238 6.512C22.5793 6.854 22.75 7.26667 22.75 7.75C22.75 8.23333 22.5793 8.646 22.238 8.988C21.896 9.32933 21.4833 9.5 21 9.5C20.8833 9.5 20.7833 9.496 20.7 9.488C20.6167 9.47933 20.5333 9.45 20.45 9.4L16.65 13.2C16.7 13.2833 16.7293 13.3667 16.738 13.45C16.746 13.5333 16.75 13.6333 16.75 13.75C16.75 14.2333 16.5793 14.646 16.238 14.988C15.896 15.3293 15.4833 15.5 15 15.5C14.5167 15.5 14.104 15.3293 13.762 14.988C13.4207 14.646 13.25 14.2333 13.25 13.75C13.25 13.6333 13.254 13.5293 13.262 13.438C13.2707 13.346 13.3 13.2583 13.35 13.175L10.575 10.4C10.4917 10.45 10.404 10.4793 10.312 10.488C10.2207 10.496 10.1167 10.5 10 10.5C9.93333 10.5 9.75 10.4667 9.45 10.4L4.65 15.2C4.7 15.2833 4.72933 15.3667 4.738 15.45C4.746 15.5333 4.75 15.6333 4.75 15.75C4.75 16.2333 4.579 16.646 4.237 16.988C3.89567 17.3293 3.48333 17.5 3 17.5Z"
                      fill="#488CDA"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <!-- the chart -->
          <div>
            <VueApexCharts :series="series" :options="options"></VueApexCharts>
          </div>
        </div>
        <!-- report section -->
        <div class="flex flex-col gap-2 mt-2">
          <div class="flex flex-row items-center">
            {{ config.__(['pages', 'rank-tracker', 'overview', "reports"]) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
import VueApexCharts from "vue3-apexcharts";
import Config from "../../composables/Config"
const config = new Config()
const date = ref("1402/03/25");

const series = [
  {
    name: "Series 1",
    data: [1, 10, 7, 5, 12, 1, 10, 14],
  },
];
const options = {
  chart: {
    height: 130,
    type: "line",
    brush: {
      target: "chart2",
      enabled: false,
    },
    selection: {
      xaxis: {
        min: new Date("19 Jun 2017").getTime(),
        max: new Date("14 Aug 2017").getTime(),
      },
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 2,
    dashArray: 0,
  },
  grid: {
    show: true,
    borderColor: "#90A4AE",
    strokeDashArray: 1,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};
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