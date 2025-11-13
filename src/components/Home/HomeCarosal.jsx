import React from "react";
import img1big from "../../../public/images/img1big.png";
import img2big from "../../../public/images/img2big.png";
import img3big from "../../../public/images/img3big.png";

const HomeCarosal = () => {
  const images = [img2big, img1big, img3big];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-item absolute top-0 left-0 w-full h-full bg-cover bg-center ${
            index === 0 ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Explore</h1>
              <p className="text-lg mb-6">
                With Your Destination List Let Somans Help Explore You. Visit
                Your Dream Destination As Per Your Additions And Our Support.
              </p>
              <div className="flex justify-center space-x-4">
                <select className="p-2 rounded-lg">
                  <option>Select Type</option>
                  <option>International</option>
                  <option>Domestic</option>
                </select>
                <select className="p-2 rounded-lg">
                  <option>Experience</option>
                  <option>Adventure</option>
                  <option>Culture</option>
                </select>
                <select className="p-2 rounded-lg">
                  <option>Duration</option>
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                </select>
                <button className="bg-orange-500 text-white p-2 rounded-lg">
                  Search
                </button>
              </div>
              <p className="mt-4 text-sm">
                International and domestic tours from Kerala. Packages to all
                the 7 continents.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCarosal;
