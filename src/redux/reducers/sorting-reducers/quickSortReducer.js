import { handleActions } from "redux-actions";

const initialState = [];

export const currentQuick = handleActions({
    SET_CURRENT_QUICK: (state, { payload }) => {
        return payload;
    },
}, initialState);
