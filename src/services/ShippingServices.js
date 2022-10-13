import {deleteMethod, get, post, put} from './AxiosHelper';

const ShippingServices = {
  getShippingAddress() {
    return get('/webbff/shipping/api/app/shipping-address');
  },
  getProvinces(params) {
    return get('/webbff/api/app/province', params);
  },
  getDistricts(params) {
    return get('/webbff/api/app/district', params);
  },
  getWards(params) {
    return get('/webbff/api/app/ward', params);
  },
  setDefault(id) {
    return put(`/webbff/shipping/api/app/shipping-address/${id}/set-default`);
  },
  updateAddress(id, putData) {
    return put(`/webbff/shipping/api/app/shipping-address/${id}`, putData);
  },
  addNewAddress(postData) {
    return post('/webbff/shipping/api/app/shipping-address', postData);
  },
  deleteAddress(id) {
    return deleteMethod(`/webbff/shipping/api/app/shipping-address/${id}`);
  },
};

export default ShippingServices;
