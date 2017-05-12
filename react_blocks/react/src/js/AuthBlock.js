import React from 'react';
import { render } from 'react-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import Login from './components/Login';

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('block-reactauthblock'),
);
