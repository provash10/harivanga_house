
import Link from 'next/link';
import React from 'react';

const NotFound404 = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center gap-5'>
            <h2>404 | Your Page Not Found</h2>
            <Link href={"/"} className='underline text-white font-bold px-4 py-3 bg-amber-800 hover:bg-green-800 rounded-3xl'>Go To Home</Link>
        </div>
    );
};

export default NotFound404;