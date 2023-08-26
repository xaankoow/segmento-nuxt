export type rows = "chart"| "row"| "word_key"| "rate_now"| "nubmer_fall_raise"| "last_update"| "average_period"| "lable"| "created_at"| "site_rival"| "operations"

export default interface DataTable {
    headers: rows[]
    items: Array<{
        chart: string
        row: number
        word_key: string
        rate_now: number
        nubmer_fall_raise: number
        last_update: string
        average_period: number
        lable: string
        created_at: string
        site_rival: string
        operations: string
    }>

}