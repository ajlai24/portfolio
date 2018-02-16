import React from 'react';
import './Values.scss';

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

const Values = () => (
  <section className="values">
    <div className="center-col row">
      { sections.map(section => (
        <div className="col-md" key={section.header}>
          <img className="icon" alt={section.alt} src={section.iconSrc} />
          <div className="header">{section.header}</div>
          <div className="description">{section.description}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Values;
