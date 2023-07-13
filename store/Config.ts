import User from "../interfaces/User";
import { defineStore } from "pinia";

export const useConfigStore = defineStore('config', {
    state: () => {
        return {
            _token: null as String | null,
            _user: null as User | null,
        }
    },
    getters: {
        user: (state): User | null => state._user,
        token: (state): String | null => state._token,
    },
    actions: {
        setUser(user) {
            this._user = user;
        },
        setToken(token) {
            this._token = token;
        },
        setConfig(data) {
            this.setToken(data.token);
            this.setUser(data.user);
        }
    }
})