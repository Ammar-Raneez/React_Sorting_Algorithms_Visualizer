import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MergeSort } from '../utils/MergeSort'
import { QuickSort } from '../utils/QuickSort'
import { BubbleSort } from '../utils/BubbleSort'
import { SelectionSort } from '../utils/SelectionSort';
import { InsertionSort } from '../utils/InsertionSort';
import { HeapSort } from '../utils/HeapSort';

const ButtonRow = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [])

    const resetArray = () => {
        const arr = [];
        for (let i = 0; i < 400; i++) {
            // value 1 is too small in displayed bar
            arr.push(generateRandomInt(5, 500));
        }

        setArray(arr);
    }

    const generateRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const mergeSort = () => {
        const sortedArray = MergeSort(array);
        console.log(sortedArray);
    }

    const quickSort = () => {
        const sortedArray = QuickSort(array, 0, array.length-1);
        console.log(sortedArray);
    }

    const bubbleSort = () => {
        const sortedArray = BubbleSort(array);
        console.log(sortedArray);
    }

    const heapSort = () => {
        const sortedArray = HeapSort(array);
        console.log(sortedArray);
    }

    const selectionSort = () => {
        const sortedArray = SelectionSort(array);
        console.log(sortedArray);
    }

    const insertionSort = () => {
        const sortedArray = InsertionSort(array);
        console.log(sortedArray);
    }

    return (
        <Container>
            <Button onClick={resetArray}>New Array</Button>
            <Button onClick={mergeSort}>Merge Sort</Button>
            <Button onClick={quickSort}>Quick Sort</Button>
            <Button onClick={heapSort}>Heap Sort</Button>
            <Button onClick={bubbleSort}>Bubble Sort</Button>
            <Button onClick={selectionSort}>Selection Sort</Button>
            <Button onClick={insertionSort}>Insertion Sort</Button>
        </Container>
    )
}

export default ButtonRow

const Container = styled.div `
    display: flex;
`
