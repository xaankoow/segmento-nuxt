<template>
    <div class="absolute w-full h-full top-0 left-0 bg-base-300/30 z-50" id="popup">
        <div class="flex items-center justify-center mx-auto w-fit h-full" id="popup-content">
            <slot></slot>

        </div>
    </div>
</template>

<script setup>
/*
function click(e) {
    let popup_content_element = this.document.getElementById('popup-content');
    let popup_element = this.document.getElementById('popup');
    if (!popup_content_element.contains(e.target)) {
        popup_element.remove();
        window.removeEventListener('click', click);
    }
}
window.addEventListener('click', click);
*/
</script>