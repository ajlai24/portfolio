import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Nav from 'containers/Nav/Nav';
import Home from 'containers/Home/Home';
import Portfolio from 'containers/Portfolio/Portfolio';

import 'common/Animations.scss';
import './App.scss';

const App = ({ location }) => {
  return (
    <Nav>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={750}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Nav>
  );
};

export default withRouter(App);
