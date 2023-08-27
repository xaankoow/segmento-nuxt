export default interface User {
    name: string,
    img: string | null,
    mobile: Validate,
    email: Validate,
    wallet: Number,
    bio: string | null,
    lang: string
}

interface Validate {
    value: string,
    ok: boolean
}