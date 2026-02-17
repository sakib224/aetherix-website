'use client';
import { servicesData } from '@/data/service-data';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const imageVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

const cardContentVariants = {
    hover: {
        y: -5,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

const iconVariants = {
    hover: {
        rotate: 45,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

const buttonVariants = {
    initial: {
        scale: 1,
        boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
    },
    hover: {
        scale: 1.05,
        boxShadow: '0 10px 25px -5px rgba(0, 42, 87, 0.4)',
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
    tap: {
        scale: 0.98,
    },
};

function OfferSection({ ctaButton }) {
    const displayedServices = ctaButton ? servicesData.slice(0, 5) : servicesData;

    return (
        <motion.section
            className='py-20  container'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-50px' }}
        >
            {ctaButton && (
                <motion.div
                    className='flex justify-between items-center gap-2 flex-wrap'
                    variants={itemVariants}
                >
                    <div>
                        <motion.p
                            className='text-base text-[#9ca3af] uppercase font-semibold'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Global
                        </motion.p>
                        <motion.h2
                            className='text-3xl text-[#475569] font-bold mb-2'
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            What We Offer
                        </motion.h2>
                    </div>
                    <motion.div
                       className='text-slate-600 max-w-2xl text-lg leading-relaxed'
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Our highly qualified global team is uniquely qualified to deliver
                        high-performance sustainable landmark buildings through our integrated suite
                    </motion.div>
                </motion.div>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {displayedServices.map((tile, index) => (
                    <Link
                        href={`/services/${tile.slug}`}
                        key={tile.id}
                        className={`relative rounded-xl overflow-hidden h-[280px] ${
                            tile.span === 2 ? 'sm:col-span-2' : ''
                        } group`}
                    >
                        <div className='w-full h-full'>
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
                                        <p className='text-white font-semibold text-sm'>
                                            {tile.title}
                                        </p>
                                        <p className='text-white font-semibold text-sm'>
                                            {tile.category}
                                        </p>
                                    </div>
                                    <div className='px-2 py-2 bg-white rounded-full transition-transform duration-300 group-hover:rotate-45'>
                                        <MoveUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {ctaButton && (
                <div className='text-center mt-10'>
                    <Link
                        href='/services'
                        className='group relative px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-500 ease-out transform hover:scale-105 focus:outline-none focus:scale-105 text-gray-200 bg-[#002a57]'
                    >
                        <span className='relative z-10 inline-flex items-center gap-2'>
                            View All
                            <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
                        </span>

                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100' />

                        <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100' />
                    </Link>
                </div>
            )}
        </motion.section>
    );
}

export default OfferSection;
