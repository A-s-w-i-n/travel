import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
  {
    title: "Amritsar - Kullu - Manali",
    description:
      "Experience spirituality, serenity, and snow-capped mountains with the Amritsar, Kullu, and Manali 7-day trip.",
    duration: "7 Days",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Gangtok Darjeeling",
    description:
      "Nestled in the Himalayas, enjoy breathtaking views, vibrant cultures, and scenic beauty.",
    duration: "7 Days",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Hyderabad Highlights",
    description:
      "Discover the charm of Hyderabad in a 4-day guided tour covering iconic sites like Charminar.",
    duration: "4 Days",
    img: "https://images.unsplash.com/photo-1613323593604-84e1c117d38b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Singapore Cruise",
    description:
      "Join us for a 5-day journey on a luxury cruise across Singapore’s scenic routes.",
    duration: "5 Days",
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function SideCarosal() {
  const CARD_WIDTH = 320; // px
  const GAP = 24; // Tailwind gap-6

  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [isTransitioning, setIsTransitioning] = React.useState(true);

  // Duplicate first and last for seamless looping
  const extendedPackages = React.useMemo(() => {
    const first = packages[0];
    const last = packages[packages.length - 1];
    return [last, ...packages, first];
  }, []);

  // Preload images to avoid delay when slides come into view
  React.useEffect(() => {
    const preloadedImages = packages.map((pkg) => {
      const img = new Image();
      img.src = pkg.img;
      return img;
    });
    return () => {
      preloadedImages.forEach((img) => {
        // Help GC in some browsers
        img.src = "";
      });
    };
  }, []);

  const next = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // If we moved past the last real slide, jump back to first real
    if (currentIndex === packages.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      return;
    }
    // If we moved before the first real slide, jump to last real
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(packages.length);
    }
  };

  React.useEffect(() => {
    if (!isTransitioning) {
      // Re-enable transition on the next tick after the snap without animation
      const id = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  return (
    <section className="  relative  py-16 px-6 pl-60 lg:pr-5">
      <div className=" mx-auto   gap-20 flex flex-col lg:flex-row items-start ">
        {/* Left Section */}
        <div className="lg:w-[30] space-y-4 relative">
          <p className="text-[#ff5722] text-xl font-semibold font-segoe-script italic">Upcoming</p>
          <h2 className="text-4xl font-bold  text-gray-900 leading-tight">
            Upcoming <br /> Packages
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            To have a journey like never before we came up with an attractive
            travel package, crafted with complete support. From luxurious
            accommodations to a list of activities, every detail is designed to
            meet your travel expectations.
          </p>
          <div className="absolute -z-10 w-[500px] h-[400px] border-dashed border-gray-300 rounded-full top-10 left-0"></div>
        </div>

        {/* Right Section - Infinite Carousel Cards */}
        <div className="lg:w-[70%] relative">
          <button
            onClick={prev}
            className="absolute left-0 z-10 cursor-pointer top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden px-10">
            <div
              className={`flex items-stretch gap-6 ${
                isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
              }`}
              style={{
                transform: `translate3d(-${currentIndex * (CARD_WIDTH + GAP)}px, 0, 0)`,
                willChange: "transform",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPackages.map((pkg, index) => (
                <div
                  key={`${pkg.title}-${index}`}
                  className="min-w-[220px] relative rounded-2xl  overflow-hidden shadow-lg group"
                >
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    loading="eager"
                    decoding="sync"
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-lg font-semibold">{pkg.title}</h3>
                    <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                      {pkg.description}
                    </p>
                    <p className="mt-3 font-bold">{pkg.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 top-1/2 cursor-pointer -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
