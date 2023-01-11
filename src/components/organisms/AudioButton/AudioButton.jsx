import React, { useState, useEffect } from 'react';
import { MdOutlineMusicNote, MdOutlineMusicOff } from 'react-icons/md';
import './AudioButton.scss';
const useAudio = () => {
  const [audio] = useState(
    new Audio('https://api.festnimbus.com/uploads/Enter-music.mp3')
  );

  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.pause() : audio.play();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => audio.play());
    return () => {
      audio.pause();
    };
  }, []);

  return [playing, toggle];
};
const AudioButton = (props) => {
  const [playing, toggle] = useAudio();
  return (
    <button onClick={toggle} className={`${props.children} audio-button`}>
      {playing ? <MdOutlineMusicOff /> : <MdOutlineMusicNote />}
    </button>
  );
};

export default AudioButton;
