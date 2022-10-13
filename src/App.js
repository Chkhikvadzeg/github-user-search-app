import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';

function App() {
  const [isBlack, setIsBlack] = useState(false);
  return (
    <Body isBlack={isBlack}>
      <Container>
        <Header isBlack={isBlack} setIsBlack={setIsBlack} />
      </Container>
    </Body>
  );
}

const Body = styled.div`
  background-color: ${props => props.isBlack ? '#141D2F' : '#F6F8FF'};
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
`;

const Container = styled.div`
  width: 100%;
  max-width: 327px;
`;



export default App;
