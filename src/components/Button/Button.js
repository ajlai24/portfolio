import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Button.scss';

const propTypes = {
  location: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Button = (props) => {
  const { location, label } = props;

  return (
    <div className="button-container">
      <NavLink className="button" to={location}>{label}</NavLink>
    </div>
  );
};

Button.propTypes = propTypes;
export default Button;
