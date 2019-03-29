import { actionType } from "../Actions/actionTypes";

const initialState = {
    inputFormData: {
        inputBox: undefined,
        checkbox: undefined,
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
        default:
            return state;
    }
};
