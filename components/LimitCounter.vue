<template>
    <div class="w-[auto] h-6 text-xs p-1 rounded bg-base-250 flex items-center justify-center m-1">
        <p class="text-base-500">{{budget}}</p>
        <hr class="w-[1px] h-full bg-base-500 mx-1" />
        <p :class="(remained / budget * 100) < 15 ? 'text-error' : 'text-success'">{{remained}}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        budget: {
            require: true,
            type: Number
        },
        remained: {
            require: true,
            type: Number
        }
    });
</script>