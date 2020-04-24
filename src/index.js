import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducers from 'modules';

import App from 'App';
import * as serviceWorker from 'serviceWorker';

const store = createStore(rootReducers, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
