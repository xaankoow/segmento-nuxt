<template>
  <!-- Tabs -->
  <div class="flex flex-row items-center gap-3 px-2 bg-base-200 h-[7%]">
    <TabItem to="/disavow-builder" :active="true">
      {{ config.by_route(`${current_page}/tabs/generate`) }}
    </TabItem>
    <!-- <TabSeparator />
    <TabItem :active="false">
      {{ config.by_route(`${current_page}/tabs/my-files`) }}
    </TabItem> -->
  </div>
  <!-- page content -->
  <div class="py-2 px-4 flex flex-col gap-2 h-[93%] justify-center">
    <div class="flex flex-col border rounded-[9px] p-2 py-4 gap-2 items-end">
      <div class="w-full flex">
        <div class="w-1/2 flex flex-col gap-2 px-4">
          <h1 class="border-r-2 pr-2 border-r-primary">
            {{ config.by_route(`${current_page}/boxes/urls-input`) }}
          </h1>
          <InputTextAreaLiner
            dir="ltr"
            id="textAreaUrl"
            class="h-44 w-full text-left"
            v-model="urls"
          />
          <span class="warning text-base-500 text-sm">
            {{ config.by_route(`${current_page}/warnings/urls-input`) }}
          </span>
        </div>
        <div class="w-1/2 flex flex-col gap-2 px-4">
          <h1 class="border-r-2 pr-2 border-r-primary">
            {{ config.by_route(`${current_page}/boxes/domains-input`) }}
          </h1>
          <InputTextAreaLiner
            dir="ltr"
            id="textAreaDomain"
            class="h-44 w-full text-left"
            v-model="domains"
          />
          <span class="warning text-base-500 text-sm">
            {{ config.by_route(`${current_page}/warnings/domains-input`) }}
          </span>
        </div>
      </div>
      <div class="flex items-center justify-center pt-2 px-4 w-1/3">
        <button
          @click="convert_to_txt()"
          class="btn-primary text-sm"
          :disabled="domains.trim().length == 0 && urls.trim().length == 0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_19_42"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_19_42)">
              <path
                d="M6.3 21.5C5.8 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.2 4.5 19.7V4.3C4.5 3.8 4.675 3.375 5.025 3.025C5.375 2.675 5.8 2.5 6.3 2.5H13.5C13.75 2.5 13.9833 2.54567 14.2 2.637C14.4167 2.729 14.6083 2.85833 14.775 3.025L18.975 7.225C19.1417 7.39167 19.271 7.58333 19.363 7.8C19.4543 8.01667 19.5 8.25 19.5 8.5V11.55H18V8.5H14.4C14.15 8.5 13.9373 8.41233 13.762 8.237C13.5873 8.06233 13.5 7.85 13.5 7.6V4H6.3C6.23333 4 6.16667 4.03333 6.1 4.1C6.03333 4.16667 6 4.23333 6 4.3V19.7C6 19.7667 6.03333 19.8333 6.1 19.9C6.16667 19.9667 6.23333 20 6.3 20H11.625V21.5H6.3ZM17.85 14.55L18.7 15.4L14.825 19.25V20.3H15.875L19.75 16.45L20.575 17.275L16.65 21.2C16.5667 21.3 16.471 21.371 16.363 21.413C16.2543 21.4543 16.1333 21.475 16 21.475H14.075C13.9583 21.475 13.854 21.4333 13.762 21.35C13.6707 21.2667 13.625 21.1583 13.625 21.025V19.125C13.625 19.0083 13.65 18.896 13.7 18.788C13.75 18.6793 13.8167 18.575 13.9 18.475L17.85 14.55ZM20.575 17.275L17.85 14.55L19.15 13.25C19.3167 13.0833 19.5293 13 19.788 13C20.046 13 20.25 13.0833 20.4 13.25L21.875 14.725C22.0417 14.875 22.125 15.079 22.125 15.337C22.125 15.5957 22.0417 15.8083 21.875 15.975L20.575 17.275Z"
                fill="white"
              />
            </g>
          </svg>
          {{ config.by_route(`${current_page}/buttons/generate`) }}
        </button>
      </div>
    </div>
    <div class="flex flex-row w-full p-2">
      <div class="w-1/3 p-2 pl-4 h-full">
        <div class="flex flex-col p-2 rounded-[5px] bg-base-250 h-full">
          <div class="w-full flex flex-row h-1/2 items-center justify-around">
            <span class="text-base-content">
              {{ config.by_route(`${current_page}/boxes/count-of-pages`) }}
            </span>
            <span class="text-base-500">
              {{ format_urls(urls)[1] }}
              {{ config.by_route(`constants/page`) }}
            </span>
          </div>
          <div class="w-full flex flex-row h-1/2 items-center justify-around">
            <span class="text-base-content">
              {{ config.by_route(`${current_page}/boxes/count-of-websites`) }}
            </span>
            <span class="text-base-500">
              {{ format_domains(domains)[1] }}
              {{ config.by_route(`constants/website`) }}
            </span>
          </div>
        </div>
      </div>
      <div class="w-1/3 p-2">
        <div class="flex flex-col p-2 rounded-[5px] h-full items-center justify-around">
          <span class="flex items-center justify-center h-1/2">
            {{ config.by_route(`${current_page}/boxes/click-to-save`) }}
          </span>
          <span class="flex items-center justify-center h-1/2">
            <button class="btn-primary gap-3" disabled>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 11.25C7.88333 11.25 7.771 11.2293 7.663 11.188C7.55433 11.146 7.45833 11.075 7.375 10.975L4.25 7.875C4.11667 7.74167 4.05 7.56667 4.05 7.35C4.05 7.13333 4.11667 6.95833 4.25 6.825C4.4 6.675 4.579 6.59567 4.787 6.587C4.99567 6.579 5.175 6.65 5.325 6.8L7.25 8.725V1.075C7.25 0.858333 7.321 0.679 7.463 0.537C7.60433 0.395667 7.78333 0.325 8 0.325C8.21667 0.325 8.396 0.395667 8.538 0.537C8.67933 0.679 8.75 0.858333 8.75 1.075V8.725L10.675 6.8C10.8083 6.66667 10.9833 6.6 11.2 6.6C11.4167 6.6 11.6 6.675 11.75 6.825C11.8833 6.95833 11.95 7.129 11.95 7.337C11.95 7.54567 11.8833 7.725 11.75 7.875L8.625 10.975C8.54167 11.075 8.446 11.146 8.338 11.188C8.22933 11.2293 8.11667 11.25 8 11.25ZM2.3 15.5C1.8 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.2 0.5 13.7V11.75C0.5 11.5333 0.571 11.354 0.713 11.212C0.854333 11.0707 1.03333 11 1.25 11C1.46667 11 1.64567 11.0707 1.787 11.212C1.929 11.354 2 11.5333 2 11.75V13.7C2 13.7667 2.03333 13.8333 2.1 13.9C2.16667 13.9667 2.23333 14 2.3 14H13.7C13.7667 14 13.8333 13.9667 13.9 13.9C13.9667 13.8333 14 13.7667 14 13.7V11.75C14 11.5333 14.0707 11.354 14.212 11.212C14.354 11.0707 14.5333 11 14.75 11C14.9667 11 15.146 11.0707 15.288 11.212C15.4293 11.354 15.5 11.5333 15.5 11.75V13.7C15.5 14.2 15.325 14.625 14.975 14.975C14.625 15.325 14.2 15.5 13.7 15.5H2.3Z"
                  fill="white"
                />
              </svg>
              {{ config.by_route(`${current_page}/buttons/save`) }}
            </button>
          </span>
        </div>
      </div>
      <div class="w-1/3 p-2">
        <div class="flex flex-col p-2 rounded-[5px] h-full">
          <span class="flex items-center justify-center h-1/2 p-4">
            {{ config.by_route(`${current_page}/boxes/click-to-send`) }}
          </span>
          <span class="flex items-center justify-center h-1/2">
            <a
              target="_blank"
              href="https://www.google.com/webmasters/tools/disavow-links-main"
              class="btn-primary gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_19_117"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_19_117)">
                  <path
                    d="M3.5 17.8999V6.09994C3.5 5.76661 3.63767 5.51661 3.913 5.34994C4.18767 5.18327 4.475 5.15827 4.775 5.27494L18.725 11.1499C19.0917 11.3166 19.275 11.5999 19.275 11.9999C19.275 12.3999 19.0917 12.6833 18.725 12.8499L4.775 18.7249C4.475 18.8416 4.18767 18.8166 3.913 18.6499C3.63767 18.4833 3.5 18.2333 3.5 17.8999ZM5 16.9999L16.85 11.9999L5 6.99994V10.6999L10.425 11.9999L5 13.2999V16.9999Z"
                    fill="white"
                  />
                </g>
              </svg>
              {{ config.by_route(`${current_page}/buttons/send-file`) }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*warning icon*/
.warning::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  -webkit-mask-image: url(/_nuxt/assets/icons/warning.svg);
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  background-color: #ffce47;
  vertical-align: middle;
}
</style>

<script setup>
import Config from "../../composables/Config";
import jalaliMoment from "jalali-moment";

const current_page = "pages/disavow-builder";
const config = new Config();
const domains = ref("");
const urls = ref("");

const convertToText = (text, filename) => {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

const format_domains = (domains) => {
  domains = domains.split("\n");
  domains.forEach((element, index) => {
    element = element.replace(/(www\.|https?:\/\/)/g, "");
    element = element.replace(/^\/|\/$/g, "");
    element = element.trim();
    element = element.split("/")[0];
    element = element.toLowerCase();
    domains[index] = element;
  });
  domains = [...new Set(domains)];
  domains = domains.filter((domain) => domain !== "");
  let domainRegex = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-z]{2,}$/;
  let wrong_domains = domains.filter((str) => !domainRegex.test(str));
  domains = domains.filter((str) => domainRegex.test(str));
  return [
    domains.join("\n"),
    domains.length,
    `# ${wrong_domains.join("\n# ")}`,
    wrong_domains.length,
  ];
};

const format_urls = (urls) => {
  urls = urls.split("\n");
  urls.forEach((element, index) => {
    element = element.replace(/^\/|\/$/g, "");
    element = element.toLowerCase();
    urls[index] = element.trim();
  });
  urls = [...new Set(urls)];
  urls = urls.filter((domain) => domain !== "");
  let urlRegex = /^(http(s)?:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)?)$/;
  let wrong_urls = urls.filter((str) => !urlRegex.test(str));
  urls = urls.filter((str) => urlRegex.test(str));
  return [
    urls.join("\n"),
    urls.length,
    `# ${wrong_urls.join("\n# ")}`,
    wrong_urls.length,
  ];
};

const convert_to_txt = () => {
  let formattedDate = jalaliMoment().locale("fa").format("YYYYMMDD");
  let domains_list = format_domains(domains.value);
  let urls_list = format_urls(urls.value);
  domains_list[0] = `domain:${domains_list[0].split("\n").join("\ndomain:")}`;
  convertToText(
    `# https://app.segmento.ir/disavow-builder\n\n# Domains to disavow:${
      domains_list[1] > 0 ? `\n${domains_list[0]}` : ""
    }\n\n# Pages to disavow:${urls_list[1] > 0 ? `\n${urls_list[0]}` : ""}${
      domains_list[3] > 0 ? `\n\n# Wrong domains:\n${domains_list[2]}` : ""
    }${urls_list[3] > 0 ? `\n\n# Wrong URLs:\n${urls_list[2]}` : ""}`,
    `disavow-smp-${formattedDate}-d${domains_list[1]}-p${urls_list[1]}`
  );
};
</script>
