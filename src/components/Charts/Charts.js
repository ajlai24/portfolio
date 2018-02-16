import React from 'react';
import PropTypes from 'prop-types';

import './Charts.scss';

const propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Charts = (props) => {
  const { skills } = props;

  return (
    <div className="charts">
      <div className="chart chart--dev">
        <ul className="chart--horiz">
          { skills.map(skill => (
            <li className="chart__bar" style={{ width: `${skill.value}%` }} key={skill.name}>
              <span className="chart__label">
                { skill.name }
              </span>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
};

Charts.propTypes = propTypes;
export default Charts;
