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

const ProductDetails = ({ product }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedTab, setSelectedTab] = useState('overview');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Use product data to create slides
    const heroSlides = product ? [
        {
            title: product.bannerTitle || product.name,
            subtitle: product.bannerSubtitle || product.description,
            image: product.bannerImage || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
            cta: 'Get Started',
            highlight: product.category || 'Featured Product',
        },
        {
            title: `Experience ${product.name}`,
            subtitle: product.features?.[0]?.description || 'Discover amazing features',
            image: product.bannerImage2 || product.bannerImage || 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
            cta: 'View Demo',
            highlight: product.tags?.[0] || 'Key Feature',
        },
        {
            title: `Why Choose ${product.name}`,
            subtitle: product.ctaText || 'Join satisfied customers using our solution',
            image: product.bannerImage3 || product.bannerImage || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
            cta: 'Explore Features',
            highlight: product.status || 'Live Now',
        },
    ] : [];

    // Use product features or fallback
    const features = product?.features ? product.features.map(f => ({
        icon: getIconForFeature(f.icon),
        title: f.title,
        description: f.description,
    })) : [
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

    // Helper function to get icon component based on icon name
    function getIconForFeature(iconName) {
        const icons = {
            'performance': <Zap className='w-6 h-6' />,
            'mobile': <Download className='w-6 h-6' />,
            'server': <FileText className='w-6 h-6' />,
            'api': <Globe className='w-6 h-6' />,
            'security': <Shield className='w-6 h-6' />,
            'cloud': <Heart className='w-6 h-6' />,
            default: <Zap className='w-6 h-6' />,
        };
        return icons[iconName] || icons.default;
    }

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
        { icon: <Users className='w-8 h-8' />, number: '250+', label: 'Companies' },
        { icon: <Download className='w-8 h-8' />, number: '15K+', label: 'Daily Users' },
        { icon: <Trophy className='w-8 h-8' />, number: '99.8%', label: 'Uptime' },
        { icon: <Globe className='w-8 h-8' />, number: '12+', label: 'Countries' },
    ];

    const testimonials = [
        {
            name: 'James Wilson',
            role: 'Fleet Manager',
            content:
                'This product has transformed our operations. We reduced costs by 35% and increased customer satisfaction significantly.',
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
            role: 'CTO',
            content:
                'Implementation was seamless, and the customer support has been exceptional throughout our journey.',
            rating: 5,
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
        },
    ];

    useEffect(() => {
        if (heroSlides.length > 0) {
            const timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [heroSlides.length]);

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

    if (!product) {
        return <div className='flex justify-center items-center h-screen'>Loading...</div>;
    }

    return (
        <>
            {/* Hero Section with Dynamic Slides */}
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
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'
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

            {/* Stats Section */}
            <motion.section
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                variants={staggerChildren}
                className='py-20 bg-gray-50'
            >
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {stats.map((stat, index) => (
                            <motion.div key={index} variants={fadeIn} className='text-center group'>
                                <div className='inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform'>
                                    <div className='text-primary-600'>{stat.icon}</div>
                                </div>
                                <div className='text-3xl font-bold text-gray-900 mb-2'>
                                    {stat.number}
                                </div>
                                <div className='text-gray-600'>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Main Content Section */}
            <section className='py-20 bg-gray-50'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>

                        {/* Project Details Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className='lg:col-span-1 self-start lg:sticky lg:top-24 bg-[#FFFFFF] rounded-2xl p-8 '
                        >
                            <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                                Project Details
                            </h2>

                            <div className='space-y-4'>
                                {/* Client */}
                                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                                    <span className='text-gray-600 flex items-center'>
                                        <FileText className='w-4 h-4 mr-2' /> Client
                                    </span>
                                    <span className='font-semibold text-gray-900'>
                                        {product.client || product.name}
                                    </span>
                                </div>

                                {/* Category */}
                                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                                    <span className='text-gray-600 flex items-center'>
                                        <Palette className='w-4 h-4 mr-2' /> Category
                                    </span>
                                    <span className='font-semibold text-gray-900'>
                                        {product.category}
                                    </span>
                                </div>

                                {/* Date */}
                                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                                    <span className='text-gray-600 flex items-center'>
                                        <Clock className='w-4 h-4 mr-2' /> Date
                                    </span>
                                    <span className='font-semibold text-gray-900'>
                                        {product.date || '2024'}
                                    </span>
                                </div>

                                {/* Status */}
                                <div className='flex justify-between items-center py-3'>
                                    <span className='text-gray-600 flex items-center'>
                                        <Shield className='w-4 h-4 mr-2' /> Status
                                    </span>
                                    <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold'>
                                        {product.status || 'Live'}
                                    </span>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className='mt-8 space-y-3'>
                                {product.demoUrl && (
                                    <a
                                        href={product.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-full flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-full transition-colors'
                                    >
                                        <Play className='w-4 h-4 mr-2' /> View Live Demo
                                    </a>
                                )}
                                {product.websiteUrl && (
                                    <a
                                        href={product.websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-full transition-colors'
                                    >
                                        <Globe className='w-4 h-4 mr-2' /> Visit Website
                                    </a>
                                )}
                            </div>

                            {/* Tags */}
                            {/* {product.tags && (
                                <div className='mt-8'>
                                    <h3 className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3'>
                                        Tags
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {product.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )} */}
                        </motion.div>

                        {/* Main Description */}
                        <div className='lg:col-span-2'>
                            <motion.div
                                variants={fadeIn}
                                className='bg-white rounded-2xl p-6 border border-gray-100'
                            >
                                <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                    {product.name}
                                </h2>
                                <div className='prose prose-lg text-gray-700 space-y-6'>
                                    {/* Description */}
                                    <p>{product.description}</p>

                                    {/* The Problem */}
                                    {product.problem && (
                                        <div className='bg-secondary-50 border-l-4 border-secondary-400 p-6 rounded-r-xl'>
                                            <div className='text-xl font-semibold text-secondary-800 mb-3 flex items-center'>
                                                <X className='w-5 h-5 mr-2' /> The Problem
                                            </div>
                                            <div className='text-secondary-700'>
                                                {product.problem}
                                            </div>
                                        </div>
                                    )}

                                    {/* The Solution */}
                                    {product.solution && (
                                        <div className='bg-primary-50 border-l-4 border-primary-400 p-6 rounded-r-xl'>
                                            <div className='text-xl font-semibold text-primary-800 mb-3 flex items-center'>
                                                <CheckCircle className='w-5 h-5 mr-2 text-[#002a57]' /> The Solution
                                            </div>
                                            <div className='text-primary-700'>
                                                {product.solution}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Key Features (Full Width) */}
                    <div className='lg:col-span-2 space-y-12'>
                        {/* Key Features */}
                        {product.features && product.features.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='p-8 mt-18'
                            >
                                <h2 className='text-3xl font-bold text-gray-900 mb-6 text-start'>
                                    Key Features
                                </h2>
                                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-6'>
                                    {product.features.map((feature, index) => (
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
                        )}

                        {/* Technology Stack */}
                        {product.techStack && product.techStack.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='mt-18 p-8'
                            >
                                <h2 className='text-3xl font-bold text-gray-900 mb-6 text-start'>
                                    Technology Stack
                                </h2>
                                <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6'>
                                    {product.techStack.map((tool, index) => (
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
                        )}

                        {/* Specifications */}
                        {product.specifications && product.specifications.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className='mt-18 p-8'
                            >
                                <h2 className='text-3xl font-bold text-gray-900 mb-6 text-start'>
                                    Business Impact
                                </h2>
                                <div className='grid md:grid-cols-2 gap-8'>
                                    {product.specifications.map((spec, index) => (
                                        <div key={index}>
                                            <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                                                {spec.category}
                                            </h3>
                                            <ul className='space-y-4'>
                                                {spec.items.map((item, idx) => (
                                                    <li key={idx} className='flex flex-col text-gray-600'>
                                                        <div className='flex items-center mb-1'>
                                                            <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />
                                                            <span className='font-medium'>{item.percentage}</span>
                                                        </div>
                                                        <p className='ml-8 text-gray-500'>{item.description}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
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