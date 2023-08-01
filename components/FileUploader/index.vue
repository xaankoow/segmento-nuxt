<template>
  <div
    class="w-[358px] h-[165px] rounded-lg bg-base-250 relative border-dashed border-2 border-primary flex items-center justify-evenly flex-col text-xs text-base-500">
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_6013_9500" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">
        <rect width="33" height="33" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_6013_9500)">
        <path
          d="M8.875 25.9668C6.97292 25.9668 5.35133 25.3077 4.01025 23.9895C2.67008 22.6723 2 21.0626 2 19.1605C2 17.4418 2.55 15.9348 3.65 14.6395C4.75 13.3452 6.11354 12.5835 7.74063 12.3543C8.17604 10.2918 9.20729 8.60742 10.8344 7.30117C12.4615 5.99492 14.3292 5.3418 16.4375 5.3418C18.9354 5.3418 21.0497 6.20667 22.7804 7.93642C24.5101 9.66709 25.375 11.7814 25.375 14.2793V14.9668H25.7875C27.2542 15.0814 28.4688 15.6658 29.4313 16.7199C30.3938 17.7741 30.875 19.023 30.875 20.4668C30.875 22.0022 30.3479 23.3025 29.2938 24.3677C28.2396 25.4338 26.9448 25.9668 25.4094 25.9668H17.8813C17.1938 25.9668 16.6094 25.7262 16.1281 25.2449C15.6469 24.7637 15.4062 24.1793 15.4062 23.4918V15.9637L12.8625 18.4387L11.4188 17.0293L16.4375 11.9762L21.4562 17.0293L20.0125 18.4387L17.4688 15.9637V23.4918C17.4688 23.5835 17.5146 23.6751 17.6063 23.7668C17.6979 23.8585 17.7896 23.9043 17.8813 23.9043H25.375C26.3375 23.9043 27.151 23.572 27.8156 22.9074C28.4802 22.2428 28.8125 21.4293 28.8125 20.4668C28.8125 19.5043 28.4802 18.6908 27.8156 18.0262C27.151 17.3616 26.3375 17.0293 25.375 17.0293H23.3125V14.2793C23.3125 12.3772 22.6424 10.7556 21.3022 9.41455C19.9612 8.07438 18.3396 7.4043 16.4375 7.4043C14.5354 7.4043 12.9143 8.07438 11.5741 9.41455C10.233 10.7556 9.5625 12.3772 9.5625 14.2793H8.84062C7.53437 14.2793 6.41146 14.7491 5.47188 15.6887C4.53229 16.6283 4.0625 17.7626 4.0625 19.0918C4.0625 20.421 4.53229 21.5553 5.47188 22.4949C6.41146 23.4345 7.54583 23.9043 8.875 23.9043H12.3125V25.9668H8.875Z"
          fill="#0A65CD" />
      </g>
    </svg>
    <p>تصویر خود را اینجا بکشید</p>
    <div class="flex items-center justify-center">
      <hr class="bg-base-400 w-10 h-[2px]" />
      <p class="mx-2">یا</p>
      <hr class="bg-base-400 w-10 h-[2px]" />
    </div>

    <button @click="simulateFileInputClick"
      class="w-28 h-10 rounded-lg btn-primary flex items-center justify-around flex-col z-10">
      انتخاب فایل
    </button>

    <input type="file" name="" id="fileInput" class="w-full h-full absolute opacity-0 z-0" @change="typeCheck"
      :multiple="isMultiple" />
  </div>
</template>
  
<script setup>
function typeCheck(event) {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  const selectedFile = event.target.files[0];

  if (selectedFile && allowedTypes.includes(selectedFile.type)) {
    // تایپ مجاز است، میتوانید مقدار را پردازش کنید

  } else {
    // تایپ غیرمجاز است
    event.target.value = "";
  }
}

const props = defineProps({
  isMultiple: {
    type: Boolean,
    default: false,
  },
  filter: {
    type: Array,
    required: true,
  },
});

function simulateFileInputClick() {
  const fileInput = document.getElementById('fileInput');
  fileInput.click();
}
</script>
  
