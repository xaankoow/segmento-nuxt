export default interface Plans {
    uuid: string,
    name: string,
    price: Price,
    tooltip: string,
    discount_title: string
}

interface Price {
    price: number,
    final: number,
}