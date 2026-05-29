import React from 'react';
import MangoCard from '@/components/Cards/MangoCard';

export const getAllMangoes = async (searchParamsPromise) => {
    const searchParams = await searchParamsPromise;
    const getParams = new URLSearchParams(searchParams).toString();
    console.log(getParams)

    const res = await fetch("http://localhost:3000/api/mangoes", {
        cache: 'no-store'
    });

    const data = await res.json();
    return data;
}

const Mangoes = async ({ searchParams }) => {
    const data = await getAllMangoes(searchParams);
    const mangoesList = data?.mangoes || [];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">All Mango</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mangoesList && mangoesList.length > 0 ? (
                    mangoesList.map((mango) => (
                        <MangoCard key={mango._id || mango.id} mango={mango} />
                    ))
                ) : (
                    <p>No mangoes found.</p>
                )}
            </div>
        </div>
    );
};

export default Mangoes;