import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store/configureStore'
import TaskApp from './containers/TaskApp.jsx'

const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TaskApp />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);