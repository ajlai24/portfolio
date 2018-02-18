import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';

import './Portfolio.scss';

const textCard = props => (
  <Card className={props.className} disableHover>
    <div style={props.style}>
      <h3>Projects</h3>
      <div style={{ fontWeight: 300, paddingTop: '.75rem', lineHeight: '1.5rem' }}>
        These days I&#39;m primarily in the front end space working with React as
        I really enjoy it. During my many years at Salesforce I had been a full
        stack developer and a quality assurance engineer on the Analytics team
        and Mobile Web team.
      </div>
    </div>
  </Card>
);

const Portfolio = () => (
  <div className="portfolio">

    <div className="left-col">
      { textCard({ className: 'd-lg-none' }) }
      <Card
        src="/images/stride-vision.jpg"
        alt="stride"
        title="Stride Vision"
        description="React + Redux"
        url="https://www.stridehealth.com/vision"
      />
      <Card
        src="/images/salesforce-report.jpg"
        alt="report"
        title="Salesforce Analytics"
        description="force.com Aura"
        buttonLabel="More Info"
        url="https://trailhead.salesforce.com/en/modules/lex_implementation_reports_dashboards"
      />
    </div>

    <div className="right-col">
      { textCard({ className: 'd-none d-lg-block', style: { paddingTop: '7rem' } }) }
      <Card
        src="/images/stride-health.jpg"
        alt="stride-angular"
        title="Stride Health"
        description="Angular"
        url="https://www.stridehealth.com/onboarding"
      />
    </div>
  </div>
);

export default Portfolio;
