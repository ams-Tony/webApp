import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './service/reducer'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

export const store = compose(applyMiddleware(thunk))(createStore)(reducer);
let persistor = persistStore(store);
import App from './App.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
