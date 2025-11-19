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
    <div className="min-h-screen transition-all duration-1000 ease-in-out bg-cover bg-center relative">
      <Navbar />

      <main className="bg-white text-gray-800 py-10 px-4 sm:px-6 md:px-12 lg:px-[20%]">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Travel Visa Requirements
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base">
            You can easily have International and Domestic vacations with the
            right set of documents. Before going on vacation, take a look at
            the crucial set of documents. Prepare yourself right for your
            dream vacation.
          </p>
        </header>

        {/* Country Tabs + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-4 py-2 rounded-md cursor-pointer text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-red-300 transition ${
                  selectedCountry === country
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search Country"
                className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-9 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
                aria-label="Search country"
              />
              <Search size={16} className="absolute right-2 top-2.5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
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
            <p className="text-sm text-gray-700">80 days validity, 30 days stay</p>
          </div>

          <div className="bg-red-50 p-6 rounded-md">
            <h3 className="font-semibold text-lg mb-2">Interview / Biometrics</h3>
            <p className="text-sm text-gray-700">
              The visa does not require any interview or biometrics
            </p>
          </div>
        </div>

        {/* Requirements Section */}
        <section className="max-w-4xl mx-auto px-2">
          <h2 className="text-2xl font-semibold mb-6">Requirements</h2>

          <h3 className="text-lg text-red-500 font-medium mb-4">
            Documents Required To Be Submitted By The Passenger
          </h3>

          <h4 className="text-md font-semibold mb-3">Original Current & Old Passports</h4>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
            <li>Handwritten, Damaged And Passports With Over Than 10 Years Are Unacceptable</li>
            <li>All Passports Should Be Clear And Legible (No Wet, Stain Or Smudge, Etc…)</li>
            <li>Recent Passport Should Have At Least Three Full Blank Pages.</li>
            <li>Copy Of Marriage Certificate Should Be Submitted If The Spouse Name Is Not Endorsed And The Spouse Is Traveling Along With The Passenger.</li>
            <li>Previous Old Passport Is Mandatory Even If There Are No Travel Histories.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Visa;
