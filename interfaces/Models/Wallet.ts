export default interface Wallet {
    uuid: String,
    status: Status,
    balance: number
}

interface Status {
    code: number,
    label: String,
}