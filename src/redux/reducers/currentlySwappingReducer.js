import { handleActions } from "redux-actions";

const initialState = [];

export const currentSwappers = handleActions({
    SET_CURRENT_SWAPPERS: (state, { payload }) => {
        if (payload.length) {
        return state.concat(payload);
        } else {
        return [];
        }
    },
}, initialState);
