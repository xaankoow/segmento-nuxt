<template>
  <VueApexCharts
    class=""
    height="350"
    width="700"
    :options="chartOptions"
    :series="series"
  ></VueApexCharts>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
const series = [
  {
    name: "series1",
    data: [51, 60, 78, 51, 42, 109, 100, 50, 40, 70],
    color: "#28CFE4",
  },
];
const chartOptions = {
  chart: {
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2, // اضافه کردن عرض لاین‌ها به مقدار دلخواه (اینجا مثلاً 2)
  },
  markers: {
    size: 4,
    colors: ["#063468"], // تغییر رنگ مارکر‌ها به مشکی
    strokeColors: ["transparent"],
  },
  xaxis: {
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
    labels: {
      show: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
    labels: {
      show: true,
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};
</script>
