import React, { useState } from 'react';
import "./App.css";

export default function App() {
  const [state, setState] = useState();
  return (
    <section className="container">
      <section className="timer">
        <div>
          <h2>Countdown Timer</h2>
          <p>Tick, tock...</p>
        </div>
        <div>
          <section>
            <p>12</p>
            <p>Days</p>
          </section>
          <span>:</span>
          <section>
            <p>12</p>
            <p>Hours</p>
          </section>
          <span>:</span>
          <section>
            <p>12</p>
            <p>Minutes</p>
          </section>
          <span>:</span>
          <section>
            <p>12</p>
            <p>Seconds</p>
          </section>
        </div>
      </section>
    </section>
  )
}


