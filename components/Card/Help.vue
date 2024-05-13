<template>
  <div class="flex flex-col justify-between border rounded-md" :class="active ? 'shadow-md' : ''">
    <!-- title -->
    <div class="flex flex-col">
      <span class="tooltip tooltip-top flex flex-row justify-end cursor-pointer pt-1 pl-1" :data-tip="tooltip">
        <SvgHelp />
      </span>
      <span class="flex w-full justify-center items-center">{{ title }} </span>
    </div>
    <!-- content -->
    <slot></slot>
    <button class="rounded-b-md w-full flex justify-center mt-1"
      :class="active ? 'bg-primary [&>svg]:fill-base-100' : 'bg-base-250 [&>svg]:fill-base-content'">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_2_563" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2_563)">
          <path
            d="M12.0016 15.0496L6.35156 9.39961L7.40156 8.34961L12.0016 12.9496L16.6016 8.34961L17.6516 9.39961L12.0016 15.0496Z" />
        </g>
      </svg>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  tooltip: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false
  }
});
</script>