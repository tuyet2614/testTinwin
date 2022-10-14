import {
  GET_MORE_NOTIFICATION_FAIL,
  GET_MORE_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_COUNT_UNREAD_FAIL,
  GET_NOTIFICATION_COUNT_UNREAD_SUCCESS,
  GET_NOTIFICATION_FAIL,
  GET_NOTIFICATION_SUCCESS,
} from './actions';

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
const notificationCustomerReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_NOTIFICATION_SUCCESS:
      return {...state, notification: action.data};
    case GET_NOTIFICATION_FAIL:
      return {...state, err: action.err};
    case GET_MORE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notification: {
          ...state.notification,
          items: _.concat(state.notification.items, action.data.items),
        },
      };
    case GET_MORE_NOTIFICATION_FAIL:
      return {...state, err: action.err};
    case GET_NOTIFICATION_COUNT_UNREAD_SUCCESS:
      return {...state, notificationCount: action.data};
    case GET_NOTIFICATION_COUNT_UNREAD_FAIL:
      return {...state, err: action.err};
    default:
      return state;
  }
};

export default notificationCustomerReducer;
