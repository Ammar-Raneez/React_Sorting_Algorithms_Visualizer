import { handleActions } from "redux-actions";

const initialState = [];

export const currentInsertion = handleActions({
    SET_CURRENT_INSERTION: (state, { payload }) => {
        return payload;
    },
}, initialState);
