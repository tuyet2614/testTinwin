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
};

export default OrderServices;
