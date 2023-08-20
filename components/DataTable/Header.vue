<template>
    <thead>
        <tr class="headers">
            <th v-for="(header, index) in headers" :key="index">
                <slot :name="`${header}.${index}`">
                    {{ header }}
                </slot>
            </th>
        </tr>
    </thead>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    headers: Array<string>
}>(), {
    headers: ["نمودار", "ردیف", "کلمه کلیدی", "رتبه فعلی", "عدد افت و رشد", "آخرین بروزرسانی", "میانگین ۷ دوره", "برچسب", "تاریخ افزودن", "سایت رقیب ۱", "عملیات"]
})
</script>

<style scoped lang="postcss">
thead {
    @apply h-[60px] bg-gray-200/20;
    .headers {
        th {
            @apply bg-transparent border text-xs font-normal;
            &:nth-child(11){
               @apply sticky left-0 z-10;
            }
        }
    }
}
</style>