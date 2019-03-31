import { actionType } from "../Actions/actionTypes";

const initialState = {
    inputFormData: {
        inputBox: undefined,
        checkbox: undefined,
    },
    errors: {
        inputBox: false,
    },
};

export const inputDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionType.SET_FORM_DATA:
            return {
                ...state,
                inputFormData: {
                    ...state.inputFormData,
                    [action.name]: action.value,
                },
            };
        case actionType.SET_INPUT_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.name]: action.value,
                },
            };
        default:
            return state;
    }
};
