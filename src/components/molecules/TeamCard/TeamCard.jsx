import React from 'react';
import { getImageUrl } from '../../../utils/image';
import './TeamCard.scss';
export default function TeamCard({ name, image, designation, contact }) {
  return (
    <div className="TeamCardDiv">
      <div className="TeamImageDiv">
        <img src={getImageUrl(image)} alt="" />
      </div>
      <div className="TeamDescription">
        <h1>{name}</h1>
        <p>{designation}</p>
        <h6 className="team-contact">{contact}</h6>
      </div>
    </div>
  );
}
