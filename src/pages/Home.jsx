import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SecondSection from "../components/common/SecondSection";
import ExperienceCommon from "../components/common/ExperienceCommon";
import ForthSection from "../components/Sections/ForthSection";
import FifthSection from "../components/common/FifthSection";
import SixthSection from "../components/Sections/SixthSection";
import SeventhSection from "../components/Sections/SeventhSection";
import Footer from "../components/Sections/Footer";
import smokeImge from "../../public/images/smokeimg.png";
import Offer from "../components/Home/Offer";
import SubCarosal from "../components/Home/SubCarosal";
import Domestic from "../components/Home/Domastic";
import CustomTip from "../components/Home/CustomTip";
import TestimonialCarousel from "../components/Home/TestimonialCarosal";
import SideCarosal from "../components/Home/SideCarosal";
import VisaRequirements from "../components/Home/VisaRequirements";
import sliding1 from "../../public/images/scrollingBackground.jpg";
import sliding2 from "../../public/images/slidingbackgroun1.webp";
import AboutUs from "../components/Home/AboutUs";

// Placeholder images - replace with your actual imports
const img1main =
  "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920&q=80";
const img2big =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80";
const img3big =
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80";
const img =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80";

const images = [img1main, img2big, img3big];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="antialiased">
      {/* Hero Section with sliding carousel */}
      <div className="relative overflow-hidden min-h-screen">
        {/* Sliding background images */}
        <div
          className="flex transition-transform duration-[1500ms] ease-in-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full min-h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        {/* Top gradient to make navbar readable */}
        <div className="absolute inset-x-0 top-0 h-28 md:h-36 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

        {/* Navbar (kept absolute so it overlaps hero) */}
        <div className="absolute inset-x-0 top-0 z-30 px-4 md:px-8">
          <Navbar />
        </div>

        {/* Centered hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4 md:px-12">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-playfair font-bold mb-4 md:mb-6 tracking-wide">
              Dream
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-12 font-light">
              Give Your Dream Locations A Fun And Well-Deserved Adventure. Make Memories Worth Living Again.
            </p>

            <p className="text-sm md:text-lg mb-6 font-medium">Find Your Journey</p>

            {/* Search Box */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-2xl px-4 py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <select className="flex-1 bg-transparent text-gray-700 text-sm md:text-base font-medium outline-none px-3 py-2 min-w-[90px]">
                  <option>International</option>
                  <option>Domestic</option>
                </select>

                <div className="hidden sm:block w-px h-8 bg-gray-300" />

                <select className="flex-1 bg-transparent text-gray-700 text-sm md:text-base font-medium outline-none px-3 py-2 min-w-[90px]">
                  <option>Adventure</option>
                  <option>Cultural</option>
                  <option>Relaxation</option>
                </select>

                <div className="hidden sm:block w-px h-8 bg-gray-300" />

                <select className="flex-1 bg-transparent text-gray-700 text-sm md:text-base font-medium outline-none px-3 py-2 min-w-[90px]">
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                  <option>1-2 Weeks</option>
                  <option>2+ Weeks</option>
                </select>

                <button className="whitespace-nowrap bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 sm:px-10 py-2 rounded-full transition-all duration-300 shadow-lg">
                  Search
                </button>
              </div>

              <p className="text-xs sm:text-sm md:text-base mt-4 text-white/80 text-center">International and domestic tours from Kerala. Packages to all the 7 continents.</p>
            </div>
          </div>
        </div>

        {/* Smoke overlay at bottom */}
        <div className="absolute inset-x-0 -bottom-20 pointer-events-none select-none z-20">
          <img src={smokeImge} alt="smoke overlay" className="w-full h-auto" />
        </div>
      </div>

      {/* Other Sections - responsive spacing */}
      <div className="">
        <Offer />
        <div className="px-4 md:px-8 lg:px-0">
          <SubCarosal classname="w-96" />
        </div>

        <ExperienceCommon image={img} />
        <Domestic />

        <div className="px-4 md:px-8 lg:px-0">
          <SubCarosal classname="w-96" />
        </div>

        <div className="px-4 md:px-8 lg:px-0">
          <SubCarosal classname="w-52" />
        </div>

        <CustomTip />
        <div className="px-4 md:px-8 lg:px-0">
          <SideCarosal />
        </div>

        <div className="px-4 md:px-8 lg:px-0">
          <VisaRequirements
            image={sliding1}
            title={"Travel Visa Requirements"}
            disc={
              "Wish to travel independently or exclusively with family or friends? Our experts would love to create a package just for you!"
            }
          />
        </div>

        <AboutUs />
        <TestimonialCarousel />

        <div className="px-4 md:px-8 lg:px-0">
          <VisaRequirements
            image={sliding2}
            title={"Explore india with us"}
            disc={
              "Wish to travel independently or exclusively with family or friends? Our experts would love to create a package just for you!"
            }
          />
        </div>

        <ForthSection />
        <div className="px-4 md:px-8 lg:px-20">
          <FifthSection smokeImage={smokeImge} image={img} />
        </div>

        <SixthSection image={img} />
        <SeventhSection image={img} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
