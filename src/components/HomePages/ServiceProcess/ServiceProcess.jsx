import Image from 'next/image';
import React from 'react';
import organicImg from '../../../../public/img/organici1.png';
import farmImg from '../../../../public/img/farmi2.png';
import deliImg from '../../../../public/img/deli3.png';
import secureImg from '../../../../public/img/securei4.png';

const services = [
    { img: organicImg, title: '100% Organic', desc: 'No Chemicals,\nOnly natural goodness' },
    { img: farmImg,    title: 'Farm Fresh',   desc: 'Directly from our farm\nto your doorstep' },
    { img: deliImg,    title: 'Fast Delivery', desc: 'Quick & safe delivery\nacross the country' },
    { img: secureImg,  title: 'Secure Payment', desc: 'Safe & secure online\npayment options' },
];

const ServiceProcess = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 px-5 md:px-10 py-2'>
            {services.map((s, i) => (
                <div key={i} className='text-center'>
                    <div className="w-[80px] h-[65px] md:w-[100px] md:h-[80px] flex items-center justify-center mx-auto">
                        <Image src={s.img} alt={s.title} width={100} height={80} className='object-contain' />
                    </div>
                    <h1 className='text-base md:text-2xl font-bold mt-2'>{s.title}</h1>
                    <p className='text-xs md:text-sm font-semibold whitespace-pre-line text-gray-600'>{s.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default ServiceProcess;
