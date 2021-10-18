import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Alarm from './pages/Alarm';
import Timer from './pages/Timer';

const Content = styled.div`
  padding-top: 85px;
  height: 100%;
  @media screen and (max-height: 1024) {
    padding-top: 70px;
  }
`;

function App () {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Content id='content'>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/alarm'>
            <Alarm />
          </Route>
          <Route path='/timer'>
            <Timer />
          </Route>
        </Content>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
