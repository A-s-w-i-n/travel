import React from 'react';
import ReusableCarousel from './ReusableCarousel';

// Example data for different carousel configurations
const cityDestinations = [
  {
    id: 1,
    title: 'Melbourne',
    image: 'https://images.unsplash.com/photo-1516873190279-0b5a4a2a8c0c?w=800&q=80',
    alt: 'Melbourne cityscape'
  },
  {
    id: 2,
    title: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    alt: 'Tokyo night cityscape'
  },
  {
    id: 3,
    title: 'London',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ae1c2?w=800&q=80',
    alt: 'London cityscape'
  },
  {
    id: 4,
    title: 'Washington',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80',
    alt: 'Washington DC monuments'
  },
  {
    id: 5,
    title: 'Montreal',
    image: 'https://images.unsplash.com/photo-1506905925346-14b1e0d35b36?w=800&q=80',
    alt: 'Montreal cityscape'
  }
];

const travelPackages = [
  {
    id: 1,
    title: 'Gems Of Rajasthan',
    description: 'Rajasthan, India\'s Land of Kings, boasts majestic palaces, vibrant festivals, and desert landscapes.',
    duration: '8 Days',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    alt: 'Rajasthan palace'
  },
  {
    id: 2,
    title: 'Gangtok Darjeeling',
    description: 'Gangtok and Darjeeling, nestled in the Himalayas, offer breathtaking views, vibrant culture.',
    duration: '7 Days',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    alt: 'Himalayan mountains'
  },
  {
    id: 3,
    title: 'LAKSHADWEEP GATEWAY',
    description: '4-day Lakshadweep tour covering Agatti, Bangaram, Thinnakara, and Kalpitti with water activities.',
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1506905925346-14b1e0d35b36?w=800&q=80',
    alt: 'Lakshadweep islands'
  },
  {
    id: 4,
    title: 'HYDERABAD HIGHLIGHTS',
    description: 'Discover the charm guided tour from Cochin to explore the rich heritage and culture.',
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    alt: 'Hyderabad heritage'
  }
];

const CarouselExamples = () => {
  const handleExploreClick = () => {
    console.log('Explore clicked');
  };

  const handleItemClick = (item, index) => {
    console.log('Item clicked:', item, index);
  };

  return (
    <div className="space-y-20">
      {/* Example 1: 5 visible items, center aligned (like first image) */}
      <ReusableCarousel
        subHeading=""
        mainHeading=""
        description=""
        items={cityDestinations}
        headingAlignment="center"
        descriptionAlignment="center"
        overallAlignment="center"
        visibleItems={5}
        showNavigation={true}
        showPagination={false}
        showExploreButton={false}
        cardWidth="w-80"
        cardHeight="h-64"
        onItemClick={handleItemClick}
      />

      {/* Example 2: 3 visible items, left aligned with heading and description */}
      <ReusableCarousel
        subHeading="Upcoming"
        mainHeading="Upcoming Packages"
        description="To have a journey like never before we came up with an attractive travel package, crafted with complete support. From luxurious accommodations to a list of activities, every detail is designed to meet your travel expectations."
        items={travelPackages}
        headingAlignment="start"
        descriptionAlignment="start"
        overallAlignment="end"
        visibleItems={3}
        showNavigation={true}
        showPagination={true}
        showExploreButton={true}
        onExploreClick={handleExploreClick}
        onItemClick={handleItemClick}
      />

      {/* Example 3: 4 visible items, center aligned */}
      <ReusableCarousel
        subHeading="Featured"
        mainHeading="Featured Destinations"
        description="Discover amazing places around the world with our curated selection of destinations."
        items={cityDestinations}
        headingAlignment="center"
        descriptionAlignment="center"
        overallAlignment="center"
        visibleItems={4}
        showNavigation={true}
        showPagination={true}
        showExploreButton={true}
        onExploreClick={handleExploreClick}
        onItemClick={handleItemClick}
      />
    </div>
  );
};

export default CarouselExamples;
