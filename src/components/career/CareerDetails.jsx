'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
    AlertCircle,
    ArrowLeft,
    Award,
    Building,
    Calendar,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Clock,
    FileText,
    Globe,
    Heart,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Upload,
    User,
    Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Animation variants
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
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 90,
            damping: 15,
        },
    },
    hover: {
        y: -4,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 25,
        },
    },
};

const CareerDetails = ({ jobListings }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        startDate: '',
        portfolio: '',
        linkedIn: '',
    });

    const [cvFile, setCvFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [showOptionalFields, setShowOptionalFields] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [timeRemaining, setTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        total: 0,
    });
    const jobDetails = jobListings;
    const calculateDeadline = () => {
        const deadlineStr = jobDetails.deadline;

        if (!deadlineStr) {
            console.error('No deadline provided');
            return new Date(); // Return current date as fallback
        }

        try {
            // Parse DD-MM-YYYY format
            const [day, month, year] = deadlineStr.split('-').map((num) => parseInt(num, 10));

            // Create date at end of the day (23:59:59) in local timezone
            const deadlineDate = new Date(year, month - 1, day, 23, 59, 59, 999);

            // Validate the date
            if (isNaN(deadlineDate.getTime())) {
                throw new Error('Invalid date');
            }

            return deadlineDate;
        } catch (error) {
            console.error('Error parsing deadline:', error);
            // Fallback: 7 days from now
            const fallbackDate = new Date();
            fallbackDate.setDate(fallbackDate.getDate() + 7);
            return fallbackDate;
        }
    };

    // Countdown timer effect - FIXED
    useEffect(() => {
        const deadline = calculateDeadline();

        // Debug logging
        console.log('Deadline:', deadline);
        console.log('Current time:', new Date());

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = deadline.getTime() - now;

            console.log('Time remaining (ms):', distance); // Debug log

            if (distance < 0) {
                setTimeRemaining({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    total: 0,
                });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeRemaining({
                days,
                hours,
                minutes,
                seconds,
                total: distance,
            });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, [jobDetails.deadline]); // Changed dependency to jobDetails.deadline

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            validateAndSetFile(file);
        }
    };

    const validateAndSetFile = (file) => {
        if (file.size > 5 * 1024 * 1024) {
            setErrors((prev) => ({ ...prev, cv: 'File size must be less than 5MB' }));
            return;
        }
        if (!file.name.match(/\.(pdf|doc|docx)$/)) {
            setErrors((prev) => ({ ...prev, cv: 'Only PDF, DOC, and DOCX files are allowed' }));
            return;
        }
        setCvFile(file);
        setErrors((prev) => ({ ...prev, cv: '' }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            validateAndSetFile(file);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!cvFile) newErrors.cv = 'CV/Resume is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', { ...formData, cv: cvFile });
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        window.history.back();
    };

    // Company culture stats
    const companyStats = [
        { icon: Users, value: '50+', label: 'Team Members' },
        { icon: Award, value: '4.8/5', label: 'Employee Rating' },
        { icon: Heart, value: '95%', label: 'Retention Rate' },
        { icon: Building, value: '5', label: 'Years Operating' },
    ];

    if (submitted) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center px-4'>
                <motion.div
                    className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <motion.div
                        className='w-20 h-20 bg-green-50 rounded-2xl mx-auto mb-6 flex items-center justify-center'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                        <CheckCircle className='w-10 h-10 text-green-600' />
                    </motion.div>
                    <motion.h2
                        className='text-2xl font-bold text-gray-900 mb-4'
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                    >
                        Application Submitted!
                    </motion.h2>
                    <motion.p
                        className='text-gray-600 mb-6'
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Thank you for applying for the <strong>{jobDetails.title}</strong> position.
                        We've received your application and will review it carefully.
                    </motion.p>
                    <motion.div
                        className='space-y-3'
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <button
                            onClick={handleBack}
                            className='w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200'
                        >
                            Back to Careers
                        </button>
                        <button className='w-full px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200'>
                            Browse Other Positions
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gray-50/60'>
            {/* Header */}
            <div className='bg-white border-b border-gray-200'>
                <div className='container mx-auto px-4 py-8'>
                    <motion.div
                        className='max-w-6xl mx-auto'
                        initial='hidden'
                        animate='visible'
                        variants={containerVariants}
                    >
                        <motion.button
                            onClick={handleBack}
                            className='flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200'
                            variants={itemVariants}
                            whileHover={{ x: -4 }}
                        >
                            <ArrowLeft className='w-5 h-5' />
                            Back to Careers
                        </motion.button>

                        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6'>
                            <div className='flex-1'>
                                <motion.h1
                                    className='text-4xl font-bold text-gray-900 mb-4'
                                    variants={itemVariants}
                                >
                                    {jobDetails.title}
                                </motion.h1>

                                <motion.div
                                    className='flex flex-wrap gap-4 mb-6'
                                    variants={containerVariants}
                                >
                                    <motion.span
                                        className='inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium'
                                        variants={itemVariants}
                                    >
                                        <Building className='w-4 h-4' />
                                        {jobDetails.department}
                                    </motion.span>
                                    <motion.span
                                        className='inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-medium'
                                        variants={itemVariants}
                                    >
                                        <MapPin className='w-4 h-4' />
                                        {jobDetails.location}
                                    </motion.span>
                                    <motion.span
                                        className='inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium'
                                        variants={itemVariants}
                                    >
                                        <Clock className='w-4 h-4' />
                                        {jobDetails.type}
                                    </motion.span>
                                    <motion.span
                                        className='inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-xl text-sm font-medium'
                                        variants={itemVariants}
                                    >
                                        ৳ {jobDetails.salary}
                                    </motion.span>
                                </motion.div>

                                <motion.p
                                    className='text-lg text-gray-600 leading-relaxed'
                                    variants={itemVariants}
                                >
                                    {jobDetails.description}
                                </motion.p>
                            </div>

                            <motion.div className='lg:w-96' variants={itemVariants}>
                                <div className='bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white'>
                                    <div className='flex items-center justify-between mb-3'>
                                        <h3 className='font-semibold'>Apply Now</h3>
                                        {timeRemaining.total > 0 && (
                                            <div className='bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold'>
                                                {String(timeRemaining.days).padStart(2, '0')} DAYS
                                                LEFT
                                            </div>
                                        )}
                                    </div>

                                    {/* Timer Section */}
                                    {timeRemaining.total > 0 ? (
                                        <div className='bg-black/30 rounded-xl p-4'>
                                            <div className='text-center mb-2'>
                                                <div className='text-sm text-gray-300 mb-3'>
                                                    Application closes in
                                                </div>
                                                <div className='flex justify-center gap-2'>
                                                    <div className='text-center'>
                                                        <div className='bg-gray-800 rounded-lg py-2 px-3 text-xl font-bold min-w-[50px]'>
                                                            {String(timeRemaining.days).padStart(
                                                                2,
                                                                '0'
                                                            )}
                                                        </div>
                                                        <div className='text-xs text-gray-400 mt-1'>
                                                            days
                                                        </div>
                                                    </div>
                                                    <div className='text-2xl font-bold text-gray-500 self-start pt-1'>
                                                        :
                                                    </div>
                                                    <div className='text-center'>
                                                        <div className='bg-gray-800 rounded-lg py-2 px-3 text-xl font-bold min-w-[50px]'>
                                                            {String(timeRemaining.hours).padStart(
                                                                2,
                                                                '0'
                                                            )}
                                                        </div>
                                                        <div className='text-xs text-gray-400 mt-1'>
                                                            hours
                                                        </div>
                                                    </div>
                                                    <div className='text-2xl font-bold text-gray-500 self-start pt-1'>
                                                        :
                                                    </div>
                                                    <div className='text-center'>
                                                        <div className='bg-gray-800 rounded-lg py-2 px-3 text-xl font-bold min-w-[50px]'>
                                                            {String(timeRemaining.minutes).padStart(
                                                                2,
                                                                '0'
                                                            )}
                                                        </div>
                                                        <div className='text-xs text-gray-400 mt-1'>
                                                            mins
                                                        </div>
                                                    </div>
                                                    <div className='text-2xl font-bold text-gray-500 self-start pt-1'>
                                                        :
                                                    </div>
                                                    <div className='text-center'>
                                                        <div className='bg-gray-800 rounded-lg py-2 px-3 text-xl font-bold min-w-[50px]'>
                                                            {String(timeRemaining.seconds).padStart(
                                                                2,
                                                                '0'
                                                            )}
                                                        </div>
                                                        <div className='text-xs text-gray-400 mt-1'>
                                                            secs
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : timeRemaining.total === 0 ? (
                                        <div className='bg-red-500/30 rounded-xl p-4 text-center'>
                                            <div className='text-sm text-red-200'>
                                                Application Closed
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='bg-gray-500/30 rounded-xl p-4 text-center'>
                                            <div className='text-sm text-gray-300'>
                                                Calculating...
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='container mx-auto px-4 py-8'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid lg:grid-cols-3 gap-8'>
                        {/* Main Content */}
                        <div className='lg:col-span-2 space-y-8'>
                            {/* Tabs Navigation */}
                            <motion.div
                                className='bg-white rounded-2xl shadow-sm border border-gray-200 p-1'
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className='flex space-x-1'>
                                    {[
                                        'overview',
                                        'responsibilities',
                                        'requirements',
                                        'benefits',
                                    ].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${activeTab === tab
                                                ? 'bg-gray-900 text-white shadow-sm'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                                }`}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tab Content */}
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {activeTab === 'overview' && (
                                        <div className='space-y-6'>
                                            <motion.div
                                                className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'
                                                variants={cardVariants}
                                                whileHover='hover'
                                            >
                                                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                                                    About This Role
                                                </h3>
                                                <p className='text-gray-600 leading-relaxed'>
                                                    {jobDetails.description}
                                                </p>
                                            </motion.div>

                                            {/* Company Culture */}
                                            <motion.div
                                                className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'
                                                variants={cardVariants}
                                                whileHover='hover'
                                            >
                                                <h3 className='text-xl font-semibold text-gray-900 mb-6'>
                                                    Life at Our Company
                                                </h3>
                                                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                                                    {companyStats.map((stat, index) => (
                                                        <motion.div
                                                            key={stat.label}
                                                            className='text-center'
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <div className='w-12 h-12 bg-blue-50 rounded-2xl mx-auto mb-3 flex items-center justify-center'>
                                                                <stat.icon className='w-6 h-6 text-blue-600' />
                                                            </div>
                                                            <div className='text-2xl font-bold text-gray-900 mb-1'>
                                                                {stat.value}
                                                            </div>
                                                            <div className='text-sm text-gray-500'>
                                                                {stat.label}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}

                                    {activeTab === 'responsibilities' && (
                                        <motion.div
                                            className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'
                                            variants={cardVariants}
                                            whileHover='hover'
                                        >
                                            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                                                What You'll Do
                                            </h3>
                                            <ul className='space-y-4'>
                                                {jobDetails.responsibilities.map((item, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className='flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200'
                                                        whileHover={{ x: 4 }}
                                                    >
                                                        <div className='w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0'></div>
                                                        <span className='text-gray-700 leading-relaxed'>
                                                            {item}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                    {activeTab === 'requirements' && (
                                        <motion.div
                                            className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'
                                            variants={cardVariants}
                                            whileHover='hover'
                                        >
                                            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                                                What We're Looking For
                                            </h3>
                                            <ul className='space-y-4'>
                                                {jobDetails.requirements.map((item, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className='flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200'
                                                        whileHover={{ x: 4 }}
                                                    >
                                                        <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                                                        <span className='text-gray-700 leading-relaxed'>
                                                            {item}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                    {activeTab === 'benefits' && (
                                        <motion.div
                                            className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6'
                                            variants={cardVariants}
                                            whileHover='hover'
                                        >
                                            <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                                                What We Offer
                                            </h3>
                                            <div className='grid md:grid-cols-2 gap-4'>
                                                {jobDetails.benefits.map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        className='flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200'
                                                        whileHover={{ scale: 1.02 }}
                                                    >
                                                        <Award className='w-6 h-6 text-blue-500 flex-shrink-0' />
                                                        <span className='text-gray-700'>
                                                            {item}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Application Form */}
                        <div className='lg:col-span-1'>
                            <motion.div
                                id='application-form'
                                className='bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-4'
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h2 className='text-xl font-bold text-gray-900 mb-2'>
                                    Apply for this Position
                                </h2>
                                <p className='text-gray-600 text-sm mb-6'>
                                    Fill out the form below to submit your application.
                                </p>

                                <form onSubmit={handleSubmit} className='space-y-4'>
                                    <div>
                                        <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                            Full Name *
                                        </label>
                                        <div className='relative'>
                                            <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                            <input
                                                type='text'
                                                name='fullName'
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                                                placeholder='John Doe'
                                            />
                                        </div>
                                        {errors.fullName && (
                                            <motion.p
                                                className='text-red-500 text-xs mt-2 flex items-center gap-1'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                <AlertCircle className='w-3 h-3' />
                                                {errors.fullName}
                                            </motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                            Email Address *
                                        </label>
                                        <div className='relative'>
                                            <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                            <input
                                                type='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                                                placeholder='john@example.com'
                                            />
                                        </div>
                                        {errors.email && (
                                            <motion.p
                                                className='text-red-500 text-xs mt-2 flex items-center gap-1'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                <AlertCircle className='w-3 h-3' />
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                            Phone Number *
                                        </label>
                                        <div className='relative'>
                                            <Phone className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                            <input
                                                type='tel'
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                                                placeholder='+880 1XXX-XXXXXX'
                                            />
                                        </div>
                                        {errors.phone && (
                                            <motion.p
                                                className='text-red-500 text-xs mt-2 flex items-center gap-1'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                <AlertCircle className='w-3 h-3' />
                                                {errors.phone}
                                            </motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                            CV/Resume *
                                        </label>
                                        <div className='relative'>
                                            <input
                                                type='file'
                                                accept='.pdf,.doc,.docx'
                                                onChange={handleFileChange}
                                                className='hidden'
                                                id='cv-upload'
                                            />
                                            <motion.label
                                                htmlFor='cv-upload'
                                                onDragOver={handleDragOver}
                                                onDragLeave={handleDragLeave}
                                                onDrop={handleDrop}
                                                className={`flex flex-col items-center justify-center gap-3 w-full p-6 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${isDragging
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : cvFile
                                                        ? 'border-green-500 bg-green-50'
                                                        : 'border-gray-300 bg-gray-50 hover:border-blue-500 hover:bg-blue-50'
                                                    }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FileText
                                                    className={`w-8 h-8 ${isDragging
                                                        ? 'text-blue-500'
                                                        : cvFile
                                                            ? 'text-green-500'
                                                            : 'text-gray-400'
                                                        }`}
                                                />
                                                {cvFile ? (
                                                    <div className='text-center'>
                                                        <span className='text-sm text-gray-700 font-medium block'>
                                                            {cvFile.name}
                                                        </span>
                                                        <span className='text-xs text-gray-500'>
                                                            Click or drag to replace
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className='text-center'>
                                                        <span className='text-sm text-gray-600 font-medium block'>
                                                            {isDragging
                                                                ? 'Drop your file here'
                                                                : 'Click to upload or drag & drop'}
                                                        </span>
                                                        <span className='text-xs text-gray-500'>
                                                            PDF, DOC, DOCX (max 5MB)
                                                        </span>
                                                    </div>
                                                )}
                                            </motion.label>
                                        </div>
                                        {errors.cv && (
                                            <motion.p
                                                className='text-red-500 text-xs mt-2 flex items-center gap-1'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                <AlertCircle className='w-3 h-3' />
                                                {errors.cv}
                                            </motion.p>
                                        )}
                                    </div>

                                    <motion.div
                                        className='pt-4 border-t border-gray-200'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setShowOptionalFields(!showOptionalFields)}
                                            className="flex items-center justify-center w-8 h-8 rounded-md text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 transition"
                                            aria-label="Toggle optional fields"
                                        >
                                            <span >
                                                {showOptionalFields ? <ChevronUp size={20} /> : <ChevronDown size={20} />}

                                            </span>
                                        </button>


                                    </motion.div>

                                    <AnimatePresence>
                                        {showOptionalFields && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className='space-y-4 overflow-hidden'
                                            >
                                                <div>
                                                    <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                                        Cover Letter
                                                    </label>
                                                    <textarea
                                                        name='coverLetter'
                                                        value={formData.coverLetter}
                                                        onChange={handleInputChange}
                                                        rows='4'
                                                        className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none'
                                                        placeholder="Tell us why you're a great fit for this position..."
                                                    />
                                                </div>

                                                <div>
                                                    <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                                        Available Start Date
                                                    </label>
                                                    <div className='relative'>
                                                        <Calendar className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                                        <input
                                                            type='date'
                                                            name='startDate'
                                                            value={formData.startDate}
                                                            onChange={handleInputChange}
                                                            className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                                        Portfolio URL
                                                    </label>
                                                    <div className='relative'>
                                                        <Globe className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                                        <input
                                                            type='url'
                                                            name='portfolio'
                                                            value={formData.portfolio}
                                                            onChange={handleInputChange}
                                                            className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                                                            placeholder='https://yourportfolio.com'
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className='block text-sm font-semibold mb-2 text-gray-700'>
                                                        LinkedIn Profile
                                                    </label>
                                                    <div className='relative'>
                                                        <Linkedin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                                        <input
                                                            type='url'
                                                            name='linkedIn'
                                                            value={formData.linkedIn}
                                                            onChange={handleInputChange}
                                                            className='w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200'
                                                            placeholder='https://linkedin.com/in/yourprofile'
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <motion.button
                                        type='submit'
                                        className='w-full px-6 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2'
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Submit Application
                                        <Upload className='w-4 h-4' />
                                    </motion.button>

                                    <p className='text-xs text-gray-500 text-center'>
                                        * Required fields. We'll get back to you within 3 business
                                        days.
                                    </p>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDetails;
