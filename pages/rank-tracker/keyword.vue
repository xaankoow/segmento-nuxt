<template>
  <div class="flex flex-col">
    <!-- header -->
    <div class="flex items-center justify-between gap-3 py-2 w-full h-[7%] bg-base-200">
      <!-- tabs -->
      <div class="flex items-center gap-3">
        <TabItem to="/rank-tracker/overview" :active="false">
          {{ tabs[0] }}
        </TabItem>
        <TabSeparator />
        <TabItem to="/rank-tracker/keyword" :active="true">
          {{ tabs[1] }}
        </TabItem>
        <TabSeparator />
        <TabItem to="/rank-tracker/competitors" :active="false">
          {{ tabs[2] }}
        </TabItem>
      </div>
      <!-- update title -->
      <div class="flex flex-col gap-2 px-2 items-center text-base-500 text-sm">
        <span class="flex flex-row items-center gap-2">
          <label>{{ config.__("pages/rank-tracker/header/update/latest".split("/")) }}:</label>
          <span>1402/03/25</span>
        </span>
        <span class="flex flex-row items-center gap-2">
          <label>{{
            config.__("pages/rank-tracker/header/update/period/title".split("/"))
          }}:</label>
          <span>{{
            config.__("pages/rank-tracker/header/update/period/default".split("/"))
          }}</span>
        </span>
      </div>
    </div>


    <!-- page content -->
    <div class="flex flex-col gap-2 mx-3 py-4">
      <div class="flex flex-row justify-between items-center p-3">
        <span>{{ config.by_route(`${current_page}/table/title`) }}</span>
        <button class="flex flex-row gap-2 btn-primary px-3">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_970_919" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_970_919)">
                <path
                  d="M12 18.75C11.7833 18.75 11.6043 18.6793 11.463 18.538C11.321 18.396 11.25 18.2167 11.25 18V12.75H6C5.78333 12.75 5.60433 12.679 5.463 12.537C5.321 12.3957 5.25 12.2167 5.25 12C5.25 11.7833 5.321 11.604 5.463 11.462C5.60433 11.3207 5.78333 11.25 6 11.25H11.25V6C11.25 5.78333 11.321 5.60433 11.463 5.463C11.6043 5.321 11.7833 5.25 12 5.25C12.2167 5.25 12.396 5.321 12.538 5.463C12.6793 5.60433 12.75 5.78333 12.75 6V11.25H18C18.2167 11.25 18.396 11.3207 18.538 11.462C18.6793 11.604 18.75 11.7833 18.75 12C18.75 12.2167 18.6793 12.3957 18.538 12.537C18.396 12.679 18.2167 12.75 18 12.75H12.75V18C12.75 18.2167 12.6793 18.396 12.538 18.538C12.396 18.6793 12.2167 18.75 12 18.75Z"
                  fill="white" />
              </g>
            </svg>
          </span>
          <span>{{ config.by_route(`${current_page}/header/button`) }}</span>
        </button>
      </div>

      <!-- table -->
      <div class="w-full overflow-auto text-xs max-h-96">
        <div class="flex flex-col w-fit border">
          <!-- headers -->
          <div class="flex items-center w-full overflow-auto bg-base-200">
            <span class="text-center py-3 px-2 w-16">{{ table_column[0] }}</span>
            <span class="border-r text-center py-3 px-2 w-16">{{ table_column[1] }}</span>
            <span class="border-r text-center py-3 px-2 w-24">{{ table_column[2] }}</span>
            <span class="border-r text-center py-3 px-2 w-44">{{ table_column[3] }}</span>
            <span class="border-r text-center py-3 px-2 w-20">{{ table_column[4] }}</span>
            <span class="border-r text-center py-3 px-2 w-20">{{ table_column[5] }}</span>
            <span class="border-r text-center py-3 px-2 w-28">{{ table_column[6] }}</span>
            <span class="border-r text-center py-3 px-2 w-28">{{ table_column[7] }}</span>
            <span class="border-r text-center py-3 px-2 w-28">{{ table_column[8] }}</span>
            <span class="border-r text-center py-3 px-2 w-28">{{ table_column[9] }}</span>
            <span class="border-r text-center py-3 px-2 w-28">{{ table_column[10] }}</span>
            <span class="border-r text-center py-3 px-2 w-44">{{ table_column[11] }}</span>
            <span class="border-r text-center py-3 px-2 w-44">{{ table_column[12] }}</span>
          </div>

          <!-- rows -->
          <div class="flex items-center overflow-auto w-full odd:bg-base-200" v-for="i in 20">
            <!-- chart -->
            <span class="text-center py-3 px-2 w-16 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_337_1504" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_337_1504)">
                  <path
                    d="M3 17.5C2.51667 17.5 2.104 17.3293 1.762 16.988C1.42067 16.646 1.25 16.2333 1.25 15.75C1.25 15.2667 1.42067 14.854 1.762 14.512C2.104 14.1707 2.51667 14 3 14C3.11667 14 3.22067 14.004 3.312 14.012C3.404 14.0207 3.49167 14.05 3.575 14.1L8.35 9.325C8.3 9.24167 8.27067 9.154 8.262 9.062C8.254 8.97067 8.25 8.86667 8.25 8.75C8.25 8.26667 8.42067 7.854 8.762 7.512C9.104 7.17067 9.51667 7 10 7C10.4833 7 10.896 7.17067 11.238 7.512C11.5793 7.854 11.75 8.26667 11.75 8.75C11.75 8.81667 11.7167 9 11.65 9.3L14.45 12.1C14.5333 12.05 14.6167 12.0207 14.7 12.012C14.7833 12.004 14.8833 12 15 12C15.1167 12 15.2167 12.004 15.3 12.012C15.3833 12.0207 15.4667 12.05 15.55 12.1L19.35 8.3C19.3 8.21667 19.271 8.13333 19.263 8.05C19.2543 7.96667 19.25 7.86667 19.25 7.75C19.25 7.26667 19.421 6.854 19.763 6.512C20.1043 6.17067 20.5167 6 21 6C21.4833 6 21.896 6.17067 22.238 6.512C22.5793 6.854 22.75 7.26667 22.75 7.75C22.75 8.23333 22.5793 8.646 22.238 8.988C21.896 9.32933 21.4833 9.5 21 9.5C20.8833 9.5 20.7833 9.496 20.7 9.488C20.6167 9.47933 20.5333 9.45 20.45 9.4L16.65 13.2C16.7 13.2833 16.7293 13.3667 16.738 13.45C16.746 13.5333 16.75 13.6333 16.75 13.75C16.75 14.2333 16.5793 14.646 16.238 14.988C15.896 15.3293 15.4833 15.5 15 15.5C14.5167 15.5 14.104 15.3293 13.762 14.988C13.4207 14.646 13.25 14.2333 13.25 13.75C13.25 13.6333 13.254 13.5293 13.262 13.438C13.2707 13.346 13.3 13.2583 13.35 13.175L10.575 10.4C10.4917 10.45 10.404 10.4793 10.312 10.488C10.2207 10.496 10.1167 10.5 10 10.5C9.93333 10.5 9.75 10.4667 9.45 10.4L4.65 15.2C4.7 15.2833 4.72933 15.3667 4.738 15.45C4.746 15.5333 4.75 15.6333 4.75 15.75C4.75 16.2333 4.579 16.646 4.237 16.988C3.89567 17.3293 3.48333 17.5 3 17.5Z"
                    fill="#002145" />
                </g>
              </svg>
            </span>
            <!-- row id-->
            <span class="border-r text-center py-3 px-2 w-16">{{ i }}</span>
            <!-- keyword -->
            <span class="border-r text-center py-3 px-2 w-24 flex items-center justify-center gap-2">
              <span>word</span>
              <Copy content="word" />
            </span>
            <!-- target page -->
            <span class="border-r text-left py-3 px-2 w-44">https://app.segmento.ir</span>
            <!-- current rank -->
            <span class="border-r text-center py-3 px-2 w-20">{{ i }}</span>
            <!-- location -->
            <span class="border-r text-center py-3 px-2 w-20">ایران</span>
            <!-- decline and growth -->
            <span class="border-r text-center py-3 px-2 w-28 flex items-center justify-center gap-1">
              <span>3 رتبه</span>
              <span class="flex items-center">
                <SvgArrowDown v-if="i % 3 === 0" />
                <SvgArrowUp v-else />
              </span>
            </span>
            <!-- updated at -->
            <span class="border-r text-center py-3 px-2 w-28">1403/02/20</span>
            <!-- avarage -->
            <span class="border-r text-center py-3 px-2 w-28 flex items-center justify-center gap-1">
              <span>3.5 رتبه</span>
              <span class="flex items-center">
                <SvgArrowDown v-if="i % 3 === 0" />
                <SvgArrowUp v-else />
              </span>
            </span>
            <span class="border-r flex py-3 px-2 w-28 items-center justify-center">
              <span class="flex items-center gap-2 p-1 w-fit bg-base-300 rounded-md text-xs">
                <span>برچسب 1</span>
                <button>
                  <SvgClose />
                </button>
              </span>
            </span>
            <span class="border-r text-center py-3 px-2 w-28">1403/02/20</span>
            <span class="border-r text-center py-3 px-2 w-44">http://competitor.com</span>
            <span class="border-r text-center py-3 px-2 w-44 flex flex-row-reverse justify-evenly items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_337_2342" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_337_2342)">
                  <path
                    d="M9.2752 17.7998C8.75853 17.7998 8.32519 17.6248 7.97519 17.2748C7.6252 16.9248 7.4502 16.4998 7.4502 15.9998V4.6248C7.4502 4.10814 7.6252 3.6748 7.97519 3.3248C8.32519 2.9748 8.75853 2.7998 9.2752 2.7998H17.6252C18.1252 2.7998 18.5545 2.9788 18.9132 3.3368C19.2712 3.69547 19.4502 4.1248 19.4502 4.6248V15.9998C19.4502 16.4998 19.2712 16.9248 18.9132 17.2748C18.5545 17.6248 18.1252 17.7998 17.6252 17.7998H9.2752ZM9.2752 16.2998H17.6252C17.7252 16.2998 17.8045 16.2705 17.8632 16.2118C17.9212 16.1538 17.9502 16.0831 17.9502 15.9998V4.6248C17.9502 4.5248 17.9212 4.44547 17.8632 4.3868C17.8045 4.3288 17.7252 4.2998 17.6252 4.2998H9.2752C9.1752 4.2998 9.0962 4.3288 9.0382 4.3868C8.97953 4.44547 8.9502 4.5248 8.9502 4.6248V15.9998C8.9502 16.0831 8.97953 16.1538 9.0382 16.2118C9.0962 16.2705 9.1752 16.2998 9.2752 16.2998ZM5.7502 21.2998C5.2502 21.2998 4.8252 21.1248 4.4752 20.7748C4.1252 20.4248 3.9502 19.9998 3.9502 19.4998V7.5498C3.9502 7.3498 4.02086 7.17481 4.1622 7.02481C4.3042 6.8748 4.48353 6.7998 4.7002 6.7998C4.9002 6.7998 5.0752 6.8748 5.2252 7.02481C5.3752 7.17481 5.4502 7.3498 5.4502 7.5498V19.4998C5.4502 19.5831 5.4792 19.6538 5.5372 19.7118C5.59586 19.7705 5.66686 19.7998 5.7502 19.7998H14.7002C14.9002 19.7998 15.0752 19.8748 15.2252 20.0248C15.3752 20.1748 15.4502 20.3498 15.4502 20.5498C15.4502 20.7665 15.3752 20.9455 15.2252 21.0868C15.0752 21.2288 14.9002 21.2998 14.7002 21.2998H5.7502Z"
                    fill="#002145" />
                </g>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_337_2352" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_337_2352)">
                  <path
                    d="M7.3 20.5C6.8 20.5 6.375 20.325 6.025 19.975C5.675 19.625 5.5 19.2 5.5 18.7V6H5.25C5.03333 6 4.85433 5.929 4.713 5.787C4.571 5.64567 4.5 5.46667 4.5 5.25C4.5 5.03333 4.571 4.85433 4.713 4.713C4.85433 4.571 5.03333 4.5 5.25 4.5H9C9 4.25 9.08733 4.04167 9.262 3.875C9.43733 3.70833 9.65 3.625 9.9 3.625H14.1C14.35 3.625 14.5627 3.70833 14.738 3.875C14.9127 4.04167 15 4.25 15 4.5H18.75C18.9667 4.5 19.146 4.571 19.288 4.713C19.4293 4.85433 19.5 5.03333 19.5 5.25C19.5 5.46667 19.4293 5.64567 19.288 5.787C19.146 5.929 18.9667 6 18.75 6H18.5V18.7C18.5 19.2 18.325 19.625 17.975 19.975C17.625 20.325 17.2 20.5 16.7 20.5H7.3ZM7 6V18.7C7 18.7833 7.02933 18.8543 7.088 18.913C7.146 18.971 7.21667 19 7.3 19H16.7C16.7833 19 16.8543 18.971 16.913 18.913C16.971 18.8543 17 18.7833 17 18.7V6H7ZM9.4 16.25C9.4 16.4667 9.471 16.646 9.613 16.788C9.75433 16.9293 9.93333 17 10.15 17C10.3667 17 10.546 16.9293 10.688 16.788C10.8293 16.646 10.9 16.4667 10.9 16.25V8.75C10.9 8.53333 10.8293 8.354 10.688 8.212C10.546 8.07067 10.3667 8 10.15 8C9.93333 8 9.75433 8.07067 9.613 8.212C9.471 8.354 9.4 8.53333 9.4 8.75V16.25ZM13.1 16.25C13.1 16.4667 13.1707 16.646 13.312 16.788C13.454 16.9293 13.6333 17 13.85 17C14.0667 17 14.246 16.9293 14.388 16.788C14.5293 16.646 14.6 16.4667 14.6 16.25V8.75C14.6 8.53333 14.5293 8.354 14.388 8.212C14.246 8.07067 14.0667 8 13.85 8C13.6333 8 13.454 8.07067 13.312 8.212C13.1707 8.354 13.1 8.53333 13.1 8.75V16.25ZM7 6V18.7C7 18.7833 7.02933 18.8543 7.088 18.913C7.146 18.971 7.21667 19 7.3 19H7V6Z"
                    fill="#002145" />
                </g>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_337_2310" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_337_2310)">
                  <path
                    d="M5.37578 18.5C4.87578 18.5 4.44678 18.325 4.08878 17.975C3.73011 17.625 3.55078 17.2 3.55078 16.7V7.3C3.55078 6.8 3.73011 6.375 4.08878 6.025C4.44678 5.675 4.87578 5.5 5.37578 5.5H14.7508C15.1008 5.5 15.4258 5.579 15.7258 5.737C16.0258 5.89567 16.2758 6.11667 16.4758 6.4L19.7008 10.95C19.9174 11.2667 20.0258 11.6167 20.0258 12C20.0258 12.3833 19.9174 12.7333 19.7008 13.05L16.4758 17.6C16.2758 17.8667 16.0258 18.0833 15.7258 18.25C15.4258 18.4167 15.1008 18.5 14.7508 18.5H5.37578ZM18.6008 12L15.2258 7.25C15.1758 7.18333 15.1091 7.125 15.0258 7.075C14.9424 7.025 14.8508 7 14.7508 7H5.37578C5.29245 7 5.21745 7.03333 5.15078 7.1C5.08411 7.16667 5.05078 7.23333 5.05078 7.3V16.7C5.05078 16.7667 5.08411 16.8333 5.15078 16.9C5.21745 16.9667 5.29245 17 5.37578 17H14.7508C14.8508 17 14.9424 16.975 15.0258 16.925C15.1091 16.875 15.1758 16.8167 15.2258 16.75L18.6008 12Z"
                    fill="#002145" />
                </g>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_337_1593" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_337_1593)">
                  <path
                    d="M6.775 19.7C6.475 19.8333 6.18733 19.8123 5.912 19.637C5.63733 19.4623 5.5 19.2083 5.5 18.875V5.3C5.5 4.8 5.675 4.375 6.025 4.025C6.375 3.675 6.8 3.5 7.3 3.5H13V5H7.3C7.23333 5 7.16667 5.03333 7.1 5.1C7.03333 5.16667 7 5.23333 7 5.3V17.95L12 15.8L17 17.95V11H18.5V18.875C18.5 19.2083 18.3623 19.4623 18.087 19.637C17.8123 19.8123 17.525 19.8333 17.225 19.7L12 17.45L6.775 19.7ZM17.75 9C17.5333 9 17.354 8.929 17.212 8.787C17.0707 8.64567 17 8.46667 17 8.25V7H15.75C15.5333 7 15.3543 6.929 15.213 6.787C15.071 6.64567 15 6.46667 15 6.25C15 6.03333 15.071 5.85433 15.213 5.713C15.3543 5.571 15.5333 5.5 15.75 5.5H17V4.25C17 4.03333 17.0707 3.854 17.212 3.712C17.354 3.57067 17.5333 3.5 17.75 3.5C17.9667 3.5 18.146 3.57067 18.288 3.712C18.4293 3.854 18.5 4.03333 18.5 4.25V5.5H19.75C19.9667 5.5 20.146 5.571 20.288 5.713C20.4293 5.85433 20.5 6.03333 20.5 6.25C20.5 6.46667 20.4293 6.64567 20.288 6.787C20.146 6.929 19.9667 7 19.75 7H18.5V8.25C18.5 8.46667 18.4293 8.64567 18.288 8.787C18.146 8.929 17.9667 9 17.75 9Z"
                    fill="#002145" />
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <!-- filters and compare -->
      <div class="flex flex-col gap-2 my-2">
        <!-- fiters -->
        <div class="flex flex-row gap-5 items-center">
          <!-- title -->
          <div class="flex flex-row gap-3 items-center w-2/12">
            <span class="rounded-lg bg-base-250 p-3">
              <SvgFilter />
            </span>
            <span> فیلتر بر اساس </span>
          </div>
          <!-- content -->
          <div class="flex flex-row items-center text-base-500 gap-2 w-10/12 justify-between">
            <!-- filter hour -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>48 ساعت</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>1 ساعت</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-2" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>2 ساعت</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-3" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>4 ساعت</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-4" class="accent-primary w-4 h-4 cursor-pointer" />
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
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>تمام رتبه ها</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>1 رتبه</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>2 رتبه</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>4 رتبه</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
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
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>دسکتاپ</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>1 موبایل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-2" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>2 موبایل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-3" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>4 موبایل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-4" class="accent-primary w-4 h-4 cursor-pointer" />
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
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>{{ date }}</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <Vue3PersianDatetimePicker v-model="date" format="jYYYY jMMMM jDD" initial-value="1402/03/25" simple
                  popover />
              </template>
            </Dropdown>
          </div>
        </div>

        <!-- compaire -->
        <div class="flex flex-row gap-5 items-center">
          <!-- title -->
          <div class="flex flex-row gap-3 items-center w-2/12">
            <span class="rounded-lg bg-base-250 p-3">
              <SvgCompaire />
            </span>
            <span> مقایسه بر اساس </span>
          </div>
          <!-- content -->
          <div class="flex flex-row items-center text-base-500 gap-2 w-10/12 justify-between">
            <!-- compaire week -->
            <Dropdown class="w-1/4">
              <template v-slot:title>
                <div
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>4 هفته قبل</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>1 هفته قبل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-2" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>2 هفته قبل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-3" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>4 هفته قبل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-4" class="accent-primary w-4 h-4 cursor-pointer" />
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
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>سایت 1</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>1 سایت</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-2" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>2 سایت</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-3" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>4 سایت</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-4" class="accent-primary w-4 h-4 cursor-pointer" />
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
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>دسکتاپ</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>1 موبایل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-2" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>2 موبایل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-3" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>4 موبایل</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-4" class="accent-primary w-4 h-4 cursor-pointer" />
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
                  class="border border-base-300 flex flex-row items-center justify-between border-b-base-500 w-full rounded-sm px-2 py-1 hover:border-base-500">
                  <span>رقیب شماره 1</span>
                  <span>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.00156 7.04961L0.351562 1.39961L1.40156 0.349609L6.00156 4.94961L10.6016 0.349609L11.6516 1.39961L6.00156 7.04961Z"
                        fill="#7D7D7D" />
                    </svg>
                  </span>
                </div>
              </template>

              <template v-slot:content>
                <fieldset class="text-base-content">
                  <ul class="w-full flex flex-col gap-0">
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-1" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>1 رقیب</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-2" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>2 رقیب</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-3" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>4 رقیب</span>
                    </li>
                    <li class="flex flex-row gap-2 items-center px-2 py-1 cursor-pointer">
                      <input type="radio" name="id-4" class="accent-primary w-4 h-4 cursor-pointer" />
                      <span>8 رقیب</span>
                    </li>
                  </ul>
                </fieldset>
              </template>
            </Dropdown>
          </div>
        </div>
      </div>

      <!-- chart section -->
      <div class="flex flex-col gap-2 rounded-sm border mt-10">
        <!-- header -->
        <div class="flex items-center justify-between bg-base-200 p-2">
          <select class="border-2 border-b-base-content p-2 w-60 rounded-sm">
            <option>همه</option>
            <option selected>آموزش سئو مشهد</option>
            <option>کلمه 2</option>
            <option>کلمه 3</option>
            <option>کلمه 4</option>
          </select>

          <!-- options -->
          <div class="flex gap-2 items-center px-3">
            <span class="w-10 h-10 flex items-center justify-center rounded-lg bg-base-250">
              <SvgBarChart />
            </span>
            <span class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary">
              <SvgLineChart />
            </span>
          </div>
        </div>

        <!-- chart section -->
        <div class="flex flex-col gap-12">
          <!-- header -->
          <div class="flex items-center justify-between p-2 pl-5">
            <label class="flex items-center gap-2 border-2 rounded-sm p-1 w-56 justify-between">
              <span class="border-r-4 border-r-error px-2">سئو در مشهد</span>
              <SvgClose class="w-3 h-3 cursor-pointer" />
            </label>

            <span class="w-10 h-10 flex items-center justify-center rounded-lg bg-base-250">
              <SvgRefresh />
            </span>
          </div>
          <!-- the chart -->
          <ClientOnly>
            <ChartLine height="300px" :series="series" />
          </ClientOnly>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
import Config from "../../composables/Config";

const date = ref("1402/03/25");
const current_page = "pages/rank-tracker/keyword";
const config = new Config();
const series = [
  {
    data: [12, 10, 11, 16, 14, 13, 15],
  },
];
const tabs = config.__("pages/rank-tracker/header/tabs".split("/"));
const table_column = config.by_route(`${current_page}/table/columns`);
</script>
