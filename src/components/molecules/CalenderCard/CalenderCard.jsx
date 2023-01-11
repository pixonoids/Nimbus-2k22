import React from 'react';
import './CalenderCard.scss';

const CalenderCard = (props) => {
  return (
    <div className={`calender-card-parent ${props.className}`}>
      <div className={`${props.card} card`}>
        <h3>{props.heading}</h3>
        <div className="date">{props.date}</div>

        <div className="descp">{props.desc}</div>
      </div>
    </div>
  );
};

export default CalenderCard;
