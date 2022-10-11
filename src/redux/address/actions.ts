import {SET_ADDRESS} from './constants';

const setAddress = (data: object[]) => ({
  type: SET_ADDRESS,
  payload: data,
});

export {setAddress};
