import React from 'react';
import PropTypes from 'prop-types';

import './CardButton.scss';

const propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const CardButton = (props) => {
  const { label, ...restProps } = props;

  return (
    <div className="card-button">
      <a {...restProps}>{label}</a>
    </div>
  );
};

CardButton.propTypes = propTypes;
export default CardButton;
