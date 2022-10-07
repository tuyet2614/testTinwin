import {get} from './AxiosHelper';

const ShippingServices = {
  getShippingAddress(params) {
    return get('/api/app/shipping-address', params);
  },
  getProvinces(params) {
    return get('/api/app/province', params);
  },
  getDistricts(params) {
    return get('/api/app/district', params);
  },
  getWards(params) {
    return get('/api/app/ward', params);
  },
};

export default ShippingServices;
