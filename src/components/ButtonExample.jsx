import React, { useState } from 'react';

const ButtonExample = ({ text, link }) => { // Corrected component name
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle hover start
  const handleHoverStart = () => {
    setIsHovered(true);
  };

  // Function to handle hover end
  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>

    <button
      className=""
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{ position: 'relative' }} // Ensure relative positioning
    >
      {/* Second rectangle: Positioned first, behind the first rectangle */}
      <div
        className="bg-neutral-950 rounded-lg w-[330px] h-[53px] sm:w-[430px] sm:h-[63px] "
        style={{ zIndex: 1, position: 'relative', left: '9px', top: '11px' }}
      ></div>
      {/* First rectangle: Positioned second, above the second rectangle */}
      <div
        className="absolute bg-neutral-50 inset-0 rounded-lg w-[330px] h-[53px] sm:w-[430px] sm:h-[63px] "
        style={{
          zIndex: 2,
          transform: isHovered ? 'translate(4px, 3px)' : 'translate(0, 0)',
        }}
      >
        {/* Center the text vertically and horizontally */}
        <div className="flex items-center justify-center h-full">
          <div className="text-black text-xl font-semibold">{text}</div>
        </div>
      </div>
    </button>
    </a>

  );
}

export default ButtonExample;
