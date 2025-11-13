import React from "react";
// import experience from '../../../public/images/experience.png'

const ExperienceCommon = ({image}) => {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`, 
        }}
      ></div>   

      {/* Top and Bottom Fade Effect */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

      {/* Center Text */}
      <h1 className="relative font-glorify text-5xl md:text-6xl font-light text-black text-center" data-aos="zoom-in">
        Experience The World...
      </h1>
    </div>
  );
};

export default ExperienceCommon;
