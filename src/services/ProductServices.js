const {get} = require('./AxiosHelper');

const ProductServices = {
  getProductDetail(params) {
    return get('/sales/api/app/product/by-list-ids', params);
  },
};

export default ProductServices;
