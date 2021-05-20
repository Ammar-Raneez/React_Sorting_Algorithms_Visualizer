import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Visualizer = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();
    }, [])

    const resetArray = () => {
        const arr = [];
        for (let i =0; i<100; i++) {
            arr.push(generateRandomInt(5, 1000));
        }

        setArray(arr);
    }

    const generateRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <Container>
            {array.map((value, index) => (
                <ArrayBar key={index}>
                    {value}
                </ArrayBar>
            ))}
        </Container>
    )
}

export default Visualizer

const Container = styled.div `
`

const ArrayBar = styled.div `
`