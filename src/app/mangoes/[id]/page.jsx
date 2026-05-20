import React from 'react';
import Link from 'next/link';
import mangoesData from '../../../../mangoesdata.json';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/Cards/ProductGallery';
import QuantitySelector from '@/components/Cards/QuantitySelector';

export async function generateStaticParams() {
    return mangoesData.map((mango) => ({
        id: String(mango.id),
    }));
}

const MangoDetails = async ({ params }) => {
    const { id } = await params;
    const mango = mangoesData.find((m) => m.id === Number(id));

    if (!mango) notFound();

    const { name, short_description, description, price, pricePerKg, weight, baseWeight, origin, delivery, features, gallery } = mango;

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">

            {/* Back Button */}
            <Link
                href="/mangoes"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-medium mb-6 transition text-sm sm:text-base"
            >
                ← Back to Mangoes
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">

                {/* Left — Image Gallery */}
                <ProductGallery images={gallery} name={name} />

                {/* Right — Product Info */}
                <div className="flex flex-col gap-4">

                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{name}</h1>
                    <p className="text-green-600 font-medium text-base sm:text-lg">{short_description}</p>

                    <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-bold text-green-700">৳ {pricePerKg}</span>
                        <span className="text-gray-500 text-sm">/ প্রতি কেজি</span>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        {[
                            { label: 'Weight', value: weight },
                            { label: 'Origin', value: origin },
                            { label: 'Delivery', value: delivery },
                            { label: 'Type', value: 'Harivanga Mango' },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-3">
                                <p className="text-gray-500 text-xs">{item.label}</p>
                                <p className="font-semibold text-gray-800 text-sm">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <hr className="border-gray-200" />

                    {/* Quantity + Order */}
                    <QuantitySelector pricePerKg={pricePerKg} baseWeight={baseWeight} name={name} />

                    <hr className="border-gray-200" />

                    {/* Description */}
                    <div>
                        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Product Description</h2>
                        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
                    </div>

                    {/* Features */}
                    <div>
                        <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">Key Features</h2>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-green-500 font-bold">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangoDetails;
