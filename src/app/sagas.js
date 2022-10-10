import {all, fork} from 'redux-saga/effects';
import AuthSaga from '../redux/authentication/sagas';
import DataUserSaga from '../redux/dataUser/sagas';
import OrderSaga from '../redux/notificationCustomer/sagas';
import NotificationSaga from '../redux/notificationCustomer/sagas';
import UserSaga from '../redux/user/sagas';

export default function* rootSaga() {
  yield all([
    fork(UserSaga),
    fork(AuthSaga),
    fork(NotificationSaga),
    fork(UserSaga),
    fork(OrderSaga),
    fork(DataUserSaga),
  ]);
}
