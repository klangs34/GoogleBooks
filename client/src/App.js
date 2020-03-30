import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './containers/navbar';
import Banner from './containers/banner';
import Search from './components/search';
import Results from './containers/results';
import Saved from './containers/saved';
import NoMatch from './containers/noMatch';
import { StoreProvider } from './util/globalContext';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <StoreProvider>
          <Navbar />
          <Banner />
            <Switch>
              <Search />
              <Route exact path="/" component={Results} />
              <Route exact path="/search" component={Results} />
              <Route exact path="/saved" component={Saved} />
              <Route exact path="/test" component={NoMatch} />
            </Switch>
        </StoreProvider>
      </BrowserRouter>
    </Fragment>
  );
}


export default App;
