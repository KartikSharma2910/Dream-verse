import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./styles";

/**
 * It accepts the date as string in YY:DD:MM format
 * @param {*} date
 * @returns Timer till completed date
 */
const Timer = ({ date = "2024-05-08" }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <Box className="timer" sx={styles.wrapper}>
      <Box component="span" sx={styles.number}>
        {formatTime(timeLeft.days)}
      </Box>
      ⁚
      <Box component="span" sx={styles.number}>
        {formatTime(timeLeft.hours)}
      </Box>
      ⁚
      <Box component="span" sx={styles.number}>
        {formatTime(timeLeft.minutes)}
      </Box>
      ⁚
      <Box component="span" sx={styles.number}>
        {formatTime(timeLeft.seconds)}
      </Box>
    </Box>
  );
};

export default Timer;
