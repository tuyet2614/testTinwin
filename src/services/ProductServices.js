const {get} = require('./AxiosHelper');

const ProductServices = {
  getProductDetail(id) {
    return get(`/sales/api/app/product/by-id/${id}`);
  },
  getTopSearch(params) {
    return get('/sales/api/app/product/top-search', params);
  },
};

export default ProductServices;
