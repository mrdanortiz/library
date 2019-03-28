import { actionType } from "../Actions/actionTypes";

const initialState = {
    inputBoxData: undefined,
};

export const inputDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionType.SET_INPUT_DATA:
            return {
                ...state,
                inputBoxData: action.input,
            };
        default:
            return state;
    }
};
