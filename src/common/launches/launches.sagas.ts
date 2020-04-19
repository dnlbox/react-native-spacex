import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadLaunchesFailed, loadLaunchesSucceed } from "./launches.actions";
import { LOAD_LAUNCHES } from "./launches.constants";

function* handleLoadLaunches() {
  try {
    const request = {
      method: "GET",
      url: "https://api.spacexdata.com/v3/launches"
    };

    const response = yield call(axios, request);

    yield put(loadLaunchesSucceed(response.data));
  } catch (ex) {
    yield put(loadLaunchesFailed(ex));
  }
}

export function* watchLoadLaunches() {
  yield takeEvery(LOAD_LAUNCHES, handleLoadLaunches);
}
