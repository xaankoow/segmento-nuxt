<template>
  <div
    class="w-[200px] h-[168px] bg-white border border-base-400 rounded-[9px] overflow-hidden"
  >
    <!-- header -->
    <div class="w-full h-9 flex items-center justify-center text-[14px] relative">
      <slot name="header"></slot>
    </div>
    <!-- main (chart) -->
    <div
      id="chart"
      class="w-full relative flex items-center justify-center h-14"
    >
    <slot name="main"></slot>
    </div>
    <!-- footer -->
    <div class="w-full h-14 flex">
      <slot name="footer"></slot>
    </div>
    <div
      class="w-full h-5 flex items-center justify-center bg-base-400 cursor-pointer"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_5618_21190"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_5618_21190)">
          <path
            d="M12.0016 15.0516L6.35156 9.40156L7.40156 8.35156L12.0016 12.9516L16.6016 8.35156L17.6516 9.40156L12.0016 15.0516Z"
            fill="#002145"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
</script>
