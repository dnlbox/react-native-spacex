import { launchesReducer } from './common/launches/launches.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  launches: launchesReducer,
});
