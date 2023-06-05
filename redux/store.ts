import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const configStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configStore;
