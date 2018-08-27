import { getType, ActionType } from 'typesafe-actions';
import * as countersActions from './actions';
import { combineReducers } from 'redux';

// Combine all actions and create a combined actions type
export type CountersActions = ActionType<typeof countersActions>;

// Naming state interfaces "<component name>State" e.g CountersState
export interface CountersState {
    value: number;
}

// build a reducer
export const countersReducer = combineReducers<CountersState, CountersActions>({
    value: (state: number = 0, action: CountersActions) => {
        switch (action.type) {
            case getType(countersActions.increment):
                return state + 1; // action: { type: "INCREMENT"; }

            case getType(countersActions.add):
                return state + action.payload; // action: { type: "ADD"; payload: number; }

            default:
                return state;
        }
    }
});