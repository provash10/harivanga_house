import React from 'react';
import shopTemplate from '../../../../public/img/shoptemplate.png';
import shopNowImg from '../../../../public/img/ShopNowimg.png';
import Image from 'next/image';

const ShopNowTemplate = () => {
    return (
        <div className='m-2'>
            <div
                className="flex justify-start items-center w-full h-[300px] bg-cover bg-center rounded-2xl px-10"
                style={{
                    backgroundImage: `url(${shopTemplate.src})`
                }}
            >
                <div className="rounded-3xl overflow-hidden">
                    <Image
                        src={shopNowImg}
                        alt="chooseImg"
                        width={500}
                        height={450}
                        className="object-cover -ml-12"
                    />
                </div>

                <div className=''>
                    <h1 className='text-4xl font-bold text-white -ml-8'>
                        Order Now & Enjoy <br /> the Real Taste of Harivanga.
                    </h1>
                    <div className="flex justify-end">
                        {/* <button className='text-2xl text-white bg-[#023a02] hover:bg-[#f75205] rounded-3xl font-bold px-4 py-3 mt-8'>Shop Now !!!</button> */}
                        <button className='btn text-2xl text-white rounded-md font-bold px-4 py-1 mt-8'>Shop Now !!!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopNowTemplate;