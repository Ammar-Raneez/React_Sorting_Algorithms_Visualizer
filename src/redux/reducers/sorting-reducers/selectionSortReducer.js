import { handleActions } from "redux-actions";

const initialState = [];

export const currentSelection = handleActions({
    SET_CURRENT_SELECTION: (state, { payload }) => {
        return payload;
    },
}, initialState);
