<template>
    <tr class="row">
        <td v-for="(header, index) in model.headers" :key="index" @click="()=> selected_row = !selected_row"
            :class="{ active: selected_row }"
        >
            <slot :item="model.items" :name="`${ model.items[header] }.${ index }`">
                <div v-if="header != 'عملیات' && header != 'نمودار'" :class="[ header == 'کلمه کلیدی' ? 'flex items-center': null ]">
                    {{ model.items[header] }}
                    <div v-show="header == 'کلمه کلیدی'" class="cpToCB w-12" v-click-outside="()=> popupMenu= false">
                        <Icon @click.stop.prevent.self="copy_to_clipBoard(model.items[header])"
                        >mdi-content-copy</Icon>
                        <LazyGmenu v-if="popupMenu" :active="popupMenu" :key="index+1" :m-top="-28.9" :m-left="-25" class="w-16">
                            <div class="py-1 text-center">!کپی شد</div>
                        </LazyGmenu>
                    </div>
                </div>
                <div v-if="header == 'نمودار'">
                    <!-- <button><img :src="insightsIconPath"></button> -->
                    <Icon class="text-lg">mdi-chart-timeline-variant</Icon>
                </div>
                <div v-if="header == 'عملیات'" class="flex items-center justify-center">
                    <!-- TODO use cusotme icon component -->
                    <button><img :src="bookmarkIconPath"></button>
                    <button><img :src="labelIconPath"></button>
                    <button><img :src="deleteIconPath"></button>
                    <button><img :src="copyContentIconPath"></button>
                </div>
            </slot>
        </td>
    </tr>
</template>

<script setup lang="ts">
import DataTable from '@/interfaces/DataTable'
import insightsIconPath from "@/assets/icons/insights.svg"
import bookmarkIconPath from "@/assets/icons/bookmark_add.svg"
import labelIconPath from "@/assets/icons/label.svg"
import deleteIconPath from "@/assets/icons/delete.svg"
import copyContentIconPath from "@/assets/icons/content_copy.svg"

//props
const props = defineProps<{
    model: DataTable
}>()


//datas
const selected_row = ref<boolean>(false)
const popupMenu = ref<boolean>(false)


//functions
// const trigger_select_row = ():void => {
//     for selected one row must use form store 
//     selected_row.value = !selected_row.value
// }
const copy_to_clipBoard = async (keyWord: string):Promise<void> => {
    try {
        await navigator.clipboard.writeText(keyWord)
        popupMenu.value = true
        setTimeout(() => {
            popupMenu.value = false
        }, 1000);
    }catch(e) {
        console.log(e)
    }
}

</script>

<style scoped lang="postcss">
.row {
    @apply transition-all;
    td {
    @apply border text-center cursor-pointer;
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
        min-width:220px;
        &:hover {
            i {
                @apply visible;
            }
        }
    }
    &:nth-child(11){
        @apply sticky left-0 bg-white;
    }
    button {
        @apply mx-1;
        img {
            @apply w-6 h-6;
        }
    }
    &.active {
        @apply text-blue-600;
    }
    .cpToCB {
        @apply mr-2;
        i {
            @apply text-lg text-gray-600 invisible transition-all duration-75 hover:text-gray-900;
        }
      
    }
 }
}
</style>