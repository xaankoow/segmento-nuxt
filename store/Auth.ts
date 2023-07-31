import { defineStore } from 'pinia'

export const useAuth = defineStore('Auth', () => {
    const token = ref(useCookie('token', { secure: true, default: () => '' }).value)
    const permission = ref(useCookie('permission', { secure: true, default: () => '' }).value)

    function login(auth_token: string, prm: string) {
        useCookie('token').value = auth_token
        useCookie('permission').value = prm
        token.value = auth_token
        permission.value = prm
    }

    function logout() {
        useCookie('token').value = null
        useCookie('permission').value = null
        token.value = ''
        permission.value = ''
    }

    return {
        token, login, logout, permission
    }
})