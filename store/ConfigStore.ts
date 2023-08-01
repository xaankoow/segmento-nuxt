import Plan from "../interfaces/Models/Config/Plan";
import Wallet from "../interfaces/Models/Wallet";
import Package from "../interfaces/Package";
import User from "../interfaces/User";
import { defineStore } from "pinia";

export default class ConfigStore {
    private _token: string;
    private _user: User | null;
    private _plan: Plan | null;
    private _roles: String[] | [];
    private _wallets: Array<Wallet>

    public static set_token(token: string) {
        useCookie("token").value = token;
    }

    public static set_user(user) {
        useCookie("user").value = user; 
    }

    public static set_plan(plan) {
        useCookie("plan").value = plan; 
    }

    public static set_wallets(wallets) {
        useCookie("wallets").value = wallets;
    }

    public static wallets(): Array<Wallet> {
        return useCookie("wallets").value;
    }

    public static token(): String {
        return useCookie("token").value;
    }
    
    public static user(): User {
        return useCookie("user").value;
    }
    
    public static plan(): Plan {
        return useCookie("plan").value;
    }
    
}

export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            _token: null as String | null,
            _user: null as User | null,
            _package: null as Package | null
        }
    },
    getters: {
        user: (state): User | null => state._user,
        token: (state): String | null => state._token,
        package: (state): Package | null => state._package
    },
    actions: {
        setUser(user) {
            this._user = user;
        },
        setToken(token) {
            this._token = token;
        },
        setPackage(pack) {
            this._package = pack;
        },
        setConfig(data) {
            this.setToken(data.token);
            this.setUser(data.user);
            this.setPackage(data.package ?? null);
        }
    }
})