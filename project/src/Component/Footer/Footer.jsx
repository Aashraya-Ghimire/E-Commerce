import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Sport Store</h2>
          <p className="text-sm leading-6">
            Discover premium sports gear and activewear to fuel your game. Play
            harder, train smarter, and feel the winning edge every time!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Social Media */}
        <div className="rounded-xl shadow-lg flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+977 987*******</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@sportstore.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Pokhara, Nepal</span>
          </div>

          <h4 className="text-lg font-semibold mt-4">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-gray-300 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Sport Store. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
