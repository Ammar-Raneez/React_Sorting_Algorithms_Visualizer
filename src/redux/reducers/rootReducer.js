import { combineReducers } from "redux";
import { array } from './setArrayReducer';
import {whichAlgorithm } from './whichAlgorithmReducer';
import { currentBubble } from './sorting-reducers/bubbleSortReducer';
import { currentHeap } from './sorting-reducers/heapSortReducer';
import { currentInsertion } from './sorting-reducers/insertionSortReducer';
import { currentMerge } from './sorting-reducers/mergeSortReducer';
import { currentSelection } from './sorting-reducers/selectionSortReducer';
import { currentSwappers } from './currentlySwappingReducer';
import { currentSorted } from './alreadySortedReducer';
import { isRunning } from './isCurrentlyRunningReducer';

const rootReducer = combineReducers({
    array,
    whichAlgorithm,
    currentBubble,
    currentHeap,
    currentInsertion,
    currentMerge,
    currentSelection,
    currentSwappers,
    isRunning,
    currentSorted,
});

export default rootReducer;