import React from "react";

const SixthSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-sky-50 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Image */}
        <div
          className="w-full md:w-1/3 flex justify-center md:justify-end"
          data-aos="fade-down"
        >
          <div className="relative transform md:-rotate-3">
            <img
              src="/images/temple.jpg"
              alt="Temple"
              loading="lazy"
              className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -top-3 left-6 w-24 h-4 bg-[#F1E1B0] md:w-28 md:h-5 md:-rotate-5 rounded-md" />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-6" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Adventure Globally:
            <br />
            Customized International Tour
            <br />
            Experiences
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
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
        <div
          className="w-full md:w-1/4 flex justify-center md:justify-start mt-8 md:mt-0 items-end"
          data-aos="zoom-in"
        >
          <div className="relative transform md:rotate-4">
            <img
              src="/images/boat.jpg"
              alt="Traveler on boat"
              loading="lazy"
              className="w-56 h-64 md:w-60 md:h-80 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -top-3 right-6 w-24 h-4 bg-[#F1E1B0] md:w-28 md:h-5 md:rotate-5 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
