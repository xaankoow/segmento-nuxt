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
    headers?: Array<string>
}>(), {
    headers: ["chart", "row", "word_key", "rate_now", "nubmer_fall_raise", "last_update", "average_period", "lable", "created_at", "site_rival", "operations"]
})
</script>

<style scoped lang="postcss">
thead {
    @apply h-[60px];
    .headers {
        th {
            @apply border text-xs font-normal bg-gray-200/20;
            &:nth-child(11){
               @apply sticky left-0 z-10 bg-gray-50;
            }
        }
    }
}
</style>