import UuidGenerator from "../../../../composables/UuidGenerator";
import Config from "../../../../composables/Config";
import HTMLController from "../../../../Controllers/HTMLController";
import Request from "../../../../Api/Request";
import CacheStore from "../../../../store/CacheStore";
import Popup from "../../../Component/Popup";
import Two from "./Two";

export default class AddWorkspaceStepOne {
  public static isGenerate = false;
  protected static config = new Config();
  protected static readonly current_page = 'pages/workspace/add';
  protected static readonly steps_section = `${this.current_page}/steps`;
  protected static popup_id = "";
  protected static parent_id = "";

  public static render(parent_id: string) {
    this.parent_id = parent_id;
    let popup = Popup.render();
    this.popup_id = UuidGenerator.generate();
    popup.id = this.popup_id;
    let container = this.container();
    let header = this.header();
    let content = this.content();

    container.appendChild(header);
    container.appendChild(content);
    popup.appendChild(container);

    return popup;
  }

  protected static container() {
    let element = document.createElement("div");
    element.classList.add("flex", "flex-col", "gap-6", "w-[53.875rem]", "rounded-md", "py-4", "shadow-md", "bg-base-100");
    element.id = UuidGenerator.generate();
    return element;
  }

  protected static header() {
    let header = document.createElement("div");
    header.classList.add("flex", "flex-row", "justify-between", "px-4");

    let title = document.createElement("div");
    title.classList.add("flex", "flex-row", "items-center", "gap-3");
    title.innerHTML = `
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 14.75C10.2167 14.75 10.396 14.6793 10.538 14.538C10.6793 14.396 10.75 14.2167 10.75 14V10.75H14.025C14.225 10.75 14.396 10.679 14.538 10.537C14.6793 10.3957 14.75 10.2167 14.75 10C14.75 9.78333 14.6793 9.604 14.538 9.462C14.396 9.32067 14.2167 9.25 14 9.25H10.75V5.975C10.75 5.775 10.6793 5.60433 10.538 5.463C10.396 5.321 10.2167 5.25 10 5.25C9.78333 5.25 9.60433 5.321 9.463 5.463C9.321 5.60433 9.25 5.78333 9.25 6V9.25H5.975C5.775 9.25 5.60433 9.32067 5.463 9.462C5.321 9.604 5.25 9.78333 5.25 10C5.25 10.2167 5.321 10.3957 5.463 10.537C5.60433 10.679 5.78333 10.75 6 10.75H9.25V14.025C9.25 14.225 9.321 14.396 9.463 14.538C9.60433 14.6793 9.78333 14.75 10 14.75ZM10 19.5C8.68333 19.5 7.446 19.25 6.288 18.75C5.12933 18.25 4.125 17.575 3.275 16.725C2.425 15.875 1.75 14.8707 1.25 13.712C0.75 12.554 0.5 11.3167 0.5 10C0.5 8.68333 0.75 7.44567 1.25 6.287C1.75 5.129 2.425 4.125 3.275 3.275C4.125 2.425 5.12933 1.75 6.288 1.25C7.446 0.75 8.68333 0.5 10 0.5C11.3167 0.5 12.5543 0.75 13.713 1.25C14.871 1.75 15.875 2.425 16.725 3.275C17.575 4.125 18.25 5.129 18.75 6.287C19.25 7.44567 19.5 8.68333 19.5 10C19.5 11.3167 19.25 12.554 18.75 13.712C18.25 14.8707 17.575 15.875 16.725 16.725C15.875 17.575 14.871 18.25 13.713 18.75C12.5543 19.25 11.3167 19.5 10 19.5ZM10 18C12.2167 18 14.1043 17.221 15.663 15.663C17.221 14.1043 18 12.2167 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 12.2167 2.77933 14.1043 4.338 15.663C5.896 17.221 7.78333 18 10 18Z"
              fill="#002145" />
          </svg>
        </span>
        <span> ${this.config.by_route(this.current_page).title} </span >
            <span>
            <svg width="18" height = "19" viewBox = "0 0 18 19" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
                <path
              d="M9 0C4.032 0 0 4.08548 0 9.11937C0 14.1533 4.032 18.2387 9 18.2387C13.968 18.2387 18 14.1533 18 9.11937C18 4.08548 13.968 0 9 0ZM9.9 15.5029H8.1V13.6791H9.9V15.5029ZM11.763 8.43542L10.953 9.2744C10.503 9.73948 10.179 10.159 10.017 10.8156C9.945 11.1074 9.9 11.4357 9.9 11.8552H8.1V11.3992C8.1 10.9797 8.172 10.5785 8.298 10.2046C8.478 9.67565 8.775 9.20144 9.153 8.81843L10.269 7.66939C10.683 7.26814 10.881 6.66626 10.764 6.0279C10.647 5.37131 10.143 4.81503 9.513 4.63264C8.514 4.34994 7.587 4.92446 7.29 5.7908C7.182 6.12822 6.903 6.38356 6.552 6.38356H6.282C5.76 6.38356 5.4 5.87287 5.544 5.36219C5.931 4.02164 7.056 3.00027 8.451 2.78141C9.819 2.56254 11.124 3.28297 11.934 4.42289C12.996 5.90935 12.681 7.50524 11.763 8.43542Z"
        fill = "#002145" />
            </svg>
        </span>`;

    let button = document.createElement('button');
    button.id = `${this.popup_id}-button`;
    button.classList.add('bg-error/10', 'p-1', 'rounded-sm', 'hover:bg-error/25', 'transition-all', 'duration-200');
    button.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none">
            <path
            d="M6.35 7.4L1.275 12.475C1.14167 12.6083 0.971 12.679 0.763 12.687C0.554333 12.6957 0.375 12.625 0.225 12.475C0.0749999 12.325 0 12.15 0 11.95C0 11.75 0.0749999 11.575 0.225 11.425L5.3 6.35L0.225 1.275C0.0916666 1.14167 0.021 0.970667 0.013 0.762C0.00433335 0.554 0.0749999 0.375 0.225 0.225C0.375 0.0749999 0.55 0 0.75 0C0.95 0 1.125 0.0749999 1.275 0.225L6.35 5.3L11.425 0.225C11.5583 0.0916666 11.7293 0.0206668 11.938 0.0120001C12.146 0.00400008 12.325 0.0749999 12.475 0.225C12.625 0.375 12.7 0.55 12.7 0.75C12.7 0.95 12.625 1.125 12.475 1.275L7.4 6.35L12.475 11.425C12.6083 11.5583 12.679 11.729 12.687 11.937C12.6957 12.1457 12.625 12.325 12.475 12.475C12.325 12.625 12.15 12.7 11.95 12.7C11.75 12.7 11.575 12.625 11.425 12.475L6.35 7.4Z"
            fill="#F35242" />
        </svg>`;
    button.onclick = function (e) {
      let button = e.target as HTMLElement;
      let remove_id = button.id.split('-')[0];
      HTMLController.remove_element(remove_id);
    }

    header.appendChild(title);
    header.appendChild(button);

    return header;
  }

  protected static content() {
    let element = document.createElement("div");
    element.classList.add("w-full", "flex", "flex-col", "gap-4");
    let describe = this.describe();
    let website = this.website();
    let hr = document.createElement("hr");
    hr.classList.add("mx-4")
    let register = this.register();

    element.appendChild(describe);
    element.appendChild(website);
    element.appendChild(hr);
    element.appendChild(register);

    return element;
  }

  protected static describe() {
    let element = document.createElement("div");
    element.innerHTML = `
        <div class="flex flex-row pr-3">
        <!-- content -->
        <div class="flex flex-col gap-8 w-3/5 px-2 h-full">
          <!-- header -->
          <div class="flex flex-row items-center gap-4">
            <span class="border-r-2 border-r-primary px-4">
              ${this.config.by_route(this.steps_section)[0].title}
            </span>
            <span>
              <svg width="45" height="19" viewBox="0 0 45 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="45" height="19" rx="3" fill="#D9D9D9" />
                <line x1="21.25" y1="3" x2="21.25" y2="16" stroke="#7D7D7D" stroke-width="0.5" />
                <path
                  d="M10.0195 13H5.36044V12.35L7.81953 9.61818C8.1862 9.20303 8.43771 8.86667 8.57408 8.60909C8.71347 8.34848 8.78317 8.0803 8.78317 7.80455C8.78317 7.43485 8.67105 7.13182 8.4468 6.89545C8.22256 6.65606 7.92256 6.53636 7.5468 6.53636C7.09832 6.53636 6.74983 6.66364 6.50135 6.91818C6.25286 7.17273 6.12862 7.52879 6.12862 7.98636H5.22408C5.22408 7.33182 5.43468 6.80303 5.85589 6.4C6.27711 5.99394 6.84074 5.79091 7.5468 5.79091C8.20741 5.79091 8.73014 5.96515 9.11499 6.31364C9.49983 6.65909 9.69226 7.1197 9.69226 7.69545C9.69226 8.39545 9.24529 9.22879 8.35135 10.1955L6.45135 12.2636H10.0195V13ZM15.4348 9.96818C15.4348 11.0258 15.2529 11.8121 14.8893 12.3273C14.5287 12.8394 13.9651 13.0955 13.1984 13.0955C12.4378 13.0955 11.8757 12.8455 11.512 12.3455C11.1484 11.8424 10.9605 11.0909 10.9484 10.0909V8.88182C10.9484 7.83939 11.1287 7.06364 11.4893 6.55455C11.8499 6.04545 12.4166 5.79091 13.1893 5.79091C13.9529 5.79091 14.5151 6.03636 14.8757 6.52727C15.2393 7.01818 15.4257 7.77424 15.4348 8.79545V9.96818ZM14.5302 8.73182C14.5302 7.96818 14.4226 7.41212 14.2075 7.06364C13.9923 6.71212 13.6529 6.53636 13.1893 6.53636C12.7257 6.53636 12.3878 6.71061 12.1757 7.05909C11.9636 7.40758 11.8545 7.94242 11.8484 8.66364V10.1091C11.8484 10.8788 11.959 11.447 12.1802 11.8136C12.4045 12.1773 12.7439 12.3591 13.1984 12.3591C13.6439 12.3591 13.9742 12.1879 14.1893 11.8455C14.4075 11.5 14.5211 10.9561 14.5302 10.2136V8.73182Z"
                  fill="#7D7D7D" />
                <path
                  d="M26.7134 13H25.8043V6.97727L23.9861 7.65V6.82727L26.5725 5.85455H26.7134V13ZM33.6741 7.74545C33.6741 8.1 33.5801 8.41667 33.3923 8.69545C33.2044 8.97121 32.9513 9.18636 32.6332 9.34091C33.0029 9.50152 33.2953 9.73485 33.5104 10.0409C33.7286 10.347 33.8377 10.6939 33.8377 11.0818C33.8377 11.697 33.6301 12.1864 33.215 12.55C32.7998 12.9136 32.2544 13.0955 31.5786 13.0955C30.8938 13.0955 30.3453 12.9136 29.9332 12.55C29.521 12.1833 29.315 11.6939 29.315 11.0818C29.315 10.697 29.4195 10.35 29.6286 10.0409C29.8407 9.73182 30.1317 9.49697 30.5013 9.33636C30.1862 9.18182 29.9377 8.96667 29.7559 8.69091C29.5741 8.41212 29.4832 8.09697 29.4832 7.74545C29.4832 7.14545 29.6741 6.6697 30.0559 6.31818C30.4407 5.96667 30.9483 5.79091 31.5786 5.79091C32.2029 5.79091 32.7074 5.96667 33.0923 6.31818C33.4801 6.6697 33.6741 7.14545 33.6741 7.74545ZM32.9332 11.0636C32.9332 10.6636 32.8074 10.3394 32.5559 10.0909C32.3044 9.83939 31.9756 9.71364 31.5695 9.71364C31.1604 9.71364 30.8332 9.83788 30.5877 10.0864C30.3423 10.3318 30.2195 10.6561 30.2195 11.0591C30.2195 11.4652 30.3392 11.7833 30.5786 12.0136C30.818 12.2439 31.1513 12.3591 31.5786 12.3591C31.9998 12.3591 32.3301 12.2439 32.5695 12.0136C32.812 11.7803 32.9332 11.4636 32.9332 11.0636ZM31.5786 6.53636C31.2241 6.53636 30.9362 6.64697 30.715 6.86818C30.4968 7.08636 30.3877 7.38333 30.3877 7.75909C30.3877 8.12273 30.4953 8.41667 30.7104 8.64091C30.9256 8.86212 31.215 8.97273 31.5786 8.97273C31.9392 8.97273 32.2271 8.86212 32.4423 8.64091C32.6604 8.41667 32.7695 8.12273 32.7695 7.75909C32.7695 7.39849 32.6574 7.10455 32.4332 6.87727C32.2089 6.65 31.9241 6.53636 31.5786 6.53636ZM38.4393 9.87273C38.2484 10.1 38.0211 10.2818 37.7575 10.4182C37.4969 10.5545 37.2105 10.6227 36.8984 10.6227C36.4893 10.6227 36.1317 10.5227 35.8257 10.3227C35.5226 10.1197 35.2878 9.83485 35.1211 9.46818C34.9545 9.10152 34.8711 8.69697 34.8711 8.25455C34.8711 7.77879 34.962 7.35151 35.1439 6.97273C35.3257 6.59091 35.5817 6.29848 35.912 6.09545C36.2454 5.89242 36.6333 5.79091 37.0757 5.79091C37.7787 5.79091 38.3317 6.05455 38.7348 6.58182C39.1408 7.10606 39.3439 7.82273 39.3439 8.73182V8.99545C39.3439 10.3803 39.0696 11.3909 38.5211 12.0273C37.9757 12.6636 37.1514 12.9894 36.0484 13.0045H35.8757V12.2409H36.0666C36.812 12.2288 37.3848 12.0348 37.7848 11.6591C38.1848 11.2833 38.4029 10.6879 38.4393 9.87273ZM37.0439 9.87273C37.3469 9.87273 37.6257 9.7803 37.8802 9.59545C38.1378 9.41061 38.3257 9.18182 38.4439 8.90909V8.54545C38.4439 7.95455 38.3151 7.47424 38.0575 7.10455C37.7999 6.73182 37.4742 6.54545 37.0802 6.54545C36.6833 6.54545 36.3636 6.69848 36.1211 7.00455C35.8817 7.30758 35.762 7.70758 35.762 8.20455C35.762 8.68939 35.8787 9.08939 36.112 9.40455C36.3454 9.71667 36.656 9.87273 37.0439 9.87273Z"
                  fill="#7D7D7D" />
              </svg>
            </span>
          </div>

          <!-- description -->
          <p class="px-3 text-justify">
            ${this.config.by_route(this.steps_section)[0].description}
          </p>
        </div>

        <!-- split -->
        <svg width="1" height="242" viewBox="0 0 1 242" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1" height="242" rx="0.5" fill="#D9D9D9" />
        </svg>

        <!-- image -->
        <div class="w-2/5 flex items-center justify-center">
          <img src="/images/workspace.png" class="w-40 h-44" />
        </div>
      </div>`

    return element;
  }

  protected static website() {
    let element = document.createElement("div");
    element.classList.add("flex", "flex-col", "justify-center", "px-4");
    let place_holder = document.createElement("span");
    place_holder.classList.add("text-xs", "px-3");
    place_holder.innerHTML = `${this.config.by_route(this.steps_section)[0].placeholder}`;

    let input = document.createElement("div");
    input.classList.add("relative");
    input.style.direction = "ltr";
    input.innerHTML = `
          <input type="text" id="website_text_box"
            class="w-full border-2 border-base-350 rounded-sm py-2 pl-16 focus:border-b-primary outline-none"
            placeholder="example.ir" id="${this.popup_id}-input" />
          <label class="absolute left-[0.6rem] top-[0.6rem]">https://</label>
          <label class="absolute right-3 top-4 text-xs text-error hidden" id="error_label" style="direction: rtl">error</label>
        `;

    // Todo : create button to add textbox to set keyword for website

    element.appendChild(place_holder);
    element.appendChild(input);

    return element;
  }

  protected static register() {
    let element = document.createElement("div");
    element.classList.add("flex", "flex-row", "items-center", "justify-between", "mb-2", "mx-4");

    let space = document.createElement("span");
    space.classList.add("w-28");
    let btn_next = document.createElement("button");
    btn_next.classList.add("btn-primary", "flex", "flex-row", "items-center", "gap-4", "w-28", "justify-center");
    btn_next.id = `${this.parent_id}-${this.popup_id}-button`;
    btn_next.innerHTML = `
      <span> ${this.config.by_route(this.current_page).buttons.next}</span>
      <span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.1 15.1001L0.65 8.62513C0.55 8.5418 0.479334 8.4458 0.438 8.33713C0.396 8.22913 0.375 8.1168 0.375 8.00013C0.375 7.88346 0.396 7.7708 0.438 7.66213C0.479334 7.55413 0.55 7.45846 0.65 7.37513L7.1 0.900131C7.25 0.766798 7.425 0.695798 7.625 0.687131C7.825 0.679131 8 0.750131 8.15 0.900131C8.3 1.05013 8.379 1.22513 8.387 1.42513C8.39567 1.62513 8.325 1.80846 8.175 1.97513L2.875 7.25013H14.5C14.7 7.25013 14.875 7.3208 15.025 7.46213C15.175 7.60413 15.25 7.78346 15.25 8.00013C15.25 8.2168 15.175 8.3958 15.025 8.53713C14.875 8.67913 14.7 8.75013 14.5 8.75013H2.875L8.175 14.0501C8.30833 14.1835 8.379 14.3541 8.387 14.5621C8.39567 14.7708 8.325 14.9501 8.175 15.1001C8.025 15.2501 7.846 15.3251 7.638 15.3251C7.42933 15.3251 7.25 15.2501 7.1 15.1001Z"
            fill="white" />
        </svg>
      </span>
    `;
    btn_next.onclick = async function (e) {
      let button = e.target as HTMLElement;
      let input = document.getElementById("website_text_box"); // This our textbox id that created staticly
      let request = new Request();
      let response = await request.post("workspaces/create", { website: input.value });
      let ids = button.id.split('-');
      // ids is a string array that start with parent_id (this popup created on which div), popup_id (current popup id), button to recognize DOM and programmer this is a button;

      console.log(button.id);
      if (response.status_code() < 300) {
        if (response.status()) {
          CacheStore.set_workspace_uuid(response.data().uuid);
          input!.classList.add("border-success");
          HTMLController.remove_element(ids[1]);
          document.getElementById(ids[0])!.appendChild(Two.render(ids[0]));
        }
        else {
          input?.classList.add("border-error");
          let error_label = document.getElementById("error_label");
          error_label!.classList.remove("hidden");
          error_label!.innerText = response.message();
        }

        return;
      }
      input?.classList.add("border-error");
    }

    // Finish button section
    let btn_finish = document.createElement("button");
    btn_finish.classList.add("btn-secondary", "w-28");
    btn_finish.id = `${this.parent_id}-${this.popup_id}-btn-finish`;
    btn_finish.innerHTML = `
        <span> ${this.config.by_route(this.current_page).buttons.finish} </span>
        `;
    btn_finish.onclick = async function (e) {
      let button = e.target as HTMLElement;
      let input = document.getElementById("website_text_box"); // This our textbox id that created staticly
      let request = new Request();
      let response = await request.post("workspaces/create", { website: input.value });
      let ids = button.id.split('-');

      if (response.status_code() < 300) {
        if (response.status()) {
          CacheStore.set_workspace_uuid(response.data().uuid);
          input!.classList.add("border-success");
          HTMLController.remove_element(ids[0]);
        }
        else {
          input?.classList.add("border-error");
          let error_label = document.getElementById("error_label");
          error_label!.classList.remove("hidden");
          error_label!.innerText = response.message();
        }

        return;
      }
      input?.classList.add("border-error");
    }

    element.appendChild(space);
    element.appendChild(btn_finish);
    element.appendChild(btn_next);

    return element;
  }
}