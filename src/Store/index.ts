import { createStore } from "redux";
import { rootReducer } from "../Reducers/rootReducers";

export const store = createStore(
    rootReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
