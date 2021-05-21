import { combineReducers } from "redux";
import { array } from './setArrayReducer';
import {whichAlgorithm } from './whichAlgorithmReducer';
import { currentBubble } from './sorting-reducers/bubbleSortReducer';
import { currentSwappers } from './currentlySwappingReducer';
import { currentSorted } from './alreadySortedReducer';
import { isRunning } from './isCurrentlyRunningReducer';

const rootReducer = combineReducers({
    array,
    whichAlgorithm,
    currentBubble,
    currentSwappers,
    isRunning,
    currentSorted,
});

export default rootReducer;