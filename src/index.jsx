import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import loginReducer from './reducers/loginReducer';

import './index.css';
import App from './App';

const reducers = {
  login: loginReducer,
  form: formReducer,
};
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
