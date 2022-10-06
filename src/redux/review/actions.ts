import {GET_FOR_CUSTOMER} from './constants';

const getForCustomer = (data?: object) => {
  return {
    type: GET_FOR_CUSTOMER,
    payload: data,
  };
};

export {getForCustomer};
