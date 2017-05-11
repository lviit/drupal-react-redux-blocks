import { combineReducers } from 'redux';
import anotherReducer from './anotherReducer';
import messages from './messages';

const rootReducer = combineReducers({messages, anotherReducer});

export default rootReducer;
