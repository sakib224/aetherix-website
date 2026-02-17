import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home, Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
function SocialShare() {
    return (
        <>
            {' '}
            <div className='flex items-center space-x-3'>
                <span className='text-sm text-sm font-bold text-black'>SHARE</span>
                <div className='flex space-x-2'>
                    <Link
                        href='#'
                        className='p-2 bg-secondary text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer'
                    >
                        <Facebook size={16} />
                    </Link>
                    <Link
                        href='#'
                        className='p-2 bg-secondary text-white rounded-full hover:bg-sky-600 transition-colors cursor-pointer'
                    >
                        <X size={16} />
                    </Link>
                    <Link
                        href='#'
                        className='p-2 bg-secondary text-white rounded-full hover:bg-pink-700 transition-colors cursor-pointer'
                    >
                        <Instagram size={16} />
                    </Link>
                    <Link
                        href='#'
                        className='p-2 bg-secondary text-white rounded-full hover:bg-blue-800 transition-colors cursor-pointer'
                    >
                        <Linkedin size={12} />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SocialShare;
