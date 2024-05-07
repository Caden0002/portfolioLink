import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Time from './Time.jsx'; // Import the Time component
import { RandomReveal } from 'react-random-reveal';

function Loader(props) {
    const [loading, setLoading] = useState(true);
    const [containerAnimation, setContainerAnimation] = useState({}); // State to manage container animation
    const [timeAndGreeting, setTimeAndGreeting] = useState({ currentTime: '', newGreeting: '' });
    const timeControls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        // Set container animation after 4.3 seconds
        setTimeout(() => {
            setContainerAnimation({
                y: '-100vh', // Move the container upwards
                transition: {
                    duration: 0.5,
                    ease: [0.22, 0.36, 0.63, 1],
                }
            });
        }, 4500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!loading) {
            timeControls.start({
                opacity: 0,
                y: "30%",
                transition: {
                    duration: 0.3,
                    ease: [0.37, 0, 0.63, 1],
                }
            });
        }
    }, [loading, timeControls]);

    return (
        <motion.div
            className="fixed bg-black h-screen top-0 left-0 w-full h-full flex justify-center items-center z-50"
            animate={containerAnimation} // Animate the container
        >
            <Time setTimeAndGreeting={setTimeAndGreeting} />
            <motion.div
                className="text-3xl text-white font-VT flex flex-col items-center justify-center"
                animate={timeControls} // Animate the text elements
            >
                <motion.div
                    initial={{ opacity: 0, y: "30%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.37, 0, 0.63, 1] }}
                >
                    {timeAndGreeting.currentTime}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: "30%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: [0.37, 0, 0.63, 1] }}
                >
                    <RandomReveal isPlaying duration={3} characters={timeAndGreeting.newGreeting} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Loader;
