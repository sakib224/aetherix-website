'use client';
import diverse from '@/assets/about/diverse.jpg';
import governance1 from '@/assets/about/governance1.jpeg';
import governance2 from '@/assets/about/governance2.jpeg';
import meeting from '@/assets/about/meeting.jpg';
import { motion } from 'framer-motion';
import { Brain, Handshake, Radar, Shrub } from 'lucide-react';
import { usePathname } from 'next/navigation';
import CircularImageSection from '../global/CircularImageSection';
import GlobalSection from '../home/GlobalSection';
import aboutSmallImage from '@/assets/about/about_small_img.png';
import Image from 'next/image';

const About = () => {
    const youtubeVideoId = 'Hu4Yvq-g7_Y';
    const pathname = usePathname();

    const isHomePage = pathname === '/' || pathname === '/home';

    if (isHomePage) {
        return <GlobalSection />;
    }

    return (
        <>
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
                        {/* Main Heading */}
                        <motion.h1
                            className='text-xl md:text-2xl lg:text-4xl font-bold text-black leading-tight mb-6'
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Who We{' '}
                            <span className='relative'>
                                Are
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
                            Aetherix Limited is a forward-thinking technology company that helps
                            businesses grow through custom software development, automation, and
                            strategic digital solutions. We focus on one goal: transforming business
                            challenges into scalable digital systems that deliver measurable
                            results. With a combination of technical expertise and business insight,
                            we build products that are not only functional—but drive efficiency,
                            reduce operational costs, and accelerate growth. Whether you’re a
                            startup, SME, or enterprise, we ensure every solution aligns with your
                            long-term business vision.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    className='absolute bottom-20 right-20 hidden lg:block'
                    // animate={{ y: [0, -20, 0] }}
                    // transition={{ duration: 3, repeat: Infinity }}
                >                    
                    <div className="w-48 h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl rotate-12 backdrop-blur-sm border border-white/10 overflow-hidden">
                        <Image
                            src={aboutSmallImage}
                            alt='Offer 1'
                            fill
                            className='w-full h-full object-cover'
                        />
                    </div>

                </motion.div>
            </section>
            <GlobalSection />

            <section className='container'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                    {/* Content Section */}
                    <div className='flex-1 min-w-0 flex'>
                        <motion.div
                            className='bg-white p-6 md:p-8 rounded-2xl max-w-2xl w-full'
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Core Values
                            </motion.div>
                            <motion.div
                                className='text-gray-600 leading-relaxed mb-6'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                We are driven by innovation, integrity, and a deep commitment to
                                excellence. We prioritize our clients’ needs through a
                                customer-centric approach and foster collaboration within diverse
                                and inclusive teams. .
                            </motion.div>
                            <div className='flex gap-4'>
                                <motion.div
                                    className='flex flex-row flex-nowrap  text-[#475569] items-center bg-gray-200 p-4 gap-2 rounded-3xl w-full'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className='p-2 text-[#475569] bg-white rounded-full'
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Brain className='text-secondary' />
                                    </motion.div>
                                    <div className='font-semibold text-[#475569] text-sm'>Intigrity</div>
                                </motion.div>
                                <motion.div
                                    className='flex flex-row flex-nowrap  items-center bg-secondary-100 p-4 gap-2 rounded-3xl w-full'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className='p-2 bg-white rounded-full'
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Shrub className='text-secondary' />
                                    </motion.div>
                                    <div className='font-semibold text-[#475569] text-sm'>
                                        Diverse and Inclusive
                                    </div>
                                </motion.div>
                            </div>
                            <div className='flex gap-4 py-4'>
                                <motion.div
                                    className='flex flex-row flex-nowrap text-[#475569]  items-center bg-secondary-100  p-4 gap-2 rounded-3xl w-full'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className='p-2 bg-white rounded-full'
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Handshake className='text-secondary' />
                                    </motion.div>
                                    <div className='font-semibold text-[#475569] text-sm'>Collaborative</div>
                                </motion.div>
                                <motion.div
                                    className='flex flex-row flex-nowrap  items-center  bg-gray-200 p-4 gap-2 rounded-3xl w-full'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        className='p-2 bg-white rounded-full'
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Radar className='text-secondary' />
                                    </motion.div>
                                    <div className='font-semibold text-[#475569] text-sm'>Effective</div>
                                </motion.div>
                            </div>
                            {/* <motion.div
                                className='text-center mt-10'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                <motion.button
                                    className='group relative px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-500 ease-out transform hover:scale-105 focus:outline-none focus:scale-105 text-white bg-[#002a57] border border-white/20 flex items-center gap-2 cursor-pointer'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className='relative z-10'>Read More</span>
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <MoveRight className='relative z-10 w-4 h-4' />
                                    </motion.span>


                                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100' />


                                    <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100' />
                                </motion.button>
                            </motion.div> */}
                        </motion.div>
                    </div>
                    {/* Images Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <CircularImageSection
                            youtubeVideoId={youtubeVideoId}
                            image1={meeting}
                            image2={diverse}
                        />
                    </motion.div>
                </div>
            </section>
            <section className='pb-10 md:pb-20 container'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8 items-center'>
                    {/* Images Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <CircularImageSection
                            youtubeVideoId={youtubeVideoId}
                            image1={governance1}
                            image2={governance2}
                        />
                    </motion.div>

                    {/* Content Section */}
                    <div className='flex-1 min-w-0 flex'>
                        <motion.div
                            className='bg-white p-6 md:p-8 rounded-2xl max-w-2xl w-full'
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Corporate Governance
                            </motion.div>
                            <motion.div
                                className='text-gray-600 leading-relaxed mb-6'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                At Aetherix Limited, we are committed to strong corporate governance
                                that balances accountability, transparency, and ethical
                                decision-making. Our leadership, processes, and policies are
                                designed to ensure responsible management, protect stakeholder
                                interests, and drive sustainable growth.
                            </motion.div>
                            <motion.div
                                className='text-gray-600 leading-relaxed mb-6'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                We uphold clear structures, maintain open communication, and follow
                                industry best practices—ensuring that every business decision aligns
                                with our mission, values, and commitment to excellence.
                            </motion.div>
                            {/* <motion.div
                                className='text-center mt-10'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <motion.button
                                    className='group relative px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-500 ease-out transform hover:scale-105 focus:outline-none focus:scale-105 text-white bg-[#002a57] border border-white/20 flex items-center gap-2 cursor-pointer'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className='relative z-10'>Read More</span>
                                    <motion.span
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <MoveRight className='relative z-10 w-4 h-4' />
                                    </motion.span>


                                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100' />


                                    <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100' />
                                </motion.button>
                            </motion.div> */}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
