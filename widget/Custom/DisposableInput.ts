import Input from "./Input";
import UuidGenerator from "../../composables/UuidGenerator";

export default class DisposableInput {
    private _name: string;
    private _id: string;
    private _placeholder: string;
    private _direction = 'ltr';
    private _input_generator: Input;

    constructor(name: string, placeholder: string, direction = 'ltr') {
        this._id = UuidGenerator.generate();
        this._name = name;
        this._direction = direction;
        this._placeholder = placeholder;
        this._input_generator = new Input(`${this._name}-input`, this._placeholder, this._direction);
    }

    public generate_html() {
        let panel = this.make_panel();
        panel.appendChild(this._input_generator.generate_html());
        panel.appendChild(this.make_button());

        return panel;
    }

    private make_button() {
        let button = document.createElement('button');
        button.classList.add('bg-error/10', 'p-1', 'rounded-sm', 'hover:bg-error/25', 'transition-all', 'duration-200');
        button.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none">
            <path
            d="M6.35 7.4L1.275 12.475C1.14167 12.6083 0.971 12.679 0.763 12.687C0.554333 12.6957 0.375 12.625 0.225 12.475C0.0749999 12.325 0 12.15 0 11.95C0 11.75 0.0749999 11.575 0.225 11.425L5.3 6.35L0.225 1.275C0.0916666 1.14167 0.021 0.970667 0.013 0.762C0.00433335 0.554 0.0749999 0.375 0.225 0.225C0.375 0.0749999 0.55 0 0.75 0C0.95 0 1.125 0.0749999 1.275 0.225L6.35 5.3L11.425 0.225C11.5583 0.0916666 11.7293 0.0206668 11.938 0.0120001C12.146 0.00400008 12.325 0.0749999 12.475 0.225C12.625 0.375 12.7 0.55 12.7 0.75C12.7 0.95 12.625 1.125 12.475 1.275L7.4 6.35L12.475 11.425C12.6083 11.5583 12.679 11.729 12.687 11.937C12.6957 12.1457 12.625 12.325 12.475 12.475C12.325 12.625 12.15 12.7 11.95 12.7C11.75 12.7 11.575 12.625 11.425 12.475L6.35 7.4Z"
            fill="#F35242" />
        </svg>`;

        button.onclick = this.dispose;

        return button;
    }

    private make_panel() {
        let panel = document.createElement('div');
        panel.id = this._id;
        panel.classList.add('flex', 'flex-row', 'items-center', 'gap-4');

        return panel;
    }

    private dispose(e) {
        let button = e.target as HTMLElement;
        let parent = document.getElementById(button!.parentNode!.id);
        parent!.remove()
    }

    public value() {
        return this._input_generator.value();
    }
}