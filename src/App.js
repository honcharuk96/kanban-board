import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';
// import { hot } from 'react-hot-loader/root';

import MainLayout from 'components/MainLayout'

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,    
  composeEnhancers(applyMiddleware(...middlewares)),
);

const App = () => (
  <Provider store={store}>
  <div className='body'>
  <MainLayout/>  
  <Test/>
  </div>
  </Provider>
);

export default App;
//export default hot(App);