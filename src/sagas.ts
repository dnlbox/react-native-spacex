import { watchLoadLaunches } from './common/launches';
import { all } from 'redux-saga/effects';

export function* rootSagas() {
  yield all([watchLoadLaunches()]);
}
