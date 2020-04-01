import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';
import { rootSagas } from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = () => {
  const logger = createLogger({ collapsed: true });

  const sagaMiddleware = createSagaMiddleware();
  const baseMiddlewares = [sagaMiddleware, logger];

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...baseMiddlewares)),
  );

  sagaMiddleware.run(rootSagas);

  return store;
};
