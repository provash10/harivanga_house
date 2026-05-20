'use client';

import React, { useState } from 'react';

const QuantitySelector = ({ pricePerKg, baseWeight, name }) => {
    const [quantity, setQuantity] = useState(baseWeight); // default kg

    const totalPrice = Math.round(pricePerKg * quantity);

    const decrease = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const increase = () => {
        setQuantity((prev) => prev + 1);
    };

    return (
        <div className="flex flex-col gap-4">

            {/* Quantity Selector */}
            <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">পরিমাণ নির্বাচন করুন (কেজি)</p>
                <div className="flex items-center gap-4">
                    <button
                        onClick={decrease}
                        className="w-10 h-10 rounded-full border-2 border-green-600 text-green-600 text-xl font-bold hover:bg-green-600 hover:text-white transition"
                    >
                        −
                    </button>
                    <span className="text-2xl font-bold text-gray-800 w-16 text-center">
                        {quantity} kg
                    </span>
                    <button
                        onClick={increase}
                        className="w-10 h-10 rounded-full border-2 border-green-600 text-green-600 text-xl font-bold hover:bg-green-600 hover:text-white transition"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Total Price */}
            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-gray-600 font-medium">মোট মূল্য</span>
                <span className="text-2xl font-bold text-green-700">৳ {totalPrice}</span>
            </div>

            {/* Order Buttons */}
            <div className="flex gap-3">
                <a
                    href={`https://wa.me/8801XXXXXXXXX?text=আমি অর্ডার করতে চাই: ${name} - ${quantity}kg - মোট ৳${totalPrice}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                >
                    WhatsApp এ অর্ডার করুন
                </a>
                <a
                    href="/contact"
                    className="flex-1 border-2 border-green-600 text-green-600 text-center py-3 rounded-xl font-semibold hover:bg-green-50 transition"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default QuantitySelector;
