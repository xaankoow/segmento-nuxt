import { ref } from "vue"
export class Timer {
    private time = ref(0);
    private status = ref(false)
    private timerId: any;

    constructor(time: number) {
        this.setDuration(time);
    }

    setDuration(second: number) {
        this.time.value = second;
    }

    start() {
        this.status.value = true;
        this.timerId = setInterval(() => {
            this.time.value--;

            if (this.time.value <= 0) {
                this.stop();
            }
        }, 1000);
    }

    duration() {
        return this.time.value;
    }

    stop() {
        this.status.value = false;
        clearInterval(this.timerId);
    }

    enable() {
        return this.status.value;
    }
}
