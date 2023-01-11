import React from 'react';
import ClubsCard from '../../components/molecules/ClubsCard/ClubsCard';
import './Clubs.scss';
import name from './ClubsName';
export default function Clubs() {
  return (
    <div className="Clubs">
      <h1 className="title">Clubs</h1>
      <div className="clubsContainer">
        {name.map((ClubsName) => (
          <ClubsCard
            key={ClubsName.id}
            name={ClubsName.name}
            URL={ClubsName.url}
          />
        ))}
      </div>
    </div>
  );
}
