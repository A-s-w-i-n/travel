import React from "react";

const ForthSection = ({ imagesData }) => {
  return (
    <section className="flex flex-col py-16 px-4 max-w-7xl mx-auto text-center gap-10 text-gray-800">
      <div className="flex justify-center text-center" data-aos="fade-up">
        <div className="mb-12">
          <p className="text-red-500 font-segoe-script font-semibold">Continents</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our Best International Tour Packages For You.
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl ">
            Explore The Globe With Our Exclusive Packages, Offering Unique
            Experiences Across All Seven Continents. From Polar Expeditions to
            Tropical Adventures, Tailored For Every Kind Of Traveler.
          </p>
        </div>
      </div>

      <div
        className="grid   grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center "
        data-aos="fade-up"
      >
        {[
          { name: "Australia", src: "/images/australia.jpg" },
          { name: "Asia", src: "/images/asia.jpg" },
          { name: "North America", src: "/images/north-america.jpg" },
          { name: "South America", src: "/images/south-america.jpg" },
          { name: "Africa", src: "/images/africa.jpg" },
          { name: "Europe", src: "/images/europe.jpg" },
        ].map((continent) => (
          <div key={continent.name} className="w-full text-center">
            <img
              src={continent.src}
              alt={continent.name}
              className="w-full h-60 object-cover rounded-md shadow"
            />
            <p className="mt-2 font-medium">{continent.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full ">
        <button class="flex relative  text-center border cursor-pointer justify-center items-center px-6 py-3 text-white  rounded-full transition-colors duration-300 bg-red-600">
          Enquire
        </button>
      </div>

      {/* Secondary Section */}
      <div className="flex flex-col  md:items-start mt-20   gap-16">
        <div className="flex flex-col md:flex-row text-start  justify-between items-center w-full gap-10">
          <div className="md:w-1/2" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
              Voyage Through The World's Heart: Every Continent, Every Culture
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Experience a journey of diversity, exploring every continent's
              unique culture, landscapes, and traditions in our thoughtfully
              curated global travel packages.
            </p>
          </div>

          {/* Image block */}
          <div className="md:w-1/2    flex justify-end" data-aos="fade-down">
            <img
              src="/images/city.jpg"
              alt="City"
              className="rounded-lg  w-[80%] h-60 shadow-lg  max-w-md object-cover"
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col  md:flex-row text-start justify-between items-center w-full gap-10">
          {/* Image block */}
          <div className="md:w-1/2 flex justify-start" data-aos="fade-down">
            <img
              src="/images/temple.jpg"
              alt="Temple"
              className="rounded-lg  w-[80%] h-60 shadow-lg  max-w-md object-cover"
            />
          </div>

          {/* Text block */}
          <div
            className="md:w-1/2  text-gray-600 leading-relaxed"
            data-aos="fade-up"
          >
            <p>
              Delve into the world's wonders with our international tour
              packages. Experience diverse cultures, captivating landscapes, and
              unique adventures. With Somans Leisure Tours, every trip is more
              than just travel; it's a journey filled with enriching experiences
              and memorable moments. We strive to make each destination a
              treasure trove of discoveries, ensuring your travel is not just a
              getaway but a journey into the heart of the world's most beautiful
              places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForthSection;
