import UuidGenerator from "../../composables/UuidGenerator";

export default class Popup {
    private static _popup_id = "";
    
    public static render() {
        let popup = this.popup();

        return popup;
    }

    public static popup_id() {
        return this.popup_id;
    }

    protected static popup() {
        let element = document.createElement("div");
        element.classList.add("flex", "absolute", "items-center", "justify-center", "w-screen", "h-screen", "bg-base-300/40", "top-0", "left-0", "z-50");
        this._popup_id = UuidGenerator.generate();
        element.id = this._popup_id;
        return element;
    }
}