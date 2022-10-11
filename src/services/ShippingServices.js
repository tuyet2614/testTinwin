import {deleteMethod, get, post, put} from './AxiosHelper';

const ShippingServices = {
  getShippingAddress() {
    return get('/shipping/api/app/shipping-address');
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
  setDefault(id) {
    return put(`/shipping/api/app/shipping-address/${id}/set-default`);
  },
  updateAddress(id, putData) {
    return put(`/shipping/api/app/shipping-address/${id}`, putData);
  },
  addNewAddress(postData) {
    return post('/shipping/api/app/shipping-address', postData);
  },
  deleteAddress(id) {
    return deleteMethod(`/shipping/api/app/shipping-address/${id}`);
  },
};

export default ShippingServices;
