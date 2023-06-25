<template>
  <div
    class="flex flex-col gap-7 items-center border rounded-md w-56 px-2 shadow-md"
  >
    <div
      class="h-20 flex items-center align-middle text-lg w-full border-b"
      :class="color"
    >
      <span class="mx-auto">
        {{ name }}
      </span>
    </div>
    <div class="flex flex-col gap-3 w-full text-base-500">
      <div
        class="flex flex-row justify-between items-center border border-base-200 rounded-sm p-2"
      >
        <slot name="options"></slot>
      </div>
    </div>
    <span
      class="flex flex-col items-center gap-2 font-semibold font-serif text-base-500"
      style="font-size: 0.7rem"
    >
      <span class="h-6"
        ><del :class="validate_discount ? 'block' : 'hidden'"
          >{{ price }} هزار تومان ماهانه</del
        ></span
      >
      <span
        :class="validate_discount ? 'text-primary' : ''"
        :style="validate_discount ? `font-size: 0.875rem` : ''"
        >{{ price }} هزار تومان ماهانه</span
      >
    </span>
    <div>
      <div class="custom_input_box my-2">
        <input
          v-model="discountText"
          type="text"
          @focus="discountBox.focus()"
          @blur="discountBox.leave()"
          class="!border-2"
          :class="validate_discount ? '!border-b-2 !border-b-success' : ''"
        />
        <label
          class="text-base-content"
          :class="
            discountBox.transitionStyle(discountText, 'text-base-content')
          "
        >
          کد تخفیف</label
        >
        <button
          @click="validate_discount = thePackage.check_discount(discountText)"
          :class="discountBox.fullTextBox(discountText) ? 'absolute' : 'hidden'"
          class="left-2 top-2 transition-all duration-300 transform text-sm"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_134_2892"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect
                x="24"
                y="24"
                width="24"
                height="24"
                transform="rotate(180 24 24)"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_134_2892)">
              <path
                d="M12.525 4.8998C12.675 5.0498 12.75 5.22914 12.75 5.4378C12.75 5.6458 12.6833 5.82481 12.55 5.97481L7.25 11.2498L18.875 11.2498C19.075 11.2498 19.25 11.3208 19.4 11.4628C19.55 11.6041 19.625 11.7831 19.625 11.9998C19.625 12.2165 19.55 12.3958 19.4 12.5378C19.25 12.6791 19.075 12.7498 18.875 12.7498L7.25 12.7498L12.55 18.0248C12.6833 18.1748 12.75 18.3538 12.75 18.5618C12.75 18.7705 12.675 18.9498 12.525 19.0998C12.375 19.2331 12.2 19.2998 12 19.2998C11.8 19.2998 11.625 19.2331 11.475 19.0998L5.025 12.6248C4.925 12.5415 4.854 12.4458 4.812 12.3378C4.77067 12.2291 4.75 12.1165 4.75 11.9998C4.75 11.8831 4.77067 11.7708 4.812 11.6628C4.854 11.5541 4.925 11.4581 5.025 11.3748L11.475 4.8998C11.625 4.76647 11.8 4.69981 12 4.69981C12.2 4.69981 12.375 4.76647 12.525 4.8998Z"
                fill="#0A65CD"
              />
            </g>
          </svg>
        </button>
        <span
          class="text-error text-xs left-0 -translate-y-5"
          style="font-size: 0.625rem"
          :class="validate_discount === false ? 'absolute' : 'hidden'"
        >
          کد تخفیف نادرست است
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CustomTextBox } from "../../composables/CustomTextBox";
import { Package } from "../../composables/Package";

const validate_discount = ref(null);
const thePackage = new Package();
const discountBox = new CustomTextBox();
const discountText = ref("");
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>