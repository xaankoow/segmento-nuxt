<template>
<div class="w-full h-full">
    <button id="dropdownRadioButton" data-dropdown-toggle="dropdownDefaultRadio" class="w-full text-base-500 hover:focus:ring-4 focus:outline-none focus:font-medium rounded-lg text-sm px-5 py-2.5 text-start inline-flex items-center" type="button">
        Dropdown radio
        <svg class="w-2.5 h-2.5 ml-2.5 mr-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>

    <!-- Dropdown menu -->
    <div id="dropdownDefaultRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
            <slot name="content"></slot>
        </ul>
    </div>
</div>
</template>

<script setup>

</script>