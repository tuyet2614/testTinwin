import { get } from './AxiosHelper';
import axios from 'axios';

const listShopService = {
    getListShop() {
        return get('/partnership/api/app/supplier/all')
    },

    getShopById(params) {
        return get(`/partnership/api/app/supplier/${params}/supplier-by-id`)
    },
    getRateOfShopId(params) {
        return get('/reviews/get-store-rate', params)
    },

    getProductOfShop(params) {
        return get('/sales/api/app/product/for-customer', params)
    },
    getCategoriesOfShop(params) {
        return get(`/sales/api/app/category/for-supplier/${params}`)
    },
    getProductsByCategoryOfShop(params) {
        return get('/sales/api/app/product/for-customer', params)
    }

}

export default listShopService;