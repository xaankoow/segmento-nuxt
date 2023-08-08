<template>
  <div class="flex w-full items-center">
    <div class="mx-auto">
      <form @submit.prevent="requestToLogin()" class="flex flex-col gap-8 w-full items-center">
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input dir="ltr" v-model="form.email" type="email" required @focus="emailBox.focus()" id="input_email"
            @blur="emailBox.leave()" />
          <label for="email" :class="emailBox.transitionStyle(form.email)">
            {{ config.by_route(`${current_page}/email`) }}
          </label>
          <span class="text-error text-xs" v-show="error_happened">{{ config.by_route(`${current_page}/error`) }}</span>
        </div>
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input dir="ltr" v-model="form.password" type="password" minlength="8" @focus="passwordBox.focus()"
            id="input_password" @blur="passwordBox.leave()" required />
          <label for="email" :class="passwordBox.transitionStyle(form.password)">
            {{ config.by_route(`${current_page}/password`) }}
          </label>
        </div>
        <div class="flex justify-between w-full items-center">
          <button type="submit" class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md">
            {{ config.by_route(`${current_page}/open`) }}
          </button>
          <label class="text-xs">
            <NuxtLink to="/auth/forget">
              {{ config.by_route(`${current_page}/forget`) }}
            </NuxtLink>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import Config from "../../composables/Config";
import { CustomTextBox } from "../../composables/CustomTextBox";
import Request from "../../Api/Request";
import ConfigStore from "../../store/ConfigStore";

definePageMeta({
  layout: "login",
});

const config = new Config();
const current_page = "pages/auth/login";
const emailBox = new CustomTextBox();
const passwordBox = new CustomTextBox();
const request = new Request();
const error_happened = ref(false);
const form = ref({
  email: "",
  password: "",
});
async function requestToLogin() {
  let response = await request.post("auth/login", form.value);
  let email_box = document.getElementById("input_email");
  let password_box = document.getElementById("input_password");

  if (response.status()) {

    // TODO : Fix this section later
    let user = response.data().user;
    if (!user.img) {
      user.img = "/images/profileDefaultImg.png";
    }
    email_box.classList.remove("border-b-2");
    password_box.classList.remove("border-b-2");
    email_box.classList.remove("border-b-error");
    password_box.classList.remove("border-b-error");
    error_happened.value = false;

    ConfigStore.set_token(response.data().token);
    ConfigStore.set_user(JSON.stringify(user));
    ConfigStore.set_plan(JSON.stringify(response.data().plan));
    ConfigStore.set_wallets(JSON.stringify(response.data().wallets));
    ConfigStore.set_workspaces(JSON.stringify(response.data().workspaces));
    ConfigStore.set_roles(JSON.stringify(response.data().workspaces));

    navigateTo("/keyword-research");
  } else {
    // TODO : Message to user name or password is incorrect
    email_box.classList.add("border-b-2");
    email_box.classList.add("border-b-error");
    password_box.classList.add("border-b-2");
    password_box.classList.add("border-b-error");
    error_happened.value = true;
  }
}
</script>
