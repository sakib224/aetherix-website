'use client';
import { jobListings } from '@/app/career/jobData';
import careerFourImage from '@/assets/career/careerFour.png';
import CareerOneImage from '@/assets/career/careerOne.png';
import CareerThreeImage from '@/assets/career/careerThree.jpg';
import CareerTwoImage from '@/assets/career/careerTwo.jpeg';
import { motion } from 'framer-motion';
import {
    Award,
    Briefcase,
    Building,
    Calendar,
    ChevronRight,
    Clock,
    Coffee,
    Filter,
    Globe,
    Heart,
    MapPin,
    Search,
    Star,
    ThumbsUp,
    Users,
    Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
        scale: 0.95,
        y: 30,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 90,
            damping: 15,
        },
    },
    hover: {
        y: -4,
        scale: 1.02,
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 25,
        },
    },
};

const CareerListingsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [savedJobs, setSavedJobs] = useState(new Set());

    const departments = ['all', 'Engineering', 'Design', 'Marketing', 'Product'];

    const filteredJobs = jobListings.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment =
            selectedDepartment === 'all' || job.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    const router = useRouter();

    const handleApply = (id) => {
        router.push(`/career/${id}`);
    };

    const toggleSaveJob = (jobId) => {
        setSavedJobs((prev) => {
            const newSaved = new Set(prev);
            if (newSaved.has(jobId)) {
                newSaved.delete(jobId);
            } else {
                newSaved.add(jobId);
            }
            return newSaved;
        });
    };

    // Company culture data
    const cultureStats = [
        { number: '4.8/5', label: 'Employee Happiness', icon: Star },
        { number: '95%', label: 'Retention Rate', icon: ThumbsUp },
        { number: '50+', label: 'Team Members', icon: Users },
        { number: '2025', label: 'Founded', icon: Calendar },
    ];

    const values = [
        {
            icon: Users,
            title: 'Collaborative Spirit',
            description:
                'We believe in the power of teamwork and open communication across all departments.',
        },
        {
            icon: Zap,
            title: 'Innovation First',
            description:
                'We encourage creative thinking and are always exploring new technologies and approaches.',
        },
        {
            icon: Heart,
            title: 'People Focused',
            description:
                'Our team members growth and well-being are at the center of everything we do.',
        },
        {
            icon: Globe,
            title: 'Global Impact',
            description: 'We build products that serve users worldwide and make a real difference.',
        },
    ];

    const perks = [
        {
            icon: Award,
            title: 'Learning & Development',
            items: [
                'Annual learning budget',
                'Conference attendance',
                'Certification programs',
                'Mentorship',
            ],
        },
        {
            icon: Coffee,
            title: 'Work Environment',
            items: [
                'Flexible hours',
                'Remote work options',
                'Modern office space',
                'Wellness programs',
            ],
        },
        {
            icon: Briefcase,
            title: 'Career Growth',
            items: [
                'Clear promotion paths',
                'Cross-team projects',
                'Leadership training',
                'Skill development',
            ],
        },
    ];

    return (
        <div className='min-h-screen bg-gray-50/60'>
            {/* Stats Header */}
            <div className='border-b border-gray-200 bg-white'>
                <div className='container mx-auto px-4 py-12'>
                    <motion.div
                        className='max-w-4xl mx-auto text-center'
                        initial='hidden'
                        animate='visible'
                        variants={containerVariants}
                    >
                        <motion.h1
                            className='text-4xl font-bold text-gray-900 mb-4'
                            variants={itemVariants}
                        >
                            Build Your Career With Us
                        </motion.h1>
                        <motion.p
                            className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'
                            variants={itemVariants}
                        >
                            Join a team that values innovation, collaboration, and making a real
                            impact in the tech industry.
                        </motion.p>

                        <motion.div
                            className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'
                            variants={containerVariants}
                        >
                            {cultureStats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className='text-center'
                                    custom={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className='text-2xl font-bold text-gray-900 mb-1'>
                                        {stat.number}
                                    </div>
                                    <div className='text-sm text-gray-500'>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            

            {/* Company Culture Section */}
            <div className='bg-white py-16'>
                <div className='container mx-auto px-4'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                Our Culture & Values
                            </h2>
                            <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                                At our core, we're a team of passionate innovators dedicated to
                                building products that matter. We believe in creating an environment
                                where everyone can do their best work and grow both personally and
                                professionally.
                            </p>

                            <div className='grid sm:grid-cols-2 gap-6'>
                                {values.map((value, index) => (
                                    <motion.div
                                        key={value.title}
                                        className='flex items-start gap-4'
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0'>
                                            <value.icon className='w-6 h-6 text-blue-600' />
                                        </div>
                                        <div>
                                            <h3 className='font-semibold text-gray-900 mb-2'>
                                                {value.title}
                                            </h3>
                                            <p className='text-gray-600 text-sm leading-relaxed'>
                                                {value.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className='grid grid-cols-2 gap-4'
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Placeholder for team/culture images */}
                            <div className='space-y-4'>
                                <div className='aspect-square  flex items-center justify-center'>
                                    {/* <Users className='w-12 h-12 text-blue-600' /> */}
                                    <Image
                                        src={CareerOneImage}
                                        alt='Career'
                                        className='h-full rounded-2xl'
                                    />
                                </div>
                                <div className='aspect-video flex items-center justify-center'>
                                    <Image
                                        src={CareerThreeImage}
                                        alt='Career'
                                        className='h-full rounded-2xl'
                                    />
                                </div>
                            </div>
                            <div className='space-y-4 pt-8'>
                                <div className='aspect-video  flex items-center justify-center'>
                                    <Image
                                        src={CareerTwoImage}
                                        alt='Career'
                                        className='h-full rounded-2xl'
                                    />
                                </div>
                                <div className='aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center'>
                                    <Image
                                        src={careerFourImage}
                                        alt='Career'
                                        className='h-full rounded-2xl'
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Search & Filter Section */}
            <div className='container mx-auto px-4 py-8'>
                <div className='max-w-6xl mx-auto'>
                    <motion.div
                        className='bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    >
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className='flex-1 relative'>
                                <div className='relative'>
                                    <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                    <input
                                        type='text'
                                        placeholder='Search jobs, departments, or skills...'
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className='w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-gray-900 placeholder-gray-500'
                                    />
                                </div>
                            </div>

                            <div className='flex gap-3'>
                                <div className='relative w-64'>
                                    <Filter className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                                    <select
                                        value={selectedDepartment}
                                        onChange={(e) => setSelectedDepartment(e.target.value)}
                                        className='w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none cursor-pointer text-gray-900'
                                    >
                                        {departments.map((dept) => (
                                            <option key={dept} value={dept}>
                                                {dept === 'all' ? 'All Departments' : dept}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronRight className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 rotate-90' />
                                </div>

                                <motion.button
                                    className='px-6 py-3.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Filter className='w-4 h-4' />
                                    Filters
                                </motion.button>
                            </div>
                        </div>

                        {/* Quick Filters */}
                        <motion.div
                            className='flex flex-wrap gap-2 mt-4'
                            initial='hidden'
                            animate='visible'
                            variants={containerVariants}
                        >
                            <motion.button
                                onClick={() => setSelectedDepartment('all')}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    selectedDepartment === 'all'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                All Roles
                            </motion.button>
                            {departments
                                .filter((dept) => dept !== 'all')
                                .map((dept) => (
                                    <motion.button
                                        key={dept}
                                        onClick={() => setSelectedDepartment(dept)}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            selectedDepartment === dept
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {dept}
                                    </motion.button>
                                ))}
                        </motion.div>
                    </motion.div>

                    {/* Results Header */}
                    <motion.div
                        className='flex items-center justify-between mb-6'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div>
                            <h2 className='text-2xl font-semibold text-gray-900'>
                                {filteredJobs.length} Open Positions
                            </h2>
                            <p className='text-gray-600 mt-1'>
                                {selectedDepartment !== 'all'
                                    ? `in ${selectedDepartment}`
                                    : 'across all departments'}
                            </p>
                        </div>
                        <div className='text-sm text-gray-500'>
                            Sorted by:{' '}
                            <span className='font-medium text-gray-700'>Most recent</span>
                        </div>
                    </motion.div>

                    {/* Job Listings */}
                    <motion.div
                        className='grid gap-4'
                        variants={containerVariants}
                        initial='hidden'
                        animate='visible'
                        key={filteredJobs.length}
                    >
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                variants={cardVariants}
                                initial='hidden'
                                animate='visible'
                                whileHover='hover'
                                custom={index}
                                layout
                            >
                                <div className='group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden'>
                                    <div className='p-6'>
                                        <div className='flex flex-col lg:flex-row lg:items-start gap-6'>
                                            <div className='flex-1'>
                                                <div className='flex items-start justify-between mb-4'>
                                                    <div className='flex-1'>
                                                        <div className='flex items-center gap-3 mb-3'>
                                                            <h3 className='text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                                                                {job.title}
                                                            </h3>
                                                            {/* <motion.span
                                                                className='px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium'
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                transition={{
                                                                    type: 'spring',
                                                                    stiffness: 200,
                                                                    delay: index * 0.1 + 0.5,
                                                                }}
                                                            >
                                                                NEW
                                                            </motion.span> */}
                                                        </div>

                                                        <div className='flex flex-wrap gap-3 mb-4'>
                                                            <span className='inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm'>
                                                                <Building className='w-4 h-4' />
                                                                {job.department}
                                                            </span>
                                                            <span className='inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm'>
                                                                <MapPin className='w-4 h-4' />
                                                                {job.location}
                                                            </span>
                                                            <span className='inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm'>
                                                                <Clock className='w-4 h-4' />
                                                                {job.type}
                                                            </span>
                                                            <span className='inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-sm font-medium'>
                                                                ৳ {job.salary}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <motion.button
                                                        onClick={() => toggleSaveJob(job.id)}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className={`p-2 rounded-lg transition-colors ${
                                                            savedJobs.has(job.id)
                                                                ? 'text-red-500 bg-red-50 hover:bg-red-100'
                                                                : 'text-gray-400 bg-gray-50 hover:bg-gray-100 hover:text-gray-600'
                                                        }`}
                                                    >
                                                        <Heart
                                                            className={`w-5 h-5 ${
                                                                savedJobs.has(job.id)
                                                                    ? 'fill-current'
                                                                    : ''
                                                            }`}
                                                        />
                                                    </motion.button>
                                                </div>

                                                <p className='text-gray-600 mb-4 leading-relaxed'>
                                                    {job.description}
                                                </p>

                                                <div className='flex flex-wrap gap-2 mb-4'>
                                                    {job.requirements
                                                        .slice(0, 3)
                                                        .map((req, idx) => (
                                                            <motion.span
                                                                key={idx}
                                                                className='px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm border border-gray-200'
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    backgroundColor:
                                                                        'rgba(59, 130, 246, 0.1)',
                                                                    borderColor: '#3b82f6',
                                                                }}
                                                            >
                                                                {req}
                                                            </motion.span>
                                                        ))}
                                                    {job.requirements.length > 3 && (
                                                        <span className='px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm'>
                                                            +{job.requirements.length - 3} more
                                                        </span>
                                                    )}
                                                </div>

                                                <div className='flex items-center justify-between'>
                                                    <span className='text-sm text-gray-500 font-medium'>
                                                        Deadline{' '}
                                                        {new Date(
                                                            job.deadline.split('-')[2],
                                                            job.deadline.split('-')[1] - 1,
                                                            job.deadline.split('-')[0]
                                                        ).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                        })}
                                                    </span>
                                                    <span className='text-sm text-gray-500'>
                                                        12 applicants
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='lg:w-48 flex lg:flex-col gap-3'>
                                                <motion.button
                                                    onClick={() => handleApply(job.id)}
                                                    className='flex-1 lg:flex-none px-6 py-3.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer'
                                                    whileHover={{
                                                        scale: 1.05,
                                                        backgroundColor: '#1f2937',
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Apply Now
                                                    <motion.div
                                                        animate={{ x: [0, 4, 0] }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                        }}
                                                    >
                                                        <ChevronRight className='w-4 h-4' />
                                                    </motion.div>
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredJobs.length === 0 && (
                        <motion.div
                            className='text-center py-16 bg-white rounded-2xl border border-gray-200'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                        >
                            <div className='w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center'>
                                <Search className='w-8 h-8 text-gray-400' />
                            </div>
                            <h3 className='text-2xl font-semibold text-gray-900 mb-3'>
                                No positions found
                            </h3>
                            <p className='text-gray-600 max-w-md mx-auto mb-6'>
                                We couldn't find any positions matching your criteria. Try adjusting
                                your search or filter terms.
                            </p>
                            <motion.button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedDepartment('all');
                                }}
                                className='px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Clear all filters
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Perks & Benefits Section */}
            <div className='bg-gray-900 text-white py-16'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='text-center mb-12'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-3xl font-bold mb-4'>Perks & Benefits</h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            We take care of our team with comprehensive benefits and perks that
                            support your work and life.
                        </p>
                    </motion.div>

                    <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                        {perks.map((perk, index) => (
                            <motion.div
                                key={perk.title}
                                className='bg-gray-800 rounded-2xl p-6'
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className='w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4'>
                                    <perk.icon className='w-6 h-6 text-white' />
                                </div>
                                <h3 className='text-xl font-semibold mb-4'>{perk.title}</h3>
                                <ul className='space-y-2'>
                                    {perk.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className='flex items-center gap-3 text-gray-300'
                                        >
                                            <div className='w-1.5 h-1.5 bg-blue-400 rounded-full'></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className='bg-white py-16'>
                <div className='container mx-auto px-4'>
                    <motion.div
                        className='max-w-4xl mx-auto text-center'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                            Ready to Join Our Team?
                        </h2>
                        <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
                            Don't see the perfect role? We're always looking for talented people.
                            Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <motion.button
                                className='px-8 py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit General Application
                            </motion.button>
                            <motion.button
                                className='px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact Recruitment
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CareerListingsPage;
