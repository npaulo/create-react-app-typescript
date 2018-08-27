import { combineEpics } from 'redux-observable';    

import { countersEpics } from '@src/components/counters';

export default combineEpics(countersEpics);
