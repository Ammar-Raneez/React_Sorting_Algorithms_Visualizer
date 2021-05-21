import { handleActions } from "redux-actions";

const initialState = [];

export const currentBubble = handleActions({
    SET_CURRENT_BUBBLE: (state, { payload }) => {
        return payload;
    },
}, initialState);
