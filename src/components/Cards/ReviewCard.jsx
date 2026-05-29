import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({
    name = "Anonymous User",
    image = "/placeholder.png",
    description = "No review provided.",
    rating = 0
}) => {

    // Ensure rating stays between 0 and 5
    const safeRating = Math.max(0, Math.min(5, rating));

    return (
        <div className="
            w-full
            bg-white
            border
            rounded-2xl
            p-4 sm:p-5
            shadow-sm
            hover:shadow-xl
            transition-all
            duration-300
            flex flex-col
        ">

            {/* User Info Section */}
            <div className="flex items-center gap-3 sm:gap-4">

                {/* Profile Image */}
                <Image
                    src={image}
                    alt={name}
                    width={60}
                    height={60}
                    className="
                        w-12 h-12 sm:w-14 sm:h-14
                        rounded-full
                        object-cover
                        border
                    "
                />

                {/* Name + Rating */}
                <div className="flex-1">

                    <h2 className="
                        font-semibold
                        text-base sm:text-lg
                        text-gray-800
                        truncate
                    ">
                        {name}
                    </h2>

                    {/* Rating Section */}
                    <div className="flex items-center gap-2 mt-1 flex-wrap">

                        {/* Stars */}
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={`
                                        text-sm sm:text-base
                                        ${index < safeRating
                                            ? "text-yellow-500"
                                            : "text-gray-300"
                                        }
                                    `}
                                />
                            ))}
                        </div>

                        {/* Rating Text */}
                        <span className="
                            text-xs sm:text-sm
                            font-medium
                            text-gray-600
                        ">
                            {safeRating}/5
                        </span>

                    </div>

                </div>

            </div>

            {/* Review Description */}
            <div className="mt-4">

                <p className="
                    text-sm sm:text-base
                    text-gray-600
                    leading-relaxed
                    break-words
                ">
                    {description}
                </p>

            </div>

        </div>
    );
};

export default ReviewCard;