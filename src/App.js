import { Provider } from 'react-redux';
import styled from 'styled-components'
import Visualizer from './components/Visualizer';
import Store from './redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <Container>
        <Visualizer />
      </Container>
    </Provider>
  );
}

export default App;

const Container = styled.div `
`
