import Link from 'next/link';
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import Image from 'next/image';
import chooseImg from '../../../../public/img/chooseimg.jpg';

const points = [
    'Sourced from our own orchard',
    'Handpicked by experts',
    'No artificial ripening',
    'Rich in taste & nutrients',
    'Loved by thousands of customers',
];

const WhyChoose = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-5 md:px-10 py-2'>

            <div className="rounded-3xl overflow-hidden w-full md:w-auto">
                <Image
                    src={chooseImg}
                    alt="chooseImg"
                    width={500}
                    height={400}
                    className="object-cover w-full md:w-[500px]"
                />
            </div>

            <div className='w-full md:w-auto'>
                <h1 className="text-2xl md:text-3xl font-bold">
                    Why Choose <br />
                    <span className="text-green-700">Harivanga Mango</span>
                </h1>

                <div className="mt-4 space-y-2">
                    {points.map((p, i) => (
                        <div key={i} className='flex gap-2 items-center'>
                            <FaDotCircle className="text-green-700 shrink-0" />
                            <p className='text-sm md:text-base'>{p}</p>
                        </div>
                    ))}

                    <Link
                        href="/about"
                        className="btn inline-block text-white text-lg md:text-2xl font-bold px-4 py-1 rounded-md mt-4"
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
