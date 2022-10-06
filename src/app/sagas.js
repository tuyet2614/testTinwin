import {all, fork} from 'redux-saga/effects';
import AuthSaga from '../redux/authentication/sagas';
import UserSaga from '../redux/user/sagas';

export default function* rootSaga() {
  yield all([fork(UserSaga), fork(AuthSaga)]);
}
