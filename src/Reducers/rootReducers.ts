import { combineReducers } from "redux";
import { imageDataReducer } from "./imageDataReducer";
import { inputDataReducer } from "./inputDataReducer";

export const rootReducer = combineReducers({
    inputDataReducer,
    imageDataReducer,
});
