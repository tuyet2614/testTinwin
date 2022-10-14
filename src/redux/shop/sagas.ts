import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import ShopServices from "../../services/ShopService";
import { fetchShopsSuccess, fetchShopsError } from "./action";


function* fetchData(action: number) {

    try {
        const res: object = yield call(
            ShopServices.getShop(action),
        );
    } catch (error) { }

}

export default function* ReviewSaga() {
    yield takeEvery(fetchShopsSuccess, fetchData);
}
