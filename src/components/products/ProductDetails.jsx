'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    Star,
    Download,
    Users,
    Zap,
    Shield,
    Palette,
    FileText,
    CheckCircle,
    ArrowRight,
    Play,
    Sparkles,
    Trophy,
    Clock,
    Globe,
    Heart,
    Share2,
    X,
    Menu,
} from 'lucide-react';

const ProductDetails = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedTab, setSelectedTab] = useState('overview');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const heroSlides = [
        {
            title: 'Streamline Your Transportation Business',
            subtitle:
                'Comprehensive fleet management and booking system for modern transport companies',
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
            cta: 'Get Started',
            highlight: 'All-in-One Solution',
        },
        {
            title: 'Real-Time Fleet Tracking',
            subtitle: 'Monitor your vehicles, optimize routes, and improve operational efficiency',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
            cta: 'View Demo',
            highlight: 'Live GPS Tracking',
        },
        {
            title: 'Seamless Booking Experience',
            subtitle:
                'Offer your customers an intuitive booking platform with multiple payment options',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
            cta: 'Explore Features',
            highlight: 'Customer Portal',
        },
    ];

    const features = [
        {
            icon: <Users className='w-6 h-6' />,
            title: 'Fleet Management',
            description: 'Manage vehicles, drivers, maintenance schedules, and operational costs',
        },
        {
            icon: <Zap className='w-6 h-6' />,
            title: 'Real-Time Tracking',
            description: 'Live GPS tracking with route optimization and ETA predictions',
        },
        {
            icon: <FileText className='w-6 h-6' />,
            title: 'Booking System',
            description: 'Online reservations with seat selection and multiple payment options',
        },
        {
            icon: <Shield className='w-6 h-6' />,
            title: 'Safety & Compliance',
            description: 'Driver monitoring, maintenance alerts, and regulatory compliance tools',
        },
    ];

    const tools = [
        {
            name: 'React',
            logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            color: 'bg-blue-100',
        },
        {
            name: 'Node.js',
            logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
            color: 'bg-green-100',
        },
        {
            name: 'MongoDB',
            logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
            color: 'bg-green-100',
        },
        {
            name: 'AWS',
            logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
            color: 'bg-orange-100',
        },
    ];

    const stats = [
        { icon: <Users className='w-8 h-8' />, number: '250+', label: 'Transport Companies' },
        { icon: <Download className='w-8 h-8' />, number: '15K+', label: 'Daily Bookings' },
        { icon: <Trophy className='w-8 h-8' />, number: '99.8%', label: 'Uptime' },
        { icon: <Globe className='w-8 h-8' />, number: '12+', label: 'Countries' },
    ];

    const testimonials = [
        {
            name: 'James Wilson',
            role: 'Fleet Manager',
            content:
                'Roketbus has transformed our operations. We reduced empty seats by 35% and increased customer satisfaction significantly.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        },
        {
            name: 'Maria Rodriguez',
            role: 'Operations Director',
            content:
                'The real-time tracking and maintenance scheduling features have saved us countless hours and reduced downtime by 40%.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop&crop=face',
        },
        {
            name: 'Thomas Chen',
            role: 'CTO, Transit Solutions',
            content:
                'Implementation was seamless, and the customer support has been exceptional throughout our journey.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    // Animation variants
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <>
            <section className='relative h-screen overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10'></div>
                <AnimatePresence mode='wait'>
                    {heroSlides.map(
                        (slide, index) =>
                            index === currentSlide && (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className='absolute inset-0'
                                >
                                    <div
                                        className='w-full h-full bg-cover bg-center bg-no-repeat'
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    ></div>
                                </motion.div>
                            )
                    )}
                </AnimatePresence>

                <div className='relative z-20 h-full flex items-center'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
                        <div className='max-w-3xl'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className='inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white mb-6'
                            >
                                <Sparkles className='w-4 h-4 mr-2' />
                                {heroSlides[currentSlide].highlight}
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className='text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'
                            >
                                {heroSlides[currentSlide].title}
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className='text-xl text-white/90 mb-8 leading-relaxed max-w-2xl'
                            >
                                {heroSlides[currentSlide].subtitle}
                            </motion.div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={prevSlide}
                    className='absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-all'
                >
                    <ChevronLeft className='w-6 h-6' />
                </button>
                <button
                    onClick={nextSlide}
                    className='absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-all'
                >
                    <ChevronRight className='w-6 h-6' />
                </button>

                <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2'>
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white flex flex-col items-center'
                >
                    <span className='text-sm mb-2'>Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ChevronDown className='w-6 h-6' />
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                variants={staggerChildren}
                className='py-12.5 container'
            >
                <div className='px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {stats.map((stat, index) => (
                            <motion.div key={index} variants={fadeIn} className='text-center group'>
                                <div className='inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl mb-4 group-hover:scale-110 transition-transform border border-white/20'>
                                    <div className='text-white'>{stat.icon}</div>
                                </div>
                                <div className='text-3xl font-bold text-gray-900 mb-2'>
                                    {stat.number}
                                </div>
                                <div className='text-gray-700'>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <section className='py-12.5'>
                <div className='container '>
                    <motion.section
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeIn}
                        className='py-12.5 '
                    >
                        <div className=''>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                                <motion.div
                                    variants={fadeIn}
                                    className='lg:col-span-1 bg-white rounded-2xl p-6  border border-gray-100'
                                >
                                    <div className='text-2xl font-bold text-gray-900 mb-6'>
                                        Project Details
                                    </div>
                                    <div className='space-y-4'>
                                        <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                                            <span className='text-gray-600 flex items-center'>
                                                <FileText className='w-4 h-4 mr-2' />
                                                Client
                                            </span>
                                            <span className='font-semibold text-gray-900'>
                                                Roketbus
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                                            <span className='text-gray-600 flex items-center'>
                                                <Palette className='w-4 h-4 mr-2' />
                                                Category
                                            </span>
                                            <span className='font-semibold text-gray-900'>
                                                Transportation Software
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                                            <span className='text-gray-600 flex items-center'>
                                                <Clock className='w-4 h-4 mr-2' />
                                                Date
                                            </span>
                                            <span className='font-semibold text-gray-900'>
                                                March 15, 2022
                                            </span>
                                        </div>
                                        <div className='flex justify-between items-center py-3'>
                                            <span className='text-gray-600 flex items-center'>
                                                <Shield className='w-4 h-4 mr-2' />
                                                Status
                                            </span>
                                            <span className='bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold'>
                                                Live
                                            </span>
                                        </div>
                                    </div>

                                    <div className='mt-8 space-y-3'>
                                        <button className='relative group w-full flex items-center justify-center bg-[#002a57] hover:bg-primary text-white py-3 px-4 rounded-full transition-colors cursor-pointer'>
                                            <Play className='w-4 h-4 mr-2' /> View Live Demo
                                            {/* Animated background */}
                                            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100' />
                                            {/* Glow effect */}
                                            <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100' />
                                        </button>
                                        <button className='relative group w-full flex items-center justify-center bg-[#002a57] hover:bg-primary text-white py-3 px-4 rounded-full transition-colors cursor-pointer'>
                                            <Globe className='w-4 h-4 mr-2' /> Visit Website
                                            {/* Animated background */}
                                            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100' />
                                            {/* Glow effect */}
                                            <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100' />
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeIn}
                                    className='lg:col-span-2 bg-white rounded-2xl p-6  border border-gray-100'
                                >
                                    <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                        Modern Transportation Management
                                    </h2>
                                    <div className='prose prose-lg text-gray-700 space-y-6'>
                                        <p>
                                            Roketbus is a comprehensive transportation management
                                            platform designed to streamline operations for bus
                                            companies, shuttle services, and transit authorities.
                                            Our software provides end-to-end solutions for fleet
                                            management, booking systems, and passenger experience
                                            enhancement.
                                        </p>

                                        <div className='bg-secondary-50 border-l-4 border-secondary-400 p-6 rounded-r-xl'>
                                            <div className='text-xl font-semibold text-secondary-800 mb-3 flex items-center'>
                                                <X className='w-5 h-5 mr-2' /> The Problem
                                            </div>
                                            <div className='text-secondary-700'>
                                                Transportation companies face numerous challenges
                                                including inefficient route planning, poor vehicle
                                                utilization, manual booking processes, lack of
                                                real-time tracking, and difficulty maintaining
                                                regulatory compliance. These inefficiencies lead to
                                                increased operational costs and reduced customer
                                                satisfaction.
                                            </div>
                                        </div>

                                        <div className='bg-primary-50 border-l-4 border-primary-400 p-6 rounded-r-xl'>
                                            <div className='text-xl font-semibold text-primary-800 mb-3 flex items-center'>
                                                <CheckCircle className='w-5 h-5 mr-2 text-[#002a57]' />{' '}
                                                The Solution
                                            </div>
                                            <div className='text-primary-700'>
                                                Roketbus provides an integrated platform that
                                                automates operations, optimizes routes in real-time,
                                                offers a seamless booking experience for customers,
                                                ensures regulatory compliance, and provides
                                                actionable insights through advanced analytics. Our
                                                system increases operational efficiency by up to 40%
                                                and improves customer satisfaction scores
                                                significantly.
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    <div className='lg:col-span-2 space-y-12 '>
                        <motion.div
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true, margin: '-100px' }}
                            variants={fadeIn}
                            className='bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 '
                        >
                            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                Powerful Features
                            </h2>
                            <div className='grid sm:grid-cols-2 gap-6'>
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className='group'
                                    >
                                        <div className='bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:shadow-xl transition-all group-hover:border-blue-200/30'>
                                            <div className='w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-4'>
                                                {feature.icon}
                                            </div>
                                            <div className='text-xl font-semibold text-gray-900 mb-2'>
                                                {feature.title}
                                            </div>
                                            <div className='text-gray-700'>
                                                {feature.description}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true, margin: '-100px' }}
                            variants={fadeIn}
                            className='bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 '
                        >
                            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                Technology Stack
                            </h2>
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className='flex flex-col items-center p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 hover:shadow-xl transition-all'
                                    >
                                        <div
                                            className={`w-16 h-16 ${tool.color} rounded-xl flex items-center justify-center p-3 mb-3`}
                                        >
                                            <img
                                                src={tool.logo}
                                                alt={tool.name}
                                                className='w-full h-full object-contain'
                                            />
                                        </div>
                                        <span className='font-medium text-gray-900 text-center'>
                                            {tool.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true, margin: '-100px' }}
                            variants={fadeIn}
                            className='bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 '
                        >
                            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                Business Impact
                            </h2>
                            <div className='space-y-6'>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='w-6 h-6 text-[#002a57] mt-1' />
                                    <div>
                                        <div className='font-semibold text-gray-900'>
                                            40% Reduction in Operational Costs
                                        </div>
                                        <div className='text-gray-700'>
                                            Automated scheduling and route optimization
                                            significantly reduce fuel consumption and labor costs.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='w-6 h-6 text-[#002a57] mt-1' />
                                    <div>
                                        <div className='font-semibold text-gray-900'>
                                            35% Increase in Vehicle Utilization
                                        </div>
                                        <div className='text-gray-700'>
                                            Real-time booking and dynamic routing maximize fleet
                                            efficiency and reduce empty seats.
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start space-x-3'>
                                    <CheckCircle className='w-6 h-6 text-[#002a57] mt-1' />
                                    <div>
                                        <div className='font-semibold text-gray-900'>
                                            45% Improvement in Customer Satisfaction
                                        </div>
                                        <div className='text-gray-700'>
                                            Reliable ETAs, easy booking, and real-time tracking
                                            enhance the passenger experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

const ChevronDown = ({ className }) => (
    <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
    </svg>
);

export default ProductDetails;
