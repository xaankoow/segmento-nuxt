import { RootStateWebApp } from "@/types/stores"
export const useSegmentoApp = defineStore("app", () => {
    const runtimeConfig = useRuntimeConfig()

    //state
    const state: RootStateWebApp = reactive({
        locale: runtimeConfig.public.APP_LOCALE as string
    })

    //getters
    const locale = computed({
        get() {
            return state.locale
        },
        set(locale: string) {
            setLocale(locale)
        }
    })
    const rtl = computed((): boolean =>
        ["fa-IR", "ar", "azIr"].includes(state.locale)
    )

    //actions
    const setLocale = (locale: string): void => {
        state.locale = locale
    }


    return {
        state,
        locale,
        rtl
    }
})