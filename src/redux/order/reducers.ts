import {GET_ORDER_SUCCESS} from './actions';

interface NotificationState {
  notification: {items: object; totalCount: number};
}

const initState: NotificationState = {
  notification: {
    items: {},
    totalCount: 0,
  },
};
var _ = require('lodash');
const orderReducers = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_ORDER_SUCCESS:
      return {...state, order: action.data};
    default:
      return state;
  }
};

export default orderReducers;
