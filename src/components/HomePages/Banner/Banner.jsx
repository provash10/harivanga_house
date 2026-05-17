import React from 'react';
// import bannerImg from '../../../public/img/bannerImg.png';
import bannerImg2 from '../../../../public/img/bannerImg2.png';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    const handleBtn = ()=>{
        alert("clicked")
    }
    return (
        <div className='relative w-full'>
            <Image className="" src={bannerImg2} alt="bannerImg" width={1300} height={10} />
           
            

            <div className='absolute top-38 text-white '>
                <h1 className='text-7xl font-bold px-8'>Harivanga <br /> <span className='7xl'>Mangoes</span></h1>
                <p>...........................................................................</p>

                <div className='mt-4 px-8'>
                    <h2 className='text-2xl font-bold'>Straight from Our Farm to Your Home</h2>
                    <h3 className='text-md font-semibold'>Naturally Sweet. 100% Organic. Handpicked with Love</h3>
                </div>

                <div className='flex gap-12 items-center mt-4 px-8'>
                    <Link href="/mangoes">
                    <button className='px-4 py-2 bg-amber-500 rounded-2xl'>Shop Now</button>
                    </Link>
                    <button className='px-4 py-2 bg-amber-500 rounded-2xl'>Learn More</button>
                </div>

                
            </div>
        </div>
    );
};

export default Banner;