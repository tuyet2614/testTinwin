import AsyncStorage from '@react-native-async-storage/async-storage';
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import AuthenticationServices from '../../services/AuthenticationServices';
import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from './actions';
interface action {
  data: object;
  payload: object;
  type: string;
}
function* fetchData() {
  yield takeLatest(LOGIN, function* (action: action) {
    try {
      const res = yield call(AuthenticationServices.login, action.payload);
      if (res.status === 200) {
        yield put({type: LOGIN_SUCCESS, data: res.data});
      } else {
        yield put({type: LOGIN_FAIL, err: res.data.error_description});
      }
    } catch (error) {}
  });
}

export default function* AuthSaga() {
  yield all([fork(fetchData)]);
}
