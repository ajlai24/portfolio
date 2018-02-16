import React from 'react';
import Card from 'components/Card/Card';
import cx from 'classnames';

import './Portfolio.scss';

const textCard = props => (
  <div className={cx('text-card', props.className)}>
    <h3>Projects</h3>
    <div>test test test</div>
  </div>
);

const Portfolio = () => (
  <div className="portfolio">

    <div className="left-col">
      { textCard({ className: 'd-lg-none' }) }
      <Card src="/images/stride-vision.jpg" alt="stride" />
      <Card src="/images/salesforce-report.jpg" alt="report" />
    </div>

    <div className="right-col">
      { textCard({ className: 'd-none d-lg-block' }) }
      <Card src="/images/stride-health.jpg" alt="stride-angular" />
    </div>
  </div>
);

export default Portfolio;
