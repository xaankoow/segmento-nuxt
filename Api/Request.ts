import axios from "axios";
import ResponseModel from "./ResponseModel"
import ConfigStore from "../store/ConfigStore";

export default class Request {
    private request = useNuxtApp().$axios;
    private url = useRuntimeConfig().public.API_URL;
    public readonly pending = ref(false);

    constructor(version: string | null = null) {
        if (version) this.url += `/${version}`;
        return this;
    }

    public get = async (path: string, params: JSON | null = null) => {
        return await this.send_request('GET', path, null, params);
    }

    public post = async (path: string, body: JSON | null = null) => {
        return await this.send_request('POST', path, body, null);
    }

    public delete = async (path: string, body: JSON | null = null) => {
        return await this.send_request('DELETE', path, body, null);
    }
    
    public put = async (path: string, body: JSON | null = null) => {
        return await this.send_request('PUT', path, body, null);
    }

    protected send_request = async (method: string, path: string, body: any = null, params: any = null): Promise<ResponseModel> => {
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
            let response = res.data;
            result = new ResponseModel(response.message ?? '', response.ok, response.errors, response.data, res.status);
        }).catch((res) => {
            let response = res.response.data;
            result = new ResponseModel(response.message ?? res.message, false, response.errors ?? [], [], res.status);
            if (res.response.status === 401) {
                ConfigStore.logout();
                navigateTo('/auth/login'); // Navigate here without returning anything
                return false; // Explicitly return false to satisfy the return type
            }
            return false; // Explicitly return false for other cases as well
        }).finally(() => {
            this.pending.value = false;
        });


        return result;
    }
}