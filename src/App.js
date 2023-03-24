// import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Banner from './components/Banner';
import EventArea from './components/EventArea';
import styled from 'styled-components';

const Main = styled.div`
  max-width: 1176px;
  background-color: gray;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <EventArea />
      </Main>
    </>
  );
}

export default App;
