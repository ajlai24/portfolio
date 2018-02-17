import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CardButton from 'components/CardButton/CardButton';
import './Card.scss';

const propTypes = {
  children: PropTypes.element,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  buttonLabel: PropTypes.string,
  disableHover: PropTypes.bool,
};

const defaultProps = {
  children: null,
  src: null,
  alt: null,
  className: null,
  title: null,
  description: null,
  url: null,
  buttonLabel: 'Visit',
  disableHover: false,
};

const Card = (props) => {
  const {
    src, alt, children, className, title, description, url, buttonLabel, disableHover,
  } = props;

  return (
    <div className={cx('card', className)}>
      <div className="card-content">
        { src && <img src={src} alt={alt} />}
        { children }

        { !disableHover && (
          <div className="hover-content">
            <div className="mask" />
            <div className="description">
              <h3>{title}</h3>
              <div style={{ paddingTop: '1rem', fontWeight: 300 }}>{description}</div>
            </div>
            <div className="card-button-container">
              <CardButton label={buttonLabel} href={url} target="_blank" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
