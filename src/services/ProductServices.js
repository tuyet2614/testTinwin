const {get} = require('./AxiosHelper');

const ProductServices = {
  getProductDetail(id) {
    return get(`/webbff/sales/api/app/product/by-id/${id}`);
  },
  getTopSearch(params) {
    return get('/webbff/sales/api/app/product/top-search', params);
  },
};

export default ProductServices;
