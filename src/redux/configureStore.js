import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/countries';

const reducer = combineReducers({
  countries: countriesReducer,
  loadingBar: loadingBarReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
