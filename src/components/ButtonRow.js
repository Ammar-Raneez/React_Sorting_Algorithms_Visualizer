import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import styled from 'styled-components';
import { MergeSort } from '../utils/MergeSort'
import { QuickSort } from '../utils/QuickSort'
import { BubbleSort } from '../utils/BubbleSort'
import { SelectionSort } from '../utils/SelectionSort';
import { InsertionSort } from '../utils/InsertionSort';
import { HeapSort } from '../utils/HeapSort';
import { connect } from 'react-redux';
import { setArray } from '../redux/actions/setArrayActions';
import { setCurrentSorted } from '../redux/actions/alreadySortedActions';
import { setRunning } from '../redux/actions/isCurrentlyRunningActions';
import { setAlgorithm } from '../redux/actions/whichAlgorithmActions';

const ButtonRow = props => {
    const {
        array,
        algorithm,
        isRunning,
        generateArray,
        updateAlgorithm,
        sort
    } = props

    useEffect(() => {
        generateArray(87);
    }, [])

    const speed = 570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;
    // const color = isRunning ? "rgba(214, 29, 29, 0.8)" : "white";
    // const cursor = isRunning ? "auto" : "pointer";

    return (
        <Container>
            <Button onClick={() => !isRunning && generateArray(array.length)}>New Array</Button>
            <Button onClick={() => !isRunning && updateAlgorithm("mergeSort")}>Merge Sort</Button>
            <Button onClick={() => !isRunning && updateAlgorithm("quickSort")}>Quick Sort</Button>
            <Button onClick={() => !isRunning && updateAlgorithm("heapSort")}>Heap Sort</Button>
            <Button onClick={() => !isRunning && updateAlgorithm("bubbleSort")}>Bubble Sort</Button>
            <Button onClick={() => !isRunning && updateAlgorithm("selectionSort")}>Selection Sort</Button>
            <Button onClick={() => !isRunning && updateAlgorithm("insertionSort")}>Insertion Sort</Button>
            {
                algorithm && <Button onClick={() => !isRunning && sort(algorithm, array, speed)}>Sort</Button>
            }
        </Container>
    )
}

const mapStateToProps = state => ({
    array: state.array,
    algorithm: state.currentBubble,
    isRunning: state.isRunning
})

const mapDispatchToProps = () => dispatch => ({
    generateArray: (length) => {
        let array = [];
        while (array.length < length) {
          array.push(Math.floor(Math.random() * 200) + 10);
        }
        dispatch(setArray(array));
        dispatch(setCurrentSorted([]));
    },
    
    updateAlgorithm: (algorithm) => {
        dispatch(setAlgorithm(algorithm));
    },
    
    sort: (algorithm, array, speed) => {
        let doSort = algorithm === "bubbleSort" ? BubbleSort 
                            : algorithm === "insertionSort" ? InsertionSort 
                                : algorithm === "selectionSort" ? SelectionSort 
                                    : algorithm === "mergeSort" ? MergeSort 
                                        : algorithm === "quickSort" ? QuickSort
                                            : HeapSort;
        dispatch(setCurrentSorted([]));
        dispatch(setRunning(true));
        doSort(array, dispatch, speed);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRow);

const Container = styled.div `
    display: flex;
`
