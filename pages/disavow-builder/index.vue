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
    <div class="flex flex-row w-full justify-around p-2">
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
