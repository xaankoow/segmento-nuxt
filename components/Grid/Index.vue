<template>
  <div class="w-full h-fit rounded-xs text-xs border flex">
    <td class="w-[132px] text-sm flex items-center justify-center">
      {{ data.address1 }}
    </td>
    <td class="border-r w-[132px] flex items-center justify-center text-sm">
      {{ data.address2 }}
    </td>
    <td class="border-r w-[95px]">
      <div
        class="w-full h-[25%] flex items-center justify-center border-b"
      ></div>
      <div class="w-full h-[25%] flex items-center justify-center border-b">
        <slot name="rank"></slot>
      </div>
      <div class="w-full h-[25%] flex items-center justify-center border-b">
        <slot name="rankChange"></slot>
      </div>
      <div class="w-full h-[25%] flex items-center justify-center">
        <slot name="average"></slot>
      </div>
    </td>
    <td class="border-r w-[95px]">
      <div class="w-full h-[25%] flex items-center justify-center border-b">
        {{ data.address1 }}
      </div>
      <div
        class="w-full h-[25%] flex items-center justify-center border-b"
      >
        {{ data.rank1 }}
      </div>
      <div
        class="w-full h-[25%] flex items-center justify-center border-b"
      >
        {{ data.rankChange1 }} رتبه
        <svg
          v-if="data.rankChange1 > 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_690_3523"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_690_3523)">
            <path d="M7 14L12 9L17 14H7Z" fill="#10CCAE" />
          </g>
        </svg>
        <svg
          v-if="data.rankChange1 < 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_688_2121"
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
              transform="rotate(180 24 24)"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_688_2121)">
            <path d="M17 10L12 15L7 10L17 10Z" fill="#F35242" />
          </g>
        </svg>
      </div>
      <div class="w-full h-[25%] flex items-center justify-center">
        {{ data.average1 }} رتبه
        <svg
          v-if="data.average1 > 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_690_3523"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_690_3523)">
            <path d="M7 14L12 9L17 14H7Z" fill="#10CCAE" />
          </g>
        </svg>
        <svg
          v-if="data.average1 < 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_688_2121"
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
              transform="rotate(180 24 24)"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_688_2121)">
            <path d="M17 10L12 15L7 10L17 10Z" fill="#F35242" />
          </g>
        </svg>
      </div>
    </td>
    <td class="border-x w-[95px]">
      <div class="w-full h-[25%] flex items-center justify-center border-b">
        {{ data.address2 }}
      </div>
      <div
        class="w-full h-[25%] flex items-center justify-center border-b"
      >
        {{ data.rank2 }}
      </div>
      <div
        class="w-full h-[25%] flex items-center justify-center border-b"
      >
        {{ data.rankChange2 }} رتبه
        <svg
          v-if="data.rankChange2 > 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_690_3523"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_690_3523)">
            <path d="M7 14L12 9L17 14H7Z" fill="#10CCAE" />
          </g>
        </svg>
        <svg
          v-if="data.rankChange2 < 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_688_2121"
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
              transform="rotate(180 24 24)"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_688_2121)">
            <path d="M17 10L12 15L7 10L17 10Z" fill="#F35242" />
          </g>
        </svg>
      </div>
      <div class="w-full h-[25%] flex items-center justify-center">
        {{ data.average2 }} رتبه
        <svg
          v-if="data.average2 > 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_690_3523"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_690_3523)">
            <path d="M7 14L12 9L17 14H7Z" fill="#10CCAE" />
          </g>
        </svg>
        <svg
        v-if="data.average2 < 0"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_688_2121"
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
              transform="rotate(180 24 24)"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_688_2121)">
            <path d="M17 10L12 15L7 10L17 10Z" fill="#F35242" />
          </g>
        </svg>
      </div>
    </td>
    <td class="w-[443px] px-3 py-2">
      <div class="w-2/6 h-[115px]">
        <div class="w-full h-8 flex items-center justify-start">
          <div class="w-4 h-4 bg-primary-focus ml-2"></div>
          <p>{{ data.address2 }}</p>
        </div>
        <div class="w-full h-8 flex items-center justify-start">
          <div class="w-4 h-4 bg-error ml-2"></div>
          <p>{{ data.address1 }}</p>
        </div>
      </div>
      <VueApexCharts
        class="absolute left-[37px] -mt-36"
        height="140"
        width="300"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </td>
    <td class="border-r w-[28px] flex items-center justify-center flex-col">
      <slot name="svg"></slot>
    </td>
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";

const series = [
  {
    data: [100, 0, 78, 51, 42, 100, 100, 0, 40, 70],
    color: "transparent",
  },
  {
    data: [90, 20, 5, 11, 32, 59, 100, 140, 50, 75],
    color: "transparent",
  },
];
const chartOptions = {
  chart: {
    type: "area",
    stacked: true,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  fill: {
    type: "none", // استفاده از fill به نوع none
  },
  stroke: {
    width: [2, 2], // تنظیم عرض stroke برای دو خط
    colors: ["#F35242", "#0AC7E2"], // تنظیم رنگ stroke برای دو خط
  },
  xaxis: {
    axisBorder: {
      show: true,
      color: "#7D7D7D",
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    axisBorder: {
      show: true,
      color: "#7D7D7D",
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

import { defineProps } from "vue";
const props = defineProps(["data"]);
</script>
