import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


/* THIS CODE FOR REDUX */

// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './todos-redux/reducers';
// const store = createStore(rootReducer)

import configureStore from './todos-redux-saga/store'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
