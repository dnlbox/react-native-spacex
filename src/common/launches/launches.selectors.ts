import R from "ramda";
import { createSelector } from "reselect";

export const launchesSelector = (state: any) => R.path(["launches"], state);

export const allLaunchesSelector = createSelector(launchesSelector, launches =>
  R.pathOr([], ["allLaunches"], launches)
);
