import { combineReducers } from 'redux';
import authentication from './authentication';
import messages from './messages';

const rootReducer = combineReducers({messages, authentication});

export default rootReducer;
