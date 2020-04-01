import { LOAD_LAUNCHES_SUCCEED } from './launches.constants';

const INITIAL_STATE = {
  allLaunches: [],
};

export const launchesReducer = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOAD_LAUNCHES_SUCCEED:
      return {
        ...state,
        allLaunches: action.payload,
      };
    default:
      return state;
  }
};
