import React, { useState } from 'react';
import Hero from "./components/Hero.jsx";
import Loader from "./components/Loader.jsx";
import Background from "./components/Background.jsx";
import Time from "./components/Time.jsx"; // Import the Time component

export default function App() {
    const [timeAndGreeting, setTimeAndGreeting] = useState({ currentTime: '', newGreeting: '' });

    return (
        <>
            <Loader />
            {/* Render the Time component and pass setTimeAndGreeting as a prop */}
            <Time setTimeAndGreeting={setTimeAndGreeting} />
            {/* Pass the newGreeting prop to the Background component */}
            <Background newGreeting={timeAndGreeting.newGreeting}>
                <Hero newGreeting={timeAndGreeting.newGreeting}/>
            </Background>
            {/* <ButtonExample /> */}
        </>
    );
}
