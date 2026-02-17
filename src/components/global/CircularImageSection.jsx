'use client';

import { Leaf, Play, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const CircularImageSection = ({ youtubeVideoId, image1, image2 }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handlePlayClick = () => {
        // setIsVideoOpen(true);
        console.log('Video play clicked');
    };

    const handleCloseVideo = () => {
        setIsVideoOpen(false);
    };

    return (
        <>
            <div className='relative px-4 mt-20 sm:px-8 rounded-2xl flex-shrink-0'>
                {/* Background with 2/3 red section */}
                <div className='absolute inset-0 -z-10'>
                    <div className='w-full h-full rounded-2xl overflow-hidden'>
                        <div className='h-2/3 w-full bg-gray-100 rounded-2xl'></div>
                        <div className='h-1/3 w-full bg-white'></div>
                    </div>
                </div>

                <div className='relative flex flex-row justify-center items-center md:items-end gap-3 sm:gap-4 md:gap-6 pb-16 sm:pb-20 md:pb-28 lg:pb-20'>
                    {/* First Image */}
                    <div className='relative w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-80 rounded-lg overflow-hidden shadow-md -mt-4 sm:-mt-6 md:-mt-10'>
                        <Image
                            src={image1}
                            alt='Offer 1'
                            fill
                            className='object-cover brightness-65'
                        />
                    </div>

                    {/* Second Image with Play Icon */}
                    <div className='flex flex-col md:translate-y-8 lg:translate-y-16'>
                        <div className='flex rounded-lg overflow-hidden mb-2 sm:mb-4 justify-end items-end'>
                            <Leaf className='w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-primary' />
                        </div>

                        <div className='w-32 h-40 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-80 relative rounded-lg overflow-hidden shadow-md'>
                            <Image
                                src={image2}
                                alt='Offer 2'
                                fill
                                className='object-cover brightness-65'
                            />
                        </div>
                    </div>

                    {/* Circular Play Button */}
                    <div className='absolute bottom-0 left-1/2 top-[60%] sm:top-[55%] md:top-[65%] lg:top-auto -translate-x-1/2 z-10'>
                        <div className='relative'>
                            <button
                                onClick={handlePlayClick}
                                className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 sm:border-4 border-white shadow-xl overflow-hidden relative bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors cursor-pointer z-20 group'
                            >
                                <div className='absolute inset-0 rounded-fullblock'>
                                    <svg
                                        className='w-full h-full animate-spin'
                                        style={{ animationDuration: '10s' }}
                                        viewBox='0 0 112 112'
                                    >
                                        <path
                                            id='circle-text-path'
                                            d='M 56 56 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0'
                                            fill='none'
                                            stroke='none'
                                        />
                                        <text className='text-xs fill-white font-medium uppercase tracking-wider'>
                                            <textPath href='#circle-text-path' startOffset='0%'>
                                                • CONSULTING • SERVICES • SOLUTIONS
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center relative z-10'>
                                    <Play color='#fff' className='w-full h-full' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className='fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4'>
                    <div className='relative w-full max-w-4xl aspect-video'>
                        <button
                            onClick={handleCloseVideo}
                            className='absolute -top-10 -right-4 bg-white text-black rounded-full p-1 hover:text-red-500 transition-colors z-10'
                        >
                            <X className='w-6 h-6' />
                        </button>
                        <iframe
                            className='w-full h-full rounded-lg'
                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default CircularImageSection;
