'use client';
import { MoveRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function FlipCard({
    imageSrc,
    title,
    subtitle,
    backContent,
    technologies = [],
    client,
    year,
    href = '#',
}) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleViewDetails = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <Link href={href} className='block w-full h-80 group [perspective:1000px]'>
            <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
            >
                {/* Front Side */}
                <div className='absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-500'>
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className='object-cover transition-transform duration-1000 group-hover:scale-110'
                    />

                    {/* Gradient overlay with enhanced styling */}
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80'></div>

                    {/* Subtle top gradient for depth */}
                    <div className='absolute top-0 w-full h-20 bg-gradient-to-b from-black/30 to-transparent'></div>

                    {/* Enhanced content area */}
                    <div className='absolute bottom-0 w-full px-6 py-4'>
                        {/* Category/Type indicator */}
                        <div className='mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200'>
                            <span className='inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30'>
                                {technologies[0] || 'Project'}
                            </span>
                        </div>

                        {/* Title with enhanced styling */}
                        <h3 className='text-xl font-bold text-white mb-2 transform group-hover:translate-y-[-2px] transition-transform duration-500 delay-100'>
                            {title}
                        </h3>

                        {/* Subtitle with animation */}
                        <p className='text-gray-200 text-sm leading-relaxed transform group-hover:translate-y-[-2px] transition-transform duration-500 delay-150'>
                            {subtitle}
                        </p>

                        {/* Client/Year info with slide-up animation */}
                        <div className='flex items-center gap-4 mt-3 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-300'>
                            {client && (
                                <span className='flex items-center gap-1'>
                                    <svg
                                        className='w-3 h-3'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    {client}
                                </span>
                            )}
                            {year && (
                                <span className='flex items-center gap-1'>
                                    <svg
                                        className='w-3 h-3'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                                            clipRule='evenodd'
                                        />
                                    </svg>
                                    {year}
                                </span>
                            )}
                        </div>

                        {/* Hover indicator - now clickable */}
                        <button
                            onClick={handleViewDetails}
                            className='absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50'
                        >
                            <div className='flex items-center gap-2 text-xs text-white/90 font-medium cursor-pointer'>
                                <span> View Details</span>
                                <MoveRightIcon width={12} height={12} />
                            </div>
                        </button>
                    </div>

                    {/* Decorative elements */}
                    <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
                        {/* Subtle shine effect */}
                        <div className='absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 group-hover:left-full transition-all duration-1500 ease-out delay-200'></div>

                        {/* Corner decoration */}
                        <div className='absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full'></div>
                    </div>
                </div>

                {/* Back Side */}
                <div className='absolute w-full h-full backface-hidden [transform:rotateY(180deg)] animated-gradient-diagonal-herosection to-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col'>
                    {/* Back to front button */}
                    <button
                        onClick={handleViewDetails}
                        className='absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer'
                    >
                        <svg
                            className='w-4 h-4 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M10 19l-7-7m0 0l7-7m-7 7h18'
                            />
                        </svg>
                    </button>

                    {/* Fixed Header */}
                    <div className='p-4 backdrop-blur-sm pt-16'>
                        <h3 className='text-xl font-bold mb-1'>{title}</h3>
                        <div className='flex items-center gap-4 text-sm text-gray-300'>
                            {client && <span>Client: {client}</span>}
                            {year && <span>Year: {year}</span>}
                        </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className='flex-grow overflow-y-auto p-4 custom-scrollbar'>
                        <p className='text-gray-100 leading-relaxed'>{backContent}</p>
                    </div>

                    {/* Fixed Tech Stack at Bottom */}
                    {technologies.length > 0 && (
                        <div className='p-4 backdrop-blur-sm'>
                            <h4 className='font-semibold mb-2 text-sm text-gray-300'>TECH STACK</h4>
                            <div className='flex flex-wrap gap-2'>
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='text-xs text-indigo-100 px-3 py-1 rounded-full border border-indigo-400/20 bg-indigo-300/10 backdrop-blur-md shadow-md'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
