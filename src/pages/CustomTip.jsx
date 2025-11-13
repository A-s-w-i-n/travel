import React from "react";
import Navbar from "../components/Navbar";
import SeventhSection from "../components/Sections/SeventhSection";
import Footer from "../components/Sections/Footer";

const CustomTip = () => {
  return (
    <div className="min-h-screen  transition-all duration-1000 ease-in-out  bg-cover bg-center relative">
      <Navbar />
      <div className="w-full bg-white mt-30 text-gray-800 py-16 px-6 md:px-20">
        <section className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative flex items-center">
                <div className="w-44 h-44 border-2 p-3 border-dashed border-gray-400 rounded-full flex flex-col items-center justify-center">
                  <h3 className="font-semibold">Tell Us Your Requirements</h3>
                  <p className="text-sm mt-2 text-gray-500">
                    What does your ideal trip look like?
                  </p>
                </div>
              </div>
            </div>

            {/* Divider Dot */}
            <div className="hidden md:block w-3 h-3 bg-gray-400 rounded-full"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative flex items-center">
                <div className="w-48 h-48 border-2 p-3 border-dashed border-gray-400 rounded-full flex flex-col items-center justify-center">
                  <h3 className="font-semibold">Securely Book Your Trip.</h3>
                  <p className="text-sm mt-2 text-gray-500">
                    Book when you are satisfied with your planned trip.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider Dot */}
            <div className="hidden md:block w-3 h-3 bg-gray-400 rounded-full"></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative flex items-center">
                <div className="w-48 h-48 border-2 p-3 border-dashed border-gray-400 rounded-full flex flex-col items-center justify-center">
                  <h3 className="font-semibold">
                    Connect With A Travel Expert
                  </h3>
                  <p className="text-sm mt-2 text-gray-500">
                    Next, we’ll match you with a local trip planner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------- About Section ---------- */}
        <section className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Soman's Customized Tour Packages From Kochi
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Somans specialize in making unforgettable travel experiences just
            for you. Our team of expert travel designers works with all the
            experience to transform your dream vacation into reality, creating
            customized trips that reflect your unique preferences and interests.
            Whether you seek culture, off-the-beaten-path explorations, or
            luxury escapes, we've got you covered. From the moment you share
            your dream vision with us, our dedicated planners prepare every
            detail to perfection. Imagine exploring vibrant markets, tasting
            local cuisines, and staying in handpicked accommodations that match
            your style. Go on a journey where your desires shape the journey.
            Let Somans redefine your travel experience, offering not just
            destinations but personalized stories. Your adventure begins here –
            where your dreams inspire our destinations. Travel with your
            customization.
          </p>
        </section>

        {/* --------- Why Book Section ---------- */}
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">
            Why Book A Customized Tour
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left md:text-center">
            {/* Card 1 */}
            <div>
              <h3 className="font-semibold mb-2">Local Insight</h3>
              <p className="text-gray-600 text-sm">
                Exploring the beauty of your neighborhood differently will open
                your mind. Customized tours will help you go to the same
                location differently offering different experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <h3 className="font-semibold mb-2">Personalized Experience</h3>
              <p className="text-gray-600 text-sm">
                Your preference will contribute more here. With customized tours
                make this vacation more about you than us.
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <h3 className="font-semibold mb-2">Travel As A Professional</h3>
              <p className="text-gray-600 text-sm">
                With no experience, things possibly go wrong. Make this trip of
                yours professionally right with concise guidance.
              </p>
            </div>
          </div>
        </section>
      </div>

      <SeventhSection />

      <Footer />
    </div>
  );
};

export default CustomTip;
