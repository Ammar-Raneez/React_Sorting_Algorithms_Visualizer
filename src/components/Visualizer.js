import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Visualizer = () => {
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

    }

    const quickSort = () => {

    }

    const bubbleSort = () => {

    }

    const selectionSort = () => {

    }

    const insertionSort = () => {
        
    }

    return (
        <Container>
            <ButtonRow>
                <Button onClick={resetArray}>New Array</Button>
                <Button onClick={mergeSort}>Merge Sort</Button>
                <Button onClick={quickSort}>Quick Sort</Button>
                <Button onClick={bubbleSort}>Bubble Sort</Button>
                <Button onClick={selectionSort}>Selection Sort</Button>
                <Button onClick={insertionSort}>Insertion Sort</Button>
            </ButtonRow>
            <BarRow>
                {array.map((value, index) => (
                    <ArrayBar height={value} key={index} />
                ))}
            </BarRow>
        </Container>
    )
}

export default Visualizer

const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
`

const ArrayBar = styled.div `
    height: ${props => props.height}px;
    width: 3px;
    background-color: pink;
    display: inline-block;
    margin: 0 1px;
`

const BarRow = styled.div `
    display: flex;
`

const ButtonRow = styled.div `
    display: flex;
`