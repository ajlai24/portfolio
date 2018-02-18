import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Waypoint from 'react-waypoint';
import './Values.scss';

const propTypes = {
  visibility: PropTypes.bool,
  wayPointHandler: PropTypes.func,
};

const defaultProps = {
  visibility: false,
  wayPointHandler: () => {},
};

const sections = [
  {
    header: 'Responsive', description: 'Websites should be easily understood and look spectacular on any device', iconSrc: '/images/phone.svg', alt: 'phone',
  },
  {
    header: 'Fast', description: "Maintain speediness and don't sacrifice on performance", iconSrc: '/images/rocket.svg', alt: 'rocket',
  },
  {
    header: 'Motion UI', description: 'Make those pages pop and come to life', iconSrc: '/images/camera.svg', alt: 'motion-camera',
  },
];

const Values = props => (
  <section className={cx('values', { visible: props.visibility })}>
    <Waypoint
      onEnter={() => (
        props.wayPointHandler()
      )}
    >
      <div className="center-col row">
        { sections.map(section => (
          <div className="col-md" key={section.header}>
            <img className="icon" alt={section.alt} src={section.iconSrc} />
            <div className="header">{section.header}</div>
            <div className="description">{section.description}</div>
          </div>
        ))}
      </div>
    </Waypoint>
  </section>
);

Values.propTypes = propTypes;
Values.defaultProps = defaultProps;
export default Values;
