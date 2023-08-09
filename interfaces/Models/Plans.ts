export default interface Plans {
    id: number,
    title: string,
    price: Price,
    tooltip: string,
    discount_title: string
}

interface Price {
    base: number,
    final: number,
}