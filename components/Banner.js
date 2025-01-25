import React from "react";

const Banner = ({ backgroundImage, overlayText }) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold">
            {overlayText.title}
          </h1>
          <p className="mt-2 text-sm md:text-lg">{overlayText.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
