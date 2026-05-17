import React from 'react';
import shopTemplate from '../../../../public/img/shoptemplate.png';

const ShopTemplateSubscribe = () => {
    return (
        <div>
            <div
                className="flex justify-start items-center w-full h-[200px] bg-cover bg-center rounded-2xl px-10"
                style={{
                    backgroundImage: `url(${shopTemplate.src})`
                }}
            >
                <div className='text-white px-12'>
                    <h1 className='text-3xl font-bold'>
                        Subscribe To Our Newsletter
                    </h1>

                    <p>
                        Get the latest updates on new arrivals and offers
                    </p>
                </div>

                <div className='flex flex-row bg-white rounded-lg overflow-hidden'>
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="px-8 py-3 outline-none text-black"
                    />

                    <button className='bg-yellow-500 px-4 text-white font-semibold'>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopTemplateSubscribe;