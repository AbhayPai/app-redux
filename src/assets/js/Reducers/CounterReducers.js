import initialState from 'StatesPath/GlobalStates';

/*
 *  Example:-
 *  createStore(CounterReducers);
 */
const CounterReducers = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return false;
    }

    const newState = state;

    if (action.type === 'ADD') {
        newState.counter += 1;
    }

    if (action.type === 'SUBSTRACT') {
        newState.counter -= 1;
    }

    return newState;
};

export default CounterReducers;
