import { ref } from "vue"
export class CustomTextBox {
    private focused = ref(false)
    constructor() {

    }

    public focus() {
        this.focused.value = true;
    }

    public leave() {
        this.focused.value = false;
    }

    public transitionStyle(text) {
        return this.focused.value || text !== ""
            ? "-translate-y-8 text-base-100"
            : "text-base-content";
    }
}