import UuidGenerator from "../../../composables/UuidGenerator";
import HTMLController from "../../../Controllers/HTMLController";
import Config from "../../../composables/Config";

export default class PagePanel {
  protected static panel_id = "";
  protected static parent_id = "";
  protected static current_step = "pages/workspace/add/steps";
  protected static config = new Config();

  public static render(parent_id: string) {
    this.parent_id = parent_id;
    this.panel_id = UuidGenerator.generate();
    let element = this.panel();
    element.id = this.panel_id;

    return element;
  }

  protected static panel() {
    let element = document.createElement("div");
    element.classList.add("flex", "flex-row", "px-3", "gap-3", "py-4", "h-28");
    element.id = UuidGenerator.generate();
    element.appendChild(this.keywords(element.id));
    element.appendChild(this.page(element.id));
    element.appendChild(document.createElement("hr"));

    return element;
  }

  protected static page(page_id) {
    let container = document.createElement("div");
    container.classList.add(
      "flex",
      "flex-col",
      "w-1/2",
      "max-auto",
      "h-28",
      "items-start"
    );
    let element = document.createElement("div");
    element.classList.add(
      "flex",
      "flex-row",
      "items-center",
      "gap-3",
      "w-full",
      "mx-auto"
    );
    let text_box = document.createElement("input");
    text_box.classList.add("w-11/12", "p-1", "text-sm");
    text_box.id = `${page_id}-input-page`;
    text_box.name = `input-page`;
    text_box.style.direction = "ltr";

    let button = document.createElement("button");
    button.id = `${this.panel_id}-button`;
    button.classList.add(
      "bg-error/10",
      "p-1",
      "rounded-sm",
      "hover:bg-error/25",
      "transition-all",
      "duration-200"
    );
    button.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none">
            <path
            d="M6.35 7.4L1.275 12.475C1.14167 12.6083 0.971 12.679 0.763 12.687C0.554333 12.6957 0.375 12.625 0.225 12.475C0.0749999 12.325 0 12.15 0 11.95C0 11.75 0.0749999 11.575 0.225 11.425L5.3 6.35L0.225 1.275C0.0916666 1.14167 0.021 0.970667 0.013 0.762C0.00433335 0.554 0.0749999 0.375 0.225 0.225C0.375 0.0749999 0.55 0 0.75 0C0.95 0 1.125 0.0749999 1.275 0.225L6.35 5.3L11.425 0.225C11.5583 0.0916666 11.7293 0.0206668 11.938 0.0120001C12.146 0.00400008 12.325 0.0749999 12.475 0.225C12.625 0.375 12.7 0.55 12.7 0.75C12.7 0.95 12.625 1.125 12.475 1.275L7.4 6.35L12.475 11.425C12.6083 11.5583 12.679 11.729 12.687 11.937C12.6957 12.1457 12.625 12.325 12.475 12.475C12.325 12.625 12.15 12.7 11.95 12.7C11.75 12.7 11.575 12.625 11.425 12.475L6.35 7.4Z"
            fill="#F35242" />
        </svg>`;
    button.onclick = function (e) {
      let button = e.target as HTMLElement;
      let remove_id = button.id.split("-")[0];
      HTMLController.remove_element(remove_id);
    };

    element.appendChild(text_box);
    element.appendChild(button);

    container.appendChild(element);

    return container;
  }

  protected static keywords(page_id) {
    let element = document.createElement("div");
    element.classList.add(
      "flex",
      "flex-col",
      "gap-1",
      "w-1/2",
      "h-28",
      "overflow-auto"
    );
    let container = document.createElement("div");
    container.classList.add("w-full", "flex", "flex-col", "gap-1");
    container.id = UuidGenerator.generate();
    container.appendChild(this.keyword(page_id));
    let button = document.createElement("button");
    button.id = `${container.id}-button-${page_id}`;
    button.classList.add(
      "flex",
      "flex-row",
      "items-center",
      "w-11/12",
      "justify-center",
      "gap-5"
    );
    button.innerHTML = `
        <span>
            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M7.5 13.75C7.28333 13.75 7.10433 13.6793 6.963 13.538C6.821 13.396 6.75 13.2167 6.75 13V7.75H1.5C1.28333 7.75 1.10433 7.679 0.963 7.537C0.821 7.39567 0.75 7.21667 0.75 7C0.75 6.78333 0.821 6.604 0.963 6.462C1.10433 6.32067 1.28333 6.25 1.5 6.25H6.75V1C6.75 0.783333 6.821 0.604333 6.963 0.463C7.10433 0.321 7.28333 0.25 7.5 0.25C7.71667 0.25 7.896 0.321 8.038 0.463C8.17933 0.604333 8.25 0.783333 8.25 1V6.25H13.5C13.7167 6.25 13.896 6.32067 14.038 6.462C14.1793 6.604 14.25 6.78333 14.25 7C14.25 7.21667 14.1793 7.39567 14.038 7.537C13.896 7.679 13.7167 7.75 13.5 7.75H8.25V13C8.25 13.2167 8.17933 13.396 8.038 13.538C7.896 13.6793 7.71667 13.75 7.5 13.75Z"
                fill="#488CDA" />
            </svg>
            </span>
            <span>
            ${this.config.by_route(this.current_step)[1].button.add_keyword}
        </span>
        `;
    button.classList.add("btn-secondary", "w-full");
    button.onclick = function (e) {
      let button = e.target as HTMLElement;
      let page_id = button.id.split("-")[2];
      let element = document.createElement("div");
      element.classList.add("flex", "flex-row", "items-center", "gap-2");
      element.id = UuidGenerator.generate();

      let text_box = document.createElement("input");
      text_box.classList.add("w-11/12", "p-1", "text-sm");
      text_box.id = `${element.id}-input-keyword`;
      text_box.name = "input-keyword";
      text_box.classList.add(`${page_id}-keyword`);
      text_box.style.direction = "ltr";

      let btn_dispose = document.createElement("button");
      btn_dispose.id = `${element.id}-button`;
      btn_dispose.classList.add(
        "bg-error/10",
        "p-1",
        "rounded-sm",
        "hover:bg-error/25",
        "transition-all",
        "duration-200"
      );
      btn_dispose.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none">
            <path
            d="M6.35 7.4L1.275 12.475C1.14167 12.6083 0.971 12.679 0.763 12.687C0.554333 12.6957 0.375 12.625 0.225 12.475C0.0749999 12.325 0 12.15 0 11.95C0 11.75 0.0749999 11.575 0.225 11.425L5.3 6.35L0.225 1.275C0.0916666 1.14167 0.021 0.970667 0.013 0.762C0.00433335 0.554 0.0749999 0.375 0.225 0.225C0.375 0.0749999 0.55 0 0.75 0C0.95 0 1.125 0.0749999 1.275 0.225L6.35 5.3L11.425 0.225C11.5583 0.0916666 11.7293 0.0206668 11.938 0.0120001C12.146 0.00400008 12.325 0.0749999 12.475 0.225C12.625 0.375 12.7 0.55 12.7 0.75C12.7 0.95 12.625 1.125 12.475 1.275L7.4 6.35L12.475 11.425C12.6083 11.5583 12.679 11.729 12.687 11.937C12.6957 12.1457 12.625 12.325 12.475 12.475C12.325 12.625 12.15 12.7 11.95 12.7C11.75 12.7 11.575 12.625 11.425 12.475L6.35 7.4Z"
            fill="#F35242" />
        </svg>`;
      btn_dispose.onclick = function (e) {
        let button = e.target as HTMLElement;
        let remove_id = button.id.split("-")[0];
        HTMLController.remove_element(remove_id);
      };

      element.appendChild(text_box);
      element.appendChild(btn_dispose);

      let parent = document.getElementById(button.id.split("-")[0]);
      parent!.appendChild(element);
    };

    element.appendChild(container);
    element.appendChild(button);

    return element;
  }

  protected static keyword(page_id) {
    let element = document.createElement("div");
    element.classList.add("flex", "flex-row", "items-center", "gap-2");
    element.id = UuidGenerator.generate();

    let text_box = document.createElement("input");
    text_box.classList.add("w-11/12", "p-1", "text-sm");
    text_box.id = `${element.id}-input-keyword`;
    text_box.style.direction = "ltr";
    text_box.name = "input-keyword";
    text_box.classList.add(`${page_id}-keyword`);

    let btn_dispose = document.createElement("button");
    btn_dispose.id = `${element.id}-button`;
    btn_dispose.classList.add(
      "bg-error/10",
      "p-1",
      "rounded-sm",
      "hover:bg-error/25",
      "transition-all",
      "duration-200"
    );
    btn_dispose.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none">
            <path
            d="M6.35 7.4L1.275 12.475C1.14167 12.6083 0.971 12.679 0.763 12.687C0.554333 12.6957 0.375 12.625 0.225 12.475C0.0749999 12.325 0 12.15 0 11.95C0 11.75 0.0749999 11.575 0.225 11.425L5.3 6.35L0.225 1.275C0.0916666 1.14167 0.021 0.970667 0.013 0.762C0.00433335 0.554 0.0749999 0.375 0.225 0.225C0.375 0.0749999 0.55 0 0.75 0C0.95 0 1.125 0.0749999 1.275 0.225L6.35 5.3L11.425 0.225C11.5583 0.0916666 11.7293 0.0206668 11.938 0.0120001C12.146 0.00400008 12.325 0.0749999 12.475 0.225C12.625 0.375 12.7 0.55 12.7 0.75C12.7 0.95 12.625 1.125 12.475 1.275L7.4 6.35L12.475 11.425C12.6083 11.5583 12.679 11.729 12.687 11.937C12.6957 12.1457 12.625 12.325 12.475 12.475C12.325 12.625 12.15 12.7 11.95 12.7C11.75 12.7 11.575 12.625 11.425 12.475L6.35 7.4Z"
            fill="#F35242" />
        </svg>`;
    btn_dispose.onclick = function (e) {
      let button = e.target as HTMLElement;
      let remove_id = button.id.split("-")[0];
      HTMLController.remove_element(remove_id);
    };

    element.appendChild(text_box);
    element.appendChild(btn_dispose);

    return element;
  }
}
