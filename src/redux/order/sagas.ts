import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import OrderServices from '../../services/OrderServices';
import {GET_ORDER, GET_ORDER_FAIL, GET_ORDER_SUCCESS} from './actions';
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
}

export default function* NotificationSaga() {
  yield all([fork(fetchData)]);
}
