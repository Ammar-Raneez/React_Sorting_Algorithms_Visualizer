import { connect } from "react-redux";
import styled from "styled-components"

const BarRow = ({ array, currentBubble, currentSwappers, currentSorted }) => {
    const numWidth = Math.floor(document.body.clientWidth / (array.length * 3));
    const width = `1000`;

    const numMargin = array.length < 5 ?
        1 : array.length < 0.8 ?
            0.8 : array.length < 111 ?
                0.6 : array.length < 0.20 ?
                    0.4 : array.length < 5 ?
                        0.35 : array.length < 10 ?
                                0.3 : array.length < 13 ?
                                    0.25 : 0.2;
    const numFont = numWidth > 70 ?
    2 : numWidth > 6 ?
        1.8 : numWidth > 5 ?
            1.6 : numWidth > 4 ?
                1.4 : numWidth > 3 ?
                    1.2 : numWidth > 2 ?
                        1 : 0.8;

    const margin = `${numMargin}vw`;
    const color = numWidth > 20 ? "white" : "transparent";
    const fontSize = `${numFont}vw`

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
                    height = {number / 5.5}
                    width = {width}
                    marginLeft = {margin}
                    marginRight = {margin}
                    backgroundColor = {backgroundColor}
                    color = {color}
                    fontSize = {fontSize}
                >
                    {color !== 'transparent' && number}
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
const ArrayBar = styled.div.attrs(props => ({
    style: {
        height: props.height + 'vw',
        width: props.width + 'vw',
        backgroundColor: props.backgroundColor,
        color: props.color,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        fontSize: props.fontSize,
    },
})) `
    display: inline-block;
    text-align: center;
`