import React from 'react';
import { MapPin } from 'lucide-react';

const ReusableCarousel = ({
  // Content props
  subHeading = '',
  mainHeading = '',
  description = '',
  items = [],
  
  // Layout props
  headingAlignment = 'start', // 'start', 'center', 'end'
  descriptionAlignment = 'start', // 'start', 'center', 'end'
  overallAlignment = 'start', // 'start', 'center', 'end'
  
  // Carousel props
  visibleItems = 3, // Number of items to show at once
  showNavigation = true,
  showPagination = true,
  showExploreButton = true,
  
  // Styling props
  cardWidth = 'w-96',
  cardHeight = 'h-72',
  containerClass = '',
  headingClass = '',
  descriptionClass = '',
  
  // Callback props
  onExploreClick = () => {},
  onItemClick = () => {}
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  
  // Create infinite loop by duplicating slides
  const infiniteItems = [...items, ...items, ...items];
  const startIndex = items.length; // Start from the middle set

  React.useEffect(() => {
    // Initialize at the middle set for seamless loop
    setCurrentIndex(startIndex);
    setIsTransitioning(false);
  }, [startIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= startIndex + items.length) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex);
    } else if (currentIndex < startIndex) {
      setIsTransitioning(false);
      setCurrentIndex(startIndex + items.length - 1);
    }
  };

  // Calculate alignment classes
  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case 'center':
        return 'text-center';
      case 'end':
        return 'text-right';
      default:
        return 'text-left';
    }
  };

  const getOverallAlignmentClass = (alignment) => {
    switch (alignment) {
      case 'center':
        return 'justify-center';
      case 'end':
        return 'justify-end';
      default:
        return 'justify-start';
    }
  };

  // Calculate container width based on visible items
  const getContainerWidth = () => {
    const itemWidth = 408; // w-96 + gap-6 = 384px + 24px
    return `${visibleItems * itemWidth}px`;
  };

  const getTranslateX = () => {
    const itemWidth = 408; // w-96 + gap-6 = 384px + 24px
    return `translateX(-${currentIndex * itemWidth}px)`;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-orange-50 to-white p-8 ${containerClass}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`flex ${getOverallAlignmentClass(overallAlignment)} items-start mb-12`}>
          <div className="flex-1 max-w-3xl">
            {subHeading && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-orange-500 text-xl italic font-light">
                  {subHeading}
                </span>
              </div>
            )}
            {mainHeading && (
              <h1 className={`text-6xl font-bold text-gray-900 mb-6 ${getAlignmentClass(headingAlignment)} ${headingClass}`}>
                {mainHeading}
              </h1>
            )}
            {description && (
              <p className={`text-gray-600 text-lg leading-relaxed ${getAlignmentClass(descriptionAlignment)} ${descriptionClass}`}>
                {description}
              </p>
            )}
          </div>
          {showExploreButton && (
            <div 
              className="flex items-center gap-2 px-8 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all cursor-pointer"
              onClick={onExploreClick}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Explore</span>
            </div>
          )}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="flex gap-6 items-center justify-center">
            {/* Previous Button */}
            {showNavigation && (
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
            )}

            {/* Slides Container */}
            <div className="overflow-hidden" style={{ width: getContainerWidth() }}>
              <div 
                className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: getTranslateX() }}
                onTransitionEnd={handleTransitionEnd}
              >
                {infiniteItems.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    className={`relative ${cardWidth} ${cardHeight} rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0`}
                    onClick={() => onItemClick(item, idx)}
                  >
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-3xl font-bold drop-shadow-lg">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            {showNavigation && (
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
            )}
          </div>

          {/* Pagination Dots */}
          {showPagination && (
            <div className="flex justify-center gap-2 mt-8">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(startIndex + idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    (currentIndex - startIndex) % items.length === idx
                      ? 'bg-gray-900 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReusableCarousel;
