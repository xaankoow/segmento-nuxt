<template>
  <VueApexCharts :series="series" :options="config"></VueApexCharts>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  series: {
    required: true,
  },
});
const config = {
  chart: {
    width: 380,
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
  },
};
</script>