<template>
  <VueApexCharts :options="options" :series="series"></VueApexCharts>
</template>
<script setup>
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  series: {
    required: true,
  },
  colors: {
    default: ["#D9D9D9", "#10CCAE", "#F35242"],
  },
});
const options = {
  chart: {
    type: "bar",
    stacked: true,
    color: "#000000",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: props.colors,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        total: {
          enabled: false,
          offsetX: 0,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
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