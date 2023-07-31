<template>
    <div class="grid gap-x-px gap-y-px bg-base-400">
        <slot></slot>
    </div>
</template>
  
<style scoped>
.grid {
    border: 1px solid #D9D9D9;
    border-radius: 3px;
}
.grid .grid {
    border: none;
    border-radius: 0;
}
</style>