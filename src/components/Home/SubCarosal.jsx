import React from "react";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "North America",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
    alt: "Statue of Liberty with New York skyline",
  },
  {
    id: 2,
    title: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    alt: "Sydney Opera House at sunset",
  },
  {
    id: 3,
    title: "Asia",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
    alt: "Traditional Asian architecture",
  },
  {
    id: 4,
    title: "Europe",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
    alt: "European landmarks",
  },
];

const SubCarosal = ({
  title,
  disc,
  classname,
  parentClass,
  button = true,
  childClass,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);

  // Create infinite loop by duplicating slides
  const infiniteDestinations = [
    ...destinations,
    ...destinations,
    ...destinations,
  ];
  const startIndex = destinations.length; // Start from the middle set

  React.useEffect(() => {
    // Initialize at the middle set for seamless loop
    setCurrentIndex(startIndex);
    setIsTransitioning(false);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= startIndex + destinations.length) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex);
    } else if (currentIndex < startIndex) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex + destinations.length - 1);
    }
  };

  return (
    <div className="flex min-h-screen  mt-10 px-60   ">
      <div className={` ${parentClass} max-w-[100%] mx-auto`}>
        {/* Header Section */}
        <div className="flex   justify-between items-start mb-12">
          <div className={`flex flex-col  ${childClass} `}>
            <div className="flex items-center gap-2 mb-4 ">
              <span className="text-orange-500 font-segoe-script text-xl italic font-light">
                International
              </span>
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Explore The World
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Go on a journey of exploring the world with us. Unlock the secrets
              of diverse cultures, landscapes, and hidden treasures. Explore the
              world through our lens.
            </p>
          </div>
          {button && (
            <div className="flex items-center gap-2 px-8 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all cursor-pointer">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Explore</span>
            </div>
          )}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="flex gap-6 items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full cursor-pointer bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-10"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden w-[1260px]">
              <div
                className={`flex gap-6 ${
                  isTransitioning
                    ? "transition-transform duration-500 ease-in-out"
                    : ""
                }`}
                style={{ transform: `translateX(-${currentIndex * 408}px)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {infiniteDestinations.map((destination, idx) => (
                  <div
                    key={`${destination.id}-${idx}`}
                    className={`relative ${classname}  h-72 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0`}
                  >
                    <img
                      src={destination.image}
                      alt={destination.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-3xl font-bold drop-shadow-lg">
                        {destination.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full cursor-pointer bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-10"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {destinations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(startIndex + idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  (currentIndex - startIndex) % destinations.length === idx
                    ? "bg-gray-900 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCarosal;
