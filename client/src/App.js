import React, { Fragment } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './containers/navbar';
import Banner from './containers/banner';
import Search from './components/search';
import Results from './containers/results';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Search />
        <Results />
      </BrowserRouter>
    </Fragment>
  );
}


export default App;
