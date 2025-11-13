import React from "react";
import customTIp from "../../../public/images/customTIp.png";
const CustomTip = () => {
  return (
    <div className="flex items-start relative w-full h-[80vh] py-20 bg-gradient-to-r from-pink-100 to-yellow-100   justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${customTIp})` }}
      ></div>
      <div className="relative text-start  z-10  px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Design Your Custom Trip
        </h1>
        <p className="text-lg text-gray-600 mb-6">
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
