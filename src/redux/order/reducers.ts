import {
  GET_MORE_ORDER_CANCELLED_SUCCESS,
  GET_MORE_ORDER_DELIVERED,
  GET_MORE_ORDER_DELIVERING_SUCCESS,
  GET_MORE_ORDER_PREPARE_SUCCESS,
  GET_MORE_ORDER_SUCCESS,
  GET_MORE_ORDER__WAIT_COMFIRM_SUCCESS,
  GET_ORDER_CANCELLED_SUCCESS,
  GET_ORDER_DELIVERED_SUCCESS,
  GET_ORDER_DELIVERING_SUCCESS,
  GET_ORDER_PREPARE_SUCCESS,
  GET_ORDER_SUCCESS,
  GET_ORDER_WAIT_COMFIRM_SUCCESS,
  GET_REASON_CANCEL_SUCCESS,
} from './actions';

interface OrderState {
  orderWaitPay: {items: object; totalCount: number};
  orderWaitComfirm: {items: object; totalCount: number};
  orderPrepare: {items: object; totalCount: number};
  orderDelivering: {items: object; totalCount: number};
  orderDelivered: {items: object; totalCount: number};
  orderCancel: {items: object; totalCount: number};
}

const initState: OrderState = {
  orderWaitPay: {
    items: {},
    totalCount: 0,
  },
  orderWaitComfirm: {
    items: {},
    totalCount: 0,
  },
  orderPrepare: {
    items: {},
    totalCount: 0,
  },
  orderDelivering: {
    items: {},
    totalCount: 0,
  },
  orderDelivered: {
    items: {},
    totalCount: 0,
  },
  orderCancel: {
    items: {},
    totalCount: 0,
  },
};
var _ = require('lodash');
const orderReducers = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_ORDER_SUCCESS:
      return {...state, orderWaitPay: action.data};
    case GET_ORDER_WAIT_COMFIRM_SUCCESS:
      return {...state, orderWaitComfirm: action.data};
    case GET_ORDER_PREPARE_SUCCESS:
      return {...state, orderPrepare: action.data};
    case GET_ORDER_DELIVERING_SUCCESS:
      return {...state, orderDelivering: action.data};
    case GET_ORDER_DELIVERED_SUCCESS:
      return {...state, orderDelivered: action.data};
    case GET_ORDER_CANCELLED_SUCCESS:
      return {...state, orderCancel: action.data};

    case GET_MORE_ORDER_SUCCESS:
      if (!action.data.items) {
        return state;
      }
      return {
        ...state,
        orderWaitPay: {
          ...state.orderWaitPay,
          items: _.concat(state.orderWaitPay.items, action.data.items),
        },
      };
    case GET_MORE_ORDER__WAIT_COMFIRM_SUCCESS:
      if (!action.data.items) {
        return state;
      }
      return {
        ...state,
        orderWaitComfirm: {
          ...state.orderWaitComfirm,
          items: _.concat(state.orderWaitComfirm.items, action.data.items),
        },
      };
    case GET_MORE_ORDER_PREPARE_SUCCESS:
      if (!action.data.items) {
        return state;
      }
      return {
        ...state,
        orderPrepare: {
          ...state.orderPrepare,
          items: _.concat(state.orderPrepare.items, action.data.items),
        },
      };
    case GET_MORE_ORDER_DELIVERING_SUCCESS:
      if (!action.data.items) {
        return state;
      }
      return {
        ...state,
        orderDelivering: {
          ...state.orderDelivering,
          items: _.concat(state.orderDelivering.items, action.data.items),
        },
      };
    case GET_MORE_ORDER_DELIVERED:
      if (!action.data) {
        return state;
      }
      return {
        ...state,
        orderDelivered: {
          ...state.orderDelivered,
          items: _.concat(state.orderDelivered.items, action.data.items),
        },
      };
    case GET_MORE_ORDER_CANCELLED_SUCCESS:
      if (!action.data.items) {
        return state;
      }
      return {
        ...state,
        orderCancel: {
          ...state.orderCancel,
          items: _.concat(state.orderCancel.items, action.data.items),
        },
      };

    case GET_REASON_CANCEL_SUCCESS:
      return {...state, reasonCancel: action.data};
    default:
      return state;
  }
};

export default orderReducers;
