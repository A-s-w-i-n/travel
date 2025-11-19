import React from "react";
import { ArrowRight } from "lucide-react";

const Domestic = () => {
  const destinations = [
    {
      id: 1,
      title: "Amritsar - Kullu - Manali",
      description:
        "Amritsar beckons with its rich cultural tapestry, home to the resplendent Golden Temple, a beacon of peace and spirituality. Kullu and Manali offer a...",
      image:
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "BHUTAN",
      description:
        "Embark on an 8-day spiritual and scenic journey through the Kingdom of Bhutan. From majestic monasteries and peaceful valleys to vibrant market...",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "CHARDHAM YATRA",
      description:
        "Join us for a spiritually enriching 13-day Chardham Yatra covering the sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath. This guided...",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Gems Of Rajasthan",
      description:
        "Rajasthan, India's largest state, is a tapestry of vibrant colors, rich heritage, and timeless traditions. From the opulent palaces of Jaipur to the desert...",
      image:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-orange-500 font-segoe-script text-xl md:text-2xl mb-2">
              Domestic
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore India
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              Enjoy the local wonders as we guide you through the cultural richness of our domestic destinations.
            </p>
          </div>

          {/* Explore button: visible on sm+ as before, but on xs we provide a sticky mini CTA below */}
          <div className="flex-shrink-0 self-center md:self-start">
            <button className="hidden sm:inline-flex px-6 py-3 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105">
              Explore
            </button>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="relative">
          {/* Decorative dashed corners (only show on md+) */}
          {/* <div className="hidden md:block absolute top-0 left-0 w-48 h-48 border-l-2 border-t-2 border-dashed border-gray-300 rounded-tl-full -ml-24 -mt-12 pointer-events-none" /> */}
          {/* <div className="hidden md:block absolute bottom-0 right-0 w-48 h-48 border-r-2 border-b-2 border-dashed border-gray-300 rounded-br-full -mr-24 -mb-12 pointer-events-none" /> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <article
                key={destination.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row gap-4 p-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="w-full sm:w-48 h-56 sm:h-40 rounded-xl overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                        {destination.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                        {destination.description}
                      </p>
                    </div>

                    {/* Enquire Button */}
                    <div className="mt-4 self-start">
                      <button className="inline-flex items-center gap-2 px-5 py-2 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 group-hover:gap-3">
                        Enquire
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile sticky CTA */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:hidden">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg font-medium">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Domestic;
