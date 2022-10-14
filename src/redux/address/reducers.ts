import {SET_ADDRESS} from './constants';

interface AddressState {
  address: [];
}

const initState: AddressState = {
  address: [],
};

const addressReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case SET_ADDRESS:
      return {...state, address: action.payload};
    default:
      return state;
  }
};

export default addressReducer;
