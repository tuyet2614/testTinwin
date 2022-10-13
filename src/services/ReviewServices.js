import {get, post} from './AxiosHelper';

const ReviewServices = {
  getForCustomer(params) {
    return get('/webbff/reviews/get-for-customer', params);
  },
  review(params) {
    return post('/webbff/reviews/rating-by-customer', params);
  },
};

export default ReviewServices;
