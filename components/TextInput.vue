<template>
    <label for="" :class="['input__text']" tabindex="-1">
        <div class="lable">
            {{ lable }}
        </div>
        <div class="scaffold">
            <slot name="prepend"> </slot>
            <input :type="type" :value="modelValue"
            @input="updateModelValue" v-bind="$attrs"
                :readonly="readonly" />
            <slot name="append"></slot>
        </div>

    </label>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    modelValue?: string | number
    lable?: string
    type?: string
    readonly?: boolean
}>(), {
    modelValue: "",
    lable: "",
    type: "text",
    readonly: false
})
const { rtl, locale } = useSegmentoApp()

const emit = defineEmits(["update:modelValue"])

const updateModelValue = (e)=> {
  let res = null
  props.type === "number" ? res = parseInt(e.target.value) : res = e.target.value
  emit('update:modelValue', res)
}

</script>

<style scoped lang="postcss">
.input__text {
    .lable{
        @apply pr-1;
    }
    .scaffold {
        @apply mt-2 max-w-full;
        input {
            @apply border w-full;
            
        }
    }
}
</style>