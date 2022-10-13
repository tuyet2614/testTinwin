import {get} from './AxiosHelper';
import axios from 'axios';

const listShopService = {
  getListShop() {
    return get('/webbff/partnership/api/app/supplier/all');
  },

  getShopById(params) {
    return get(`/webbff/partnership/api/app/supplier/${params}/supplier-by-id`);
  },
  getRateOfShopId(params) {
    return get('/webbff/reviews/get-store-rate', params);
  },

  getProductOfShop(params) {
    return get('/webbff/sales/api/app/product/for-customer', params);
  },
  getCategoriesOfShop(params) {
    return get(`/webbff/sales/api/app/category/for-supplier/${params}`);
  },
  getProductsByCategoryOfShop(params) {
    return get('/webbff/sales/api/app/product/for-customer', params);
  },
};

export default listShopService;
