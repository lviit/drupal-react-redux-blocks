import React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import list from './components/list';

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Block2 = connect(mapStateToProps, mapDispachToProps)(list);

render(
  <Provider store={store}>
    <Block2 />
  </Provider>,
  document.getElementById('block-reactblock2'),
);
