import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from 'containers/Nav/Nav';
import Home from 'containers/Home/Home';
import Portfolio from 'containers/Portfolio/Portfolio';

import './App.scss';

const App = () => (
  <Router>
    <Nav>
      <div> {/* TODO: Refactor nav. Not on babel v7 beta so can't use framents yet here */}
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Nav>
  </Router>
);

export default App;
