'use client';

import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CertificationCarousel = ({ certifications }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
    };

    return (
        <div className='relative group'>
            <button
                onClick={prev}
                className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110'
            >
                <ChevronLeft className='w-5 h-5 text-gray-700' />
            </button>

            <button
                onClick={next}
                className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110'
            >
                <ChevronRight className='w-5 h-5 text-gray-700' />
            </button>

            <div className='overflow-hidden rounded-2xl'>
                <div
                    className='flex transition-transform duration-500 ease-out'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {certifications.map((cert, index) => (
                        <div key={index} className='flex-shrink-0 w-full'>
                            <div className='bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mx-2'>
                                <div className='flex items-center gap-4'>
                                    <div className='p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg'>
                                        <Award className='w-6 h-6 text-white' />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-800'>
                                            {cert}
                                        </h3>
                                        <p className='text-sm text-gray-600 mt-1'>
                                            Professional Certification
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center gap-2 mt-4'>
                {certifications.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-6'
                                : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CertificationCarousel;
