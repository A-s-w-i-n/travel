const Carosal = ({ title, disc, image, selectedIndex = 0, onSelect }) => {
  return (
    <div
      className="relative min-h-[83vh] bg-center transition-all duration-700"
      //   style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* keep absolute so it overlays the background image, but constrain children widths */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center md:items-center text-center md:text-left text-white  gap-8 md:gap-6">
        {/* Left text area: limit width on md+ so it doesn't grow under thumbnails */}
        <div className="flex flex-col justify-start items-center md:items-start md:w-2/3 lg:w-3/5 z-10">
          <h1 className="text-6xl font-semibold mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="max-w-2xl text-start text-md mb-8 leading-relaxed line-clamp-3">
            {disc}
          </p>
          <div className="flex space-x-6">
            <button className="border border-white rounded-full px-8 py-2 hover:bg-white hover:text-[#002b43] transition-all">
              Enquire Now
            </button>
            <button className="border border-white rounded-full px-8 py-2 hover:bg-white hover:text-[#002b43] transition-all">
              View Tour Packages
            </button>
          </div>
        </div>

        {/* Carousel Thumbnails */}
        {/* Give thumbnails a fixed column width on md+ to avoid overlapping the text */}
        <div className="flex justify-center md:justify-start gap-4 md:gap-4 mt-6 md:mt-10 w-full md:w-1/3 lg:w-1/2">
          {image.map((img, index) => (
            <div
              data-aos="fade-down-left"
              className={`w-32 h-32 md:w-48 md:h-48 rounded-lg ${
                index == 0 ? "md:-rotate-12 md:mt-12" : ""
              }`}
            >
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => onSelect && onSelect(index)}
                className={`w-28 h-28 md:w-48 md:h-48 ${
                  index == 0 ? "md:-rotate-6 md:mt-4" : ""
                } object-cover rounded-lg cursor-pointer transition-all ${
                  selectedIndex === index
                    ? "ring-2 ring-white md:scale-105"
                    : "md:hover:scale-110"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carosal;
