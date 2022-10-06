import {all, call, fork, takeLatest} from 'redux-saga/effects';
import ReviewServices from '../../services/ReviewServices';
import {GET_FOR_CUSTOMER} from './constants';

function* fetchData() {
  takeLatest(GET_FOR_CUSTOMER, function* (action?: object) {
    try {
      const res: object = yield call(
        ReviewServices.getForCustomer(action.payload),
      );
      console.log(res);
    } catch (error) {}
  });
}

export default function* ReviewSaga() {
  yield all([fork(fetchData)]);
}
