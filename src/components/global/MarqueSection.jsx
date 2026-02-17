'use client';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function MarqueSection({ items }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const repeatedItems = [...items, ...items, ...items];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const locationMap = {
        'Plot#362, Road#5, Avenue#4, Mirpur DOHS, Dhaka-1216':
            'https://maps.app.goo.gl/Ka7hcKhNcfLiSjqG6',
        '74 E Glenwood Ave Unit #5210, Smyrna, DE 19977':
            'https://www.google.com/maps/place/74+E+Glenwood+Ave+%235210,+Smyrna,+DE+19977,+USA/@39.30499674860647,-75.60938901078718,17z',
    };

    const getItemLink = (text) => {
        if (locationMap[text]) {
            return locationMap[text];
        }

        if (text.includes('@')) {
            return `mailto:${text}`;
        }

        if (text.includes('+') || text.match(/^\d{3,}/)) {
            return `tel:${text.replace(/\s/g, '')}`;
        }

        return null;
    };

    return (
        <div className='py-4 overflow-hidden relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border-y border-white/20' />

            <div className='relative z-10'>
                <div className='marquee-container'>
                    <div
                        className={`marquee-track flex gap-4 items-center ${
                            isLoaded ? 'animate' : ''
                        }`}
                    >
                        {repeatedItems.map((text, index) => {
                            const link = getItemLink(text);
                            const isExternal = link?.includes('http');

                            return (
                                <div key={index} className='flex items-center gap-2'>
                                    {link ? (
                                        <Link
                                            href={link}
                                            target={isExternal ? '_blank' : undefined}
                                            rel={isExternal ? 'noopener noreferrer' : undefined}
                                            className='hover:opacity-80 transition-opacity'
                                        >
                                            <span className='marquee-item text-gray-800 text-2xl font-bold whitespace-nowrap drop-shadow-sm'>
                                                {text}
                                            </span>
                                        </Link>
                                    ) : (
                                        <span className='marquee-item text-gray-800 text-2xl font-bold whitespace-nowrap drop-shadow-sm'>
                                            {text}
                                        </span>
                                    )}
                                    <FontAwesomeIcon
                                        icon={faStar}
                                        className='text-gray-700 w-4 h-4 flex-shrink-0 drop-shadow-sm'
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarqueSection;
