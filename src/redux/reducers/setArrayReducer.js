import { handleActions } from "redux-actions";

const initialState = [];

export const array = handleActions({
    SET_ARRAY: (state, { payload }) => {
        return payload;
    }
}, initialState);