import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../Epics/rootEpics";
import { rootReducer } from "../Reducers/rootReducers";

const epicMiddleware = createEpicMiddleware();
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);

export default store;
