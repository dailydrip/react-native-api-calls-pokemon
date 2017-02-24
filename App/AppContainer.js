import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App'

import makeStore from './Redux/store';

const AppContainer = () => {
  const store = makeStore()
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
