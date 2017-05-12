import React from 'react';
import { render } from 'react-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import Products from './components/Products';

render(
  <Provider store={store}>
    <Products />
  </Provider>,
  document.getElementById('block-reactblock3'),
);
