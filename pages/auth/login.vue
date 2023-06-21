<template>
  <div class="flex w-full items-center">
    <div class="mx-auto">
      <div class="flex flex-col gap-11 w-full items-center">
        <InputText placeHolder="ایمیل" type="email" class="w-[22.625rem]" />
        <InputText placeHolder="گذرواژه" type="password" class="w-[22.625rem]" />
        <div class="flex justify-between w-full items-center">
          <button
            class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md"
          >
            ورود
          </button>
          <label class="text-xs">
            <a href="#"> گذرواژه خود را فراموش کرده‌اید؟ </a></label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
</script>
