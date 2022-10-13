import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import OrderServices from '../../services/OrderServices';
import {
  CANCEL_ORDER,
  GET_DETAIL_ORDER,
  GET_DETAIL_ORDER_FAIL,
  GET_DETAIL_ORDER_SUCCESS,
  GET_DETAIL_SHIPPING_ADDRESS,
  GET_DETAIL_SHIPPING_ADDRESSR_FAIL,
  GET_DETAIL_SHIPPING_ADDRESS_NOT_CANCEL,
  GET_DETAIL_SHIPPING_ADDRESS_NOT_CANCEL_FAIL,
  GET_DETAIL_SHIPPING_ADDRESS_NOT_CANCEL_SUCCESS,
  GET_DETAIL_SHIPPING_ADDRESS_SUCCESS,
  GET_MORE_ORDER,
  GET_MORE_ORDER_CANCELLED,
  GET_MORE_ORDER_CANCELLED_FAIL,
  GET_MORE_ORDER_CANCELLED_SUCCESS,
  GET_MORE_ORDER_DELIVERED,
  GET_MORE_ORDER_DELIVERED_FAIL,
  GET_MORE_ORDER_DELIVERED_SUCCESS,
  GET_MORE_ORDER_DELIVERING,
  GET_MORE_ORDER_DELIVERING_FAIL,
  GET_MORE_ORDER_DELIVERING_SUCCESS,
  GET_MORE_ORDER_FAIL,
  GET_MORE_ORDER_PREPARE,
  GET_MORE_ORDER_PREPARE_FAIL,
  GET_MORE_ORDER_PREPARE_SUCCESS,
  GET_MORE_ORDER_SUCCESS,
  GET_MORE_ORDER_WAIT_COMFIRM,
  GET_MORE_ORDER_WAIT_COMFIRM_FAIL,
  GET_MORE_ORDER__WAIT_COMFIRM_SUCCESS,
  GET_ORDER,
  GET_ORDER_CANCELLED,
  GET_ORDER_CANCELLED_FAIL,
  GET_ORDER_CANCELLED_SUCCESS,
  GET_ORDER_DELIVERED,
  GET_ORDER_DELIVERED_FAIL,
  GET_ORDER_DELIVERED_SUCCESS,
  GET_ORDER_DELIVERING,
  GET_ORDER_DELIVERING_FAIL,
  GET_ORDER_DELIVERING_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_PREPARE,
  GET_ORDER_PREPARE_FAIL,
  GET_ORDER_PREPARE_SUCCESS,
  GET_ORDER_SUCCESS,
  GET_ORDER_WAIT_COMFIRM,
  GET_ORDER_WAIT_COMFIRM_FAIL,
  GET_ORDER_WAIT_COMFIRM_SUCCESS,
  GET_REASON_CANCEL,
  GET_REASON_CANCEL_FAIL,
  GET_REASON_CANCEL_SUCCESS,
  GET_SUPPILER,
  GET_SUPPILER_FAIL,
  GET_SUPPILER_SUCCESS,
} from './actions';
interface action {
  data: object;
  payload: object;
  type: string;
}
function* fetchData() {
  yield takeLatest(GET_ORDER, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_ORDER_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_ORDER_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_ORDER_WAIT_COMFIRM, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_ORDER_WAIT_COMFIRM_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_ORDER_WAIT_COMFIRM_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_ORDER_PREPARE, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_ORDER_PREPARE_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_ORDER_PREPARE_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_ORDER_DELIVERING, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_ORDER_DELIVERING_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_ORDER_DELIVERING_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_ORDER_DELIVERED, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_ORDER_DELIVERED_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_ORDER_DELIVERED_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_ORDER_CANCELLED, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_ORDER_CANCELLED_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_ORDER_CANCELLED_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_ORDER, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_ORDER_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_ORDER_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });

  yield takeLatest(GET_MORE_ORDER, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_MORE_ORDER_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_MORE_ORDER_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_MORE_ORDER_WAIT_COMFIRM, function* (action: action) {
    try {
      // const res = yield call(OrderServices.getOrder, action.payload);
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_MORE_ORDER__WAIT_COMFIRM_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_MORE_ORDER_WAIT_COMFIRM_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_MORE_ORDER_PREPARE, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_MORE_ORDER_PREPARE_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_MORE_ORDER_PREPARE_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_MORE_ORDER_DELIVERING, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_MORE_ORDER_DELIVERING_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_MORE_ORDER_DELIVERING_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_MORE_ORDER_DELIVERED, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_MORE_ORDER_DELIVERED_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_MORE_ORDER_DELIVERED_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_MORE_ORDER_CANCELLED, function* (action: action) {
    try {
      const res = yield call(OrderServices.getOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_MORE_ORDER_CANCELLED_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_MORE_ORDER_CANCELLED_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });

  yield takeLatest(GET_REASON_CANCEL, function* (action: action) {
    try {
      const res = yield call(OrderServices.getReasonCancel, action.payload);
      if (res.status === 200) {
        yield put({type: GET_REASON_CANCEL_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_REASON_CANCEL_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(CANCEL_ORDER, function* (action: action) {
    try {
      const res = yield call(OrderServices.cancelMyBuy, action.payload);
      if (res.status === 200) {
      } else {
      }
    } catch (error) {}
  });
  yield takeLatest(GET_DETAIL_ORDER, function* (action: action) {
    try {
      const res = yield call(OrderServices.getDetailOrder, action.payload);
      if (res.status === 200) {
        yield put({type: GET_DETAIL_ORDER_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_DETAIL_ORDER_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_DETAIL_SHIPPING_ADDRESS, function* (action: action) {
    try {
      const res = yield call(OrderServices.getDetailAddress, action.payload);
      if (res.status === 200) {
        yield put({type: GET_DETAIL_SHIPPING_ADDRESS_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_DETAIL_SHIPPING_ADDRESSR_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(
    GET_DETAIL_SHIPPING_ADDRESS_NOT_CANCEL,
    function* (action: action) {
      try {
        const res = yield call(OrderServices.getDetailAddress, action.payload);
        if (res.status === 200) {
          yield put({
            type: GET_DETAIL_SHIPPING_ADDRESS_NOT_CANCEL_SUCCESS,
            data: res.data,
          });
        } else {
          yield put({
            type: GET_DETAIL_SHIPPING_ADDRESS_NOT_CANCEL_FAIL,
            err: res.data.error_description,
          });
        }
      } catch (error) {}
    },
  );
  yield takeLatest(GET_SUPPILER, function* (action: action) {
    try {
      const res = yield call(OrderServices.getSuppiler, action.payload);
      if (res.status === 200) {
        yield put({type: GET_SUPPILER_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_SUPPILER_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
}

export default function* OrderSaga() {
  yield all([fork(fetchData)]);
}
