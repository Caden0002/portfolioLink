import React, { useState } from 'react';

const ButtonExample = ({ text, link, icon, description }) => {
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
          className="bg-neutral-950 rounded-lg w-[300px] h-[50px] sm:w-[430px] sm:h-[63px] "
          style={{ zIndex: 1, position: 'relative', left: '9px', top: '11px' }}
        ></div>
        {/* First rectangle: Positioned second, above the second rectangle */}
        <div
          className="absolute bg-neutral-50 inset-0 rounded-lg w-[300px] h-[50px] sm:w-[430px] sm:h-[63px] "
          style={{
            zIndex: 2,
            transform: isHovered ? 'translate(4px, 3px)' : 'translate(0, 0)',
          }}
        >
          {/* Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl">{icon}</div>
          {/* Center the text vertically and horizontally */}
          <div className="flex items-center justify-center h-full">
            <div className="text-black text-lg sm:text-xl font-semibold">{text}</div>
          </div>
          {/* Description */}
          {description && (
  <div className="hidden absolute top-0 right-0 bg-black text-white text-xxxs sm:text-xxs rounded-tr-lg rounded-bl-lg py-1 px-2 leading-4">
              {description}
            </div>
          )}
        </div>
      </button>
    </a>
  );
}

export default ButtonExample;
