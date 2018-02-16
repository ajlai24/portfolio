import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';

import './Portfolio.scss';

const textCard = props => (
  <Card className={props.className}>
    <div style={props.style}>
      <h3>Projects</h3>
      <div style={{ fontWeight: 300, paddingTop: '.75rem', lineHeight: '1.5rem' }}>
        These days I&#39;m primarily in the front end space working with React but
        I&#39;ve had experience as a full stack developer and a quality assurance
        engineer in the past.
      </div>
    </div>
  </Card>
);

textCard.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

textCard.defaultProps = {
  className: null,
  style: null,
};

const Portfolio = () => (
  <div className="portfolio">

    <div className="left-col">
      { textCard({ className: 'd-lg-none' }) }
      <Card src="/images/stride-vision.jpg" alt="stride" />
      <Card src="/images/salesforce-report.jpg" alt="report" />
    </div>

    <div className="right-col">
      { textCard({ className: 'd-none d-lg-block', style: { paddingTop: '9rem' } }) }
      <Card src="/images/stride-health.jpg" alt="stride-angular" />
    </div>
  </div>
);

export default Portfolio;
