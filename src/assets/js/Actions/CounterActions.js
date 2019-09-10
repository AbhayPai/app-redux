/*
 *  Example:-
 *  new CounterActions(
 *      '#add',
 *      'add',
 *      store
 *  );
 */
const CounterActions = (selector, type, store) => {
    document.querySelector(selector).addEventListener(
        'click',
        function(event) {
            event.preventDefault();

            if (type === 'add') {
                store.dispatch({
                    type: 'ADD'
                });
            }

            if (type === 'sub') {
                store.dispatch({
                    type: 'SUBSTRACT'
                });
            }
        }
    );
};

export default CounterActions;
