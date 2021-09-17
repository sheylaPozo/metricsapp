/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import thunk from 'redux-thunk';
import countriesReducer from './redux/countries/countries';

const reducer = combineReducers({
  countries: countriesReducer,
  loadingBar: loadingBarReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

function render(
  ui,
  {
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
