<template>
  <div class="flex flex-col w-full mx-11 gap-12 mt-[3.75rem]">
    <div
      class="absolute w-screen h-screen flex items-center justify-center top-0 left-0 bg-base-100/10 pointer-events-none"
      v-show="request.pending">
      <ToolsLoading class="w-56 h-56" />
    </div>
    <span v-html="config.by_route(`${current_page}/description`)"> </span>
    <div class="flex flex-col gap-10 w-[36.438rem]">
      <!-- step 1 => send code to email -->
      <form @submit.prevent="sendActiveCode()" class="flex flex-row justify-between items-center"
            :class="step !== 1 ? 'pointer-events-none opacity-80' : ''">
        <div class="custom_input_box w-[16.25rem]">
          <InputText dir="ltr" v-model="form.email" type="email" id="email_box" required @focus="email.focus()"
                 @blur="email.leave()" />
          <label :class="email.transitionStyle(form.email)">
            {{ config.by_route(`${current_page}/email`) }}
          </label>
          <span class="text-error text-xs" v-show="email_error">{{ email_error }}</span>
        </div>
        <div class="flex flex-row-reverse items-center gap-2">
          <button type="submit" class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md">
            {{ config.by_route(`${current_page}/receive_code`) }}
          </button>
          <span class="countdown font-mono text-2xl">
            <span :style="`--value:  ${secondTimer}`"></span>:
            <span :style="`--value: ${minuteTimer}`"></span>
          </span>
        </div>
      </form>

      <!-- step 2 => confirm email code -->
      <form @submit.prevent="verifyCode()" class="flex flex-row justify-between items-center"
            :class="step !== 2 ? 'pointer-events-none opacity-80' : ''">
        <div class="relative flex flex-col gap-3 items-center w-[16.25rem]">
          <span>
            {{ config.by_route(`${current_page}/active_code`) }}
          </span>
          <div
            class="flex flex-row gap-5 text-base-content [&>input]:w-1/4 [&>input]:p-2 [&>input]:text-center [&>input]:rounded-md"
            style="direction: ltr">
            <InputText id="number_1" type="number" :max="9" :min="0" />
            <!-- TODO: change focus when keypress for ones -->
            <InputText id="number_2" type="number" :max="9" :min="0" />
            <!-- TODO: change focus when keypress for ones -->
            <InputText id="number_3" type="number" :max="9" :min="0" />
            <!-- TODO: change focus when keypress for ones -->
            <InputText id="number_4" type="number" :max="9" :min="0" />
            <!-- TODO: change focus when keypress for ones -->
          </div>
          <span class="absolute -bottom-5 text-error text-xs" v-show="code_error">{{ code_error }}</span>
        </div>
        <div class="h-full flex items-end pb-1">
          <button type="submit" class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md">
            {{ config.by_route(`${current_page}/btn_accept_code`) }}
          </button>
        </div>
      </form>

      <!-- step 3 => password and confirmed -->
      <form @submit.prevent="changePassword()" class="flex flex-col gap-12 mt-8">
        <div class="relative flex flex-row gap-5 w-full items-center" :class="step !== 3 ? 'pointer-events-none opacity-80' : ''">
          <div class="custom_input_box w-1/2">
            <InputText dir="ltr" v-model="form.password" type="password" @focus="password.focus()" @blur="password.leave()"
                   id="password" />
            <label :class="password.transitionStyle(form.password)">
              {{ config.by_route(`${current_page}/password`) }}
            </label>
          </div>
          <div class="custom_input_box w-1/2">
            <InputText dir="ltr" v-model="form.password_confirmation" type="password" @focus="confirmPassword.focus()"
                   id="password_confirm" @blur="confirmPassword.leave()" />
            <label :class="confirmPassword.transitionStyle(form.password_confirmation)">
              {{ config.by_route(`${current_page}/confirmPassword`) }}
            </label>
          </div>
          <span class="absolute text-error text-xs -bottom-5">{{ password_error }}</span>
        </div>
        <div class="flex flex-row justify-between items-center">
          <button type="submit" :class="step !== 3 ? 'pointer-events-none opacity-80' : ''"
                  class="bg-base-100 hover:bg-base-250 text-base-content border-none w-[10.125rem] h-11 rounded-md">
            {{ config.by_route(`${current_page}/btn_accept_password`) }}
          </button>
          <label class="text-xs">
            <NuxtLink to="/auth/signup">
              {{ config.by_route(`${current_page}/signup_link_text`) }}
            </NuxtLink>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>
    
<script setup>
import Request from "~~/Api/Request";
import Config from "~~/composables/Config";
import { CustomTextBox } from "~~/composables/CustomTextBox";

definePageMeta({
  layout: "login",
});

const current_page = "pages/auth/forget";
const config = new Config();
const request = new Request();

const step = ref(1);
const email = new CustomTextBox();
const password = new CustomTextBox();
const confirmPassword = new CustomTextBox();
const secondTimer = ref(0);
const minuteTimer = ref(0);
const time = ref(120);

const email_error = ref(false);
const code_error = ref(false);
const password_error = ref('');

const form = ref({
  email: "",
  code: "",
  password: "",
  password_confirmation: "",
});

// This is for step 1
async function sendActiveCode() {
  let email_box = document.getElementById("email_box");
  step.value = 10;
  let response = await request.post(
    "auth/forgot-password",
    { email: form.value.email }
  );

  if (response.status_code() < 300) {
    if (response.status()) {
      step.value = 2;
      // TODO : TOAST send active code to email was successfully
      start_timer();
      email_box.classList.remove("border-b-2", "border-b-error");
      email_error.value = false;
      return;
    }
  }
  email_box.classList.add("border-b-2", "border-b-error");
  email_error.value = true;
  step.value = 1;
}

async function verifyCode() {
  let number_1 = document.getElementById("number_1").value;
  let number_2 = document.getElementById("number_2").value;
  let number_3 = document.getElementById("number_3").value;
  let number_4 = document.getElementById("number_4").value;

  form.value.code = Number(`${number_1}${number_2}${number_3}${number_4}`);

  step.value = 10;
  let response = await request.post("auth/verifyCode", form.value, "v1");

  if (response.status()) {
    step.value = 3;
    code_error.value = false;
  } else {
    step.value = 2;
    code_error.value = true;
  }
}

async function changePassword() {
  if (!password_validation()) {
    return 0; // Do not continue code.
  }

  let response = await request.post("auth/change-password", form.value, "v1");

  if (response.status()) {
    // TODO : TOAST success message
    return navigateTo("/auth/login");
  } else {
    // TODO : TOAST error message
    password_error.value = response.errors().password[0] ?? ''
  }
}

function password_validation() {
  let password_box = document.getElementById("password");
  let confirm_box = document.getElementById("password_confirm");

  if (form.value.password.length < 8) {
    password_box.classList.add("border-b", "border-b-error");
    password_error.value = config.by_route(`${current_page}/password_length`);
    password_box.focus();
    return false;
  }
  if (form.value.password !== form.value.password_confirmation) {
    password_box.classList.add("border-b-2", "border-b-error");
    confirm_box.classList.add("border-b-2", "border-b-error");
    password_error.value = config.by_route(`${current_page}/password_confirm`);
    confirm_box.focus();
    return false;
  }

  password_box.classList.remove("border-b-2", "border-b-error");
  confirm_box.classList.remove("border-b-2", "border-b-error");
  password_error.value = '';
  return true;
}

function start_timer() {
  let timeId = setInterval(() => {
    time.value--;
    secondTimer.value = time.value % 60;
    minuteTimer.value = (time.value - secondTimer.value) / 60;

    if (time.value <= 0) {
      clearInterval(timeId);
    }
  }, 1000);
}
</script>

<style scope>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
