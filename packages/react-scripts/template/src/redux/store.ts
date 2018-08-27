import { Types } from 'Types';
import { createStore, applyMiddleware, AnyAction } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeEnhancers } from '@src/helpers';
import { rootReducer } from './root-reducer';
import rootEpic from './root-epic';
import services from '@src/services';

// tslint:disable-next-line:max-line-length
export const epicMiddleware = createEpicMiddleware<Types.RootAction, Types.RootAction, Types.RootState, Types.Services>({
    dependencies: services,
});

type GenericReducer<S> = (state: S, action: AnyAction) => S;

export function configureStore<S>(
    reducer: GenericReducer<S>,
    initState?: S) {
        // configure middlewares
        const middlewares = [epicMiddleware];
        // compose enhancers
        const enhancer = composeEnhancers(applyMiddleware(...middlewares));
        // create store
        const toReturn = createStore(reducer, initState || {}, enhancer);
        epicMiddleware.run(rootEpic);

        return toReturn;
    }

// pass an optional param to rehydrate state on app start
const store = configureStore<Types.RootState>(rootReducer);

// export store singleton instance
export default store;
