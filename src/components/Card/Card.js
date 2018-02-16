import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const propTypes = {
  children: PropTypes.element,
  src: PropTypes.string,
  alt: PropTypes.string,
};

const defaultProps = {
  children: null,
  src: null,
  alt: null,
};

const Card = (props) => {
  const { src, alt, children } = props;

  return (
    <div className="card">
      <div className="card-content">
        { src && <img src={src} alt={alt} />}
        { children }
      </div>
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
