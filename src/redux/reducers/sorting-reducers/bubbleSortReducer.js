import { handleActions } from "redux-actions";

const initialState = [];

export const currentBubbleTwo = handleActions({
    SET_CURRENT_BUBBLETWO: (state, { payload }) => {
        return payload;
    },
}, initialState);
