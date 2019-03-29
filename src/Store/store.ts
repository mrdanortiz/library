import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../Epics/rootEpics";
import { rootReducer } from "../Reducers/rootReducers";

const epicMiddleware = createEpicMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);

export default store;
