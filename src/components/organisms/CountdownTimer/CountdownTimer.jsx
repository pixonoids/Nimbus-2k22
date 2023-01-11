import { useState, useEffect } from 'react';
import './CountdownTimer.scss';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

export default function CountdownTimer({ countdownTimestampMs }) {
  const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
  };
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return (
    <div className="countdownTimer">
      <span className="timerContainer timeBorder">
        {remainingTime.days}
        <div>days</div>{' '}
      </span>
      <span className="timerContainer">:</span>
      <span className="twoNumbers timerContainer timeBorder">
        {remainingTime.hours}
        <div>hours</div>{' '}
      </span>
      <span className="timerContainer">:</span>
      <span className="twoNumbers timerContainer timeBorder">
        {remainingTime.minutes}
        <div>min</div>{' '}
      </span>
      <span className="timerContainer">:</span>
      <span className="twoNumbers timerContainer timeBorder">
        {remainingTime.seconds}
        <div>sec</div>{' '}
      </span>
    </div>
  );
}
