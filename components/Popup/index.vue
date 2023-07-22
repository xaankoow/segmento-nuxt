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
      <div class="flex justify-end items-center w-full" v-if="!bubble_bursting">
        <button
          class="cursor-pointer text-error opacity-80 hover:opacity-100"
          @click="close()"
        >
          ❌
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
onMounted(() => {
  if (props.bubble_bursting) {
    document.addEventListener("click", function (e) {
      let popup = document.getElementById("popup");
      let popup_content = document.getElementById("popup-content");
      if (e.target === popup && e.target !== popup_content) {
        popup.classList.toggle("active");
      }
    });
  }
});
function close() {
  let popup = document.getElementById("popup");
  popup.classList.remove("active");
}
</script>