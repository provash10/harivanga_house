import Image from 'next/image';
import React from 'react';
import organicImg from '../../../../public/img/organici1.png';
import farmImg from '../../../../public/img/farmi2.png'
import deliImg from '../../../../public/img/deli3.png'
import secureImg from '../../../../public/img/securei4.png'

const ServiceProcess = () => {
    return (
        <div className='flex justify-center items-center gap-12 mt-4'>
            <div className='text-center'>
                <div className="w-[100px] h-[80px] flex items-center justify-center mx-auto">
                    <Image
                        src={organicImg}
                        alt="organicImg"
                        width={100}
                        height={80}
                        className='object-contain'
                    />
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>100% Organic</h1>
                    <p className='text-sm font-semibold'>No Chemicals, <br /> Only natural goodness</p>
                </div>
            </div>

            <div className='text-center'>
                <div className="w-[100px] h-[80px] flex items-center justify-center mx-auto">
                    <Image
                        src={farmImg}
                        alt="farmImg"
                        width={100}
                        height={80}
                        className='object-contain'
                    />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Farm Fresh</h1>
                    <p className='text-sm font-semibold'>Directly from our farm <br />to your doorstep</p>
                </div>
            </div>

            <div className='text-center'>
                <div className="w-[100px] h-[80px] flex items-center justify-center mx-auto">
                    <Image
                        src={deliImg}
                        alt="deliImg"
                        width={100}
                        height={80}
                        className='object-contain'
                    />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Fast Delivery</h1>
                    <p className='text-sm font-semibold'>Quick & safe delivery <br />acroos the country</p>
                </div>
            </div>

            <div className='text-center'>
                <div className="w-[100px] h-[80px] flex items-center justify-center mx-auto">
                    <Image
                        src={secureImg}
                        alt="secureImg"
                        width={100}
                        height={80}
                        className='object-contain'
                    />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Secure Payment</h1>
                    <p className='text-sm font-semibold'>Safe & secure online <br />payment options</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceProcess;