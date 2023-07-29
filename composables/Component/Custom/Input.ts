import { ref } from "vue";
import UuidGenerator from "../../UuidGenerator";

export default class Input {
    private _direction = 'rtl';
    private _name: string;
    private _id: string;
    private _value = ref('');
    private _placeholder: string;

    private _focused = ref(false);


    constructor(name: string, placeholder: string, direction = 'rtl') {
        this._id = UuidGenerator.generate();
        this._name = name;
        this._placeholder = placeholder;
        this._direction = direction;
    }

    /**
     * generate_html
     */
    public generate_html() {
        let custom_div = this.make_custom_input_div();
        let input = this.make_input();
        let label = this.make_label();
        custom_div.appendChild(input);
        custom_div.appendChild(label);

        return custom_div;
    }

    private make_custom_input_div() {
        let main_div = document.createElement("div");
        main_div.classList.add("custom_input_box", "text-base-content", "w-[22.625rem]");
        main_div.id = this._id;

        return main_div;
    }

    private make_input() {
        let input = document.createElement("input");
        input.type = "text";
        input.name = this._name;
        input.id = `${this._id}-input`;
        input.style.direction = this._direction;
        input.onfocus = this.focus;
        input.onblur = this.leave;
        input.onchange = this.change;

        return input;
    }

    private make_label() {
        let label = document.createElement('label');
        label.id = `${this._id}-label`;
        label.setAttribute("for", this._name);
        label.innerText = this._placeholder;

        return label;
    }

    private change(e) {
        this._value.value = e.target.value;
    }

    public focus(e) {
        let parent_id = e.target.id.split('-')[0];
        let el = document.getElementById(`${parent_id}-label`);
        el?.classList.add('-translate-y-9');
    }

    public leave(e) {
        if (e.target.value.trim() === '') {
            let parent_id = e.target.id.split('-')[0];
            let el = document.getElementById(`${parent_id}-label`);
            el?.classList.remove('-translate-y-9');
        }
    }

    public isFocus() {
        return this._focused.value;
    }
}