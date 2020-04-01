import {
  LOAD_LAUNCHES,
  LOAD_LAUNCHES_SUCCEED,
  LOAD_LAUNCHES_FAILED,
} from './launches.constants';

export const loadLaunches = () => ({
  type: LOAD_LAUNCHES,
});

export const loadLaunchesSucceed = (payload: any) => ({
  type: LOAD_LAUNCHES_SUCCEED,
  payload,
});

export const loadLaunchesFailed = (payload: any) => ({
  type: LOAD_LAUNCHES_FAILED,
  payload,
});
