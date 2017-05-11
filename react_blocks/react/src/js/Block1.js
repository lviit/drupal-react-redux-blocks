import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import form from './components/form';

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Block1 = connect(mapStateToProps, mapDispachToProps)(form);

render(
  <Provider store={store}>
    <Block1 />
  </Provider>,
  document.getElementById('block-reactblock1'),
);
