'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductGallery = ({ images, name }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex flex-col gap-3">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border bg-white">
                <Image
                    src={images[activeIndex]}
                    alt={`${name} - image ${activeIndex + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-80 object-cover transition-all duration-500"
                />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`flex-1 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                            activeIndex === index
                                ? 'border-green-500 shadow-md scale-105'
                                : 'border-gray-200 opacity-60 hover:opacity-100'
                        }`}
                    >
                        <Image
                            src={img}
                            alt={`${name} thumbnail ${index + 1}`}
                            width={150}
                            height={150}
                            className="w-full h-20 object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
