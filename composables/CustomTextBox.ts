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

    public isFocus() {
        return this.focused.value;
    }

    public fullTextBox(text) {
        return (this.focused.value || text !== '');
    }

    public transitionStyle(text, textColor = 'text-base-100') {
        return this.focused.value || text !== ""
            ? "-translate-y-8 " + textColor
            : "text-base-content";
    }
}