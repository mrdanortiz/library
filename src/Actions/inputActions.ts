import { actionType } from "./actionTypes";

export const setFormData = (name: string, value: string | boolean) => ({ type: actionType.SET_FORM_DATA, name, value });
export const getImages = () => ({ type: actionType.GET_IMAGES });
export const deliverImages = payload => ({ type: actionType.DELIVER_IMAGES, payload });
export const setInputErrors = (name: string, value: boolean) => ({ type: actionType.SET_INPUT_ERROR, name, value });
