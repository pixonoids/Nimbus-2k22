import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { AudioButton, Menu } from './components/organisms/';
import {
  Home,
  About,
  Contact,
  Admin,
  Events,
  Gallery,
  Team,
  Sponsors,
  Hackathon,
  Calender,
  Clubs,
  Entering,
  Megaevents,
  Lectures,
  Workshops,
  Interviews,
  ErrorPage,
  EventDetails,
  SummitStrive,
} from './pages';
import { useSelector } from 'react-redux';

export default function App() {
  //STATES

  //   useHideNavigation();
  const navVisible = useSelector((state) => state.ui.navVisible);
  const [enteringState, setEnteringState] = useState(
    sessionStorage.getItem('enteringState') === null
  );

  //EFFECTS
  useEffect(() => {
    sessionStorage.setItem('enteringState', false);
  }, []);

  //FUNCTIONS

  //RENDER
  return (
    <div>
      {navVisible && <Menu />}
      <AudioButton />
      <Routes>
        <Route path="entering" element={<Entering />} />
        <Route
          path="/"
          element={
            enteringState ? (
              <Entering setEnteringState={setEnteringState} />
            ) : (
              <Home />
            )
          }
        />

        <Route path="about" element={<About />} />

        <Route path="events" element={<Events />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="megaevents" element={<Megaevents />} />
        <Route path="lectures" element={<Lectures />} />
        <Route path="workshops" element={<Workshops />} />

        <Route path="gallery" element={<Gallery />} />
        {/* <Route path="schedule" element={<Calender />} /> */}
        <Route path="clubs" element={<Clubs />} />
        <Route path="occultica2k22" element={<Hackathon />} />
        <Route path="summitstrive" element={<SummitStrive />} />

        <Route path="sponsors" element={<Sponsors />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
