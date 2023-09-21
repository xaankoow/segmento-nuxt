export default class ResponseModel {
    public readonly message: string;
    public readonly errors: any;
    public readonly data: any;
    public readonly status_code: number;
    public readonly ok: boolean;

    constructor(message: string, ok: boolean, errors: any, data: any, status_code: number)
    {
        this.message = message;
        this.errors = errors;
        this.data = data;
        this.status_code = status_code;
        this.ok = ok;
    }
}