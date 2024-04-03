<template>
    <div class="flex flex-row justify-between items-center">
        <span class="flex flex-row items-center gap-4">
            <span :class="shape.class">&nbsp;</span>
            <span>
                <slot></slot>
            </span>
        </span>
        <span :class="shape.color" class="text-sm">
            <span>
                {{ time }}
            </span>
            {{ kind == "TBT" ? "میلی‌ثانیه" : "ثانیه" }}
        </span>
    </div>
</template>

<script setup>
const shape = ref({})
const props = defineProps({
    kind: { type: String },
    time: { type: Number }
});

let green = {}, orange = {}, red = {};

console.log(props)
shape.value = shape_chooser(props.time)

function shape_chooser(time) {
    switch (props.kind) {
        case 'TTI':
            green = {
                number: 3.8,
                color: "text-success",
                class: "mask mask-circle bg-success w-6 h-6"
            };
            orange = {
                number: 7.3,
                color: "text-amber-400",
                class: "mask mask-square bg-amber-400 w-6 h-6"
            };
            red = {
                color: "text-error",
                class: "mask mask-triangle bg-error w-6 h-6"
            };
            break;
        case 'FCP':
            green = {
                number: 1.8,
                color: "text-success",
                class: "mask mask-circle bg-success w-6 h-6"
            };
            orange = {
                number: 3,
                color: "text-amber-400",
                class: "mask mask-square bg-amber-400 w-6 h-6"
            };
            red = {
                color: "text-error",
                class: "mask mask-triangle bg-error w-6 h-6"
            };
            break;
        case 'TBT':
            green = {
                number: 200,
                color: "text-success",
                class: "mask mask-circle bg-success w-6 h-6"
            };
            orange = {
                number: 600,
                color: "text-amber-400",
                class: "mask mask-square bg-amber-400 w-6 h-6"
            };
            red = {
                color: "text-error",
                class: "mask mask-triangle bg-error w-6 h-6"
            };
            break;
        case 'SI':
            green = {
                number: 3.4,
                color: "text-success",
                class: "mask mask-circle bg-success w-6 h-6"
            };
            orange = {
                number: 5.8,
                color: "text-amber-400",
                class: "mask mask-square bg-amber-400 w-6 h-6"
            };
            red = {
                color: "text-error",
                class: "mask mask-triangle bg-error w-6 h-6"
            };
            break;
        case 'CLS':
            green = {
                number: 0.1,
                color: "text-success",
                class: "mask mask-circle bg-success w-6 h-6"
            };
            orange = {
                number: 0.25,
                color: "text-amber-400",
                class: "mask mask-square bg-amber-400 w-6 h-6"
            };
            red = {
                color: "text-error",
                class: "mask mask-triangle bg-error w-6 h-6"
            };
            break;
        case 'LCP':
            green = {
                number: 2.5,
                color: "text-success",
                class: "mask mask-circle bg-success w-6 h-6"
            };
            orange = {
                number: 4,
                color: "text-amber-400",
                class: "mask mask-square bg-amber-400 w-6 h-6"
            };
            red = {
                color: "text-error",
                class: "mask mask-triangle bg-error w-6 h-6"
            };
            break;
    }

    if (time <= green.number)
        return green;
    else if (time <= orange.number)
        return orange;
    else
        return red;

}

</script>