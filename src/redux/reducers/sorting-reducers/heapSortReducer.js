import { handleActions } from "redux-actions";

const initialState = [];

export const currentHeap = handleActions({
    SET_CURRENT_HEAP: (state, { payload }) => {
        return payload;
    },
}, initialState);
