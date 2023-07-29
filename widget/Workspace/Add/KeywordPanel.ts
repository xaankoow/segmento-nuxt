import UuidGenerator from "../../../composables/UuidGenerator";
import IHtml from "../../../interfaces/IHtml";
import Config from "../../../composables/Config";
import DisposableInput from "../../Custom/DisposableInput";

export default class KeywordPanel implements IHtml {
    private _id: string;
    private _config: Config;
    private readonly _config_section = 'pages/workspace/add/steps';

    constructor() {
        this._id = UuidGenerator.generate();
        this._config = new Config();
    }

    public html(): HTMLElement {
        return document.getElementById(this._id)!;
    }

    /**
     * generate_html
     */
    public generate_html(): HTMLElement {
        let panel = document.createElement("div");
        let button = this.make_button();
        panel.id = this._id;
        // TODO : fix w-1/2 to get from parameter
        panel.classList.add("flex", "flex-col-reverse", "gap-8", "w-1/2");
        panel.appendChild(button);

        return panel;
    }

    private make_button() {
        let button = document.createElement("button");
        button.id = UuidGenerator.generate();
        button.classList.add("btn-secondary", "w-11/12", "flex", "flex-row", "items-center", "justify-center", "gap-5");
        button.innerHTML = `
        <span>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 13.75C7.28333 13.75 7.10433 13.6793 6.963 13.538C6.821 13.396 6.75 13.2167 6.75 13V7.75H1.5C1.28333 7.75 1.10433 7.679 0.963 7.537C0.821 7.39567 0.75 7.21667 0.75 7C0.75 6.78333 0.821 6.604 0.963 6.462C1.10433 6.32067 1.28333 6.25 1.5 6.25H6.75V1C6.75 0.783333 6.821 0.604333 6.963 0.463C7.10433 0.321 7.28333 0.25 7.5 0.25C7.71667 0.25 7.896 0.321 8.038 0.463C8.17933 0.604333 8.25 0.783333 8.25 1V6.25H13.5C13.7167 6.25 13.896 6.32067 14.038 6.462C14.1793 6.604 14.25 6.78333 14.25 7C14.25 7.21667 14.1793 7.39567 14.038 7.537C13.896 7.679 13.7167 7.75 13.5 7.75H8.25V13C8.25 13.2167 8.17933 13.396 8.038 13.538C7.896 13.6793 7.71667 13.75 7.5 13.75Z"
                fill="#488CDA" />
            </svg>
        </span>
        <span>
            ${this._config.by_route(this._config_section)[1].button.add_keyword}
        </span>`;

        button.addEventListener('click', function (e) {
            // Make disposable input in parent 
            let config = new Config();
            let parent = this.parentNode;
            let placeholder = config.by_route('pages/workspace/add/steps')[1].placeholder.keyword;
            let inp = new DisposableInput('keyword', placeholder, 'ltr');
            let html = inp.generate_html();
            parent!.appendChild(html);
        })

        return button;
    }

    public keyword_list() {
        let result = Array<string>();
        let panel = this.html();
        let children = panel.childNodes;
        for(let i = 1; i < children.length; i++) {
            let value = this.get_input_value(children[i]);
            result.push(value);
        }

        return result;
    }
    

    private get_input_value(element: HTMLElement| ChildNode) {
        let input_section = element.childNodes[0];
        let input = this.get_input(input_section)!;

        return input.value;
    }

    private get_input(element: HTMLElement | ChildNode) {
        return document.getElementById(`${element.id}-input`)
    }
}