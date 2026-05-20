import React from 'react';
import MangoCard from '@/components/Cards/MangoCard';
import mangoesData from '../../../mangoesdata.json';

const MangoesPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl sm:text-3xl text-center font-bold mb-2'>
                Choose Your Best Package
            </h1>
            <p className='text-center text-gray-500 text-sm mb-6'>Fresh from the farm, delivered to your door</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6'>
                {mangoesData.map((mango) => (
                    <MangoCard key={mango.id} mango={mango} />
                ))}
            </div>
        </div>
    );
};

export default MangoesPage;
