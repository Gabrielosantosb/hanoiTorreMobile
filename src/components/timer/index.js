import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { TimerContainer, TimerText } from "./styles";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
      setMinutes((prevMinutes) => Math.floor((prevMinutes + (seconds + 1) / 60) % 60));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, minutes]);

  return (
    <TimerContainer>
      <TimerText>
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </TimerText>
    </TimerContainer>
  );
};