import ReviewCard from '@/components/Cards/ReviewCard';
import React from 'react';

export const metadata = {
  title: "Reviews",
  description: "Harivanga House - Best Online Mango Shop",
};
const Reviews = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold underline mb-4'>Customers Review </h1>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Reviews;