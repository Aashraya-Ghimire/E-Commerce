import React from "react";

function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Sport Store</h2>
          <p className="text-sm leading-6">
            Discover premium sports gear and activewear to fuel your game. Play
            harder, train smarter, and feel the winning edge every time!
          </p>
        </div>
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
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest offers & updates
          </p>
          <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-l-md outline-white text-white"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-md transition">
              Subscribe
            </button>
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
