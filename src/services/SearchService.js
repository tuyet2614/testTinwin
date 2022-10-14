import axios from 'axios';
import {get} from './AxiosHelper';

const searchService = {
  getProductByKeyword(params) {
    return get('/webbff/sales/api/app/product/names-by-keyword', params);
  },
  renderProductByKeyword(params) {
    return get('/webbff/sales/api/app/product/for-customer', params);
  },
};

export default searchService;
