<template>
  <VueApexCharts
    class="circleChart"
    :series="series"
    :options="config"
  ></VueApexCharts>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";

const props = defineProps({
  series: {
    required: true,
  },
  colors: {
    default: ["#3699FF", "#F64E60", "#8950FC"],
  },
});

const config = {
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
      donut: {
        size: "80%",
      },
    },
  },
  colors: props.colors,
  legend: {
    position: "bottom",
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
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: true,
      text: "متن وسط",
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