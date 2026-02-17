'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RightContent from './HeroImageSection';

const Bubble = ({ size, left, delay, duration }) => {
    return (
        <motion.div
            className='absolute rounded-full bg-white backdrop-blur-sm'
            style={{
                width: size,
                height: size,
                left: `${left}%`,
                bottom: '-10%',
            }}
            initial={{ y: 0, opacity: 0, scaleY: 1, scaleX: 1 }}
            animate={{
                y: -1200,
                opacity: [0, 0.5, 0.5, 0],
                scaleY: [1, 0.8, 1.2, 1],
                scaleX: [1, 1.2, 0.8, 1],
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
            }}
        />
    );
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 18,
            stiffness: 100,
            ease: 'easeOut',
            duration: 0.8,
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.1,
        },
    },
};

function HeroSection() {
    return (
        <section className='animated-gradient-diagonal-herosection overflow-hidden'>
            <div className='container  min-h-screen flex flex-col lg:flex-row justify-between items-center text-white relative z-10 py-16'>
                {/* Left Side */}
                <motion.div
                    className='max-w-xl space-y-6 z-10 text-center lg:text-left mb-10 lg:mb-0'
                    variants={stagger}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div
                        className='hidden md:flex items-center gap-2 justify-center lg:justify-start'
                        variants={fadeInUp}
                    >
                        <div className='h-0.5 w-8 bg-[#d1d5db] rounded-full'></div>
                        <div className='text-sm text-[#d1d5db] font-bold'>SOFTWARE & MARKETING EXPERTS</div>
                        <div className='h-0.5 w-8 bg-[#d1d5db] rounded-full'></div>
                    </motion.div>

                    <motion.h1
                        className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'
                        variants={fadeInUp}
                    >
                    Transforming Your <br />
                        <span className='bg-[#00e0d0] rounded-xl px-2 py-1 inline-block mt-2'>
                            Vision
                        </span>{' '}
                        into Scalable Digital Solutions
                    </motion.h1>

                    <motion.p className='text-sm sm:text-base text-white/80' variants={fadeInUp}>
                        Our dedicated team of software engineers and digital marketers partners with you to build robust applications, craft data-driven campaigns, and accelerate growth across every channel.
                    </motion.p>

                    <motion.div
                        className='flex justify-center lg:justify-start'
                        variants={fadeInUp}
                    >
                        <Link className='bg-white text-[#002a57] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors' href="/contact">
                            Contact Us
                            <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
                        </Link>
                    </motion.div>
                </motion.div>

                <RightContent />
            </div>
        </section>
    );
}

export default HeroSection;
