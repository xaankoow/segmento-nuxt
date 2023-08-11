import Plans from "./Plans";

export default interface Pack {
    uuid: string,
    name: string,
    color: string,
    plans: Array<Plans> | null
}
