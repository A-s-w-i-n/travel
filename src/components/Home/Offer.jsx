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
    <div
      className="flex flex-col items-center justify-center px-4 py-16 relative"
      style={{ 
        backgroundImage: `url(${cloudBackgroud})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h2 className="text-5xl font-bold text-gray-900 mb-16">What We Offer</h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {offers.map((offer, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-40 h-40 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div
                    className={`w-20 h-20 rounded-lg flex items-center justify-center transform rotate-12`}
                  >
                    <img
                      src={offer.icon}
                      alt={offer.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center">
                {offer.title}
              </h3>
              <p className="text-xl font-bold text-gray-800 text-center">
                {offer.subtitle}
              </p>
            </div>

            {index < offers.length - 1 && (
              <div className="flex   items-center py-6 mb-9 ">
                <div className="w-2 h-2 mb-6 bg-gray-400 rounded-full"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Offer;
