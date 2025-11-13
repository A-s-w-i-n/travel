import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Carosal from "../components/Carosal";
import img1main from "../../public/images/img1big.png";
import img2big from "../../public/images/img2big.png";
import img3big from "../../public/images/img3big.png";
import smokeImge from "../../public/images/smokeimg.png";
import SecondSection from "../components/common/SecondSection";
import ForthSection from "../components/Sections/ForthSection";
import img from "../../public/images/experience.png";
import ExperienceCommon from "../components/common/ExperienceCommon";
import img1 from "../../public/images/img1small.png";
import img2 from "../../public/images/img2big.png";
import img3 from "../../public/images/img3small.png";
import FifthSection from "../components/common/FifthSection";
import SixthSection from "../components/Sections/SixthSection";
import SeventhSection from "../components/Sections/SeventhSection";
import Footer from "../components/Sections/Footer";

const images = [img1main, img2big, img3big];
const carosalImage = [img1, img2, img3];
const title = "International";
const disc =
  "As international tour operators, we specialize in crafting unforgettable world tour packages, tailoring each journey to your unique desires, and ensuring a memorable and seamless international travel experience for families and solo";

const International = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-rotation removed per requirement; background changes only on click

  const handleSelect = (index) => {
    setCurrentImage(index % images.length);
  };

  return (
    <div>
      <div
        className="min-h-screen  transition-all duration-1000 ease-in-out  bg-cover bg-center relative"
       
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="md:mx-30 mx-10">
          <Navbar />
          <div className="">
            <Carosal
              title={title}
              disc={disc}
              image={carosalImage}
              selectedIndex={currentImage}
              onSelect={handleSelect}
            />
          </div>
        </div>
        {/* Bottom smoke overlay image */}
        <div className="pointer-events-none select-none absolute  inset-x-0 -bottom-27">
          <img
            src={smokeImge}
            alt="smoke overlay"
            className="w-full h-auto block"
          />
        </div>
      </div>
      <div className="">
        <SecondSection />
      </div>
      <div className="">
        <ExperienceCommon image={img} />
      </div>
      <div className="">
        <ForthSection />
      </div>
      <div className="">
        <FifthSection smokeImage={smokeImge} image={img} />
      </div>
      <div className="">
        <SixthSection image={img} />
      </div>
      <div className="">
        <SeventhSection image={img} />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default International;
