import axios from "axios";

export default class Request {
    private request = useNuxtApp().$axios;
    protected _pending = ref(false);

    constructor()
    {
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
        let response = null;
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
            response = res.data
        }).catch((res) => {
            console.log('error')
            // TODO : do something with exception
        }).finally(() => {
            this._pending.value = false;
        })

        return response;
    }
}