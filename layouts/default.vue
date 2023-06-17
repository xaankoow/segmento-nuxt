<template>
    <div class="w-screen h-screen" style="direction: rtl;">
        <!-- Header section -->
        <NavbarTop :platform="__('platform')"></NavbarTop>
        <Nuxt />
    </div>
</template>
<script setup>
import __ from "../composables/dictionary"

</script>