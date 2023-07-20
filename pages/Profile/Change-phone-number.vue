<template>
  <div>
    <!-- enter phone number -->
    <div
      v-if="status === 'enterPhoneNumber'"
      class="w-[530px] h-[422px] rounded-lg overflow-hidden text-sm"
    >
      <div
        class="w-full h-[51px] bg-base-200 flex items-center justify-start text-lg textco"
      >
        <div class="w-[2px] h-5 rounded-sm bg-icon ml-4"></div>
        <p>تغییر شماره همراه</p>
      </div>
      <div
        v-if="status === 'enterPhoneNumber'"
        class="w-full h-[371px] bg-white flex flex-col justify-between items-center p-3"
      >
        <p>
          کاربر گرامی برای تایید شماره همراه خود لطفا شماره همراه خود را در کادر
          پایین وارد کنید تا ما برای شما یک کد تایید ارسال کنیم :<br />
          شماره همراه شما برای امنیت حساب کاربریتون مهم است
        </p>
        <div class="w-full h-auto px-10">
          <p class="text-base-500 text-xs">شماره همراه</p>
          <input
            class="w-full h-11 text-left border rounded border-base-300 p-2 focus:border-b-dimound focus:border-b-2"
            placeholder="09"
            type="tel"
            v-model="phoneNumber"
          />
        </div>
        <button
          @click="changeStep"
          class="w-[137px] h-10 rounded-lg bg-dimound text-white"
        >
          دریافت کد تایید
        </button>
      </div>
    </div>
    <!-- confirm code -->
    <div
      v-if="status === 'enterVerificationCode'"
      class="w-[530px] h-[422px] rounded-lg overflow-hidden text-sm"
    >
      <div
        class="w-full h-[51px] bg-base-200 flex items-center justify-start text-lg textco"
      >
        <div class="w-[2px] h-5 rounded-sm bg-icon ml-4"></div>
        <p>تغییر شماره همراه</p>
      </div>

      <div
        class="w-full h-[371px] bg-white flex flex-col justify-between items-center p-3"
      >
        <p>
          کد فعالسازی که برای شما ارسال شده است رو در کادر پایین بنویسید .
          <br />اگر کدی برای شما ارسال نشده است دریافت مجدد کد را فشار دهید
        </p>
        <div
          class="w-full h-auto px-10 flex flex-col items-center justify-center"
        >
          <p class="text-sm">کد فعال سازی</p>
          <div class="flex justify-center">
            <input
              class="w-[50px] h-[50px] m-3 text-center border rounded border-base-300 p-2 focus:border-b-dimound focus:border-b-2"
              type="text"
              v-for="(digit, index) in verificationCode"
              :key="index"
              v-model="verificationCode[index]"
              inputmode="numeric"
              pattern="[0-9]*"
              maxlength="1"
            />
          </div>
        </div>
        <div class="w-full flex items-center justify-between px-4">
          <button
            @click="changeStep"
            class="w-[137px] h-10 rounded-lg bg-dimound text-white"
          >
            تایید شماره همراه
          </button>
          <!-- Timer and get the code again  -->
          <div class="flex items-center justify-center">
            <div :class="isTimerActive === false ? 'hidden' : 'flex'">
              {{ formatTime(remainingTime) }}
            </div>
            <button
              @click="startTimer"
              :disabled="isTimerActive"
              class="border-b border-black mr-2"
              :class="
                isTimerActive === true
                  ? 'text-gray-400 border-gray-400'
                  : 'text-black'
              "
            >
              دریافت مجدد کد
            </button>
          </div>
          <!-- Timer and get the code again  -->

        </div>
      </div>
    </div>
    <!-- success -->
    <div
      v-else-if="status === 'success'"
      class="w-96 h-[300px] rounded-lg bg-white"
    >
      <div
        class="w-full h-28 rounded-lg bg-success flex items-center justify-center"
      >
        <svg
          width="116"
          height="89"
          viewBox="0 0 116 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-nan -nanL20.5649 88.6013C20.1141 88.5027 19.6774 88.3481 19.2649 88.1413C18.1112 87.6455 17.0064 87.0429 15.9649 86.3413C12.486 84.0129 9.74764 80.7359 8.07449 76.8987C6.40134 73.0614 5.86357 68.8248 6.52491 64.6913C6.70993 63.4514 7.01467 62.2323 7.4349 61.0513C7.49303 60.8597 7.67382 60.9265 7.6252 61.1207C7.32272 62.3287 7.07567 63.5502 6.8849 64.7812C6.33808 68.8402 6.91507 72.9714 8.55307 76.7252C10.1911 80.479 12.8273 83.7116 16.1749 86.0713C17.5848 87.0041 19.0509 87.8491 20.5649 88.6013L-nan -nanZ"
            fill="white"
          />
          <path
            d="M7.70501 86.7235C8.02868 87.0898 7.91749 87.193 7.5502 86.8705C6.9729 86.3721 6.43776 85.8269 5.95021 85.2405C4.30312 83.3183 3.00673 81.1215 2.12021 78.7505C1.22801 76.3802 0.75429 73.8729 0.720202 71.3405C0.710012 70.5784 0.753458 69.8165 0.850207 69.0605C0.872965 68.5492 1.06508 68.5598 1.06269 69.0716C1.06019 69.609 1.05529 70.3826 1.09021 71.3305C1.34834 76.3121 3.14404 81.0914 6.23021 85.0105C6.84291 85.7527 7.35388 86.3262 7.70501 86.7235Z"
            fill="white"
          />
          <path
            d="M109.42 53.7416C109.284 53.0395 109.465 52.9991 109.609 53.6996C109.749 54.1283 109.859 54.566 109.939 55.0096C110.071 55.5972 110.171 56.1913 110.239 56.7896C110.447 58.3404 110.51 59.9071 110.429 61.4696C110.315 63.3844 110.013 65.2834 109.529 67.1396C109.008 68.9883 108.311 70.7831 107.449 72.4996C106.732 73.9065 105.888 75.2453 104.929 76.4996C104.539 77.0396 104.119 77.4996 103.769 77.8796C103.476 78.2348 103.159 78.5689 102.819 78.8796C102.361 79.3651 102.234 79.2512 102.673 78.7488C103.16 78.1924 103.852 77.3781 104.629 76.3096C105.536 75.0452 106.335 73.7072 107.019 72.3096C108.701 68.9249 109.697 65.2408 109.949 61.4696C110.049 59.9335 110.026 58.3919 109.879 56.8596C109.746 55.5247 109.561 54.4685 109.42 53.7416Z"
            fill="white"
          />
          <path
            d="M-nan -nanL115.777 63.5996C115.948 64.4652 115.995 65.3507 115.917 66.2296C115.767 70.4976 114.605 74.6688 112.527 78.3996C112.523 78.4076 112.519 78.4155 112.515 78.4235C112.29 78.8789 111.946 78.6714 112.197 78.2296C114.064 74.4782 115.201 70.4058 115.547 66.2296C115.571 65.3492 115.648 64.4709 115.777 63.5996L-nan -nanZ"
            fill="white"
          />
          <path
            d="M50.8183 53.2853L40.8774 43.6272C39.7601 42.5417 37.9552 42.5417 36.838 43.6272C35.7207 44.7127 35.7207 46.4662 36.838 47.5517L48.8129 59.1859C49.9302 60.2714 51.735 60.2714 52.8523 59.1859L83.162 29.7386C84.2793 28.6531 84.2793 26.8996 83.162 25.8141C82.0448 24.7286 80.2399 24.7286 79.1226 25.8141L50.8183 53.2853Z"
            fill="white"
          />
          <circle cx="60" cy="42" r="40.5" stroke="white" stroke-width="3" />
        </svg>
      </div>
      <div
        class="w-full h-[188px] flex flex-col items-center justify-between py-3 text-sm"
      >
        <div class="w-full flex flex-col items-center justify-centesr">
          <p class="text-xl">موفقیت آمیز</p>
          <p>شماره همراه شما با موفقیت در سگمنتو تغییر داده شد !</p>
        </div>
        <p class="text-dimound cursor-pointer">باشه، فهمیدم!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

//timer
const remainingTime = ref(1 * 60); // زمان باقی‌مانده به ثانیه
const isTimerActive = ref(false);

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const startTimer = () => {
  isTimerActive.value = true;
  remainingTime.value = 2 * 60;
  const timer = setInterval(() => {
    if (remainingTime.value > 0) {
      remainingTime.value--;
    } else {
      isTimerActive.value = false;
      clearInterval(timer);
    }
  }, 1000);
};

watch(isTimerActive, (newVal) => {
  if (newVal) {
    startTimer();
  }
});

//check input value
const phoneNumber = ref("");
const status = ref("enterPhoneNumber");
const verificationCode = ref(["", "", "", ""]);

const changeStep = () => {
  if (status.value === "enterPhoneNumber") {
    if (phoneNumber._value === "") {
      status.value = "enterPhoneNumber";
    } else {
      status.value = "enterVerificationCode";
      startTimer();
    }
  } else if (status.value === "enterVerificationCode") {
    const concatenatedNumber = verificationCode.value.join("");
    const parsedNumber = parseInt(concatenatedNumber, 10);
    const numberLength = parsedNumber.toString().length;
    console.log(parsedNumber.length);
    if (numberLength < 4) {
      status.value = "enterVerificationCode";
    } else {
      status.value = "success";
    }
  }
};
</script>
