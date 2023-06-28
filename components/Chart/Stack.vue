<template>
  <VueApexCharts :options="options" :series="series"></VueApexCharts>
</template>
<script setup>
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  series: {
    required: true,
  },
});
const options = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    stackType: "100%",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  fill: {
    opacity: 1,
  },
  legend: {
    position: "right",
    offsetX: 0,
    offsetY: 50,
  },
};
</script>