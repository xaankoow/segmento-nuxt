<template>
  <div class="flex w-full items-center">
    <div class="mx-auto">
      <div class="flex flex-col gap-11 w-full items-center">
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input
            v-model="form.email"
            type="email"
            @focus="emialBox.focus()"
            @blur="emialBox.leave()"
          />
          <label for="email" :class="emialBox.transitionStyle(form.email)">
            {{ content.email }}
          </label>
        </div>
        <div class="custom_input_box text-base-content w-[22.625rem]">
          <input
            v-model="form.password"
            type="password"
            @focus="passwordBox.focus()"
            @blur="passwordBox.leave()"
          />
          <label for="email" :class="passwordBox.transitionStyle(form.password)">
          {{ content.password }}
          </label>
        </div>
        <div class="flex justify-between w-full items-center">
          <button
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md"
          >
            {{ content.open }}
          </button>
          <label class="text-xs">
            <NuxtLink to="/auth/signup">
              {{ content.forget }}
            </NuxtLink></label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CustomTextBox } from "../../composables/CustomTextBox";
definePageMeta({
  layout: "login",
});
const emialBox = new CustomTextBox();
const passwordBox = new CustomTextBox();

const form = ref({
  email: "",
  password: "",
});

const content = ref({
  email: "ایمیل",
  password: "گذرواژه",
  open: "ورود",
  forget: "گذرواژه خود را فراموش کرده‌اید؟"
})

onMounted(() => {
  console.log(emialBox.transitionStyle());
});
</script>
