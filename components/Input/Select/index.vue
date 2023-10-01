<template>
  <div class="relative h-fit transition rounded ease-in-out delay-150">
    <!-- header -->
    <div class="cursor-pointer relative w-full text-right p-2" :class="isOpen ? 'border border-b-[#0A65CD] border-b-[2px] rounded-b-[3px]': ''"
         @click="isOpen = !isOpen">
      <div>
        <slot name="title"></slot>
        <span class="absolute top-1/2 left-4">
        <svg class="translate-y-[-50%] transition ease-in-out delay-0" :class="isOpen ? 'rotate-180': ''"
             xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             fill="none">
          <mask id="mask0_6446_9693" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                height="24">
            <rect x="0.796875" width="22.3913" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_6446_9693)">
            <path
              d="M3.53544 15.4109L11.2791 7.08594C11.3568 7.0026 11.4464 6.94027 11.5478 6.89894C11.6486 6.85694 11.7534 6.83594 11.8622 6.83594C11.9711 6.83594 12.0762 6.85694 12.1776 6.89894C12.2783 6.94027 12.3676 7.0026 12.4453 7.08594L20.2123 15.4109C20.3989 15.6109 20.4922 15.8443 20.4922 16.1109C20.4922 16.3776 20.3911 16.6193 20.189 16.8359C20.0179 17.0359 19.8043 17.1359 19.548 17.1359C19.2911 17.1359 19.0694 17.0359 18.8828 16.8359L11.8622 9.28594L4.81828 16.8359C4.64723 17.0193 4.43731 17.1109 4.18852 17.1109C3.93973 17.1109 3.72204 17.0109 3.53544 16.8109C3.34885 16.6109 3.25555 16.3776 3.25555 16.1109C3.25555 15.8443 3.34885 15.6109 3.53544 15.4109Z"
              fill="#063468"/>
          </g>
        </svg>
        </span>
      </div>
    </div>
    <!-- content -->
    <div class=" bg-base-100 z-50 shadow-sm border right-[-1px] w-[546px] border-t-0"
         :class="isOpen ? 'open absolute ' : 'hidden'">
      <div class="flex gap-[9px] flex-col p-2" @click="isOpen=false">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
