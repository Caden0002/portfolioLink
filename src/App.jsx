import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Loader from "./components/Loader.jsx";
import Background from "./components/Background.jsx";
import Time from "./components/Time.jsx"; // Import the Time component
import Footer from "./components/Footer.jsx";

export default function App() {
  const [timeAndGreeting, setTimeAndGreeting] = useState({
    currentTime: "",
    newGreeting: "",
  });

  return (
    <div className="overscroll-none">
      <Loader />
      <Time setTimeAndGreeting={setTimeAndGreeting} />
      <Background newGreeting={timeAndGreeting.newGreeting}>
        <Hero newGreeting={timeAndGreeting.newGreeting} />
        <Footer />
      </Background>
    </div>
  );
}
