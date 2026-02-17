'use client';
import mission from '@/assets/mission_vission/mission.jpg';
import vision from '@/assets/mission_vission/vision.jpg';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import CircularImageSection from '../global/CircularImageSection';

function GlobalSection() {
    const youtubeVideoId = 'Hu4Yvq-g7_Y';
    const pathname = usePathname();

    const isHomePage = pathname === '/' || pathname === '/home';

    return (
        <>
            <section className={` container ${isHomePage ? 'py-10 md:py-20' : ''}`}>
                {isHomePage && (
                    <motion.div
                        className='flex justify-between items-center gap-2 flex-wrap'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <motion.p
                                className='text-base text-[#9ca3af] uppercase font-semibold'
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Global
                            </motion.p>
                            <motion.h2
                                className='text-3xl font-bold mb-2'
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                About Global
                            </motion.h2>
                        </div>
                        <motion.div
                            className='text-[#475569] max-w-2xl'
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Our global team of seasoned software engineers and marketing strategists
                            delivers high-performance, sustainable digital solutions and data-driven
                            growth through a seamlessly integrated service suite.
                        </motion.div>
                    </motion.div>
                )}
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
                            image1={mission}
                            image2={vision}
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
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                Mission and Vision
                            </motion.div>
                            <motion.div
                                className='text-gray-600 leading-relaxed mb-6'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                To empower businesses with custom-built software solutions and
                                data-driven digital marketing strategies that deliver measurable
                                growth, enhance operational efficiency, and create long-term value.
                            </motion.div>
                            <motion.div
                                className='text-gray-600 leading-relaxed mb-6'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                To become a globally trusted leader in digital
                                transformation—recognized for innovation, technical excellence, and
                                the meaningful results we achieve for every client.
                            </motion.div>
                            {/* <motion.div
                                className='text-center mt-10'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
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
}

export default GlobalSection;
