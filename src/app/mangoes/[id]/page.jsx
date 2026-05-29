import React from 'react';
import MangoCardDetails from '@/components/Cards/MangoCardDetails';

const getMangoDetails = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/mangoes/${id}`, {
            cache: 'no-store'
        });
        
        if (!res.ok) return null;
        
        const data = await res.json();
        return data?.mango;
    } catch (error) {
        console.error("Failed to fetch mango details:", error);
        return null;
    }
}

const MangoDetails = async ({ params }) => {
    // In Next.js 15+, params is a Promise
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    const mango = await getMangoDetails(id);

    if (!mango) {
        return (
            <div className="container mx-auto p-10 text-center">
                <h2 className="text-2xl font-bold text-red-500">Mango not found!</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <MangoCardDetails mango={mango} />
        </div>
    );
};

export default MangoDetails;