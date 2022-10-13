import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import UserServices from '../../services/UserServices';
import {GET_USER, GET_USER_FAIL, GET_USER_SUCCESS} from './constants';
interface action {
  data: object;
  payload: object;
  type: string;
}
function* fetchData() {
  yield takeLatest(GET_USER, function* (action: action) {
    try {
      const res = yield call(UserServices.getUser);
      if (res.status === 200) {
        yield put({type: GET_USER_SUCCESS, data: res.data});
      } else {
        yield put({
          type: GET_USER_FAIL,
          err: res.data.error_description,
        });
      }
    } catch (error) {}
  });
}

export default function* DataUserSaga() {
  yield all([fork(fetchData)]);
}
