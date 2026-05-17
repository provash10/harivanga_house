import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#023a02] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-500 mb-4">
            Harivanga House
          </h1>

          <p className="text-gray-300 leading-7">
            Fresh and premium quality Harivanga mangoes delivered
            directly from Rangpur to your doorstep.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h1 className="text-xl font-semibold mb-4">
            Quick Links
          </h1>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-yellow-500 cursor-pointer">
              Home
            </li>

            <li className="hover:text-yellow-500 cursor-pointer">
              Shop
            </li>

            <li className="hover:text-yellow-500 cursor-pointer">
              About
            </li>

            <li className="hover:text-yellow-500 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="text-xl font-semibold mb-4">
            Categories
          </h1>

          <ul className="space-y-3 text-gray-300">
            <li>Premium Box</li>
            <li>Family Pack</li>
            <li>Gift Pack</li>
            <li>Organic Mango</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h1 className="text-xl font-semibold mb-4">
            Follow Us
          </h1>

          <div className="flex gap-4 text-2xl">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
          </div>

          <p className="text-gray-300 mt-6">
            Email: support@harivangahouse.com
          </p>

          <p className="text-gray-300 mt-2">
            Phone: +880 1234-567890
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © 2026 Harivanga House. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;