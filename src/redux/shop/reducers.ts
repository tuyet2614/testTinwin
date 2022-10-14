import { sortNewProduct, SortProductAsc, SortProductDesc } from '../../hooks/sort/sortProduct'
import { GET_ALL_PRODUCT_OF_SHOP, SORT_PRODUCT_BY_NAME, SORT_PRODUCT_BY_NEWER, SORT_PRODUCT_BY_PRICE, SORT_PRODUCT_BY_SELLER } from './constants'


interface ProductState {
    product: object[]
}

const initState: ProductState = {

    product: [],
}

const productReducer = (state = initState, action: any) => {
    switch (action?.type) {
        case GET_ALL_PRODUCT_OF_SHOP:
            return { ...state, product: action.payload }
        case SORT_PRODUCT_BY_PRICE:
            let sortedArr = action.payload.field ? SortProductAsc(action.payload.product, 'price') : SortProductDesc(action.payload.product, 'price')
            return { ...state, product: sortedArr }
        case SORT_PRODUCT_BY_SELLER:
            let soldProduct = SortProductDesc(action.payload, 'soldByCustomer')
            return { ...state, product: soldProduct }
        case SORT_PRODUCT_BY_NAME:
            let nameProduct = action.payload.field ? SortProductAsc(action.payload.product, 'name') : SortProductDesc(action.payload.product, 'name')
            return { ...state, product: nameProduct }
        default:
            return state;
    }
}

export default productReducer