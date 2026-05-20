import React from 'react';

const MangoCardSkeleton = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6'>
            {
                Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className='border rounded-xl p-4 shadow-md animate-pulse'
                        >
                            {/* Image Skeleton */}
                            <div className='w-full h-52 bg-gray-300 rounded-lg'></div>

                            {/* Title */}
                            <div className='h-6 bg-gray-300 rounded mt-4 w-3/4 mx-auto'></div>

                            {/* Description */}
                            <div className='h-4 bg-gray-300 rounded mt-3 w-full'></div>

                            {/* Weight + Price */}
                            <div className='flex justify-between mt-4'>
                                <div className='h-4 bg-gray-300 rounded w-16'></div>
                                <div className='h-4 bg-gray-300 rounded w-20'></div>
                            </div>

                            {/* Button */}
                            <div className='h-10 bg-gray-300 rounded-lg mt-5 w-28 mx-auto'></div>
                        </div>
                    ))
            }
        </div>
    );
};

export default MangoCardSkeleton;