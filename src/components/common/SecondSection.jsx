import React from 'react'

const SecondSection = () => {
  return (
    <div className="flex flex-col max-w-7xl  mx-auto gap-5 px-6 py-16" >
      {/* First Row - International Tours */}
      <div className="grid md:grid-cols-2  py-10 gap-12 items-center ">
        {/* Left - Image Collage */}
        <div className="relative ">
          <div className="relative w-full aspect-[4/3]" data-aos="fade-up">
            {/* Beach/Palm Image */}
            <div className="absolute torn-image top-0 left-0 w-[60%] h-full overflow-hidden  shadow-2xl transform -rotate-3" >
              <img 
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80" 
                alt="Beach sunset with palms" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Mountain/Person Image */}
            <div className="absolute torn-image bottom-0 right-0 w-[50%] h-[75%] overflow-hidden shadow-2xl transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" 
                alt="Mountain landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            International Tours<br />Crafted For You
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Venture Into New Horizons With Our International Tour Packages. Offering A Blend Of Adventure, Culture, And Relaxation, Our Tours Are Designed To Provide An Enriching Experience. From Bustling Cities To Serene Landscapes, We Curate Journeys That Cater To Diverse Tastes And Interests, Ensuring A Memorable Trip For Every Traveler.
          </p>
        </div>
      </div>

      {/* Second Row - Iconic Destinations */}
      <div className="grid md:grid-cols-2 gap-12 items-center" data-aos="fade-down">
        {/* Left - Text Content */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl  font-bold text-gray-900 mb-6 leading-tight">
            Iconic Destinations<br />Globally
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Journey Through All Seven Continents With Our Comprehensive International Tour Packages. Marvel At Antarctica's Frozen Beauty, Delve Into Africa's Rich Cultures, Discover Asia's Ancient Sites, Enjoy Europe's Artistic Heritage, Explore North America's Natural Wonders, Uncover South America's Mysteries, And Experience Australia's Unique Wildlife. This All-Encompassing Package Offers Diverse Landscapes, Cultural Riches, And Unforgettable Experiences, Bringing You The Best Of Each Continent In One Grand Adventure.
          </p>
        </div>

        {/* Right - Image Collage */}
        <div className="relative order-1 md:order-2">
          <div className="relative w-full aspect-[4/3]" data-aos="fade-up">
           
            <div className="absolute top-0 left-0 torn-image w-[50%] h-[85%] overflow-hidden shadow-2xl transform -rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" 
                alt="Mountain hiking" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Tropical Karst Image */}
            <div className="absolute bottom-0 torn-image right-0 w-[50%] h-[75%] overflow-hidden shadow-2xl transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=80" 
                alt="Tropical karst landscape" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection