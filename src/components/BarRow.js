import { connect } from "react-redux";
import styled from "styled-components"

const BarRow = props => {
    const {
        array,
        currentBubble,
        currentSwappers,
        currentSorted,
    } = props;

    const numWidth = Math.floor(document.width / (array.length * 3));
    const width = `${numWidth}px`;
    const numMargin = array.length < 5 ?
        10 : array.length < 8 ?
            8 : array.length < 11 ?
                6 : array.length < 20 ?
                    4 : array.length < 50 ?
                        3.5 : array.length < 100 ?
                                3 : array.length < 130 ?
                                    2.5 : 2;
    const margin = `${numMargin}px`;
    const color = numWidth > 20 ? "white" : "transparent";
    const numFont = numWidth > 70 ?
        20 : numWidth > 60 ?
            18 : numWidth > 50 ?
                16 : numWidth > 40 ?
                    14 : numWidth > 30 ?
                        12 : numWidth > 20 ?
                            10 : 8;
    const fontSize = `${numFont}px`

    return (
        <Container>
            { array.length ? array.map((number, index) => {
            const backgroundColor = currentSwappers.includes(index) ?
                "rgba(219, 57, 57, 0.8)" : currentBubble.includes(index) ?
                    "rgba(78, 216, 96, 0.8)" : currentSorted.includes(index) ?
                        "rgba(169, 92, 232, 0.8)" : "rgba(66, 134, 244, 0.8)";
            return (
                <ArrayBar
                    key = {index}
                    height = {number * 3}
                    width = {width}
                    marginLeft = {margin}
                    marginRight = {margin}
                    backgroundColor = {backgroundColor}
                    color = {color}
                    fontSize = {fontSize}
                >
                    {number}
                </ArrayBar>
            )}) : null
            }
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
    width: ${props => props.width}px;
    background-color: ${props => props.backgroundColor};
    display: inline-block;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};
`