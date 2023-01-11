import React from 'react';
import LecturesCard from '../../../components/molecules/LecturesCard/LecturesCard';
import { useGetEvents } from '../../../hooks/api/events';
import './Lectures.scss';
import  Loading from '../../../components/organisms/Loading/Loading'
export default function Lectures() {
  const { data: lectures , status} = useGetEvents({ type: 'LECTURE' });
  
  const dummylectures = [
    {
      id: 1,
      name: 'Coming Soon',
      type: 'LECTURES',
      shortDescription: 'Eveyone should participate',
      description: '',
      from: '2023-01-01T00:00:00.000Z',
      to: '2023-01-01T00:00:00.000Z',
      venue: 'google meet',
      registrationUrl: '#',
      image: '../../../../public/images/pixoblack.jpg',
      pdf: '',
      updatedAt: '',
      username: 'ojas',
    }
  ];
  if(status === 'loading') return <Loading/>;
  return (
    <div className="lectures">
      <h1 className="heading">Lectures</h1>
      {status === 'error' && <div>Something went wrong!! Check you Internet Connection..</div>}
      {lectures?.length === 0 ? (
        <div className="lectures-container">
        {dummylectures?.map((event) => {
          return <LecturesCard event={event} key={event.id} />;
        })}
      </div>
      ) : (
        <div className="lectures-container">
          {lectures?.map((event) => {
            return <LecturesCard event={event} key={event.id} />;
          })}
        </div>
      )}
    </div>
  );
}
