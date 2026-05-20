
import React from 'react';
import { ImSpinner3 } from 'react-icons/im';

const loading = () => {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center text-8xl'>
            <h2>L</h2> <span className='animate-spin'><ImSpinner3 /></span>
            <h2>oading</h2>
        </div>
        </div>
    );
};

export default loading;