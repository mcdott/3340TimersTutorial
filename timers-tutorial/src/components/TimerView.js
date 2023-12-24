import React from "react";

function TimerView({ name, time, isRunning }) {
  return (
    <div>
      <h2>{name}</h2>
      <h1>{time}</h1>
      <button>{isRunning ? "Start" : "Stop"}</button>
    </div>
  );
}

export default TimerView;
