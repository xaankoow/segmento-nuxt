<template>
  <div class="flex flex-col w-full mx-11 gap-12 mt-[3.75rem]">
    <span v-html="content.description"> </span>
    <div class="flex flex-col gap-10 w-[36.438rem]">
      <!-- step 1 => send code to eamil -->
      <div
        class="flex flex-row justify-between items-center"
        :class="step !== 1 ? 'pointer-events-none opacity-80' : ''"
      >
        <div class="custom_input_box w-[16.25rem]">
          <input
            v-model="form.email"
            type="email"
            @focus="email.focus()"
            @blur="email.leave()"
          />
          <label :class="email.transitionStyle(form.email)">
            {{ content.email }}
          </label>
        </div>
        <div class="flex flex-row-reverse items-center gap-2">
          <button
            @click="sendActiveCode()"
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md"
          >
            {{ content.recive_code }}</button
          ><span class="countdown font-mono text-2xl">
            <span
              :style="`--value:  ${secondTimer.duration()}`"
            ></span
            >:
            <span :style="`--value: ${minuteTimer.duration()}`"></span>
          </span>
        </div>
      </div>
      <!-- step 2 => confirm email code -->
      <div
        class="flex flex-row justify-between items-center"
        :class="step !== 2 ? 'pointer-events-none opacity-80' : ''"
      >
        <div class="flex flex-col gap-3 items-center w-[16.25rem]">
          <span>
            {{ content.active_code }}
          </span>
          <div
            class="flex flex-row gap-5 text-base-content [&>input]:w-1/4 [&>input]:p-2 [&>input]:text-center [&>input]:rounded-md"
            style="direction: ltr"
          >
            <input type="text" maxlength="1" minlength="1" />
            <input type="text" maxlength="1" minlength="1" />
            <input type="text" maxlength="1" minlength="1" />
            <input type="text" maxlength="1" minlength="1" />
          </div>
        </div>
        <div class="h-full flex items-end pb-1">
          <button
            @click="step++"
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md"
          >
            {{ content.btn_accept_code }}
          </button>
        </div>
      </div>
      <!-- step 3 => password and confirmed -->
      <div
        class="flex flex-col gap-12 mt-8"
        :class="step !== 3 ? 'pointer-events-none opacity-80' : ''"
      >
        <div class="flex flex-row gap-5 w-full items-center">
          <div class="custom_input_box w-1/2">
            <input
              v-model="form.password"
              type="password"
              @focus="password.focus()"
              @blur="password.leave()"
            />
            <label :class="password.transitionStyle(form.password)">{{
              content.password
            }}</label>
          </div>
          <div class="custom_input_box w-1/2">
            <input
              v-model="form.confirmPassword"
              type="password"
              @focus="confirmPassword.focus()"
              @blur="confirmPassword.leave()"
            />
            <label
              :class="confirmPassword.transitionStyle(form.confirmPassword)"
              >{{ content.confirmPassword }}</label
            >
          </div>
        </div>
        <div class="flex flex-row justify-between items-center">
          <button
            @click="step++"
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-[10.125rem] h-11 rounded-md"
          >
            {{ content.btn_accept_password }}
          </button>
          <label class="text-xs">
            <NuxtLink to="/auth/signup">
              {{ content.signup_link_text }}
            </NuxtLink></label
          >
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
import { CustomTextBox } from "../../composables/CustomTextBox";
import { Timer } from "../../composables/Timer";
definePageMeta({
  layout: "login",
});
const timer_check = () => {
  if (minuteTimer.duration() > 0) {
    if (secondTimer.duration() === 0) {
      secondTimer.setDuration(5);
      minuteTimer.setDuration(minuteTimer.duration() - 1);
    }
  }
  else {
    if (! secondTimer.enable()) {
      step.value--;
    }
  }
};
const sendActiveCode = () => {
  secondTimer.start();
  timer_check();
  step.value++;
  // TODO : Send email to backend to recive code
};
const step = ref(1);
const email = new CustomTextBox();
const password = new CustomTextBox();
const confirmPassword = new CustomTextBox();
const secondTimer = new Timer(0);
const minuteTimer = new Timer(2);
const form = ref({
  email: "",
  code: "",
  password: "",
  confirmPassword: "",
});

const content = ref({
  description:
    "گذرواژه خود را فراموش کرده اید . هیچ ایرادی نداره <br />ایمیل خودتون رو برامون بنویسین تا ما یک کد فعال سازی ارسال کنیم .<br />کد رو وارد کنین و گذرواژه جدیدتون رو بنویسین برامون . به همین سادگی",
  email: "ایمیل",
  password: "گذرواژه جدید",
  confirmPassword: "تکرار گذرواژه جدید",
  signup: "عضویت",
  currently_signed: "حساب کاربری دارم!",
  recive_code: "دریافت کد",
  active_code: "کد فعال سازی",
  btn_accept_code: "تایید کد",
  btn_accept_password: "ذخیره گذرواژه",
  signup_link_text: "حساب کاربری ندارم!",
});
</script>
    