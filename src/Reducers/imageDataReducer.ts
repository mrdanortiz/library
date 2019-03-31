import { actionType } from "../Actions/actionTypes";

const initialState = {
    splashImages: [],
};

export const imageDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionType.DELIVER_IMAGES:
            return {
                ...state,
                splashImages: action.payload.results,
            };
        default:
            return state;
    }
};
