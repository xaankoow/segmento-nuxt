import UuidGenerator from "../../../composables/UuidGenerator";
import IHtml from "../../../interfaces/IHtml";
import DisposableInput from "../../Custom/DisposableInput";
import KeywordPanel from "./KeywordPanel";
import Config from "../../../composables/Config";

export default class PagePanel implements IHtml {
    private _id: string;

    constructor() {
        this._id = UuidGenerator.generate();
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
        section.classList.add("flex", "flex-row", "gap-4", "justify-between", "items-start", "max-h-52", "overflow-auto");
        section.id = this._id;

        section.appendChild(keyword_section);
        section.appendChild(input);

        return section;
    }

    private make_keyword_section() {
        let keyword_panel = new KeywordPanel();
        return keyword_panel.generate_html();
    }

    private make_page_input() {
        let config = new Config();
        let placeholder = config.by_route('pages/workspace/add/steps')[1].placeholder.page;
        let inp = new DisposableInput('page', placeholder, 'ltr');
        let html = inp.generate_html();

        return html;
    }
}