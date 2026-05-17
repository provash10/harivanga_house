import React from 'react';
import { BsBox2Heart, BsGift } from 'react-icons/bs';
import { GiFamilyHouse } from 'react-icons/gi';
import { MdOutlineDiscount } from 'react-icons/md';
import { SiDistrobox } from 'react-icons/si';

const ShopByCategory = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-2xl font-bold text-center mb-4'>Shop By Category</h1>
            <div className='flex justify-center items-center gap-4'>
                <div className='border '>
                    <BsBox2Heart className='text-8xl' />
                    <h1>Premium Box</h1>
                </div>
                <div className='border '>
                    <GiFamilyHouse className='text-8xl' />
                    <h1>Family Pack</h1>
                </div>
                <div className='border '>
                    <BsGift className='text-8xl' />
                    <h1>Gift Pack</h1>
                </div>
                <div className='border '>
                    <SiDistrobox className='text-8xl' />
                    <h1>Mini Box</h1>
                </div>

                <div className='border '>
                    <MdOutlineDiscount className='text-8xl' />
                    <h1>Combo Offer</h1>
                </div>

            </div>
        </div>
    );
};

export default ShopByCategory;