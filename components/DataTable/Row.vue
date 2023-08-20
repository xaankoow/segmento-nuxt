<template>
    <tr class="row">
        <td v-for="(header, index) in model.headers" :key="index">
            <slot :item="model.item" :name="`${ model.item[header] }.${ index }`">
                <div v-if="model.item[header] != 'op' && model.item[header] != 'chart'">{{ model.item[header] }}</div>
                <div v-if="model.item[header] == 'chart'">
                    <button class="mx-1"><img :src="insightsIconPath"></button>
                </div>
                <div v-if="model.item[header] == 'op'" class="flex items-center justify-center">
                    <!-- TODO use cusotme icon component -->
                    <button class="mx-1"><img :src="bookmarkIconPath"></button>
                    <button class="mx-1"><img :src="labelIconPath"></button>
                    <button class="mx-1"><img :src="deleteIconPath"></button>
                    <button class="mx-1"><img :src="copyContentIconPath"></button>
                </div>
            </slot>
        </td>
    </tr>
</template>

<script setup lang="ts">
import { dataTable } from "@/constants/dataTable"
import insightsIconPath from "@/assets/icons/insights.svg"
import bookmarkIconPath from "@/assets/icons/bookmark_add.svg"
import labelIconPath from "@/assets/icons/label.svg"
import deleteIconPath from "@/assets/icons/delete.svg"
import copyContentIconPath from "@/assets/icons/content_copy.svg"


const props = defineProps<{
    model: DataTable
}>()

</script>

<style scoped lang="postcss">
td {
    @apply border text-center;
    &:nth-child(n+3) {
        min-width:130px;
        @apply py-5;
    }
    &:first-child {
        min-width:60px;
    }
    &:nth-child(2) {
        min-width:60px;
    }
    &:nth-child(3) {
        @apply text-right pr-3;
        min-width:190px;
    }
    &:nth-child(11){
        @apply sticky left-0 bg-white;
    }
    img {
        @apply w-6 h-6;
    }
 }
</style>