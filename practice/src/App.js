import GlobalStyles from './GlobalStyles';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

function App () {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <div id='content'>
          <Route exact path='/'>
            <Main />
          </Route>
        </div>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
