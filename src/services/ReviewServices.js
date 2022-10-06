import {get} from './AxiosHelper';

const ReviewServices = {
  getForCustomer(params) {
    return get('/webbff/reviews/get-for-customer', params);
  },
};

export default ReviewServices;
