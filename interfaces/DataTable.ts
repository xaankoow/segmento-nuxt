interface ItemsInterface<TValue> {
    [key: string]: TValue;
}

export default interface DataTable {
    headers: Array<string>
    items: ItemsInterface<any>

}