import { useState } from "react";
import logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="fixed px-40 py-10 top-0 left-0 right-0 z-50 flex justify-between h-30 items-center  bg-gradient-to-b from-gray-800 to-transparent text-white  ">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Somans" className="h-23" />
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-8 font-medium">
        <li
          className="border-b-2 border-transparent hover:border-red-500 cursor-pointer transition-all"
          onClick={() => navigate("/international")}
        >
          International
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/domestic")}
        >
          Domestic
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/experience")}
        >
          Experience
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/visa")}
        >
          Visa
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About Us
        </li>
        <li className="border-b-2 border-transparent hover:border-red-500 cursor-pointer transition-all"
        onClick={() => navigate("/custom")}>
          Custom Trip
        </li>
      </ul>

      {/* Enquire Button */}
      <button class="relative bg-transparent border cursor-pointer inline-flex items-center px-6 py-3 text-white  rounded-full transition-colors duration-300 hover:bg-red-600">
        Enquire
      </button>

      {/* Hamburger (mobile) */}
      <button
        className="md:hidden inline-flex items-center justify-center rounded p-2 focus:outline-none focus:ring-2 focus:ring-white/60"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={mobileOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7"
        >
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-50 md:hidden bg-[#002b43]/80 backdrop-blur border-b border-white/20">
          <ul className="flex flex-col gap-2 px-6 py-4 text-left font-medium">
            <li className="py-2 border-b border-white/10">International</li>
            <li className="py-2 border-b border-white/10">Domestic</li>
            <li className="py-2 border-b border-white/10">Experience</li>
            <li className="py-2 border-b border-white/10">Visa</li>
            <li className="py-2 border-b border-white/10">About Us</li>
            <li className="py-2">Custom Trip</li>
            <div className="pt-2">
              <button className="w-full border border-white rounded-full px-6 py-2 hover:bg-white hover:text-[#002b43] transition-all">
                Enquire
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
