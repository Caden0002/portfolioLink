import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Button = ({ text, link }) => {
    const controls = useAnimation();
    const [textTransform, setTextTransform] = useState({ x: 0, y: 0 });

    const hoverAnimation = async () => {
        await controls.start({ x: 4, y: 3, transition: { duration: 0.01 } });
        setTextTransform({ x: 1, y: 0 }); // Move text back to original position
    };

    const hoverEndAnimation = async () => {
        await controls.start({ x: 0, y: 0, transition: { duration: 0.01 } });
        setTextTransform({ x: -4, y: -3 }); // Move text on hover
    };

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button 
                className="button"
                style={{
                    width: '439px',
                    height: '74px',
                    background: 'none',
                    border: 'none',
                    padding: '0',
                    position: 'relative',
                    overflow: 'hidden' // Ensure SVG does not overflow button boundaries
                }}
                onHoverStart={hoverAnimation}
                onHoverEnd={hoverEndAnimation}
            >
                <svg 
                    width="439" 
                    height="74" 
                    viewBox="0 0 439 74" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        zIndex: 0 // Lower z-index for SVG
                    }}
                >
                    <rect x="9" y="11" width="430" height="63" rx="8" fill="black"/>
                    <motion.rect 
                        id="white-rect"
                        x="0"
                        y="0"
                        width="429"
                        height="62"
                        rx="8"
                        fill="white"
                        animate={controls}
                    />
                </svg>
                <div 
                    className="relative text-xl text-black font-semibold" 
                    style={{ 
                        zIndex: '1', 
                        transform: `translate(${textTransform.x}px, ${textTransform.y}px)` 
                    }}
                >
                    {text}
                </div>
            </motion.button>
        </a>
    );
}

export default Button;
