<template>
    <div class="w-screen h-screen bg-base-100 text-base-content font-iranyekan" style="direction: rtl;">
        <!-- Header section -->
        <NavbarTop :platform="__('platform')"></NavbarTop>
        <Nuxt />
    </div>
</template>
<script setup>
import __ from "../composables/Config"

</script>