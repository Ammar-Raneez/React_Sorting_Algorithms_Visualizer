import { connect } from 'react-redux';
import styled from 'styled-components';
import BarRow from './BarRow';
import ButtonRow from './ButtonRow';

const Visualizer = () => {
    return (
        <Container>
            <ButtonRow />
            <BarRow />
        </Container>
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Visualizer);

const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
`