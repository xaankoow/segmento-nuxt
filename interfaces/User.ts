export default interface User {
    uuid: String,
    name: String,
    img: String,
    mobile: String,
    email: String,
    wallet: Number,
    package_end_date: Boolean | null,
    bio: String | null,
    website_type: String | null,
    company_scale: String | null,
    seo_experts: String | null,
    website_traffic: any,
    role_in_company: any,
    dating_method: any
}