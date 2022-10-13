import {all, call, fork, takeLatest} from 'redux-saga/effects';
import ReviewServices from '../../services/ReviewServices';
import {GET_FOR_CUSTOMER, REVIEW} from './constants';

interface action {
  data: object;
  payload: object;
  type: string;
}
function* fetchData() {
  yield takeLatest(REVIEW, function* (action: action) {
    try {
      const res = yield call(ReviewServices.review, action.payload);
      if (res.status === 200) {
      } else {
      }
    } catch (error) {}
  });
}

export default function* ReviewSaga() {
  yield all([fork(fetchData)]);
}
