import React from "react";
import { useSelector } from "react-redux";
import TimerView from "./TimerView";

export default function ListTimers() {
  const timers = useSelector((state) => state.timers.value);

  return (
    <div>
      {timers.map((timer, i) => {
        return (
          <div key={i}>
            <TimerView
              name={timer.name}
              time={timer.time}
              isRunning={timer.isRunning}
            />
          </div>
        );
      })}
    </div>
  );
}
