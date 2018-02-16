import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const propTypes = {
  children: PropTypes.element,
};

const defaultProps = {
  children: null,
};

const Nav = props => (
  <div>
    <div className="nav">
      {/* <div className="logo"><img src="/images/logo.png" alt="logo" /></div> */}
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" activeClassName="selected" exact>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="selected" exact>Work</NavLink>
        </li>
      </ul>
    </div>
    <div>
      { props.children }
    </div>
  </div>
);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
export default Nav;
