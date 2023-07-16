<template>
  <VueApexCharts :options="chartOptions" :series="series"></VueApexCharts>
</template>
<script setup>
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  series: {
    required: true,
  },
});
const series = [
    {
      data: [44, 55, 41, 67, 22, 43, 21, 49],
    },
    {
      data: [-13, -23, -20, -8, -13, -27, -33, -12],
    },
  ];
  
  const chartOptions = {
    chart: {
      type: "bar",
      stacked: true,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    colors: ["#10CCAE", "#F35242"],
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  };
</script>