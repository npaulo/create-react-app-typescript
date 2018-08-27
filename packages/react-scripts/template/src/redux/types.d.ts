import { StateType } from 'typesafe-actions';
import { CountersActions } from '@src/components/counters';
import { rootReducer } from './root-reducer';
import { Epic } from 'redux-observable';
import { RouterAction, LocationChangeAction } from 'react-router-redux';
type ReactRouterAction = RouterAction | LocationChangeAction;

declare module 'Types' {
    export type RootState = StateType<typeof rootReducer>;
    export type RootAction = CountersActions;
    export type RootEpic = Epic<RootAction, RootAction, RootState, Services>;
}
