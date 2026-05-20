'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { IoLogoApple, IoSearchSharp, IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { TbShoppingCartHeart } from 'react-icons/tb';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#023a02] text-white">
            <div className="flex justify-between items-center px-5 md:px-10 lg:px-16 py-2">

                {/* Logo */}
                <Link href="/" className='flex flex-row items-center gap-1 hover:opacity-90 transition'>
                    <IoLogoApple size={45} />
                    <div>
                        <h1 className='text-lg md:text-2xl font-bold leading-tight'>Harivanga House</h1>
                        <p className='text-xs md:text-sm font-semibold'>Online Mango Business</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className='hidden md:flex items-center space-x-5'>
                    <Link href="/" className='btn font-bold'>Home</Link>
                    <Link href="/mangoes" className='btn font-bold'>Mangoes</Link>
                    <Link href="/about" className='btn font-bold'>About Us</Link>
                    <Link href="/contact" className='btn font-bold'>Contact Us</Link>
                </nav>

                {/* Desktop Search + Cart */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-48 lg:w-64">
                        <input
                            type="text"
                            placeholder="Search Mango"
                            className="w-full outline-none bg-transparent text-sm"
                        />
                        <IoSearchSharp className="text-xl text-gray-300" />
                    </div>
                    <div className="text-3xl cursor-pointer">
                        <TbShoppingCartHeart />
                    </div>
                </div>

                {/* Mobile — Cart + Hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    <div className="text-2xl cursor-pointer">
                        <TbShoppingCartHeart />
                    </div>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                        {menuOpen ? <IoCloseSharp /> : <IoMenuSharp />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#023a02] px-5 pb-4 flex flex-col items-end gap-3 border-t border-green-800">
                    {/* Search — full width */}
                    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 mt-2 w-full">
                        <input
                            type="text"
                            placeholder="Search Mango"
                            className="w-full outline-none bg-transparent text-sm"
                        />
                        <IoSearchSharp className="text-xl text-gray-300" />
                    </div>
                    <Link href="/" onClick={() => setMenuOpen(false)} className='btn font-bold'>Home</Link>
                    <Link href="/mangoes" onClick={() => setMenuOpen(false)} className='btn font-bold'>Mangoes</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)} className='btn font-bold'>About Us</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)} className='btn font-bold'>Contact Us</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
