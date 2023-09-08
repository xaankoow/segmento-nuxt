<template>
  <!-- Tabs -->
  <div class="flex flex-row items-center gap-3 px-2 h-[7%] bg-base-200">
    <TabItem to="/rank-tracker/overview" :active="false">
      {{ tabs[0] }}
    </TabItem>
    <TabSeparator></TabSeparator>
    <TabItem to="/rank-tracker/keyword" :active="false">
      {{ tabs[1] }}
    </TabItem>
    <TabSeparator></TabSeparator>
    <TabItem to="/rank-tracker/competitors" :active="true">
      {{ tabs[2] }}
    </TabItem>
  </div>
  <div class="flex flex-col gap-2 w-full flex-grow">
    <!-- update -->
    <div class="flex flex-row justify-between items-center">
      <!-- update title -->
      <div class="flex flex-col gap-2 px-3 items-center text-base-500">
        <span class="flex flex-row items-center gap-2">
          <label
            >{{ config.__("pages/rank-tracker/header/update/latest".split("/")) }}:</label
          >
          <span>1402/03/25</span>
        </span>
        <span class="flex flex-row items-center gap-2">
          <label
            >{{
              config.__("pages/rank-tracker/header/update/period/title".split("/"))
            }}:</label
          >
          <span>{{
            config.__("pages/rank-tracker/header/update/period/default".split("/"))
          }}</span>
        </span>
      </div>
    </div>

    <!-- page content -->
    <div class="flex flex-col gap-2 mx-3">
      <!-- add competitor button -->
      <div class="flex flex-row justify-end">
        <button class="btn btn-primary px-4">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1007_567"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1007_567)">
                <path
                  d="M12 18.75C11.7833 18.75 11.6043 18.6793 11.463 18.538C11.321 18.396 11.25 18.2167 11.25 18V12.75H6C5.78333 12.75 5.60433 12.679 5.463 12.537C5.321 12.3957 5.25 12.2167 5.25 12C5.25 11.7833 5.321 11.604 5.463 11.462C5.60433 11.3207 5.78333 11.25 6 11.25H11.25V6C11.25 5.78333 11.321 5.60433 11.463 5.463C11.6043 5.321 11.7833 5.25 12 5.25C12.2167 5.25 12.396 5.321 12.538 5.463C12.6793 5.60433 12.75 5.78333 12.75 6V11.25H18C18.2167 11.25 18.396 11.3207 18.538 11.462C18.6793 11.604 18.75 11.7833 18.75 12C18.75 12.2167 18.6793 12.3957 18.538 12.537C18.396 12.679 18.2167 12.75 18 12.75H12.75V18C12.75 18.2167 12.6793 18.396 12.538 18.538C12.396 18.6793 12.2167 18.75 12 18.75Z"
                  fill="white"
                />
              </g>
            </svg>
          </span>
          <span>
            {{ config.by_route(`${current_page}/header/button`) }}
          </span>
        </button>
      </div>

      <!-- the table -->
      <div class="flex flex-col gap-2">
        <!-- title -->
        <span class="mr-12">{{
          config
            .by_route(`${current_page}/header/competitor_counter`)
            .replace("[number]", competitor_count)
        }}</span>

        <!-- table -->
        <div class="flex flex-row items-center gap-4">
          <span>
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
          </span>

          <table class="table table-xs border rounded-md">
            <tbody class="[&>tr>td]:text-right [&>tr>td]:border [&>tr]:border-none">
              <tr>
                <td>Domain.com</td>
                <td>Keyword</td>
                <td>
                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      {{ config.by_route(`${current_page}/table/site_domain_title`) }}
                    </td>
                    <td>Domain.com</td>
                  </tr>
                  <tr>
                    <td>
                      {{ config.by_route(`${current_page}/table/cells/current_rank`) }}
                    </td>
                    <td>5</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>
                      {{ config.by_route(`${current_page}/table/cells/change_rate`) }}
                    </td>
                    <td>
                      {{ config.by_route(`${current_page}/rank`).replace("[rank]", 2) }}
                    </td>
                    <td>
                      {{ config.by_route(`${current_page}/rank`).replace("[rank]", 4) }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {{ config.by_route(`${current_page}/table/cells/average`) }}
                    </td>
                    <td>
                      {{ config.by_route(`${current_page}/rank`).replace("[rank]", 2) }}
                    </td>
                    <td>
                      {{ config.by_route(`${current_page}/rank`).replace("[rank]", 4) }}
                    </td>
                  </tr>
                </td>
                <td class="flex justify-end">
                  <ChartLine :series="series" />
                </td>
                <td>
                  <div class="flex flex-col items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_690_3227"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_690_3227)">
                        <path
                          d="M6.775 19.7C6.475 19.8333 6.18733 19.8123 5.912 19.637C5.63733 19.4623 5.5 19.2083 5.5 18.875V5.3C5.5 4.8 5.675 4.375 6.025 4.025C6.375 3.675 6.8 3.5 7.3 3.5H13V5H7.3C7.23333 5 7.16667 5.03333 7.1 5.1C7.03333 5.16667 7 5.23333 7 5.3V17.95L12 15.8L17 17.95V11H18.5V18.875C18.5 19.2083 18.3623 19.4623 18.087 19.637C17.8123 19.8123 17.525 19.8333 17.225 19.7L12 17.45L6.775 19.7ZM17.75 9C17.5333 9 17.354 8.929 17.212 8.787C17.0707 8.64567 17 8.46667 17 8.25V7H15.75C15.5333 7 15.3543 6.929 15.213 6.787C15.071 6.64567 15 6.46667 15 6.25C15 6.03333 15.071 5.85433 15.213 5.713C15.3543 5.571 15.5333 5.5 15.75 5.5H17V4.25C17 4.03333 17.0707 3.854 17.212 3.712C17.354 3.57067 17.5333 3.5 17.75 3.5C17.9667 3.5 18.146 3.57067 18.288 3.712C18.4293 3.854 18.5 4.03333 18.5 4.25V5.5H19.75C19.9667 5.5 20.146 5.571 20.288 5.713C20.4293 5.85433 20.5 6.03333 20.5 6.25C20.5 6.46667 20.4293 6.64567 20.288 6.787C20.146 6.929 19.9667 7 19.75 7H18.5V8.25C18.5 8.46667 18.4293 8.64567 18.288 8.787C18.146 8.929 17.9667 9 17.75 9Z"
                          fill="#002145"
                        />
                      </g>
                    </svg>
                  </div>
                  <div class="flex flex-col items-center mt-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_690_3228"
                        style="mask-type: alpha"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_690_3228)">
                        <path
                          d="M7.3 20.5C6.8 20.5 6.375 20.325 6.025 19.975C5.675 19.625 5.5 19.2 5.5 18.7V6H5.25C5.03333 6 4.85433 5.929 4.713 5.787C4.571 5.64567 4.5 5.46667 4.5 5.25C4.5 5.03333 4.571 4.85433 4.713 4.713C4.85433 4.571 5.03333 4.5 5.25 4.5H9C9 4.25 9.08733 4.04167 9.262 3.875C9.43733 3.70833 9.65 3.625 9.9 3.625H14.1C14.35 3.625 14.5627 3.70833 14.738 3.875C14.9127 4.04167 15 4.25 15 4.5H18.75C18.9667 4.5 19.146 4.571 19.288 4.713C19.4293 4.85433 19.5 5.03333 19.5 5.25C19.5 5.46667 19.4293 5.64567 19.288 5.787C19.146 5.929 18.9667 6 18.75 6H18.5V18.7C18.5 19.2 18.325 19.625 17.975 19.975C17.625 20.325 17.2 20.5 16.7 20.5H7.3ZM7 6V18.7C7 18.7833 7.02933 18.8543 7.088 18.913C7.146 18.971 7.21667 19 7.3 19H16.7C16.7833 19 16.8543 18.971 16.913 18.913C16.971 18.8543 17 18.7833 17 18.7V6H7ZM9.4 16.25C9.4 16.4667 9.471 16.646 9.613 16.788C9.75433 16.9293 9.93333 17 10.15 17C10.3667 17 10.546 16.9293 10.688 16.788C10.8293 16.646 10.9 16.4667 10.9 16.25V8.75C10.9 8.53333 10.8293 8.354 10.688 8.212C10.546 8.07067 10.3667 8 10.15 8C9.93333 8 9.75433 8.07067 9.613 8.212C9.471 8.354 9.4 8.53333 9.4 8.75V16.25ZM13.1 16.25C13.1 16.4667 13.1707 16.646 13.312 16.788C13.454 16.9293 13.6333 17 13.85 17C14.0667 17 14.246 16.9293 14.388 16.788C14.5293 16.646 14.6 16.4667 14.6 16.25V8.75C14.6 8.53333 14.5293 8.354 14.388 8.212C14.246 8.07067 14.0667 8 13.85 8C13.6333 8 13.454 8.07067 13.312 8.212C13.1707 8.354 13.1 8.53333 13.1 8.75V16.25ZM7 6V18.7C7 18.7833 7.02933 18.8543 7.088 18.913C7.146 18.971 7.21667 19 7.3 19H7V6Z"
                          fill="#002145"
                        />
                      </g>
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- TODO : There is a missed section cause must defined as component then add here -->
      <div
        class="flex border rounded-sm items-center justify-center py-4 text-lg bg-base-300 text-base-100"
      >
        این بخش بعد از ایجاد کامپوننت اضافه میشود !
      </div>

      <!-- compare section -->
      <div class="flex flex-col gap-5 mt-16">
        <!-- select base compare -->
        <div class="flex flex-row w-full items-center gap-5">
          <!-- title -->
          <div class="flex flex-row gap-3 items-center">
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
            <span>{{ config.by_route(`${current_page}/compare`) }}</span>
          </div>

          <!-- select box -->
          <Dropdown class="w-52">
            <template v-slot:title>
              <div
                class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500"
              >
                <span>رقبای دیگر</span>
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
                  <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                    <input
                      type="radio"
                      name="id-1"
                      class="accent-primary w-4 h-4 cursor-pointer"
                    />
                    <span>1 ساعت</span>
                  </li>
                  <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                    <input
                      type="radio"
                      name="id-2"
                      class="accent-primary w-4 h-4 cursor-pointer"
                    />
                    <span>2 ساعت</span>
                  </li>
                  <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                    <input
                      type="radio"
                      name="id-3"
                      class="accent-primary w-4 h-4 cursor-pointer"
                    />
                    <span>4 ساعت</span>
                  </li>
                  <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
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
        </div>
        <!-- chart section -->
        <div class="flex flex-col gap-2 rounded-sm border p-2 mt-10">
          <!-- header -->
          <div class="flex flex-row items-center justify-between">
            <!-- compare -->
            <div class="flex flex-col gap-5">
              <!-- Competitor list -->
              <Dropdown class="w-52">
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
            </div>

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

          <!-- OTHER FIELDs  -->
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
              <div
                class="flex flex-row border rounded-sm p-1 h-7 w-48 items-center justify-between"
              >
                <div class="flex flex-row items-center gap-4 text-xs">
                  <span class="h-full rounded-full bg-error">&nbsp;</span>
                  <span> رقیب شماره 2 </span>
                </div>
                <button>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7338 0.275313C11.3788 -0.0796358 10.8055 -0.0796358 10.4505 0.275313L6 4.71672L1.54949 0.266212C1.19454 -0.0887372 0.62116 -0.0887372 0.266212 0.266212C-0.0887372 0.62116 -0.0887372 1.19454 0.266212 1.54949L4.71672 6L0.266212 10.4505C-0.0887372 10.8055 -0.0887372 11.3788 0.266212 11.7338C0.62116 12.0887 1.19454 12.0887 1.54949 11.7338L6 7.28328L10.4505 11.7338C10.8055 12.0887 11.3788 12.0887 11.7338 11.7338C12.0887 11.3788 12.0887 10.8055 11.7338 10.4505L7.28328 6L11.7338 1.54949C12.0796 1.20364 12.0796 0.621161 11.7338 0.275313Z"
                      fill="#D02121"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <button
                class="rounded-lg bg-base-250 w-10 h-10 flex flex-col items-center transition-all duration-200 hover:bg-base-350"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="9" fill="#F2F5F7" />
                  <mask
                    id="mask0_337_1576"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="8"
                    y="8"
                    width="24"
                    height="24"
                  >
                    <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_337_1576)">
                    <path
                      d="M18.125 28.2499C16.475 27.8332 15.125 26.9582 14.075 25.6249C13.025 24.2916 12.5 22.7499 12.5 20.9999C12.5 20.0999 12.6583 19.2416 12.975 18.4249C13.2917 17.6082 13.725 16.8582 14.275 16.1749C14.425 16.0082 14.5957 15.9249 14.787 15.9249C14.979 15.9249 15.1583 16.0082 15.325 16.1749C15.475 16.3082 15.55 16.4749 15.55 16.6749C15.55 16.8749 15.4833 17.0582 15.35 17.2249C14.9167 17.7582 14.5833 18.3456 14.35 18.9869C14.1167 19.6289 14 20.2999 14 20.9999C14 22.3832 14.4167 23.6082 15.25 24.6749C16.0833 25.7416 17.1417 26.4499 18.425 26.7999C18.5917 26.8499 18.7293 26.9456 18.838 27.0869C18.946 27.2289 19 27.3832 19 27.5499C19 27.7999 18.9127 27.9959 18.738 28.1379C18.5627 28.2792 18.3583 28.3166 18.125 28.2499ZM21.875 28.2749C21.6417 28.3416 21.4373 28.2999 21.262 28.1499C21.0873 27.9999 21 27.7999 21 27.5499C21 27.3832 21.0543 27.2332 21.163 27.0999C21.271 26.9666 21.4083 26.8749 21.575 26.8249C22.8583 26.4249 23.9167 25.6956 24.75 24.6369C25.5833 23.5789 26 22.3666 26 20.9999C26 19.3332 25.4167 17.9166 24.25 16.7499C23.0833 15.5832 21.6667 14.9999 20 14.9999H19.65L20.475 15.8249C20.6083 15.9749 20.675 16.1499 20.675 16.3499C20.675 16.5499 20.6083 16.7249 20.475 16.8749C20.325 17.0249 20.146 17.0999 19.938 17.0999C19.7293 17.0999 19.5583 17.0249 19.425 16.8749L17.425 14.8749C17.325 14.7916 17.2583 14.6959 17.225 14.5879C17.1917 14.4792 17.175 14.3666 17.175 14.2499C17.175 14.1332 17.1917 14.0206 17.225 13.9119C17.2583 13.8039 17.325 13.7082 17.425 13.6249L19.425 11.6249C19.5583 11.4749 19.7293 11.3999 19.938 11.3999C20.146 11.3999 20.325 11.4749 20.475 11.6249C20.6083 11.7749 20.675 11.9499 20.675 12.1499C20.675 12.3499 20.6083 12.5249 20.475 12.6749L19.65 13.4999H20C22.1 13.4999 23.875 14.2249 25.325 15.6749C26.775 17.1249 27.5 18.8999 27.5 20.9999C27.5 22.7332 26.975 24.2666 25.925 25.5999C24.875 26.9332 23.525 27.8249 21.875 28.2749Z"
                      fill="#488CDA"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <!-- the chart -->
          <div>
            <ChartLine :series="[series[0]]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Config from "../../composables/Config";

onBeforeMount(() => {
  navigateTo("/rank-tracker/keyword");
});

const current_page = "pages/rank-tracker/competitors";
const series = [
  {
    name: "workspace",
    data: [1, 6, 7, 4, 5, 2],
  },
  {
    name: "domain.com",
    data: [3, 4, 1, 5, 10, 2],
  },
];
let competitor_count = 1;
const config = new Config();
const tabs = config.__("pages/rank-tracker/header/tabs".split("/"));
</script>
