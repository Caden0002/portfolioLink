// Time.js
import React, { useEffect } from "react";

function Time({ setTimeAndGreeting }) {
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      let newGreeting = "";

      if (hours >= 6 && hours < 9) newGreeting = "Early Morning";
      else if (hours >= 9 && hours < 12) newGreeting = "Late Morning";
      else if (hours >= 12 && hours < 15) newGreeting = "Early Afternoon";
      else if (hours >= 15 && hours < 18) newGreeting = "Late Afternoon";
      else if (hours >= 18 && hours < 20) newGreeting = "Early Evening";
      else newGreeting = "Late Night";

      const currentTime = `${String(hours).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
      setTimeAndGreeting({ currentTime, newGreeting });
    }, 1000);

    return () => clearInterval(interval);
  }, [setTimeAndGreeting]);

  return null; // Time does not render anything itself
}

export default Time;
