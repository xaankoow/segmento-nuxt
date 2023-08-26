<template>
    <div class="dataTable" dir="rtl">
        <table>
            <slot name="header">
                <DataTableHeader :headers="dataTable.headers"></DataTableHeader>
            </slot>
            <tbody>
                <slot>
                    <DataTableRow v-for="(items, index) in dataTable.items" :key="index"
                        :model="{ headers: dataTable.headers, items }">
                    </DataTableRow>
                </slot>
            </tbody>

            <tfoot>
                <slot name="footer"></slot>
            </tfoot>
        </table>
    </div>
</template>
<script setup lang="ts">



import DataTable from '@/interfaces/DataTable'

const props = defineProps<{
    dataTable: DataTable
}>()

</script>

<style scoped lang="postcss">
.dataTable {
    @apply overflow-auto;
    max-width: 1000px;
    max-height:600px;
    table {
        @apply border-none font-iranyekan rounded text-xs;
    }
}
</style>

<style lang="postcss">
/* width */
::-webkit-scrollbar {
  @apply w-[4px] h-[4px];

}
/* Track */
::-webkit-scrollbar-track {
  @apply shadow-md;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-gray-300/50 rounded-3xl;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    @apply bg-gray-300 cursor-pointer; 
}
</style>