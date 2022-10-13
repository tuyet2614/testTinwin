import { useEffect, useState } from "react"
import listShopService from "../../services/ShopService"
import { useDispatch, useSelector } from "react-redux"
import { getProductState } from "../../redux/shop/selector"
import { setProducts } from "../../redux/shop/action"

export const useGetListShops = () => {
    const [res, setRes] = useState([{}])
    useEffect(() => {
        listShopService.getListShop().then(res => {
            setRes(res.data)
            console.log("list", res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

export const getShopById = (id: string) => {
    const [res, setRes] = useState({})
    useEffect(() => {
        listShopService.getShopById(id).then(res => {
            setRes(res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

export const getRateOfShop = (shopId: string) => {
    const [res, setRes] = useState({})
    const params = {
        'supplierId': shopId,
    }
    useEffect(() => {
        listShopService.getRateOfShopId(params).then(res => {
            setRes(res.data)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}

export const getProductOfShop = (shopId: string, categoryId?: string) => {
    const dispatch = useDispatch()
    const product = useSelector(getProductState)
    const dispatchProduct = (data: object) => {
        dispatch(setProducts(data));
    };
    const params = categoryId ? {
        'ListSupplierId': shopId,
        'ListCategoryId': categoryId
    } : {
        'ListSupplierId': shopId,
    }
    useEffect(() => {
        listShopService.getProductsByCategoryOfShop(params).then(res => {
            dispatchProduct(res.data.items)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return product.product
}
export const getCategoriesOfShop = (id: string) => {
    const [res, setRes] = useState([{}])
    useEffect(() => {
        listShopService.getCategoriesOfShop(id).then(res => {
            setRes(res.data.items)
        }).catch(err => console.log('error: ', err.response.data))
    }, [])

    return res
}



