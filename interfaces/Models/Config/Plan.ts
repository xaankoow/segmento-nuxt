export default interface Plan {
    uuid: string,
    package_id: number,
    default_discount_id: number | null,
    name: string,
    time: number,
    limit: number,
    price: number,
    deleted_at: string | null ,
    created_at: string,
    updated_at: string
}