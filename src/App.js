import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Banner from './components/Banner';
import EventArea from './components/EventArea';
import styled from 'styled-components';
import Footer from './components/Footer';

const Main = styled.div`
  max-width: 1176px;
  min-width: 960px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (max-width: 1240px) {
    margin: 0 32px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 32px;
    width: 100%;
  }
  /* flex-direction: column;
  margin: 0 auto;
  background-color: gray; */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Main>
        <EventArea />
        <Footer />
      </Main>
    </>
  );
}

export default App;
