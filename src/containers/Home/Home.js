import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Button from 'components/Button/Button';
import Charts from 'components/Charts/Charts';
import Values from 'containers/Values/Values';
import Footer from 'containers/Footer/Footer';

import 'common/Typography.scss';
import './Home.scss';

const skills = [
  { name: 'React', value: 90 },
  { name: 'Redux', value: 70 },
  { name: 'Angular', value: 80 },
  { name: 'Java', value: 65 },
  { name: 'Postgres', value: 60 },
  { name: 'Node.js / Express', value: 70 },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCharts: false,
      visibleValues: false,
    };
  }

  render() {
    return (
      <div className="home">
        <section className="banner">
          <div className="content">
            <h3 className="intro">
              <span>
                Hey there! I&#39;m <span className="name">Andrew</span>, a software developer
              </span>
              <span className="intro2"> in the San Francisco Bay Area.</span>
            </h3>

            <div style={{ paddingTop: '1rem' }}>
              <Button label="View my work" location="/portfolio" />
            </div>
          </div>
          <div className="view-more">
            <div className="down-arrow" />
          </div>
        </section>

        <Values
          visibility={this.state.visibleValues}
          wayPointHandler={
          () => (
            this.setState({ visibleValues: true })
          )}
        />

        <section className="skills">
          <div className="center-col row">
            <div className="col-md">
              <Waypoint
                onEnter={() => (
                  this.setState({ showCharts: true })
                )}
              />
              {this.state.showCharts && <Charts skills={skills} />}
            </div>
            <div className="col-md">
              <div className="profile">
                <img src="/images/profile.jpg" alt="andrew" style={{ maxWidth: 180 }} />
              </div>
              <div style={{ textAlign: 'center', paddingTop: '1rem' }}>About me:</div>
              <div className="profile-blurb">
                I like working in the front end of the stack. When I&#39;m not
                walking my dog I&#39;ll usually be gaming or reading.
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
export default Home;
