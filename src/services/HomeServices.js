const {get} = require('./AxiosHelper');

const HomeServices = {
  getCategoriesForHome(params) {
    return get('/sales/api/app/category/data-by-home-screen', params);
  },
  getProductForHome(params) {
    return get('/sales/api/app/product/home-for-customer', params);
  },
};

export default HomeServices;
