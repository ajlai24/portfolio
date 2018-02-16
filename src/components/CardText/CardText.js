import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './CardText.scss';

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

const CardText = props => (
  <div className={cx('text-card', props.className)}>
    <h3>Projects</h3>
    <div>test asdf asdf </div>
  </div>
);

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;
export default CardText;
