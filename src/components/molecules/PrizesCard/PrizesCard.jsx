import React from 'react';
import './PrizesCard.scss';
export default function PrizesCard(props) {
  return (
    <div className={`prizes-card ${props.className}`}>
      <h1 className={`${props.classHeadingHackathon}`}>{props.title}</h1>
      <div className="prizesCard-image">{props.image}</div>
      <div className="prizesCard-descryption">{props.children}</div>
    </div>
  );
}
