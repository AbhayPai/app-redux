/*
 *  Require Sass file for the compilation
 */
require('SassPath/pages/index.scss');

import { createStore } from 'redux';

import SetCounter from 'ModulesPath/SetCounter';
import CounterActions from 'ActionsPath/CounterActions';
import CounterReducers from 'ReducersPath/CounterReducers';

// calling anonymous function
(() => {
    // creating store of CounterReducers
    const store = createStore(CounterReducers);

    // creating subscribe for CounterReducers
    store.subscribe(() => {
        // updating UI of counter
        new SetCounter(
            '#counter-status',
            store.getState().counter.toString()
        );
    });

    // updating UI of counter
    new SetCounter(
        '#counter-status',
        store.getState().counter.toString()
    );

    // creating action for addition
    new CounterActions(
        '#add',
        'add',
        store
    );

    // creating action for subtraction
    new CounterActions(
        '#sub',
        'sub',
        store
    );
})();
