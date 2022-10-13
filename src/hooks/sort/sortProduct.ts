export const SortProductAsc = (data: object[], field: string) => {
    console.log('data: ', data)
    data.sort(function (a: any, b: any): number {
        return a[field] - b[field]
    })
    return data
}
export const SortProductDesc = (data: object[], field: string) => {
    data.sort(function (a: any, b: any): number {
        return b[field] - a[field]
    })
    return data
}
