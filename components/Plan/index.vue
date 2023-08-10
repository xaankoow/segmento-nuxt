<template>
  <div
    class="flex flex-col justify-between items-center border-2 h-[35rem] rounded-md shadow transition-all duration-300 hover:shadow-lg">
    <div class="hidden">
      text-[#BF8970] border-b-[#BF8970]
      text-[#7D7D7D] border-b-[#7D7D7D]
      text-[#FFCE47] border-b-[#FFCE47]
      text-[#0A65CD] border-b-[#0A65CD]
    </div>
    <!-- plan content -->
    <div class="flex flex-col gap-12 items-center w-full pb-8">
      <!-- header and title -->
      <div class="w-11/12 flex flex-row items-center justify-center text-xl h-24" :class="package_color()">
        {{ _package.name }}
      </div>

      <!-- packages section -->
      <div class="w-11/12 flex flex-col gap-4">
        <div class="flex flex-row items-center justify-between p-2 border text-base-500" v-for="pln in _package.plans"
          :key="pln.uuid">
          <!-- title -->
          <div class="flex flex-row items-center gap-2">
            <input type="radio" class="w-4 h-4" name="radio" @change="_package.select_plan(pln.uuid)" />
            <span>{{ pln.name }}</span>
          </div>
          <!-- discount title -->
          <span class="flex items-center text-xs" style="font-size: 0.7rem">
            {{ pln.discount_title }}
          </span>
        </div>
      </div>
    </div>

    <!-- discount section -->
    <div class="flex flex-col items-center mb-2 w-11/12 gap-12">
      <!-- price view -->
      <div class="flex flex-col w-full items-center gap-1">
        <del class="text-xs" v-if="discount_result.status">
          <span :style="`direction: ${currency.left_side ? 'rtl' : 'ltr'};`">
            {{ _package.selected_plan()?.price.final }}
            {{ _package.selected_plan() !== undefined ? currency.title : "" }}
          </span>
        </del>
        <span :class="discount_result.status ? 'font-semibold text-primary' : ''"
          :style="`direction: ${currency.left_side ? 'rtl' : 'ltr'};`">
          {{
            _package.calculate_discount(
              _package.selected_plan(),
              discount_result.discount?.value ?? null,
              2
            )
          }}
          {{ _package.selected_plan() !== undefined ? currency.title : "" }}
        </span>
      </div>

      <div class="custom_input_box my-2">
        <input v-model="discount" type="text" @focus="discountBox.focus()" @blur="discountBox.leave()" class="!border-2"
          :class="discount_result.status ? '!border-b-2 !border-b-success' : ''" />
        <label class="text-base-content" :class="discountBox.transitionStyle(discount, 'text-base-content')">
          {{ config.by_route("components/plan/discount") }}</label>
        <button @click="discount_result = _package.check_discount(discount)"
          :class="discountBox.fullTextBox(discount) ? 'absolute' : 'hidden'"
          class="left-2 top-2 transition-all duration-300 transform text-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_134_2892" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
              height="24">
              <rect x="24" y="24" width="24" height="24" transform="rotate(180 24 24)" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_134_2892)">
              <path
                d="M12.525 4.8998C12.675 5.0498 12.75 5.22914 12.75 5.4378C12.75 5.6458 12.6833 5.82481 12.55 5.97481L7.25 11.2498L18.875 11.2498C19.075 11.2498 19.25 11.3208 19.4 11.4628C19.55 11.6041 19.625 11.7831 19.625 11.9998C19.625 12.2165 19.55 12.3958 19.4 12.5378C19.25 12.6791 19.075 12.7498 18.875 12.7498L7.25 12.7498L12.55 18.0248C12.6833 18.1748 12.75 18.3538 12.75 18.5618C12.75 18.7705 12.675 18.9498 12.525 19.0998C12.375 19.2331 12.2 19.2998 12 19.2998C11.8 19.2998 11.625 19.2331 11.475 19.0998L5.025 12.6248C4.925 12.5415 4.854 12.4458 4.812 12.3378C4.77067 12.2291 4.75 12.1165 4.75 11.9998C4.75 11.8831 4.77067 11.7708 4.812 11.6628C4.854 11.5541 4.925 11.4581 5.025 11.3748L11.475 4.8998C11.625 4.76647 11.8 4.69981 12 4.69981C12.2 4.69981 12.375 4.76647 12.525 4.8998Z"
                fill="#0A65CD" />
            </g>
          </svg>
        </button>
        <span v-if="discount_result.status !== null" class="text-error text-xs left-0 -translate-y-5"
          style="font-size: 0.625rem" :class="!discount_result.status ? 'absolute' : 'hidden'">
          {{ discount_result.message }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Config from "../../composables/Config";
import { CustomTextBox } from "../../composables/CustomTextBox";
import Package from "../../Models/Package";

const props = defineProps({
  _package: {
    type: Package,
    required: true,
  },
  currency: {
    default() {
      return {
        title: "تومان",
        left_side: true,
      };
    },
  },
});

const config = new Config();
const discount = ref("");
const discountBox = new CustomTextBox();
const discount_result = ref({
  message: "کد تخفیف صحیح است",
  status: null,
  discount: {
    value: 5,
    type: 1,
  },
});
function package_color() {
  return `text-[${props._package.color}] border-b border-b-[${props._package.color}]`;
}
</script>