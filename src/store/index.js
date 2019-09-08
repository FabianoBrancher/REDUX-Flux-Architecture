import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/store/modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMidlleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMidlleware)
      )
    : applyMiddleware(sagaMidlleware);

const store = createStore(rootReducer, enhancer);

sagaMidlleware.run(rootSaga);

export default store;
