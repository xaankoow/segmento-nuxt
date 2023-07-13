<template>
  <div class="flex w-full items-center">
    <div class="mx-auto">
      <form
        @submit.prevent="send_active_code_to_email()"
        class="flex flex-col gap-11 w-full items-center"
      >
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input
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
          <input
            v-model="form.email"
            type="email"
            required
            @focus="email.focus()"
            @blur="email.leave()"
          />
          <label for="email" :class="email.transitionStyle(form.email)">
            {{ config.by_route(`${current_page}/email`) }}
          </label>
        </div>
        <div class="flex flex-row gap-1 w-[22.625rem]">
          <div class="custom_input_box text-base-content w-[22.625rem]">
            <input
              v-model="form.password"
              type="password"
              minlength="8"
              required
              @focus="password.focus()"
              @blur="password.leave()"
            />
            <label
              for="password"
              :class="password.transitionStyle(form.password)"
            >
              {{ config.by_route(`${current_page}/password`) }}
            </label>
          </div>
          <div class="custom_input_box text-base-content w-[22.625rem]">
            <input
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
              :class="
                confirmPassword.transitionStyle(form.password_confirmation)
              "
            >
              {{ config.by_route(`${current_page}/confirmPassword`) }}
            </label>
          </div>
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
            </NuxtLink></label
          >
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script setup>
import { CustomTextBox } from "../../../composables/CustomTextBox";
import Config from "../../../composables/Config";
import Request from "../../../Api/Request";
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

async function send_active_code_to_email() {
  if (form.value.password !== form.value.password_confirmation) {
    // TODO: TOAST message to confirm password
    document.getElementById("confirm").focus();
  } else {
    let response = await request.post("auth/register", form.value, "v1");

    if (response.status()) {
      // TODO: TOAST active code sended to email then after 3 second redirect to verify page
      navigateTo({ path: "/auth/signup/verify", query: {email: form.value.email}} );
    }
    // TODO: TOAST message for failed
    console.log(response.errors());
  }
}

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>
  