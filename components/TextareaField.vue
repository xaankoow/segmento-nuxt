<template>
    <div class="textarea-feild">
        <label for="" v-text="lable"></label>
        <textarea v-bind="$attrs" :value="modelValue"
            @input="(e)=> $emit('update:modelValue',(e.target as HTMLTextAreaElement).value)"></textarea>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    modelValue?: string
    lable?: string
}>(), {
    modelValue: "",
    lable: ""
})

const emit = defineEmits(["update:modelValue"])

const updateModelValue = (e)=> {
  let res = null
  emit('update:modelValue', res)
}

</script>

<style lang="postcss" scoped>
.textarea-feild {
    textarea {
        @apply border p-2 w-full;
    }
}
</style>