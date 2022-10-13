const {get} = require('./AxiosHelper');

const SupplierServices = {
  getSupplier(params) {
    return get(
      '/webbff/partnership/api/app/supplier/supplier-by-list-id',
      params,
    );
  },
};

export default SupplierServices;
