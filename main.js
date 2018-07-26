import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';

import Counter from './Counter';
import reducer from './reducers';

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(reducer, null, composeEnhancers());

const action = type => store.dispatch({ type });

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    />,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
