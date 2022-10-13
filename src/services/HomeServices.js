const {get} = require('./AxiosHelper');

const HomeServices = {
  getCategoriesForHome(params) {
    return get('/webbff/sales/api/app/category/data-by-home-screen', params);
  },
  getProductForHome(params) {
    return get('/webbff/sales/api/app/product/home-for-customer', params);
  },
  getSupplier(params) {
    return get('/webbff/partnership/api/app/supplier/all', params);
  },
};

export default HomeServices;
