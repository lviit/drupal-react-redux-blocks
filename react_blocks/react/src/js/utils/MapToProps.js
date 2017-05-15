import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';

export function mapStateToProps(state) {
  return {
    messages: state.messages,
    authentication: state.authentication
  }
}

export function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
