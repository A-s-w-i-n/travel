import React from "react";
import customTIp from "../../../public/images/customTIp.png";

// Fully responsive BUT preserves your original style + original fixed height
const CustomTip = () => {
  return (
    <div className="relative w-full h-[80vh] py-20 flex items-start justify-center bg-gradient-to-r from-pink-100 to-yellow-100 overflow-hidden">
      {/* Background Image (unchanged) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${customTIp})` }}
      ></div>

      {/* Keep your original content styling */}
      <div className="relative z-10 text-start px-4 max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Design Your Custom Trip
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
          Wish to travel independently or exclusively with family or friends?
          Our experts would love to create a package just for you!
        </p>

        <button className="px-6 py-2 bg-white bg-opacity-75 rounded-full text-gray-800 font-medium hover:bg-opacity-100 transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CustomTip;