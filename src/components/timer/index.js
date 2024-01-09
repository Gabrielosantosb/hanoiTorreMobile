import React, { useEffect, useState } from "react";
import { TimerContainer, TimerText } from "./styles";

export const Timer = ({ gameOver, resetTimer }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let intervalId;

    if (!gameOver && !resetTimer) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
        setMinutes((prevMinutes) =>
          Math.floor((prevMinutes + (seconds + 1) / 60) % 60)
        );
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [gameOver, resetTimer, seconds, minutes]);

  useEffect(() => {
    if (resetTimer) {
      setSeconds(0);
      setMinutes(0);
    }
  }, [resetTimer]);

  return (
    
    <>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </>
    
  );
};
