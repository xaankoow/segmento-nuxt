import axios from "axios"

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            axios: axios.create({
                baseURL: `https://core.segmento.ir/api/${version}/`,
                headers: {
                    'accept' : 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }
    }
})