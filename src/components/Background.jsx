import React from 'react';
import Morning from '/Morning.gif'; 
import Afternoon from '/Afternoon.gif'; 
import Evening from '/Evening.gif'; 
import Night from '/Night.gif'; 

const Background = ({ children, newGreeting }) => {
    let backgroundImage;
    let backgroundSize = 'cover';
    let backgroundPosition = 'center bottom';

    if (newGreeting) {
        // Set the background image based on the newGreeting
        if (newGreeting.includes('Morning')) {
            backgroundImage = Morning;
        } else if (newGreeting.includes('Afternoon')) {
            backgroundImage = Afternoon;
        } else if (newGreeting.includes('Evening')) {
            backgroundImage = Evening;
        } else if (newGreeting.includes('Night')) {
            backgroundImage = Night;
        } else {
            // Default to Night if the greeting is not recognized
            backgroundImage = Night;
        }
    } else {
        // Default to Night if newGreeting is undefined
        backgroundImage = Night;
    }

    // Check if the screen width is less than 768px (mobile)
    const isMobile = window.innerWidth < 768;

    // Apply different styles based on the screen width
    if (isMobile) {
        backgroundSize = '200% 100%';
        backgroundPosition = 'left bottom';
    }

    return (
        <div className="relative top-0 left-0 w-screen h-screen overflow-y-scroll" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize, backgroundPosition }}>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Background;
