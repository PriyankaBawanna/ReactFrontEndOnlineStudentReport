import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import fetchreducer from "./reducer";
import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(fetchreducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
export default store;
