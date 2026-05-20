import Link from 'next/link';
import React from 'react';
import { IoLogoApple, IoSearchSharp } from 'react-icons/io5';
import { TbShoppingCartHeart } from 'react-icons/tb';

const Header = () => {
    return (
        <header className="flex justify-between items-center sticky top-0 z-50 px-16 py-2  bg-[#023a02] text-[#FFFFFF]">
            <div className='flex flex-row items-center'>
                <IoLogoApple size={60}/>
                <div>
                    <h1 className='text-2xl font-bold'>Harivanga House</h1>
                    <p className='text-sm font-semibold px-4 -mt-1'>Online Mango Business</p>
                </div>
            </div>
            <nav className='flex justify-between items-center space-x-5'>
                <Link href="/" className='btn font-bold'>Home</Link>
                <Link href="/mangoes" className='btn font-bold'>Mangoes</Link>
                <Link href="/about" className='btn font-bold'>About Us</Link>
                <Link href="/contact" className='btn font-bold'>Contact Us</Link>
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
