import React from 'react';
import TeamCard from '../../components/molecules/TeamCard/TeamCard';
import './Team.scss';
import { useGetTeam } from '../../hooks/api/team';
import Loading from '../../components/organisms/Loading/Loading';
export default function Team() {
  const { data  , isLoading} = useGetTeam();
  if(isLoading) return <Loading />;
  return (
    <div className="team">
      <div className="teamPageHeading">Team</div>
      <h2 className="FacultyHeading">Faculty</h2>
      <div className="team-faculty">
        {data?.faculty.map((member) => {
          return (
            member.designation === 'Director - NIT Hamirpur' && (
              <TeamCard
                key={member.id}
                name={member.name}
                image={member.image}
                designation={member.designation}
                contact={member.contact}
              />
            )
          );
        })}
      </div>
      <div className="team-faculty">
        {data?.faculty.map((member) => {
          return (
            member.designation != 'Director - NIT Hamirpur' && (
              <TeamCard
                key={member.id}
                name={member.name}
                image={member.image}
                designation={member.designation}
                contact={member.contact}
              />
            )
          );
        })}
      </div>
      <h2 className="CoreTeamHeading">Team Members</h2>
      <div className="team-core">
        {data?.team.map((member) => {
          return (
            <TeamCard
              key={member.id}
              name={member.name}
              image={member.image}
              designation={member.designation}
              contact={member.contact}
            />
          );
        })}
      </div>
    </div>
  );
}
