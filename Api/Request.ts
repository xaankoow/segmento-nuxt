import axios from "axios";
import Model from "./Model"

export default class Request {
    private request = useNuxtApp().$axios;
    protected _pending = ref(false);

    constructor() {
        return this;
    }

    public get = async (url, params, version = 'v2') => {
        return await this.send_request('GET', `${version}/${url}`, null, params);
    }

    public post = async (url, body, version = 'v2') => {
        return await this.send_request('POST', `${version}/${url}`, body, null);
    }

    public pending() {
        return this._pending.value;
    }

    protected send_request = async (method: string, url: string, body: any, params: any) => {
        let result: any;
        this._pending.value = true;

        await axios.request({
            baseURL: 'https://core.segmento.ir/api/',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: method,
            url: url,
            params: params,
            data: body
        }).then((res) => {
            let response = res.data
            result = new Model(response.message ?? '', response.status, response.errors, response.data, res.status);
        }).catch((res) => {
            let response = res.response.data;
            result = new Model(res.message, response.status, response.specific_error, response.data, res.status);
        }).finally(() => {
            this._pending.value = false;
        })

        return result;
    }
}