
<template>
    <div class="menu-global" ref="menu">
        <slot name="activator"></slot>
        <Teleport to="body">
            <transition appear enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut">
                <div ref="menuContent" :style="style" v-if="active" class="menu">

                    <slot name="prepend-item"></slot>
                    <slot></slot>
                    <slot name="append-item"></slot>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
// create menu globally

const props = withDefaults(defineProps<{
    mLeft?: number,
    mTop?: number,
    active?: boolean,
    mWidth?: number,
}>(),
    {
        mLeft: 0,
        mTop: 0,
        active: false,
        mWidth: 0
    }
)
const menu = ref(null)
const menuContent = ref(null)
//TODO reactive style
const style = computed(() => {
    const properties = menu.value?.getBoundingClientRect()
    menuContent.value?.getBoundingClientRect();
    return {
        width: `${properties?.width + props.mWidth}px`,
        left: `${properties?.left + props.mLeft}px`,
        top: `${properties?.top + props.mTop}px`
    }
})

</script>


<style lang="postcss" scoped>
/* .menu-global {
    @apply tw-block tw-w-full;
} */
.menu {
    @apply absolute bg-white outline-none shadow-[1px_0_20px_-5px_] overflow-y-auto p-0 m-0 rounded z-20;
    max-width: 465px;
    max-height: 65vh;
    z-index: 1000;
    backdrop-filter: blur(1px);
}
</style>