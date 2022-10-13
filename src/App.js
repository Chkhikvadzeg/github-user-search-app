import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';
import SearchResult from './components/SearchResult';
import Loading from './components/Loading/Loading';

function App() {
  const localData = JSON.parse(localStorage.getItem('isBlack'));
  const [isBlack, setIsBlack] = useState(localData || false);
  const [search, setSearch] = useState('chkhikvadzeg');
  const [isLoading, setIsLoading] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);
  return (
    <Body isBlack={isBlack}>
      <Container>
        <Header isBlack={isBlack} setIsBlack={setIsBlack} />
        <Search isNoResult={isNoResult} isBlack={isBlack} setSearch={setSearch} />
        {search && <SearchResult isNoResult={isNoResult} setIsLoading={setIsLoading} isBlack={isBlack} search={search} setIsNoResult={setIsNoResult} />}
        {isLoading && <Loading isBlack={isBlack}>Loading...</Loading>}
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

  @media (min-width: 768px) {
    padding: 0 48px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 327px;

  @media (min-width: 768px) {
    max-width: 573px;
  }

  @media (min-width: 1024px) {
    max-width: 730px;
  }
`;

export default App;
