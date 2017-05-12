import React from 'react';
import { render } from 'react-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
//import Form from './components/Form';

render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('block-reactblock1'),
);
