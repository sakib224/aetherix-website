'use client';

import { motion } from 'framer-motion';
import OfferSection from '../home/OfferSection';
/* import ServiceCategory from './ServiceCategory'; */

const Services = () => {
    return (
        <>
            <div className='  mb-10'>
                <section className='relative w-full min-h-screen container flex items-center justify-center overflow-hidden'>
                    {/* Background Image with Overlay */}

                    {/* Animated Background Elements */}
                    <div className='absolute inset-0 z-0'>
                        <div className='absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl'></div>
                        <div className='absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 to-transparent rounded-full blur-3xl'></div>
                    </div>

                    {/* Content Container */}
                    <div className='container relative z-10 py-32'>
                        <motion.div
                            className='max-w-3xl mx-auto lg:mx-0 lg:max-w-2xl'
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className='text-xl md:text-2xl lg:text-4xl font-bold text-black leading-tight mb-6'
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Our{' '}
                                <span className='relative'>
                                    Services
                                    <div className='absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full'></div>
                                </span>
                            </motion.h1>

                            {/* Subheading */}
                            <motion.p
                                className='text-lg md:text-xl text-gray-900 mb-10 leading-relaxed'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                Aetherix Limited is where ambitious ideas become real products —
                                beautifully designed, expertly engineered, and ready to scale. We
                                don’t just <strong>“deliver projects.”</strong> We partner with you
                                to create solutions that solve real problems and drive real growth.
                                From custom software to <strong>web & mobile apps</strong>,
                                <strong>UI/UX</strong> , <strong>cloud/DevOps</strong>, and
                                <strong> marketing strategy</strong>, our team brings everything you
                                need to launch, improve, and grow — under one roof. Your idea
                                deserves more than a basic build. Think big. We’ll handle the tech,
                                design, and growth
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                        className='absolute bottom-20 right-20 hidden lg:block'
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <div className='w-48 h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl rotate-12 backdrop-blur-sm border border-white/10'></div>
                    </motion.div>
                </section>
                <OfferSection ctaButton={false} />
            </div>
        </>
    );
};

export default Services;
