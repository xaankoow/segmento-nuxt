<template>
    <div class="card w-full h-full inline-block relative">
        <!-- header -->
        <div class="h-full w-full flex justify-between px-2 flex items-center ">
            <span>
            <slot name="title"></slot>
            </span>
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.66797 1L7.0013 6.33333L12.3346 1" stroke="#002145" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <!-- content -->
        <div class="dropdowncard hidden w-full h-auto top-[43px] flex flex-col gap-4 py-2 text-center border border-base-400 rounded rounded-t-none bg-[#FCFCFB] absolute z-[2000]" :name=props.title>
            <slot name="option"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    title: String,
});
</script>

<style scoped>
.card:hover .dropdowncard {
    display: flex;
}
</style>