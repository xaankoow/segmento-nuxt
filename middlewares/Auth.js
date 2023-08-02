import StoreConfig from "../store/ConfigStore";

export default defineNuxtRouteMiddleware((to, from) => {
    let token = StoreConfig.token();

    // TODO : check token available

    if (token === undefined || token === null || token.length <= 20) {
        StoreConfig.logout();
        return navigateTo('/auth/login');
    }

    return true;
})