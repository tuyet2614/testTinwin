import {get, post} from './AxiosHelper';

const OrderServices = {
  getOrder(params) {
    return get('/webbff/sales/api/app/customer-order', params);
  },
  getReasonCancel(params) {
    return get('/webbff/sales/api/app/reason/for-buyer');
  },
  cancelMyBuy(params) {
    return post(
      `/api/app/customer-order/${params.orderId}/cancel-my-buy`,
      params.reason,
    );
  },
  getDetailOrder(params) {
    return get('/webbff/sales/api/app/customer-order', params);
  },
  getDetailAddressNotCancel(params) {
    return get(
      `/webbff/shipping/api/app/shipping-address/${params}/disable-delete`,
    );
  },
  getDetailAddress(params) {
    return get(
      `/webbff/shipping/api/app/shipping-address/${params}/disable-delete`,
    );
  },
  getSuppiler(params) {
    return get(`/webbff/partnership/api/app/supplier/${params}/supplier-by-id`);
  },
  receiveOrder(params) {
    return get('/webbff/sales/api/app/customer-order/', params);
  },
};

export default OrderServices;
