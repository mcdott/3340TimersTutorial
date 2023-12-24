import React from "react";
import { useDispatch } from "react-redux";
import { toggleTimer } from "../features/timers/timersSlice";

function formatTime(time) {
  const totalSeconds = Math.floor(time / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  // Pad numbers below 10 with a 0
  const pad = (num) => num.toString().padStart(2, "0");

  // Format the time as HH:MM:SS
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export default function TimerView({ index, name, time, isRunning }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{name}</h2>
      <h1>{formatTime(time)}</h1>
      <button onClick={() => dispatch(toggleTimer(index))}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
}
