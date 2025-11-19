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
  // Visible cards per breakpoint: mobile=1, md=2, lg=4
  const [visibleCount, setVisibleCount] = React.useState(1);
  const [currentIndex, setCurrentIndex] = React.useState(1); // start at first real
  const [isTransitioning, setIsTransitioning] = React.useState(true);

  // Duplicate for simple seamless loop when showing 1 card. For multi-card views this is a best-effort loop.
  const extendedPackages = React.useMemo(() => {
    const first = packages[0];
    const last = packages[packages.length - 1];
    return [last, ...packages, first];
  }, []);

  // Update visibleCount on resize
  React.useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(1); // sm
      else if (w < 1024) setVisibleCount(2); // md
      else setVisibleCount(4); // lg+
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Preload images
  React.useEffect(() => {
    const imgs = packages.map((p) => {
      const img = new Image();
      img.src = p.img;
      return img;
    });
    return () => imgs.forEach((i) => (i.src = ""));
  }, []);

  const next = () => {
    setIsTransitioning(true);
    setCurrentIndex((c) => c + 1);
  };
  const prev = () => {
    setIsTransitioning(true);
    setCurrentIndex((c) => c - 1);
  };

  const handleTransitionEnd = () => {
    // When using duplicated first/last (single-card seamless), snap without transition
    if (currentIndex === packages.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      return;
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(packages.length);
      return;
    }
  };

  // Re-enable transition after a non-animated snap
  React.useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  // Compute card width percent based on visibleCount
  const cardPercent = 100 / visibleCount; // e.g. 100, 50, 33.333

  // The translate amount needs to consider the duplicated first slide at index 0.
  // We'll move by (currentIndex * cardPercent) percent.
  const translate = `-${currentIndex * cardPercent}%`;

  return (
    <section className="relative py-16 px-4 lg:px-6">
      <div className=" lg:ml-10 mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left */}
        <div className="lg:w-1/3 space-y-4 relative">
          <p className="text-[#ff5722] text-xl font-semibold italic">Upcoming</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Upcoming<br/>Packages</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            To have a journey like never before we came up with an attractive travel package, crafted with complete support.
          </p>
          <div className="absolute -z-10 w-64 h-64 border-dashed border-gray-300 rounded-full top-10 left-0 hidden md:block"></div>
        </div>

        {/* Carousel */}
        <div className="lg:w-[55%] relative w-full lg:ml-auto">
          <button onClick={prev} className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex items-stretch gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{
                width: `${(extendedPackages.length * cardPercent)}%`, // total width
                transform: `translate3d(${translate}, 0, 0)`,
                willChange: "transform",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPackages.map((pkg, i) => (
                <div
                  key={`${pkg.title}-${i}`}
                  className={`rounded-2xl overflow-hidden shadow-lg group flex-shrink-0`} 
                  style={{ width: `${cardPercent}%` }}
                >
                  <img src={pkg.img} alt={pkg.title} loading="eager" decoding="sync" className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="text-lg font-semibold">{pkg.title}</h3>
                    <p className="text-sm text-gray-200 mt-1 line-clamp-2">{pkg.description}</p>
                    <p className="mt-3 font-bold">{pkg.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 hover:bg-gray-100">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* small note: looping is seamless for single-card view using duplicated slides. For multi-card views (<md/lg) this provides a responsive layout but the infinite loop behaviour is an approximation. */}
    </section>
  );
}
