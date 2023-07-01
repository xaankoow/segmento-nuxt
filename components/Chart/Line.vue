<template>
  <VueApexCharts :options="options" :series="series"></VueApexCharts>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";

const porps = defineProps({
  series: {
    required: true,
  },
});

const options = {
  chart: {
    height: 130,
    type: "line",
    brush: {
      target: "chart2",
      enabled: false,
    },
    selection: {
      xaxis: {
        min: new Date("19 Jun 2017").getTime(),
        max: new Date("14 Aug 2017").getTime(),
      },
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: "#0AC7E2",
    width: 2,
    dashArray: 0,
  },
  grid: {
    show: true,
    borderColor: "#90A4AE",
    strokeDashArray: 1,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};
</script>