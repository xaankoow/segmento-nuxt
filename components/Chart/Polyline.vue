<template>
  <svg
    :width="points.width()"
    :height="points.height()"
    :viewBox="`0 0 ${points.width()} ${points.height()}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline
      :points="points.points()"
      class="fill-none"
      :class="success ? 'stroke-success' : 'stroke-error'"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="stroke-width: 0.13rem"
      :style="
        success
          ? `
        --tw-drop-shadow: drop-shadow(0px 9px 5px #10CCAE88)
          drop-shadow(0 3px 3px #10CCAE88);
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);`
          : `
        --tw-drop-shadow: drop-shadow(0px 9px 5px #F3524288)
          drop-shadow(0 3px 3px #F3524288);
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);`
      "
    />
    Sorry, your browser does not support inline SVG.
  </svg>
</template>

<script setup>
import { PolylineChart } from "../../composables/Component/PolylineChart";

const props = defineProps({
  points: {
    type: PolylineChart,
    required: true,
  },
  success: {
    type: Boolean,
    default: true,
  },
});
</script>