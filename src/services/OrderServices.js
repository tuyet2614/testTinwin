import {get} from './AxiosHelper';

const OrderServices = {
  getOrder(params) {
    return get('/api/app/customer-order', params);
  },
};

export default OrderServices;
