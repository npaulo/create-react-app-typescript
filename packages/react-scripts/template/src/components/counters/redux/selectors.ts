import * as Types from 'Types';

// reselect - https://github.com/reduxjs/reselect
// This reselect has many features including memory functions by default
import { createSelector } from 'reselect';

// Select component data from global store state
export const getReduxCounter = (state: Types.RootState) => state.reduxCounter;

// e.g.
export const getValue = createSelector(getReduxCounter, (counters) => {
    return counters.value;
});