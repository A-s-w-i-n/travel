import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import logo from '../../../public/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-gray-300 py-12 px-6 md:px-20 text-center">
      {/* Logo and description */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={logo}
          alt="Somans Logo"
          className="w-20 h-20 rounded-full"
        />
        <p className="max-w-2xl text-sm leading-relaxed text-gray-400">
          Embark on a journey with Somans Leisure Tours, Kerala's leading tour
          operator brand. Celebrating over 25 years of exceptional service, we're
          dedicated to bringing you the best of Kerala’s enchanting landscapes
          and rich culture. Experience travel at its finest, where every trip
          becomes a cherished memory.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Enquiry Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4 text-sm">
        <div>
          <h3 className="font-semibold text-gray-400">
            International Group Enquiries
          </h3>
          <p className="text-white font-medium mt-1">9946945011</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400">
            Domestic Group Enquiries
          </h3>
          <p className="text-white font-medium mt-1">9846985011</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-400">Customized Tours</h3>
          <p className="text-white font-medium mt-1">7306335069</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <a href="#">Home</a>
        <a href="#">International</a>
        <a href="#">Domestic</a>
        <a href="#">Experience</a>
        <a href="#">Visa</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </div>

      <div className="mt-4 flex justify-center gap-6 text-xs text-gray-500">
        <a href="#">Online Payment</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-white mb-1">Contact Us</h4>
          <p>
            1st Floor – Saniya Tower, Metro Pillar No 550, Palarivattom, Cochin
            – 682025
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">Support</h4>
          <p>9745624511</p>
          <p>8138017258</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-1">Email</h4>
          <p>info@somansleisuretours.com</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-6 text-orange-500 text-lg">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Footer Bottom */}
      <p className="text-xs text-gray-500">
        Copyright © 2025 All rights reserved by Somans Leisure Tour.
        Powered by{" "}
        <a href="#" className="text-green-400 font-medium">
          webCastle
        </a>
      </p>
    </footer>
  );
};

export default Footer;
