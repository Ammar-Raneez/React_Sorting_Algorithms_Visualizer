import { Button, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { useEffect, useState } from 'react';
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

const ButtonRow = ({ array, whichAlgorithm, isRunning, generateArray, updateAlgorithm, sort }) => {
    const [arraySize, setArraySize] = useState(75);

    const SLIDER_MARKERS = [
        {
            value: 25,
            label: '25'
        },
        {
            value: 50,
            label: '50'
        },
        {
            value: 75,
            label: '75'
        },
    ]
    
    useEffect(() => {
        generateArray(arraySize);
    }, [arraySize, generateArray])

    const speed = 570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;

    const changeArraySize = (event, value) => {
        event.preventDefault();
        setArraySize(value);
    }

    return (
        <Container>
            <Button disabled={isRunning} onClick={() => !isRunning && generateArray(array.length)}>New Array</Button>

            <div>
                <Typography>Array Size</Typography>
                <Slider key={101} marks={SLIDER_MARKERS} disabled={isRunning} value={arraySize} min={10} max={75} onChange={changeArraySize} />
            </div>

            <Button disabled={isRunning} onClick={() => !isRunning && updateAlgorithm("mergeSort")}>Merge Sort</Button>
            <Button disabled={isRunning} onClick={() => !isRunning && updateAlgorithm("quickSort")}>Quick Sort</Button>
            <Button disabled={isRunning} onClick={() => !isRunning && updateAlgorithm("heapSort")}>Heap Sort</Button>
            <Button disabled={isRunning} onClick={() => !isRunning && updateAlgorithm("bubbleSort")}>Bubble Sort</Button>
            <Button disabled={isRunning} onClick={() => !isRunning && updateAlgorithm("selectionSort")}>Selection Sort</Button>
            <Button disabled={isRunning} onClick={() => !isRunning && updateAlgorithm("insertionSort")}>Insertion Sort</Button>

            {
                whichAlgorithm && <Button disabled={isRunning} onClick={() => !isRunning && sort(whichAlgorithm, array, speed)}>Sort</Button>
            }
        </Container>
    )
}

const mapStateToProps = state => ({
    state: state,
    array: state.array,
    whichAlgorithm: state.whichAlgorithm,
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
