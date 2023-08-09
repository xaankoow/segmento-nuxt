import UuidGenerator from "../../composables/UuidGenerator";;

export default class Input {
    private _direction = 'rtl';
    private _name: string;
    private _id: string;
    private _placeholder: string;

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

    public input_id() {
        return `${this._id}-input`;
    }

    private make_custom_input_div() {
        let main_div = document.createElement("div");
        main_div.classList.add("custom_input_box", "text-base-content", "w-full");
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

        return input;
    }

    private make_label() {
        let label = document.createElement('label');
        label.id = `${this._id}-label`;
        label.setAttribute("for", this._name);
        label.innerText = this._placeholder;

        return label;
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

    public value() {
        let input = document.getElementById(this.input_id()) as HTMLInputElement;
        return input!.value;
    }
}