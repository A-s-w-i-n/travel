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

  // Create infinite loop by duplicating slides (three sets) and start in middle
  const infiniteDestinations = [...destinations, ...destinations, ...destinations];
  const startIndex = destinations.length; // start in middle

  // Refs for measuring container
  const trackRef = React.useRef(null);
  const containerRef = React.useRef(null);

  // visible count based on breakpoints but DO NOT change lg layout/classes
  const [visibleCount, setVisibleCount] = React.useState(3); // default match lg look
  const [slideWidth, setSlideWidth] = React.useState(408); // keep original lg px width

  // initialize to middle set
  React.useEffect(() => {
    setCurrentIndex(startIndex);
    setIsTransitioning(false);
  }, []);

  // handle resize: change visibleCount and compute slideWidth accordingly
  React.useEffect(() => {
    function update() {
      const w = window.innerWidth;
      // keep existing lg style: when >=1024px, we preserve fixed container and card width 408px
      if (w >= 1024) {
        setVisibleCount(Math.floor(1260 / 408)); // keeps behaviour similar to original lg layout
        setSlideWidth(408);
      } else if (w >= 768) {
        // md: show 2 slides
        setVisibleCount(2);
        // compute width from container if available, else fallback
        const cw = containerRef.current?.clientWidth ?? w - 64;
        setSlideWidth(Math.floor((cw - 6 /* gap */) / 2));
      } else {
        // mobile: 1 slide
        setVisibleCount(1);
        const cw = containerRef.current?.clientWidth ?? w - 32;
        setSlideWidth(cw);
      }
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Preload images
  React.useEffect(() => {
    const imgs = destinations.map((d) => {
      const i = new Image();
      i.src = d.image;
      return i;
    });
    return () => imgs.forEach((i) => (i.src = ""));
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((p) => p + 1);
  };
  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((p) => p - 1);
  };

  const handleTransitionEnd = () => {
    // snap when leaving real set
    if (currentIndex >= startIndex + destinations.length) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex);
    } else if (currentIndex < startIndex) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex + destinations.length - 1);
    }
  };

  // re-enable transition after instant snap
  React.useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  // compute translate in px (keeps lg exact behaviour using 408px)
  const translateX = -currentIndex * (slideWidth + 24); // 24px gap matches gap-6

  return (
    <div className="flex min-h-screen mt-10 px-4 md:px-8 lg:px-30" ref={containerRef}>
      <div className={` ${parentClass ?? ""} max-w-full mx-auto w-full`}>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
          <div className={`flex flex-col ${childClass ?? ""}`}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 font-segoe-script text-xl italic font-light">
                International
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Explore The World</h1>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Go on a journey of exploring the world with us. Unlock the secrets of diverse cultures, landscapes, and hidden treasures. Explore the world through our lens.
            </p>
          </div>

          {button && (
            <div className="flex items-center gap-2 px-6 py-2 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all cursor-pointer">
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
              className="w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-10"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden" style={{ width: window.innerWidth >= 1024 ? 1260 : "100%" }}>
              <div
                ref={trackRef}
                className={`flex items-stretch ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                style={{ transform: `translateX(${translateX}px)`, gap: 24 }}
                onTransitionEnd={handleTransitionEnd}
              >
                {infiniteDestinations.map((destination, idx) => (
                  <div
                    key={`${destination.id}-${idx}`}
                    className={`relative ${classname ?? ""} h-56 md:h-72 lg:h-72 rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0`}
                    style={{ width: window.innerWidth >= 1024 ? 408 : slideWidth }}
                  >
                    <img
                      src={destination.image}
                      alt={destination.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
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
              className="w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all z-10"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
