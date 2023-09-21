import axios from "axios";
import ResponseModel from "./ResponseModel"
import ConfigStore from "../store/ConfigStore";

export default class Request {
    private request = useNuxtApp().$axios;
    private url = useRuntimeConfig().public.API_URL;
    public readonly pending = ref(false);

    constructor(version: string|null = null) {
        if(version) this.url += `/${version}`;
        return this;
    }

    public get = async (path: string, params: JSON) => {
        return await this.send_request('GET', path, null, params);
    }

    public post = async (path: string, body: JSON) => {
        return await this.send_request('POST', path, body, null);
    }

    protected send_request = async (method: string, path: string, body: any, params: any): Promise<ResponseModel> => {
        let result: any;
        this.pending.value = true;
        let token = ConfigStore.token() ?? '';

        await axios.request({
            baseURL: `${this.url}/`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            },
            method: method,
            url: path,
            params: params,
            data: body
        }).then((res) => {
            let response = res.data
            result = new ResponseModel(response.message ?? '', response.ok, response.errors, response.data, res.status);
        }).catch((res) => {
            let response = res.response.data;
            result = new ResponseModel(res.message, response.ok, response.specific_error, response.data, res.status);
            console.log(res);
            if (res.response.status === 401) {
                ConfigStore.logout();
                return navigateTo('/auth/login');
            }
        }).finally(() => {
            this.pending.value = false;
        })

        return result;
    }
}