import React from 'react';

const GalaxyBackground = () => {
  return (
    <div className="relative overflow-hidden bg-yellow-300">
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              animation: `twinkle ${Math.random() * 1.5 + 0.5}s linear infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GalaxyBackground;
