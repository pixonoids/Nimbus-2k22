import React from 'react';
import './Calender.scss';
import { CalenderCard } from '../../components/molecules/';

const Calender = () => {
  return (
    <div className="calender">
      <h1 className="head">Schedule</h1>
      <div className="parent">
        <CalenderCard
          className="left"
          number="1"
          date="23 March 2022"
          heading="Registration Begins for Nimbus"
          desc=" lorem gipsum something aboit the event nimuns is great and will be great."
        />
        <CalenderCard
          className="right"
          number="1"
          date="23 March 2022"
          heading="Orientaion ceromony live on Youtube"
          desc=" lorem gipsum something aboit the event nimuns is great and will be great."
        />
        <CalenderCard
          className="left"
          number="1"
          date="23 March 2022"
          heading="Registration Begins for Nimbus"
          desc=" lorem gipsum something aboit the event nimuns is great and will be great."
        />
        <CalenderCard
          className="right"
          number="1"
          date="23 March 2022"
          heading="Orientaion ceromony live on Youtube"
          desc=" lorem gipsum something aboit the event nimuns is great and will be great."
        />
        <CalenderCard
          className="left"
          number="1"
          date="23 March 2022"
          heading="Registration Begins for Nimbus"
          desc=" lorem gipsum something aboit the event nimuns is great and will be great."
        />
        <CalenderCard
          className="right"
          number="1"
          date="23 March 2022"
          heading="Orientaion ceromony live on Youtube"
          desc=" lorem gipsum something aboit the event nimuns is great and will be great."
        />
      </div>
    </div>
  );
};

export default Calender;
