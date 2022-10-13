import {get, getList, post} from './AxiosHelper';

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
  receiveOrder(params) {
    return get('/webbff/sales/api/app/customer-order/', params);
  },
  getSupplier(params) {
    return getList(
      '/webbff/partnership/api/app/supplier/supplier-by-list-id',
      params,
    );
  },
};

export default OrderServices;
