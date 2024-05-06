import React from 'react';
import ButtonExample from './ButtonExample.jsx'; 
import Footer from './Footer.jsx'; 
import '../../styles.css';

const name = "Caden Chen";
const position = "Web Developer\nReact • Figma";
const categories1 = "• Business •";
const categories2 = "• Socials •";

const businessButtons = [
  { text: "cadenchen.net", link: "https://cadenchen.net/" },
  { text: "designecraft.com", link: "https://designecraft.com/" }
];

const socialsButtons = [
    { text: "LinkedIn", link: "https://www.linkedin.com/in/caden-chen-576189205/" },
    { text: "Medium", link: "https://medium.com/@caden0002" },
    { text: "Github", link: "https://github.com/Caden0002" },
    { text: "Instagram", link: "https://www.instagram.com/c_cadenqx/" },
    { text: "Twitter", link: "https://twitter.com/Caden0002" }
];

function Hero({ newGreeting }) {
  const textColorClass = newGreeting === 'Night Time' ? 'text-textColorSecondary' : 'text-textColorPrimary';

  return (
    <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center md:min-h-screen relative z-10">
      <div className="mt-9">
        <div className="custom-hero-img"></div>
      </div>
      <div className={`mt-5 font-semibold text-2xl ${textColorClass}`}>{name}</div>
      <div className={`mt-5 text-base whitespace-pre-line text-center ${textColorClass}`}>{position}</div>
      <div className={`mt-5 text-xl font-semibold text-center ${textColorClass}`}>{categories1}</div>
      <div className='mt-5 flex flex-col text-4xl text-black space-y-4'>
        {businessButtons.map((button, index) => (
          <ButtonExample key={index} text={button.text} link={button.link} />
        ))}
      </div>
      <div className={`mt-5 text-xl font-semibold text-center ${textColorClass}`}>{categories2}</div>

      <div className='mt-5 flex flex-col text-4xl text-black space-y-4'>
        {socialsButtons.map((button, index) => (
          <ButtonExample key={index} text={button.text} link={button.link} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
