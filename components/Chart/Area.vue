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
    default: ["#10CCAE"],
  },
});
const options = {
  chart: {
    type: "area",
    height: 350,
    stacked: true,
  },
  colors: props.colors,
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
};
</script>