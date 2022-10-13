import { GET_ALL_PRODUCT_OF_SHOP } from "./constants";
export const setProducts = (product: object) => ({
    type: GET_ALL_PRODUCT_OF_SHOP,
    payload: product
})
