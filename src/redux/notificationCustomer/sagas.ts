import AsyncStorage from '@react-native-async-storage/async-storage';
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import NotificationServices from '../../services/NotificationServices';
import {
  GET_MORE_NOTIFICATION,
  GET_MORE_NOTIFICATION_FAIL,
  GET_MORE_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION,
  GET_NOTIFICATION_COUNT_UNREAD,
  GET_NOTIFICATION_COUNT_UNREAD_FAIL,
  GET_NOTIFICATION_COUNT_UNREAD_SUCCESS,
  GET_NOTIFICATION_FAIL,
  GET_NOTIFICATION_SUCCESS,
  MASK_AS_READ,
  MASK_AS_READ_SUCCESS,
} from './actions';
interface action {
  data: object;
  payload: object;
  type: string;
}
function* fetchData() {
  yield takeLatest(GET_NOTIFICATION, function* (action: action) {
    try {
      const res = yield call(
        NotificationServices.getNotification,
        action.payload,
      );
      if (res.status === 200) {
        yield put({type: GET_NOTIFICATION_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_NOTIFICATION_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_NOTIFICATION_COUNT_UNREAD, function* (action: action) {
    try {
      const res = yield call(NotificationServices.getNotificationCountUnread);
      if (res.status === 200) {
        yield put({
          type: GET_NOTIFICATION_COUNT_UNREAD_SUCCESS,
          data: res.data,
        });
      } else {
        yield put({
          type: GET_NOTIFICATION_COUNT_UNREAD_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
  yield takeLatest(MASK_AS_READ, function* (action: action) {
    try {
      const res = yield call(NotificationServices.maskRead, action.payload);
      if (res.status === 200) {
        yield put({
          type: MASK_AS_READ_SUCCESS,
          data: res.data,
        });
      } else {
        // yield put({
        //   type: GET_NOTIFICATION_COUNT_UNREAD_FAIL,
        //   err: res.data.error_description,
        // });
      }
    } catch (error) {}
  });
  yield takeLatest(GET_MORE_NOTIFICATION, function* (action: action) {
    try {
      const res = yield call(
        NotificationServices.getNotification,
        action.payload,
      );
      if (res.status === 200) {
        yield put({
          type: GET_MORE_NOTIFICATION_SUCCESS,
          data: res.data,
        });
      } else {
        yield put({
          type: GET_MORE_NOTIFICATION_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
}

export default function* NotificationSaga() {
  yield all([fork(fetchData)]);
}
