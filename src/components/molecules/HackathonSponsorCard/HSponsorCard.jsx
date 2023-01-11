import React from 'react';
import './HSponsorCard.scss';
export const HSponsorCard = (props) => {
  return (
    <div className={`hsponsor-card ${props.className}`}>
      <h1 className={`${props.classHeading}`}>{props.title}</h1>
      <div className="hsponsor-image-container">
        <div>
          <h1 className="goldTitle">{props.gold}</h1>
        </div>
        <div className="hsponsor-image-container1">
          <div className="card-images">
            <a href={props.anchor1} target="_blank" rel="noreferrer">
              <img src={props.image1} alt=""></img>
            </a>
          </div>
          <div className="card-images">
            <a href={props.anchor2} target="_blank" rel="noreferrer">
              <img src={props.image2} alt=""></img>
            </a>
          </div>
        </div>
      </div>
      <h1 className="silverTitle">{props.silver}</h1>
      <div className="hsponsor-image-container2">
        <div className="card-images">
          <a href={props.anchor3} target="_blank" rel="noreferrer">
            <img src={props.image3} alt=""></img>
          </a>
        </div>
        <div className="card-images">
          <a href={props.anchor4} target="_blank" rel="noreferrer">
            <img src={props.image4} alt=""></img>
          </a>
        </div>
        <div className="card-images">
          <a href={props.anchor5} target="_blank" rel="noreferrer">
            <img src={props.image5} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};
