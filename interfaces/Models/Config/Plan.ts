export default interface Plan {
    uuid: String,
    package_id: number,
    default_discount_id: number | null,
    name: string,
    time: number,
    limit: number,
    price: number,
    deleted_at: String | null ,
    created_at: String,
    updated_at: String
}