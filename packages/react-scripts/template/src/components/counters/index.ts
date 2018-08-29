// export only public stuff

// rename connect component to original component name
export { CountersContainer as Counters } from './counters-container';

// rename actions to <component name>Actions
import * as countersActions from './redux/actions';
export { countersActions };

export * from './redux/reducers';

// rename epics to <component name>Epics
export { epics as countersEpics } from './redux/epics';