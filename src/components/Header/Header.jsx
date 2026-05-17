import Link from 'next/link';
import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { TbShoppingCartHeart } from 'react-icons/tb';

const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 z-50 px-16 py-3  bg-[#023a02] text-[#FFFFFF]">
            <h1 className="text-2xl font-bold text-red">harivanga logo</h1>
            <nav className='flex justify-between items-center gap-5'>
                <Link href="/" className='font-bold'>Home</Link>
                <Link href="/mangoes" className='font-bold'>Mangoes</Link>
                <Link href="/about" className='font-bold'>About Us</Link>
                <Link href="/contact" className='font-bold'>Contact Us</Link>
            </nav>
            <div className="flex justify-between items-center gap-4">

                {/* Search Box */}
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-md">

                    <input
                        type="text"
                        placeholder="Search Mango"
                        className="w-full outline-none bg-transparent"
                    />
                    <IoSearchSharp className="text-2xl text-gray-500 mr-2" />
                </div>

                {/* Cart Icon */}
                <div className="text-3xl cursor-pointer">
                    <TbShoppingCartHeart />
                </div>

            </div>
        </header>
    );
};

export default Header;
