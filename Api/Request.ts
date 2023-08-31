import axios from "axios";
import ResponseModel from "./ResponseModel"
import ConfigStore from "../store/ConfigStore";

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

    public pending(): Boolean {
        return this._pending.value;
    }

    protected send_request = async (method: string, url: string, body: any, params: any): Promise<ResponseModel> => {
        let result: any;
        this._pending.value = true;
        let token = ConfigStore.token() ?? '';

        await axios.request({
            baseURL: `${useRuntimeConfig().public.API_URL}/api/`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization": `Bearer ${token}`
            },
            method: method,
            url: url,
            params: params,
            data: body
        }).then((res) => {
            let response = res.data
            result = new ResponseModel(response.message ?? '', response.status, response.errors, response.data, res.status, response.ok ?? false);
        }).catch((res) => {
            let response = res.response.data;
            result = new ResponseModel(res.message, response.status, response.specific_error, response.data, res.status, response.ok ?? false);
            console.log(res);
            if (res.response.status === 401) {
                ConfigStore.logout();
                return navigateTo('/auth/login');
            }
        }).finally(() => {
            this._pending.value = false;
        })

        return result;
    }
}