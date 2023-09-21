<template>
  <!-- loading -->
  <div
    v-if="request.pending.value"
    class="top-0 left-0 w-full h-screen fixed z-50 bg-base-350/40 flex justify-center items-center"
  >
    <ToolsLoading class="w-32 h-32" />
  </div>

  <div class="flex w-full items-center">
    <div class="mx-auto">
      <form
        @submit.prevent="send_active_code_to_email()"
        class="flex flex-col gap-11 w-full items-center"
      >
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <InputText
            v-model="form.name"
            type="text"
            required
            @focus="fullname.focus()"
            @blur="fullname.leave()"
          />
          <label for="fullname" :class="fullname.transitionStyle(form.name)">
            {{ config.by_route(`${current_page}/fullname`) }}
          </label>
        </div>
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <InputText
            dir="ltr"
            v-model="form.email"
            type="email"
            required
            @focus="email.focus()"
            @blur="email.leave()"
            id="email_box"
          />
          <label for="email" :class="email.transitionStyle(form.email)">
            {{ config.by_route(`${current_page}/email`) }}
          </label>
          <span class="text-error text-xs" v-show="response_errors.email">{{
            config.by_route(`${current_page}/email_exists`)
          }}</span>
        </div>
        <div class="relative flex flex-row gap-1 w-[22.625rem]">
          <div class="custom_input_box text-base-content w-[22.625rem]">
            <InputText
              dir="ltr"
              v-model="form.password"
              type="password"
              minlength="8"
              required
              @focus="password.focus()"
              id="password"
              @blur="password.leave()"
            />
            <label for="password" :class="password.transitionStyle(form.password)">
              {{ config.by_route(`${current_page}/password`) }}
            </label>
          </div>
          <div class="custom_input_box text-base-content w-[22.625rem]">
            <InputText
              dir="ltr"
              v-model="form.password_confirmation"
              id="confirm"
              type="password"
              required
              minlength="8"
              @focus="confirmPassword.focus()"
              @blur="confirmPassword.leave()"
            />
            <label
              for="confirmPassword"
              :class="confirmPassword.transitionStyle(form.password_confirmation)"
            >
              {{ config.by_route(`${current_page}/confirmPassword`) }}
            </label>
          </div>
          <span class="absolute -bottom-5 text-error text-xs">{{ password_error }}</span>
        </div>
        <div class="flex justify-between w-full items-center">
          <button
            type="submit"
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md"
          >
            {{ config.by_route(`${current_page}/signup`) }}
          </button>
          <label class="text-xs">
            <NuxtLink to="/auth/login">
              {{ config.by_route(`${current_page}/currently_signed`) }}
            </NuxtLink>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { CustomTextBox } from "~~/composables/CustomTextBox";
import Config from "~~/composables/Config";
import Request from "~~/Api/Request";
definePageMeta({
  layout: "login",
});
const current_page = "pages/auth/sign-up";
const request = new Request();
const config = new Config();
const fullname = new CustomTextBox();
const email = new CustomTextBox();
const password = new CustomTextBox();
const confirmPassword = new CustomTextBox();
const password_error = ref("");
const response_errors = ref({
  email: false,
  password: false,
  ref: false,
  password_confirmation: false,
});

async function send_active_code_to_email() {
  if (!form_validation()) {
    return 0; // Do not continue;
  }
  let response = await request.post("auth/register", form.value);

  if (response.ok) {
    // TODO: TOAST active code sended to email then after 3 second redirect to verify page
    return navigateTo({
      path: "/auth/signup/verify",
      query: { email: form.value.email },
    });
  }

  response_errors.value.email = !!response.errors.email;
  response_errors.value.password = !!response.errors.password;
  response_errors.value.password_confirmation = !!response.errors.password_confirmation;
  response_errors.value.ref = !!response.errors.ref;

  if (response_errors.value.email) {
    let email_box = document.getElementById("email_box");
    email_box.classList.add("border-b-2", "border-b-error");
  }
}

function form_validation() {
  let password_box = document.getElementById("password");
  let confirm_box = document.getElementById("confirm");

  if (form.value.password.length < 8) {
    password_box.classList.add("border-b-2", "border-b-error");
    password_error.value = config.by_route(`${current_page}/password_length`);
    return false;
  }
  if (form.value.password !== form.value.password_confirmation) {
    confirm_box.classList.add("border-b-2", "border-b-error");
    password_box.classList.add("border-b-2", "border-b-error");
    password_error.value = config.by_route(`${current_page}/password_confirm`);
    confirm_box.focus();
    return false;
  }
  confirm_box.classList.remove("border-b-2", "border-b-error");
  password_box.classList.remove("border-b-2", "border-b-error");
  password_error.value = "";

  return true;
}

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>
