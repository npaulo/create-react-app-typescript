import Types from 'Types';
import { combineEpics } from 'redux-observable';
import { tap, ignoreElements, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import * as countersActions from './actions';

// Note: 
// Types.RootEpic is a simplification for Epic<Types.RootAction, Types.RootAction, Types.RootState, Types.Services>

// contrived example!!!
export const logAddAction: Types.RootEpic = (
    action$,
    store,
    { logger  }
) =>
    action$.pipe(
        filter(isActionOf(countersActions.add)),
        tap(action => {
            logger.log(
                `action type must be equal: ${countersActions.add} === ${action.type}`
            );
        }),
        ignoreElements()
    );

export const epics = combineEpics(logAddAction);
