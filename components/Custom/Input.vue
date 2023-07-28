<template>
    <div class="custom_input_box text-base-content w-[22.625rem]">
        <input v-model="value" :type="type" :minlength="min" :maxlength="max" :min="min" :max="max" :required="required"
            @focus="box.focus()" @blur="leave()" />
        <label :class="box.transitionStyle(value, 'text-base-content')">
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
    }
})
const value = ref("");

const emit = defineEmits(['value'])

function leave() {
    emit('value', value.value);
    box.leave();
}
</script>