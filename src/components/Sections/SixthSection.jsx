import React from "react";

const SixthSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 bg-gradient-to-b from-white to-sky-50">
      {/* Left Image */}
      <div className="relative w-full md:w-1/3 flex justify-center" data-aos="fade-down">
        <div className="relative transform rotate-[-3deg]">
          <img
            src="/images/temple.jpg" // replace with your left image path
            alt="Temple"
            className="w-80 h-96 object-cover rounded-lg shadow-xl"
          />
          <div className="absolute -top-4 left-6 w-28 h-5 bg-[#F1E1B0] rotate-[-5deg] rounded-md"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2" data-aos="zoom-in">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Adventure Globally: <br />
          Customized International Tour <br />
          Experiences
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Dive into tailor-made global adventures with our international tour
          packages, each uniquely crafted to suit your interests and desires.
          From thrilling safaris in Africa to serene retreats in the Alps, our
          diverse offerings promise unforgettable experiences, blending
          adventure, culture, and luxury in the world's most stunning
          destinations. Your dream global adventure, personalized for the
          ultimate travel experience.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative w-full md:w-1/4 mt-16 flex items-end  justify-start" data-aos="zoom-in">
        <div className="relative transform rotate-[4deg]">
          <img
            src="/images/boat.jpg" // replace with your right image path
            alt="Traveler on boat"
            className="w-60 h-80 object-cover rounded-lg shadow-xl"
          />
          <div className="absolute -top-4 right-6 w-28 h-5 bg-[#F1E1B0] rotate-[5deg] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
