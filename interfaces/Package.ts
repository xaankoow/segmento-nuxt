export default interface Package {
    uuid: String,
    title: String,
    active: Boolean,
    price: Number,
    day: Number,
    extra_attributes: any,
    type: PackageType,
    status: Number,
    expire_at: any
}

interface PackageType {
    code: Number,
    label: String,
    description: String
}