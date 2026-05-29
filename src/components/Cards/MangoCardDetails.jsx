"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MangoCardDetails = ({ mango }) => {
    const {
        _id,
        id,
        image,
        images, // Array of images if available
        name,
        short_description,
        description,
        quantity: baseQuantity,
        price: basePrice,
    } = mango || {};

    const mangoId = _id || id;
    
    // Setup gallery images array
    const fallbackImage = "https://placehold.co/800x600/png?text=No+Image";
    const galleryImages = images && images.length > 0 ? images : [image || fallbackImage];

    // States
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [orderQuantity, setOrderQuantity] = useState(baseQuantity || 1);

    // Calculate Dynamic Price
    const currentPrice = basePrice || 0;
    const rawTotalPrice = currentPrice * (orderQuantity / (baseQuantity || 1)); // Handle case if base is 5kg
    const totalPrice = Number(rawTotalPrice.toFixed(2)); // Fixes JavaScript floating-point issues (e.g. 110.0000000)

    // Auto-slider effect
    useEffect(() => {
        if (galleryImages.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        }, 3000); // Auto change every 3 seconds

        return () => clearInterval(timer);
    }, [galleryImages.length]);

    const handleIncrease = () => setOrderQuantity(prev => prev + 1);
    const handleDecrease = () => setOrderQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">

                {/* Left: Image Gallery Section */}
                <div className="flex flex-col gap-4">
                    {/* Main Image */}
                    <div className="relative w-full h-[350px] md:h-[450px] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-opacity duration-500">
                        <Image
                            src={galleryImages[currentImageIndex]}
                            alt={`${name || "Mango"} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Thumbnails (Only show if more than 1 image exists) */}
                    {galleryImages.length > 1 && (
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {galleryImages.map((img, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-orange-500 shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                >
                                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Content Section */}
                <div className="flex flex-col justify-between">
                    <div>
                        {/* Title */}
                        <h1 className="text-4xl font-bold text-gray-800 mb-3">
                            {name || "Unknown Mango"}
                        </h1>

                        {/* Short Description */}
                        <p className="text-gray-500 text-lg mb-6">
                            {short_description || "Fresh and delicious natural mangoes."}
                        </p>

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Description
                            </h3>
                            <textarea
                                readOnly
                                value={description || "No detailed description available."}
                                className="w-full h-32 border border-gray-200 rounded-2xl p-4 bg-gray-50 resize-none outline-none text-gray-600"
                            />
                        </div>

                        {/* Pricing & Quantity Setup */}
                        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                            
                            {/* Quantity Selector */}
                            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
                                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                                    Select Quantity (kg)
                                </p>
                                <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                                    <button 
                                        onClick={handleDecrease}
                                        className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-orange-500 transition-colors text-xl font-bold"
                                    >
                                        −
                                    </button>
                                    <div className="w-16 h-12 flex items-center justify-center font-bold text-lg text-gray-800 border-x border-gray-200">
                                        {orderQuantity}
                                    </div>
                                    <button 
                                        onClick={handleIncrease}
                                        className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-orange-500 transition-colors text-xl font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Total Price Display */}
                            <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
                                <p className="text-sm text-orange-400 uppercase tracking-wider mb-1 font-semibold">
                                    Total Price
                                </p>
                                <h4 className="text-4xl font-black text-orange-500">
                                    ৳ {totalPrice}
                                </h4>
                                <p className="text-xs text-gray-400 mt-1">
                                    (৳ {currentPrice} / {baseQuantity || 1}kg)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                            <span>Add to Cart</span>
                            <span className="bg-white text-orange-500 px-2 py-0.5 rounded-lg text-sm ml-2">৳ {totalPrice}</span>
                        </button>

                        <Link
                            href="/mangoes"
                            className="flex-1 text-center flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                        >
                            Back to Shop
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangoCardDetails;