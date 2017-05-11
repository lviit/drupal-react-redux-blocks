import { createStore, compose } from 'redux';

// root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
  messages: []
};

// redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
