import React from "react";

const Banner = ({ backgroundImage, overlayText }) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl uppercase font-bold">
            {overlayText.title}
          </h2>
          <p className="mt-2 text-sm md:text-lg">{overlayText.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
