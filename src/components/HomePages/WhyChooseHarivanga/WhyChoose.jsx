import Link from 'next/link';
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import Image from 'next/image';
import chooseImg from '../../../../public/img/chooseimg.jpg';

const WhyChoose = () => {
    return (
        <div className='flex justify-center items-center gap-12 m-4'>

            <div className="rounded-3xl overflow-hidden">
                <Image
                    src={chooseImg}
                    alt="chooseImg"
                    width={500}
                    height={400}
                    className="object-cover"
                />
            </div>

            <div>
                <h1 className="text-3xl font-bold">
                    Why Choose <br />
                    <span className="text-green-700">Harivanga Mango</span>
                </h1>

                <div className="mt-4 space-y-2">
                    <div className='flex gap-2 items-center'>
                        <FaDotCircle /><p>Sourced from our own orchard</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaDotCircle /><p>Handpicked by experts</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaDotCircle /><p>No artificial ripening</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaDotCircle /><p>Rich in taste & nutrients</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaDotCircle /><p>Loved by thousands of customers</p>
                    </div>

                    <Link
                        href="/about"
                        className="block bg-green-950 text-white text-2xl font-bold px-4 py-2 rounded-2xl mt-4 w-fit"
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;