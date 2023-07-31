<template>
  <div
    class="absolute flex items-center justify-center w-screen h-screen -top-[100%] left-0 bg-base-300/50 ease-in-out transition-all duration-300"
    id="popup"
  >
    <div
      class="flex flex-col items-center justify-center rounded-md shadow-md bg-base-100"
      id="popup-content"
    >
      <!-- header content -->
      <div
        class="flex justify-between items-center w-full p-4"
        v-if="!can_close"
      >
        <slot name="header"> </slot>
        <button
          class="cursor-pointer text-error bg-error/10 hover:bg-error/20 rounded-md p-2"
          @click="close()"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.35 7.4L1.275 12.475C1.14167 12.6083 0.971 12.679 0.763 12.687C0.554333 12.6957 0.375 12.625 0.225 12.475C0.0749999 12.325 0 12.15 0 11.95C0 11.75 0.0749999 11.575 0.225 11.425L5.3 6.35L0.225 1.275C0.0916666 1.14167 0.021 0.970667 0.013 0.762C0.00433335 0.554 0.0749999 0.375 0.225 0.225C0.375 0.0749999 0.55 0 0.75 0C0.95 0 1.125 0.0749999 1.275 0.225L6.35 5.3L11.425 0.225C11.5583 0.0916666 11.7293 0.0206668 11.938 0.0120001C12.146 0.00400008 12.325 0.0749999 12.475 0.225C12.625 0.375 12.7 0.55 12.7 0.75C12.7 0.95 12.625 1.125 12.475 1.275L7.4 6.35L12.475 11.425C12.6083 11.5583 12.679 11.729 12.687 11.937C12.6957 12.1457 12.625 12.325 12.475 12.475C12.325 12.625 12.15 12.7 11.95 12.7C11.75 12.7 11.575 12.625 11.425 12.475L6.35 7.4Z"
              fill="#F35242"
            />
          </svg>
        </button>
      </div>
      <!-- the content -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply top-0;
}
</style>

<script setup>
const props = defineProps({
  bubble_bursting: {
    type: Boolean,
    default: true,
  },
});
const can_close = ref(props.bubble_bursting);

onBeforeMount(() => {
  let popup = document.getElementById("popup");
  let popup_content = document.getElementById("popup-content");

  // Add event listener for base document
  if (props.bubble_bursting) {
    document.addEventListener("click", function (e) {
      popup = document.getElementById("popup");
      popup_content = document.getElementById("popup-content");
      if (e.target === popup && e.target !== popup_content) {
        popup.classList.toggle("active");
      }
    });
  } /* else {
    // If you didn't define anything to close the popup default close section will appear !
    let close_contents = popup_content.getElementsByClassName("close");
    can_close.value = close_contents.length > 0;
  }*/
});

function close() {
  let popup = document.getElementById("popup");
  popup.classList.remove("active");
}
</script>