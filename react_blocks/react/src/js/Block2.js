import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import List from './components/List';

render(
  <Provider store={store}>
    <List />
  </Provider>,
  document.getElementById('block-reactblock2'),
);
