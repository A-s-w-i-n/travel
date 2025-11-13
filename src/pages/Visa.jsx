import React, { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Sections/Footer";

const countries = [
  "Australia",
  "China",
  "Indonesia",
  "Malaysia",
  "UAE",
  "France",
  "Italy",
];

const Visa = () => {
  const [selectedCountry, setSelectedCountry] = useState("Australia");

  return (
    <div className="min-h-screen  transition-all duration-1000 ease-in-out  bg-cover bg-center relative">
      <Navbar />
      <div className="min-h-screen mt-30 bg-white text-gray-800 6 md:px-[20%] py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Visa Requirements
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600">
            You can easily have International and Domestic vacations with the
            right set of documents. Before going on vacation, take a look at the
            crucial set of documents. Prepare yourself right for your dream
            vacation.
          </p>
        </div>

        {/* Country Tabs + Search */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-md cursor-pointer  text-sm font-medium border ${
                selectedCountry === country
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {country}
            </button>
          ))}
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="Search Country"
              className="border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
            />
            <Search
              size={16}
              className="absolute right-2 top-2.5 text-gray-400"
            />
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          <div className="bg-red-50 p-6 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Overview</h3>
            <p className="text-sm text-gray-700">
              Visa name: <span className="text-red-500">Electronics Visa</span>
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Processing Time</h3>
            <p className="text-sm text-gray-700">
              Processing time after submission:{" "}
              <span className="text-red-500">3 - 7 working days</span>
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Visa Validity</h3>
            <p className="text-sm text-gray-700">
              80 days validity, 30 days stay
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-md">
            <h3 className="font-semibold text-lg mb-2">
              Interview / Biometrics
            </h3>
            <p className="text-sm text-gray-700">
              The visa does not require any interview or biometrics
            </p>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Requirements</h2>

          <h3 className="text-lg text-red-500 font-medium mb-4">
            Documents Required To Be Submitted By The Passenger
          </h3>

          <h4 className="text-md font-semibold mb-3">
            Original Current & Old Passports
          </h4>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>
              Handwritten, Damaged And Passports With Over Than 10 Years Are
              Unacceptable
            </li>
            <li>
              All Passports Should Be Clear And Legible (No Wet, Stain Or
              Smudge, Etc…)
            </li>
            <li>
              Recent Passport Should Have At Least Three Full Blank Pages.
            </li>
            <li>
              Copy Of Marriage Certificate Should Be Submitted If The Spouse
              Name Is Not Endorsed And The Spouse Is Traveling Along With The
              Passenger.
            </li>
            <li>
              Previous Old Passport Is Mandatory Even If There Are No Travel
              Histories.
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Visa;
