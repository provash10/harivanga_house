import React from 'react';
import bannerImg2 from '../../../../public/img/bannerImg2.png';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='relative w-full'>
            <Image
                src={bannerImg2}
                alt="bannerImg"
                width={1300}
                height={500}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto object-cover"
            />

            <div className='absolute top-4 sm:top-10 md:top-20 lg:top-38 text-white px-4 sm:px-8'>
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold'>
                    Harivanga <br />
                    <span>Mangoes</span>
                </h1>

                <div className='mt-2 md:mt-4'>
                    <h2 className='text-sm sm:text-lg md:text-2xl font-bold'>Straight from Our Farm to Your Home</h2>
                    <h3 className='text-xs sm:text-sm md:text-md font-semibold'>Naturally Sweet. 100% Organic. Handpicked with Love</h3>
                </div>

                <div className='flex gap-4 sm:gap-8 items-center mt-3 md:mt-4'>
                    <Link href="/mangoes">
                        <button className='px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-amber-500 rounded-2xl font-semibold hover:bg-amber-600 transition'>
                            Shop Now
                        </button>
                    </Link>
                    <button className='px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-amber-500 rounded-2xl font-semibold hover:bg-amber-600 transition'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
