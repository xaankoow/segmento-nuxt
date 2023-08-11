export default class HTMLController {
    public static remove_element(id: string) {
        let element = document.getElementById(id);
        
        if (element !== null) {
            element.remove();

            return true;
        }

        return false;
    }
}