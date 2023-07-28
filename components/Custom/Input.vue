<template>
    <div class="custom_input_box text-base-content w-[22.625rem]">
        <input v-model="value" :name="name" :type="type" :minlength="min" :maxlength="max" :min="min" :max="max" :required="required"
            :style="`direction: ${direction};`" @focus="box.focus()" @blur="leave()" />
        <label :for="name" :class="box.transitionStyle(value, 'text-base-content')">
            {{ placeholder }}
        </label>
    </div>
</template>

<script setup>
import { CustomTextBox } from "../../composables/CustomTextBox";

const box = new CustomTextBox();

const props = defineProps({
    placeholder: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'text'
    },
    min: {
        type: Number,
    },
    max: {
        type: Number,
    },
    required: {
        type: Boolean,
    },
    direction: {
        type: String,
        default: 'rtl'
    }
})
const value = ref("");

const emit = defineEmits(['value'])

function leave() {
    emit('value', value.value);
    box.leave();
}
</script>