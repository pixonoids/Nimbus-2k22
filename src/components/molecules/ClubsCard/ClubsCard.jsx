import React from 'react';
import './ClubsCard.scss';
const ClubsCard = (props) => {
  return (
    <a href={props.URL} target="_blank" rel="noreferrer">
      <div className="ClubsCard">
        <h1>{props.name}</h1>
      </div>
    </a>
  );
};

export default ClubsCard;
