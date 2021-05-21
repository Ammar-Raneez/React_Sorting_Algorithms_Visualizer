import { connect } from "react-redux";
import styled from "styled-components"

const BarRow = props => {
    const {
        array,
        currentBubble,
        currentSwappers,
        currentSorted,
    } = props;

    return (
        <Container>
            {array.map((value, index) => (
                <ArrayBar height={value} key={index} />
            ))}
        </Container>
    )
}

const mapStateToProps = state => ({
    array: state.array,
    currentBubble: state.currentBubble,
    currentSwappers: state.currentSwappers,
    currentSorted: state.currentSorted,
})

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BarRow);

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