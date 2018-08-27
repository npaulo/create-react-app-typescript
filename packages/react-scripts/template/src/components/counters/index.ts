// export only public stuff

// rename connect component to original component name
// export {CountersContainer as Counters} from './counters';

export * from './redux/actions';
export * from './redux/reducers';

// rename epics to <component name>Epics
export { epics as countersEpics}  from './redux/epics';