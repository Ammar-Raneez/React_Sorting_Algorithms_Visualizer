import { handleActions } from "redux-actions";

const initialState = false;

export const isRunning = handleActions({
    SET_RUNNING: (state, { payload }) => {
        return payload;
    },
}, initialState);