import React from 'react';
import './Workshops.scss';
import WorkshopCard from '../../../components/molecules/WorkshopCard/WorkshopCard';
import { useGetEvents } from '../../../hooks/api/events';
import Loading from '../../../components/organisms/Loading/Loading';
export default function Workshops() {
  const { data: workshops , status } = useGetEvents({ type: 'WORKSHOP' });
  
  const dummyworkshops = [
    {
      id: 1,
      name: 'Ptv vissim',
      type: 'WORKSHOP',
      shortDescription: 'Ptv vissim',
      description: 'PTV Vissim is a microscope multi-modal traffic flow simulation software package. Developed in 1992 by PTV Planung, today this software has become a global market leader.',
      from: '2022-04-02T00:00:00.000Z',
      to: '2022-04-03T00:00:00.000Z',
      venue: 'google meet',
      registrationUrl: 'https://forms.gle/8nAgBMAmyi1ZBczx7',
      image: '../../../../public/images/pixoblack.jpg',
      pdf: '',
      updatedAt: '',
      username: 'ojas',
    },
  ];
  if(status === 'loading') return <Loading/>
  return (
    <div className="workshops">
      <div className="heading">Workshops</div>
      {status === 'error' && <div>Something went wrong!! Check you Internet Connection..</div>}
      {workshops?.length === 0 ? (
        <div className="workshop-container">
        {dummyworkshops?.map((event) => {
          return <WorkshopCard key={event.id} event={event} />;
        })}
      </div>
      ) : (
        <div className="workshop-container">
          {workshops?.map((event) => {
            return <WorkshopCard key={event.id} event={event} />;
          })}
        </div>
      )}
    </div>
  );
}
