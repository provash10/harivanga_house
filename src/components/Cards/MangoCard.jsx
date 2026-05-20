import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MangoCard = ({ mango }) => {
    const { name, short_description, weight, price, image, id } = mango;

    return (
        <div className='border rounded-xl p-4 shadow-md text-center hover:shadow-lg transition bg-white'>

            <Image
                src={image || "/placeholder.png"}
                alt={name || "Mango Image"}
                width={300}
                height={300}
                className='w-full h-40 sm:h-52 object-cover rounded-lg'
            />

            <h2 className='text-base sm:text-xl font-bold mt-3'>{name}</h2>

            <p className='text-gray-500 text-xs sm:text-sm mt-1'>{short_description}</p>

            <div className='flex justify-between items-center mt-4'>
                <p className='font-medium text-gray-700 text-sm'>{weight}</p>
                <p className='text-green-600 font-bold text-sm sm:text-base'>Tk {price}</p>
            </div>

            <Link
                href={`/mangoes/${id}`}
                className='inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base'
            >
                View Details
            </Link>
        </div>
    );
};

export default MangoCard;
