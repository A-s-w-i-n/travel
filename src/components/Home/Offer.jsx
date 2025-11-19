import React from "react";
import gif1 from "../../../public/gifs/firstoffer.gif";
import gif2 from "../../../public/gifs/secondoffer.gif";
import gif3 from "../../../public/gifs/thirdoffer.gif";
import gif4 from "../../../public/gifs/fourthoffer.gif";
import cloudBackgroud from "../../../public/images/cloudsFinal.webp";

const Offer = () => {
  const offers = [
    {
      icon: gif1,
      title: "Superfast",
      subtitle: "Booking",
      bgColor: "bg-orange-400",
    },
    {
      icon: gif2,
      title: "Experience",
      subtitle: "Somans Care",
      bgColor: "bg-blue-400",
    },
    {
      icon: gif3,
      title: "500+",
      subtitle: "Destinations",
      bgColor: "bg-purple-400",
    },
    {
      icon: gif4,
      title: "Best Price",
      subtitle: "Guaranteed",
      bgColor: "bg-purple-300",
    },
  ];

  return (
    <section
      className="relative px-4 py-12 md:py-16 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${cloudBackgroud})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
        What We Offer
      </h2>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-items-center">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="w-full max-w-xs flex flex-col items-center text-center px-4"
              aria-label={`${offer.title} - ${offer.subtitle}`}
            >
              <div className="relative mb-4">
                <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div
                    className={`w-14 h-14 md:w-20 md:h-20 rounded-lg flex items-center justify-center transform rotate-12 ${offer.bgColor}`}
                  >
                    {/* gif import resolves to a path; use as src */}
                    <img
                      src={offer.icon}
                      alt={offer.title}
                      className="w-full h-full object-contain"
                      aria-hidden={false}
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                {offer.title}
              </h3>
              <p className="text-md md:text-lg font-semibold text-gray-800">
                {offer.subtitle}
              </p>

              {/* small separator (visible on md+) */}
              {index < offers.length - 1 && (
                <div className="hidden md:flex items-center mt-6">
                  <div className="w-2 h-2 bg-gray-400 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
