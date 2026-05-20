import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoApple } from 'react-icons/io5';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#023a02] text-white mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Column 1 — Brand */}
                <div>
                    <h1 className='flex items-center text-xl font-bold gap-1'>
                        <IoLogoApple size={45} /> Harivanga House
                    </h1>
                    <p className="text-gray-300 leading-7 mt-2 text-sm">
                        Fresh and premium quality Harivanga mangoes delivered
                        directly from Rangpur to your doorstep.
                    </p>
                </div>

                {/* Column 2 — Quick Links */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
                        <li><Link href="/mangoes" className="hover:text-yellow-500 transition">Shop</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-500 transition">About</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3 — Categories */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Categories</h1>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li>Premium Box</li>
                        <li>Family Pack</li>
                        <li>Gift Pack</li>
                        <li>Organic Mango</li>
                    </ul>
                </div>

                {/* Column 4 — Social */}
                <div>
                    <h1 className="text-xl font-semibold mb-4">Follow Us</h1>
                    <div className="flex gap-4 text-2xl">
                        <FaFacebookF className="hover:text-yellow-500 cursor-pointer transition" />
                        <FaInstagram className="hover:text-yellow-500 cursor-pointer transition" />
                        <FaTwitter className="hover:text-yellow-500 cursor-pointer transition" />
                        <FaYoutube className="hover:text-yellow-500 cursor-pointer transition" />
                    </div>
                    <p className="text-gray-300 mt-6 text-sm">Email: support@harivangahouse.com</p>
                    <p className="text-gray-300 mt-2 text-sm">Phone: +880 1234-567890</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm px-4">
                © 2026 Harivanga House. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
