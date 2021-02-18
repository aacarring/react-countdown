import React, { useEffect, useState, useRef } from 'react';
import "./App.css";

export default function App() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date('December 3, 2021 19:37:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })

  return (
    <section className="container">
      <section className="timer">
        <div>
          <h2>B-Day Countdown</h2>
          <p>How long until I can officially have my quarter-life crisis?</p>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p>Days</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p>Hours</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p>Minutes</p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p>Seconds</p>
          </section>
        </div>
      </section>
    </section>
  )
}


