import { toast, ToastOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default class Toast {
    public static options(options: ToastOptions|null): ToastOptions {
        let result = options;
        
        if (options === null) {
            result = {
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_LEFT
            } as ToastOptions;
        }

        return result;
    }
    public static error(message) {
        
        toast.error(message, this.options(null))
    }
}