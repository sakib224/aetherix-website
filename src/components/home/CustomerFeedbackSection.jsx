'use client';
import { Quote, Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CustomerFeedbackSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            designation: 'CEO',
            company: 'TechFlow Solutions',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
            testimonial: 'Working with this team has been transformative for our business. Their innovative approach and attention to detail exceeded all our expectations.',
            rating: 5,
            gradient: 'from-blue-500/10 to-cyan-400/10',
            border: 'group-hover:border-blue-400/50'
        },
        {
            id: 2,
            name: 'Michael Chen',
            designation: 'CTO',
            company: 'DataVision Analytics',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
            testimonial: 'The level of professionalism and technical expertise demonstrated throughout our project was outstanding. They delivered a solution that met and exceeded our requirements.',
            rating: 5,
            gradient: 'from-purple-500/10 to-pink-400/10',
            border: 'group-hover:border-purple-400/50'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            designation: 'Marketing Director',
            company: 'GreenLeaf Enterprises',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
            testimonial: 'Their creative vision and strategic thinking helped us rebrand completely. The collaboration was seamless, and the final deliverables were exceptional.',
            rating: 5,
            gradient: 'from-emerald-500/10 to-teal-400/10',
            border: 'group-hover:border-emerald-400/50'
        },
        {
            id: 4,
            name: 'David Thompson',
            designation: 'Founder',
            company: 'FinTech Innovations',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
            testimonial: 'Security and reliability were our top priorities, and they delivered on both fronts. The platform handles millions of transactions seamlessly.',
            rating: 5,
            gradient: 'from-orange-500/10 to-amber-400/10',
            border: 'group-hover:border-orange-400/50'
        },
        {
            id: 5,
            name: 'Lisa Park',
            designation: 'VP Operations',
            company: 'CloudSync Systems',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
            testimonial: 'The automation solutions they implemented revolutionized our workflow. What used to take hours now takes minutes with their system.',
            rating: 5,
            gradient: 'from-rose-500/10 to-red-400/10',
            border: 'group-hover:border-rose-400/50'
        },
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${
                    i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <section className='container py-24 px-4'>
             <div className='flex justify-between items-center gap-2 flex-wrap pb-10'>
                <div>
                    <p className='text-base text-[#9ca3af] uppercase font-semibold'>Feedback</p>
                    <h2 className='text-3xl font-bold text-[#475569] mb-2'>What Our Clients Say</h2>
                </div>
                <div  className='text-slate-600 max-w-xl text-lg leading-relaxed'>
                    Explore our portfolio of cutting-edge software solutions that have helped
                    businesses increase efficiency by 40%, boost revenue by 35%, and enhance
                    customer satisfaction. Each project represents our commitment to innovation and
                    measurable results.
                </div>
            </div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="customer-feedback-slider py-12"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="w-[300px] sm:w-[350px] md:w-[400px]">
                        <div className={`group relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${testimonial.border} transition-all duration-300`}>
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <Quote className="w-8 h-8 text-gray-200 group-hover:text-primary/20 transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <blockquote className="flex-1 text-gray-700 leading-relaxed mb-8 group-hover:text-gray-900 transition-colors duration-300">
                                    "{testimonial.testimonial}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 group-hover:border-gray-200/50 transition-colors duration-300">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-primary/20 transition-all duration-300">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                                            {testimonial.designation}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CustomerFeedbackSection;
