import { GET_ALL_PRODUCT_OF_SHOP, SORT_PRODUCT_BY_PRICE, SORT_PRODUCT_BY_NAME, SORT_PRODUCT_BY_SELLER } from './constants'
export const setProducts = (product: object) => ({
    type: GET_ALL_PRODUCT_OF_SHOP,
    payload: product
})

export const sortProductByPrice = (product: object, field: boolean) => ({
    type: SORT_PRODUCT_BY_PRICE,
    payload: { product, field }
})

export const sortProductBySeller = (product: object) => ({
    type: SORT_PRODUCT_BY_SELLER,
    payload: product
})
export const sortProductByName = (product: object) => ({
    type: SORT_PRODUCT_BY_NAME,
    payload: product
})

