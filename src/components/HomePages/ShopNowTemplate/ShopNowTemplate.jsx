import React from 'react';
import shopTemplate from '../../../../public/img/shoptemplate.png';
import shopNowImg from '../../../../public/img/ShopNowimg.png';
import Image from 'next/image';
import Link from 'next/link';

const ShopNowTemplate = () => {
    return (
        <div className='px-5 md:px-10 py-2'>
            <div
                className="relative flex flex-col sm:flex-row justify-start items-center w-full min-h-[200px] sm:h-[300px] bg-cover bg-center rounded-2xl px-6 sm:px-10 overflow-hidden gap-4"
                style={{ backgroundImage: `url(${shopTemplate.src})` }}
            >
                {/* Mango Image — hidden on very small screens */}
                <div className="hidden sm:block rounded-3xl overflow-hidden shrink-0">
                    <Image
                        src={shopNowImg}
                        alt="Shop Now"
                        width={400}
                        height={350}
                        className="object-cover -ml-10"
                    />
                </div>

                {/* Text + Button */}
                <div className='text-center sm:text-left'>
                    <h1 className='text-xl sm:text-3xl md:text-4xl font-bold text-white'>
                        Order Now & Enjoy <br className="hidden sm:block" />
                        the Real Taste of Harivanga.
                    </h1>
                    <Link href="/mangoes">
                        <button className='btn text-base sm:text-2xl text-white rounded-md font-bold px-4 py-1 mt-4 sm:mt-8'>
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopNowTemplate;
