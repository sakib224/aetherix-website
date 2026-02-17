'use client';
import React from 'react';
import ArrowIcon from '@/assets/arrow.png';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import offer1 from '@/assets/offer1.jpg';
import offer2 from '@/assets/offer2.jpg';
import offer3 from '@/assets/offer3.jpg';
import offer4 from '@/assets/offer4.png';
import offer5 from '@/assets/offer5.jpeg';
import offer6 from '@/assets/offer6.jpeg';
import offer7 from '@/assets/offer7.jpg';
import offer8 from '@/assets/offer8.jpg';
import { MoveUpRight } from 'lucide-react';
function ServiceCategory() {
    const tiles = [
        {
            id: 1,
            title: 'Human Resource',
            category: 'Services',
            image: offer1,
            span: 1,
            href: '/services/human-resource', // Add href for each tile
        },
        {
            id: 2,
            title: 'Finance Management',
            category: 'Services',
            image: offer2,
            span: 1,
            href: '/services/finance-management',
        },
        {
            id: 3,
            title: 'Data Management',
            category: 'Services',
            image: offer3,
            span: 1,
            href: '/services/data-management',
        },
        {
            id: 4,
            title: 'Business Management',
            category: 'Services',
            image: offer4,
            span: 2,
            href: '/services/business-management',
        },
        {
            id: 5,
            title: 'Lead Management',
            category: 'Services',
            image: offer5,
            span: 1,
            href: '/services/lead-management',
        },
        {
            id: 6,
            title: 'Risk Management',
            category: 'Services',
            image: offer6,
            span: 1,
            href: '/services/risk-management',
        },
        {
            id: 7,
            title: 'IT/Softeware Services',
            category: 'Services',
            image: offer7,
            span: 1,
            href: '/services/software-services',
        },
        {
            id: 8,
            title: 'Lead Management',
            category: 'Services',
            image: offer8,
            span: 1,
            href: '/services/lead-management',
        },
    ];

    return (
        <section className='bg-white'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {tiles.map((tile) => (
                    <Link
                        href={tile.href}
                        key={tile.id}
                        className={`relative rounded-xl overflow-hidden h-[280px] block ${
                            tile.span === 2 ? 'sm:col-span-2' : ''
                        } group`} // Fixed: Added space before 'group'
                    >
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-75'
                            width={400}
                            height={280}
                        />
                        <div className='absolute bottom-4 left-4 right-4'>
                            <div className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/10'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-white font-semibold text-sm'>{tile.title}</p>
                                    <p className='text-white font-semibold text-sm'>
                                        {tile.category}
                                    </p>
                                </div>
                                <div className='px-2 py-2 bg-white rounded-full transition-transform duration-300 group-hover:rotate-45'>
                                    <MoveUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className='text-center mt-10'>
                <Link
                    href='/services'
                    className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 mx-auto w-fit'
                >
                    View All
                    <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
                </Link>
            </div>
        </section>
    );
}

export default ServiceCategory;
