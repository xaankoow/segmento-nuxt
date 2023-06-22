<template>
  <div class="flex w-full items-center">
    <div class="mx-auto">
      <div class="flex flex-col gap-11 w-full items-center">
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input
            v-model="form.fullname"
            type="text"
            @focus="fullname.focus()"
            @blur="fullname.leave()"
          />
          <label
            for="fullname"
            :class="fullname.transitionStyle(form.fullname)"
          >
            {{ content.fullname }}
          </label>
        </div>
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input
            v-model="form.email"
            type="email"
            @focus="email.focus()"
            @blur="email.leave()"
          />
          <label for="email" :class="email.transitionStyle(form.email)">
            {{ content.email }}
          </label>
        </div>
        <div class="flex flex-row gap-1 w-[22.625rem]">
          <div class="custom_input_box text-base-content w-[22.625rem]">
            <input
              v-model="form.password"
              type="password"
              @focus="password.focus()"
              @blur="password.leave()"
            />
            <label
              for="password"
              :class="password.transitionStyle(form.password)"
            >
              {{ content.password }}
            </label>
          </div>
          <div class="custom_input_box text-base-content w-[22.625rem]">
            <input
              v-model="form.confirmPassword"
              type="password"
              @focus="confirmPassword.focus()"
              @blur="confirmPassword.leave()"
            />
            <label
              for="confirmPassword"
              :class="confirmPassword.transitionStyle(form.confirmPassword)"
            >
              {{ content.confirmPassword }}
            </label>
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <button
          @click="send_active_code_to_email"
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md"
          >
            {{ content.signup }}
          </button>
          <label class="text-xs">
            <NuxtLink to="/auth/login">
              {{ content.currently_signed }}
            </NuxtLink></label
          >
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { CustomTextBox } from "../../../composables/CustomTextBox";
definePageMeta({
  layout: "login",
});
const fullname = new CustomTextBox();
const email = new CustomTextBox();
const password = new CustomTextBox();
const confirmPassword = new CustomTextBox();

const send_active_code_to_email = () => {
  // TODO : API for send email 

  navigateTo('/auth/signup/verify')
}

const form = ref({
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const content = ref({
  fullname: "نام و نام‌خانوادگی",
  email: "ایمیل",
  password: "گذرواژه",
  confirmPassword: "تکرار گذرواژه",
  signup: "عضویت",
  currently_signed: "حساب کاربری دارم!",
});
</script>
  