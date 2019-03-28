import { actionType } from "./actionTypes";

export const setInputData = (input: string) => ({ type: actionType.SET_INPUT_DATA, input });
