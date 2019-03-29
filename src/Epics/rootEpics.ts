import { combineEpics } from "redux-observable";
import { getImagesEpic } from "./getImagesEpic";

export const rootEpic = combineEpics(getImagesEpic);
