<template>
  <div class="flex w-full items-center">
    <div class="mx-auto">
      <form
        @submit.prevent="requestToLogin()"
        class="flex flex-col gap-11 w-full items-center"
      >
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input
            v-model="form.email"
            type="email"
            required
            @focus="emailBox.focus()"
            @blur="emailBox.leave()"
          />
          <label for="email" :class="emailBox.transitionStyle(form.email)">
            {{ config.by_route(`${current_page}/email`) }}
          </label>
        </div>
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input
            v-model="form.password"
            type="password"
            minlength="8"
            @focus="passwordBox.focus()"
            @blur="passwordBox.leave()"
            required
          />
          <label
            for="email"
            :class="passwordBox.transitionStyle(form.password)"
          >
            {{ config.by_route(`${current_page}/password`) }}
          </label>
        </div>
        <div class="flex justify-between w-full items-center">
          <button
            type="submit"
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md"
          >
            {{ config.by_route(`${current_page}/open`) }}
          </button>
          <label class="text-xs">
            <NuxtLink to="/auth/forget">
              {{ config.by_route(`${current_page}/forget`) }}
            </NuxtLink></label
          >
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
const form = ref({
  email: "",
  password: "",
});

async function requestToLogin() {
  let response = await request.post("auth/login", form.value);
  if (response.status()) {

    ConfigStore.set_token(response.data().token);
    ConfigStore.set_user(JSON.stringify(response.data().user));

    let config = await request.get("core/config", null);


    ConfigStore.set_plan(JSON.stringify(config.data().plan));
    ConfigStore.set_wallets(JSON.stringify(config.data().wallets));
    ConfigStore.set_workspaces(JSON.stringify(config.data().workspaces));
    ConfigStore.set_roles(JSON.stringify(config.data().workspaces));

    navigateTo("/keyword-research");
  } else {
    // TODO : Message to user name or password is incorrect
    console.log(response.errors());
  }
}
</script>
