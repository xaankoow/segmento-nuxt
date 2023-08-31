export default class ResponseModel {
    private _message: string;
    private _status: boolean;
    private _errors: any;
    private _data: any;
    private _status_code: number;
    public readonly ok: boolean;

    constructor(message: string, status: boolean, errors: any, data: any, _status_code: number, ok = false)
    {
        this._message = message;
        this._status = status;
        this._errors = errors;
        this._data = data;
        this._status_code = _status_code;
        this.ok = ok;
    }

    public message()
    {
        return this._message;
    }
    
    public status()
    {
        return this._status;
    }
    
    public errors()
    {
        return this._errors;
    }
    
    public data()
    {
        return this._data;
    }
    
    public status_code()
    {
        return this._status_code;
    }
    
    public version()
    {
        return this._version;
    }
}