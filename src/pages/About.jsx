import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Sections/Footer";
import aboutimage from '../../public/images/aboutusImg1.png'
import SeventhSection from "../components/Sections/SeventhSection";

const teamMembers = [
  {
    name: "Triveni S",
    title: "Vice President",
    image: aboutimage,
  },
  {
    name: "Shyam Krishna",
    title: "Assistant Vice President - International Sales",
    image: aboutimage,
  },
  {
    name: "Hariprasad P",
    title: "Assistant Vice President - Business Operations",
    image: aboutimage,
  },
  {
    name: "Jis Joy Thottan",
    title: "Assistant Vice President - Sales (Branches)",
    image: aboutimage ,
  },
];

const About = () => {
  return (
    <div className="min-h-screen  transition-all duration-1000 ease-in-out  bg-cover bg-center relative">
      <Navbar />
      <div className="w-full mt-30 text-gray-800">
        {/* --- MD Section --- */}
        <section className="max-w-5xl w-[40%] mx-auto py-16 flex flex-col md:flex-row items-center gap-8 px-6">
          <img
            src={aboutimage}
            alt="MD"
            className="rounded-lg shadow-lg w-60 h-60 object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I feel travel is not just a movement from one place to another;
              it's a transformative journey that opens new eyes to new
              experiences, cultures, and appreciation of the unseen world. As
              the Managing Director, it is both an honor and a privilege to
              provide the guidance that makes your vacation a dream come true.
              From within the spirit, explore the world with the glorious
              guidance and the experience of true experts.
            </p>
            <p className="text-sm font-semibold">M.K. Soman</p>
          </div>
        </section>

        {/* --- Director’s Messages --- */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            {[1, 2].map((_, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <img
                  src={aboutimage}
                  alt="Director"
                  className="rounded-lg shadow-md w-60 h-60 object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Director&apos;s Message
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    At Soman’s, we are passionate about travel and dedicated to
                    providing exceptional service for our clients. With a wealth
                    of experience in the tourism industry, we strive to exceed
                    your expectations and create memories that last a lifetime.
                    Whether you’re seeking adventure, relaxation, or cultural
                    immersion, we have the perfect itinerary for you.
                  </p>
                  <p className="text-sm font-semibold mt-3">
                    {idx === 0 ? "M.K. Soman" : "Dr. P. Ravindranath"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Vision & Mission --- */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-6">
            <div className="w-64 h-64 flex flex-col items-center justify-center rounded-full border border-gray-300 text-center p-6">
              <h4 className="font-semibold text-lg mb-2">Our Vision</h4>
              <p className="text-gray-600 text-sm">
                To be the most trusted, innovative and sustainable tour
                management company in India within the next decade.
              </p>
            </div>
            <div className="w-64 h-64 flex flex-col items-center justify-center rounded-full border border-gray-300 text-center p-6">
              <h4 className="font-semibold text-lg mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm">
                Helping travel enthusiasts with smart customer solutions and the
                best customer care.
              </p>
            </div>
          </div>
        </section>

        {/* --- Team Section --- */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-2">
              People Are At The Heart Of What We Do.
            </h2>
            <p className="mb-10 text-gray-600">
              Meet The Team Who Make Soman’s Great.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-lg w-40 h-40 object-cover mb-4"
                  />
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500 text-center">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600"></button>
              <button className="w-3 h-3 rounded-full bg-gray-200 hover:bg-gray-400"></button>
            </div>
          </div>
        </section>
      </div>
      <SeventhSection  />

      <Footer />
    </div>
  );
};

export default About;
