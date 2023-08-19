export default class HTMLController {
    public static remove_element(id: string) {
        let element = document.getElementById(id);
        
        if (element !== null) {
            element.remove();

            return true;
        }

        return false;
    }

    public static hide_element(id: string) {
        let element = document.getElementById(id);

        if (element !== null) {
            element.classList.add("hidden");

            return true;
        }

        return false;
    }
    
    public static visible_element(id: string) {
        let element = document.getElementById(id);

        if (element !== null) {
            element.classList.remove("hidden");

            return true;
        }

        return false;
    }
}