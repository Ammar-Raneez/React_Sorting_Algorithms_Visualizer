import { handleActions } from "redux-actions";

const initialState = "";

export const whichAlgorithm = handleActions({
    SET_ALGORITHM: (state, { payload }) => {
        return payload;
    }
}, initialState);