<template>
    <div :class="{ rtl: rtl }" class="inset-0 w-screen h-screen flex items-center justify-center">
        <DataTable :dataTable="dataTable"></DataTable>
    </div>
</template>

<script setup lang="ts">
import { dataTable } from "@/constants/dataTable"

definePageMeta({
    layout: false
})


const { rtl, locale, state } = useSegmentoApp()
console.log(rtl,locale,state)

</script>

<style scoped></style>