import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Card.scss';

const propTypes = {
  children: PropTypes.element,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
  src: null,
  alt: null,
  className: null,
};

const Card = (props) => {
  const {
    src, alt, children, className,
  } = props;

  return (
    <div className={cx('card', className)}>
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
