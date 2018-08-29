import Types from 'Types';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as countersActions from './redux/actions';
import { getReduxCounter } from './redux/selectors';
import { Counters } from './counters';

const mapStateToProps = (state: Types.RootState) => ({
    count: getReduxCounter(state).value,
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
    onIncrement: countersActions.increment,
}, dispatch);

export const CountersContainer =
    connect(mapStateToProps, mapDispatchToProps)(Counters);

/*  ---------------------------------------------------------
            Extended version with ownProps
    ---------------------------------------------------------
    
export interface CountersOwnProps {
    initialCount: number;
}

const mapStateToProps = (state: Types.RootState, ownProps: CountersOwnProps) => ({
    count: getReduxCounter(state.counters) + ownProps.initialCount,
});

export const SFCCounterConnectedExtended = connect(mapStateToProps, {
    onIncrement: countersActions.increment,
})(SFCCounter);
*/