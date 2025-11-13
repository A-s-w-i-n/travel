import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Suhail TK",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60",
    text: "I had been to tons of travel guide places and faced problems. Somans helped me plan everything — from budgeting to choosing the best locations.",
  },
  {
    id: 2,
    name: "James Jacob",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=60",
    text: "Summer vacation was hectic due to ticket booking, hotels, and places to explore. Somans sorted everything out within 20 minutes of conversation!",
  },
  {
    id: 3,
    name: "Sanjay",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=60",
    text: "I was occupied with daily routines, but Somans handled everything perfectly. My Vietnam trip became memorable and stress-free.",
  },
];

const Polaroid = ({ src, alt, size = "md", rotate = "rotate-2" }) => {
  const sizes = {
    sm: "w-24 h-24",
    mid: "w-36 h-36",
    md: "w-64 h-64",
    lg: "w-80 h-80",
  };
  return (
    <div className={`relative  bg-white rounded-xl shadow-xl p-2 ${rotate}`}>
      <img
        src={src}
        alt={alt}
        className={`${sizes[size]} object-cover rounded-lg`}
      />
      <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full" />
    </div>
  );
};

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(1);
  const [direction, setDirection] = useState("next");
  const [animating, setAnimating] = useState(false);

  const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (current + 1) % testimonials.length;

  const prevSlide = () => {
    setDirection("prev");
    setCurrent(prevIndex);
  };
  const nextSlide = () => {
    setDirection("next");
    setCurrent(nextIndex);
  };

  // Trigger slide-in animation on active change
  React.useEffect(() => {
    setAnimating(true);
    const id = requestAnimationFrame(() => setAnimating(false));
    return () => cancelAnimationFrame(id);
  }, [current, direction]);

  const active = testimonials[current];
  const prev = testimonials[prevIndex];
  const next = testimonials[nextIndex];

  return (
    <div className="w-full py-20 flex flex-col items-center ">
      {/* Headings */}
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold font-segoe-script mb-3">Testimonial</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
          What People Has To Say About Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn from the vacationers about their vacation experience.
        </p>
      </div>

      {/* Content */}
      <div className="relative  flex  items-center  justify-center  w-full max-w-full   ">
        {/* Left preview */}
        <div className={`hidden  md:flex  w-[30%]    left-0  items-end gap-3  opacity-80 transition-transform duration-500 ease-in-out ${
          animating ? (direction === "next" ? "-translate-x-6" : "translate-x-6") : "translate-x-0"
        }`}>
          <Polaroid
            src={prev.image}
            alt={prev.name}
            size="sm"
            rotate="rotate-6"
          />
          <div className="text-xs w-1/2 text-gray-600">
            <p className="line-clamp-4 leading-5">{prev.text}</p>
            <p className="mt-2 font-semibold text-gray-900">{prev.name}</p>
            <p className="text-[11px] text-gray-500">{prev.role}</p>
          </div>
        </div>
        {/* center preview */}
        <div className="flex flex-col w-[40%]  md:flex-row  items-center justify-center gap-8 md:gap-12">
          <div
            className={`transition-all duration-500 ease-in-out ${
              animating
                ? direction === "next"
                  ? "opacity-0 translate-x-10"
                  : "opacity-0 -translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <Polaroid
              src={active.image}
              alt={active.name}
              size="md"
              rotate="rotate-6"
            />
          </div>
          <div
            className={`max-w-lg  w-1/2 transition-transform duration-500 ease-in-out ${
              animating ? (direction === "next" ? "translate-x-10" : "-translate-x-10") : "translate-x-0"
            }`}
          >
            <p className="text-gray-700 leading-7 md:text-base">
              {active.text}
            </p>
            <div className="mt-6">
              <p className="text-lg font-bold text-gray-900">{active.name}</p>
              <p className="text-sm text-gray-500">{active.role}</p>
            </div>
          </div>
        </div>

        {/* Right preview */}
        <div className={`hidden w-[30%] md:flex relative   right-0  justify-end        items-end gap-3    text-right opacity-80 transition-transform duration-500 ease-in-out ${
          animating ? (direction === "next" ? "-translate-x-6" : "translate-x-6") : "translate-x-0"
        }`}>
          <div className="text-xs w-1/2 text-gray-600 order-2">
            <p className="line-clamp-4 leading-5">{next.text}</p>
            <p className="mt-2 font-semibold text-gray-900">{next.name}</p>
            <p className="text-[11px] text-gray-500">{next.role}</p>
          </div>
          <Polaroid
            src={next.image}
            alt={next.name}
            size="sm"
            rotate="rotate-6"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10 gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 grid place-items-center shadow"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 grid place-items-center shadow"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
