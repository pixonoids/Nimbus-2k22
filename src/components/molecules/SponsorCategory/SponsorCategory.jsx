import React from 'react';
import { getImageUrl } from '../../../utils/image';
import './SponsorCategory.scss';
export default function SponsorCategory({ title, sponsors }) {
  return (
    <div className={`sponsor-category`}>
      <h1 className="title">{title}</h1>
      <div className={`sponsor-list`}>
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noreferrer"
          >
            <div className="sponsor-card">
              <div className="pic">
                <img src={getImageUrl(sponsor.image)}></img>
              </div>
              <div className="name">{sponsor.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
