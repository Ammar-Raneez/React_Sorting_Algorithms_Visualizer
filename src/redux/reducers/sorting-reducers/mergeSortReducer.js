import { handleActions } from "redux-actions";

const initialState = [];

export const currentMerge = handleActions({
    SET_CURRENT_MERGE: (state, { payload }) => {
        return payload;
    },
}, initialState);
