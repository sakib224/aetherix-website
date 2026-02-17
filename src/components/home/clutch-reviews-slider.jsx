'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const DEFAULT_REVIEWS = [
    {
        id: '1',
        company: 'TechCorp',
        rating: 5,
        title: 'Exceptional Platform Performance',
        excerpt:
            'This platform transformed our entire infrastructure. The support team was incredibly responsive and helpful throughout our implementation.',
        author: 'Sarah Johnson',
        role: 'CTO',
        accentColor: '#3B82F6',
    },
    {
        id: '2',
        company: 'DataFlow Inc',
        rating: 5,
        title: 'Game Changer for Our Team',
        excerpt:
            'We saw a 40% improvement in our deployment times. The intuitive interface made onboarding seamless for our entire team.',
        author: 'Michael Chen',
        role: 'VP Engineering',
        accentColor: '#8B5CF6',
    },
    {
        id: '3',
        company: 'CloudScale',
        rating: 5,
        title: 'Best Decision We Made',
        excerpt:
            'Switching to this platform was the best decision we made this year. Reliability and performance have been outstanding.',
        author: 'Emma Rodriguez',
        role: 'DevOps Lead',
        accentColor: '#10B981',
    },
    {
        id: '4',
        company: 'InnovateLabs',
        rating: 5,
        title: 'Trusted Partner for Growth',
        excerpt:
            'As we scaled, this platform scaled with us. Their infrastructure and support have been instrumental in our success.',
        author: 'David Williams',
        role: 'Founder',
        accentColor: '#F59E0B',
    },
];

const ClutchReviewsSlider = ({ reviews = DEFAULT_REVIEWS }) => {
    // Calculate total reviews and average rating
    const totalReviews = reviews.length;
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    const totalRatingPoints = reviews.reduce((sum, review) => sum + review.rating, 0);

    const renderStars = (rating) => {
        return (
            <div className='flex gap-0.5'>
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${
                            i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                        }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className='w-full py-24 container relative overflow-hidden'>
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-50/50 to-white/50 -z-10" />

            <div className='flex flex-col lg:flex-row justify-between items-end gap-12 mb-16 px-4'>
                <div className='flex-1'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='flex items-center gap-4 mb-6'
                    >
                        <div className='bg-[#162e4a] text-white px-4 py-1.5 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 shadow-lg shadow-blue-900/20'>
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            CLUTCH
                        </div>
                        <div className='flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm'>
                            {renderStars(Math.round(averageRating))}
                            <span className='text-sm font-bold text-slate-900 ml-1'>
                                {averageRating.toFixed(1)}
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className='text-4xl md:text-5xl font-bold text-slate-900 mb-6'
                    >
                        What Our Clients Say
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className='flex flex-wrap items-center gap-8 text-sm text-slate-600 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 inline-flex'
                    >
                        <div className='flex flex-col'>
                            <span className='font-bold text-2xl text-slate-900 leading-none'>{totalReviews}</span>
                            <span className="text-xs uppercase tracking-wider font-medium mt-1">Reviews</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className='flex flex-col'>
                            <span className='font-bold text-2xl text-slate-900 leading-none'>{totalRatingPoints}</span>
                            <span className="text-xs uppercase tracking-wider font-medium mt-1">Rating Points</span>
                        </div>
                        <div className="w-px h-8 bg-slate-200" />
                        <div className='flex flex-col'>
                            <span className='font-bold text-2xl text-slate-900 leading-none'>{averageRating.toFixed(1)}</span>
                            <span className="text-xs uppercase tracking-wider font-medium mt-1">Average Rating</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className='text-slate-600 max-w-xl text-lg leading-relaxed'
                >
                    Explore our portfolio of cutting-edge software solutions that have helped
                    businesses increase efficiency by 40%, boost revenue by 35%, and enhance
                    customer satisfaction.
                </motion.div>
            </div>

            <div className="px-4">
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="clutch-reviews-swiper !pb-16"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={review.id} className="!h-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden flex flex-col"
                            >
                                {/* Accent Line */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-1.5"
                                    style={{ backgroundColor: review.accentColor }}
                                />

                                {/* Company Badge */}
                                <div className="mb-6 flex justify-between items-start">
                                    <span
                                        className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-slate-50 border border-slate-100"
                                        style={{ color: review.accentColor, borderColor: `${review.accentColor}30` }}
                                    >
                                        {review.company}
                                    </span>
                                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-slate-400 transition-colors" />
                                </div>

                                {/* Rating */}
                                <div className="mb-4">{renderStars(review.rating)}</div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#002a57] transition-colors">
                                    {review.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow line-clamp-4">
                                    "{review.excerpt}"
                                </p>

                                {/* Author */}
                                <div className="pt-6 border-t border-slate-100 mt-auto flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                                        style={{ backgroundColor: review.accentColor }}
                                    >
                                        {review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 text-sm">
                                            {review.author}
                                        </p>
                                        <p className="text-xs text-slate-500 font-medium">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='text-center mt-8'>
                    <a
                        href="#"
                        className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#002a57] text-white font-semibold hover:bg-[#003a75] transition-all duration-300 shadow-lg shadow-blue-900/20 group'
                    >
                        <span>Read All {totalReviews} Reviews on Clutch</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ClutchReviewsSlider;
