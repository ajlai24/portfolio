import React from 'react';

import './Footer.scss';

const Portfolio = () => (
  <div className="footer">
    <div className="center-col">

      <div className="footer-content">
        <div className="contact">
          <div>
            <span className="name">Andrew Lai</span>
            <span className="link"><a href="https://www.linkedin.com/in/devajlai" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          </div>
        </div>
        <div className="stats">
          <div>v.1.0.0</div>
          <div className="copyright">Last updated Feb 2018</div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
