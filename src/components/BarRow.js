import styled from "styled-components"

const BarRow = array => {
    return (
        <Container>
            {array.map((value, index) => (
                <ArrayBar height={value} key={index} />
            ))}
        </Container>
    )
}

export default BarRow

const Container = styled.div `
    display: flex;
`
const ArrayBar = styled.div `
    height: ${props => props.height}px;
    width: 3px;
    background-color: pink;
    display: inline-block;
    margin: 0 1px;
`