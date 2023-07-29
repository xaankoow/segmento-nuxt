import UuidGenerator from "../../../composables/UuidGenerator";
import IHtml from "../../../interfaces/IHtml";
import DisposableInput from "../../Custom/DisposableInput";
import KeywordPanel from "./KeywordPanel";
import Config from "../../../composables/Config";

export default class PagePanel implements IHtml {
    private _id: string;
    private _keyword_section: KeywordPanel;
    private _page_input: DisposableInput;

    constructor() {
        this._id = UuidGenerator.generate();
        this._keyword_section = new KeywordPanel();
        let config = new Config();
        let placeholder = config.by_route('pages/workspace/add/steps')[1].placeholder.page;
        this._page_input = new DisposableInput('page', placeholder, 'ltr');
    }

    public html(): HTMLElement {
        return document.getElementById(this._id)!;
    }
    /**
     * generate_html
     */
    public generate_html() {
        let section = document.createElement("div");
        let keyword_section = this.make_keyword_section();
        let input = this.make_page_input();
        section.classList.add("flex", "flex-row", "gap-4", "justify-between", "items-start");
        section.id = this._id;

        section.appendChild(keyword_section);
        section.appendChild(input);

        return section;
    }

    private make_keyword_section() {
        return this._keyword_section.generate_html();
    }

    private make_page_input() {
        let html = this._page_input.generate_html();

        return html;
    }

    public id() {
        return this._id;
    }

    public value() {
        return {
            page: this._page_input.value(),
            keywords: this._keyword_section.values(),
        };
    }
}