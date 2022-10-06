import {get} from './AxiosHelper';

const ShippingServices = {
  getShippingAddress(params) {
    return get('/', params);
  },
  getProvinces(params) {
    return get('/api/app/province', params);
  },
  getDistricts(params) {
    return get('/api/app/district', params);
  },
};

export default ShippingServices;
