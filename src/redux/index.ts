import { rootReducer } from './reducer/index';
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from '@redux-saga/core';
import { rootWatcher } from './saga';

const sagaMiddleware = createSagaMiddleware()

export const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)


