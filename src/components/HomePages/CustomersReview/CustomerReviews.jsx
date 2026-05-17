"use client";

import React from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Rahim Uddin",
    location: "Dhaka, Bangladesh",
    review: "Best mango I ever tasted! Super fresh and juicy.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Nusrat Jahan",
    location: "Chattogram",
    review: "Delivery was fast and packaging was perfect.",
    rating: 4,
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sabbir Hossain",
    location: "Khulna",
    review: "Natural taste and amazing quality mangoes.",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Mehedi Hasan",
    location: "Rajshahi",
    review: "Very trustworthy seller. Highly recommended!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Ayesha Akter",
    location: "Sylhet",
    review: "Sweet, juicy and 100% organic mangoes!",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Tanvir Ahmed",
    location: "Barishal",
    review: "Best online mango shop in Bangladesh!",
    rating: 4,
    img: "https://i.pravatar.cc/100?img=6",
  },
];

const CustomerReviews = () => {
  return (
    <div className="py-12 bg-green-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">
        Customer Reviews
      </h2>

      <div className="flex w-max animate-scroll gap-6">
        {reviews.concat(reviews).map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white shadow-lg rounded-2xl p-5"
          >
            {/* Profile */}
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={item.img}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 mb-3">
              "{item.review}"
            </p>

            {/* Rating */}
            <div className="text-yellow-500">
              {"⭐".repeat(item.rating)}
            </div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CustomerReviews;