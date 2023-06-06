import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer, Persistor  } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/rootReducer';
import rootSagas from './sagas/rootSaga';

type RootState = ReturnType<typeof rootReducer>;
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const persistedReducer  = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const sagaMiddleware = createSagaMiddleware();

const store: Store<RootState> = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

// Khởi tạo Redux Persist
const persistor: Persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };

