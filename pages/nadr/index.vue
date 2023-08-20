<template>
    <div class="inset-0 w-screen h-screen flex items-center justify-center">
        <DataTable :dataTable="dataTable"></DataTable>
    </div>
</template>

<script setup lang="ts">
import { dataTable } from "@/constants/dataTable"

definePageMeta({
    layout: false
})

</script>

<style scoped></style>