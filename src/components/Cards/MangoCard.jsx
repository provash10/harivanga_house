import React from 'react';
import Image from "next/image";
import Link from "next/link";

const MangoCard = ({ mango }) => {
    const {
        _id,
        id, // fallback for mock data
        image,
        name,
        short_description,
        quantity,
        price,
    } = mango || {};

    const mangoId = _id || id;

    return (
        <div className="bg-white rounded-2xl flex flex-col shadow-sm hover:shadow-xl overflow-hidden border border-gray-100 transition-all duration-300">
            {/* Image Section */}
            <div className="relative w-full h-56 bg-gray-50">
                <Image
                    src={image || "https://placehold.co/600x400/png?text=No+Image"}
                    alt={name || "Mango"}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Name */}
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                    {name || 'Unknown Mango'}
                </h2>

                {/* Short Description */}
                <p className="text-sm text-gray-500 mb-5 line-clamp-2 min-h-[40px]">
                    {short_description || "Delicious and fresh natural mangoes."}
                </p>

                {/* Price & Quantity Grid */}
                <div className="flex items-center justify-between mt-auto mb-5 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Quantity</p>
                        <h4 className="font-bold text-gray-700">
                            {quantity ? `${quantity} kg` : 'N/A'}
                        </h4>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Price</p>
                        <h4 className="font-bold text-lg text-orange-500 leading-none">
                            ৳ {price || 'N/A'}
                        </h4>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Link
                        href={mangoId ? `/mangoes/${mangoId}` : '#'}
                        className="flex-1 text-center bg-gray-900 text-white py-2.5 rounded-xl hover:bg-gray-800 transition-colors font-medium text-sm"
                    >
                        Details
                    </Link>
                    <button className="flex-1 bg-orange-500 text-white py-2.5 rounded-xl hover:bg-orange-600 transition-colors font-medium text-sm shadow-sm hover:shadow-md">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MangoCard;
