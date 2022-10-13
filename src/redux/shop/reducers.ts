import { GET_ALL_PRODUCT_OF_SHOP } from './constants'

interface ProductState {
    product: object[]
}

const initState: ProductState = {

    product: [],
}

const productReducer = (state = initState, action: any) => {
    console.log('state:', state, action)
    switch (action?.type) {
        case GET_ALL_PRODUCT_OF_SHOP:
            return { ...state, product: action.payload }
        default:
            return state;
    }
}

export default productReducer