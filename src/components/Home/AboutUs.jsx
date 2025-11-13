import React from "react";
import image from '../../../public/images/img1big.png'

export default function AboutUs() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* ---------- LEFT TEXT ---------- */}
        <div className="flex-1 text-left">
          <h3 className="text-orange-600 font-segoe-script font-semibold mb-2 text-lg">
            About Us
          </h3>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Explore The <br />
            <span className="text-cyan-500">Unexplored</span> <br />
            <span className="text-cyan-500">Places</span> With Us...
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We have been making successful tour plans for more than two decades now. 
            As the premium tour operator, we are partnered with the top most Destination 
            Management Companies Worldwide and have an excellent track record of 35000 
            passengers. With our experience and guidance make your experience worth the 
            time and cost.
          </p>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div className="flex-1 relative flex justify-center">
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
            <img
              src={image}
              alt="Explore the Unexplored"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Decorative circular border accent */}
            {/* <div className="absolute inset-0 rounded-full border-4 border-white border-t-cyan-400 border-b-cyan-400 rotate-12"></div> */}
          </div>

          {/* Optional dotted curve background */}
          {/* <div className="absolute -top-16 -left-20 w-[400px] h-[400px] border border-dashed border-gray-300 rounded-full opacity-50 hidden md:block"></div> */}
        </div>

      </div>
    </section>
  );
}
