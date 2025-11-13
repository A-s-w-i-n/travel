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

// Navbar Component

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
    <div className="">
      {/* Hero Section with sliding carousel */}
      <div className="relative overflow-hidden min-h-screen ">
        {/* Sliding background images */}
        <div
          className="flex transition-transform duration-[1500ms] ease-in-out  "
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-full min-h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />

        <div>
          <div className="absolute inset-x-0 top-0 z-20 px-6 md:px-12">
            <Navbar />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white px-6 md:px-12">
            <div className="text-center max-w-5xl">
              <h1 className="text-6xl md:text-8xl  font-playfair font-bold mb-6 tracking-wide">
                Dream
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
                Give Your Dream Locations A Fun And Well-Deserved Adventure.
                Make Memories Worth Living Again.
              </p>

              <p className="text-lg md:text-xl mb-8 font-medium">
                Find Your Journey
              </p>

              {/* Search Box */}
              <div
                div
                className="bg-white/95 backdrop-blur-sm rounded-full shadow-2xl px-6 py-3 flex flex-col md:flex-row items-center gap-4 max-w-[80%] mx-auto"
              >
                <select className="flex-1 bg-transparent text-gray-700 text-base font-medium outline-none px-4 py-2 min-w-[100px]">
                  <option>International</option>
                  <option>Domestic</option>
                </select>
                <div className="hidden md:block w-px h-8 bg-gray-300"></div>
                <select className="flex-1 bg-transparent text-gray-700 text-base font-medium outline-none px-4 py-2 min-w-[100px]">
                  <option>Adventure</option>
                  <option>Cultural</option>
                  <option>Relaxation</option>
                </select>
                <div className="hidden md:block w-px h-8 bg-gray-300"></div>
                <select className="flex-1 bg-transparent text-gray-700 text-base font-medium outline-none px-4 py-2 min-w-[100px]">
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                  <option>1-2 Weeks</option>
                  <option>2+ Weeks</option>
                </select>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-12 py-3 rounded-full transition-all duration-300 shadow-lg">
                  Search
                </button>
              </div>

              <p className="text-base md:text-lg mt-6 text-white/80">
                International and domestic tours from Kerala. Packages to all
                the 7 continents.
              </p>
            </div>
          </div>

          {/* Smoke overlay at bottom */}
          <div className="absolute mt-0 inset-x-0 -bottom-20 pointer-events-none select-none z-10">
            <img
              src={smokeImge}
              alt="smoke overlay"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Offer />
      <SubCarosal classname="w-96" />
      <ExperienceCommon image={img} />
      <Domestic />
      <SubCarosal classname="w-96" />

      <SubCarosal classname="w-52 " />
      <CustomTip />
      <SideCarosal />
      <VisaRequirements
        image={sliding1}
        title={"Travel Visa Requirements"}
        disc={
          "Wish to travel independently or exclusively with family or friends? Our experts would love to create a package just for you!"
        }
      />

      <AboutUs />
      <TestimonialCarousel />
      <VisaRequirements
        image={sliding2}
        title={"Explore india with us"}
        disc={
          "Wish to travel independently or exclusively with family or friends? Our experts would love to create a package just for you!"
        }
      />

      <ForthSection />
      <FifthSection smokeImage={smokeImge} image={img} />
      <SixthSection image={img} />
      <SeventhSection image={img} />
      <Footer />
    </div>
  );
};

export default Home;
