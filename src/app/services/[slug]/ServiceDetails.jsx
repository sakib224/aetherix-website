'use client';
import HeaderSection from '@/components/global/HeaderSecton';
import Newsletter from '@/components/global/NewsLetter';
import Pricing from '@/components/global/Pricing';
import ServiceQandA from '@/components/services/ServiceQandA';
import { faArrowRight, faCheck, faCode, faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Helper function to get icon component by name
const getIcon = (iconName) => {
    return Icons[iconName] || Icons.Code2; // fallback to Code2 if not found
};
function ServiceDetails({ service }) {
    return (
        <>
            <HeaderSection />
            <div className='relative bg-white overflow-hidden'>
                <div className='absolute inset-0'>
                    <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
                    <div className='absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl' />
                </div>

                <div className='absolute inset-0 bg-[linear-gradient(to_right,#002a5708_1px,transparent_1px),linear-gradient(to_bottom,#002a5708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]' />

                <div className='container relative'>
                    <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 '>
                        <div className='w-full lg:w-1/2 space-y-8 z-10'>
                            <div className='inline-flex items-center gap-2 px-5 py-2.5 bg-primary-50 rounded-full border border-primary-200 shadow-lg'>
                                <div className='w-2 h-2 bg-secondary rounded-full animate-pulse' />
                                <span className='text-sm font-bold text-primary uppercase tracking-widest'>
                                    {service.category}
                                </span>
                            </div>

                            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-gray-900'>
                                {service.title}
                            </h1>

                            <p className='text-xl  text-gray-700 leading-relaxed'>
                                {service.description}
                            </p>


                            <div className='flex flex-wrap items-center gap-4 pt-4'>
                                <Link
                                    href='/contact'
                                    className='group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 overflow-hidden'
                                >
                                    <span className='relative z-10'>Start Your Project</span>
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className='w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300'
                                    />

                                    <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12' />
                                </Link>

                                <button className='px-8 py-4 bg-gray-100 text-primary rounded-2xl font-semibold text-lg border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-300'>
                                    Learn More
                                </button>
                            </div>

                            {service.stats && (
                                <div className='flex flex-wrap gap-8 pt-8 border-t border-gray-200'>
                                    {service.stats.slice(0, 3).map((stat, index) => (
                                        <div key={index} className='space-y-1'>
                                            <div className='text-4xl font-bold text-primary'>
                                                {stat.value}
                                            </div>
                                            <div className='text-sm text-gray-600 font-medium'>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className='w-full lg:w-1/2'>
                            <div className='relative group'>
                                <div className='absolute -inset-8 bg-gradient-to-r from-secondary via-primary-400 to-secondary rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700' />

                                <div className='relative aspect-square rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 border-4 border-white/20'>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className='object-cover'
                                        priority
                                    />

                                    <div className='absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent' />
                                </div>

                                <div className='absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 transform group-hover:scale-110 transition-all duration-500'>
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        className='w-8 h-8 text-primary'
                                    />
                                </div>
                                <div className='absolute -top-6 -right-6 bg-secondary rounded-2xl shadow-2xl p-6 transform group-hover:scale-110 transition-all duration-500 animate-pulse'>
                                    <FontAwesomeIcon icon={faCube} className='w-8 h-8 text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <section className='py-20 -mt-20 relative z-10'>
                    <div className='text-3xl text-black sm:text-4xl lg:text-5xl font-bold mb-6'>
                        Key Features
                    </div>
                    <div className='bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {service.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className='group relative p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300'
                                >
                                    <div className='flex justify-start items-center flex-row gap-3'>
                                        <div className='w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary to-primary-700 rounded-xl shadow-lg  group-hover:scale-110 group-hover:rotate-6 transition-all duration-300'>
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className='w-6 h-6 text-white'
                                            />
                                        </div>
                                        <h3 className='text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300'>
                                            {feature}
                                        </h3>
                                    </div>

                                    <div
                                        className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl
                                    from-secondary/20 to-transparent rounded-bl-full'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {service.longDescription && (
                    <section className='py-20'>
                        <div className='max-w-4xl  space-y-8'>
                            {service.longDescription.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className='text-xl text-gray-700 leading-relaxed text-left'
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                )}

                <section className='py-20'>
                    <div className='grid lg:grid-cols-2 gap-8'>
                        <div className='group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-900 p-12 shadow-2xl hover:shadow-primary/30 transition-all duration-500'>
                            <div className='absolute inset-0 opacity-10'>
                                <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:2rem_2rem]' />
                            </div>

                            <div className='absolute -top-24 -right-24 w-48 h-48 bg-secondary rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700' />

                            <div className='relative z-10'>
                                <h2 className='text-4xl font-bold text-white mb-6'>
                                    {service.sectionTitles?.left}
                                </h2>
                                <div className='w-20 h-1.5 bg-secondary rounded-full mb-8' />
                                <p className='text-xl text-blue-100 leading-relaxed font-light'>
                                    {service.detailedText?.left}
                                </p>
                            </div>
                        </div>

                        <div className='group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary-800 p-12 shadow-2xl hover:shadow-secondary/30 transition-all duration-500'>
                            <div className='absolute inset-0 opacity-10'>
                                <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:2rem_2rem]' />
                            </div>

                            <div className='absolute -bottom-24 -left-24 w-48 h-48 bg-primary-400 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700' />

                            <div className='relative z-10'>
                                <h2 className='text-4xl font-bold text-white mb-6'>
                                    {service.sectionTitles?.right}
                                </h2>
                                <div className='w-20 h-1.5 bg-primary-300 rounded-full mb-8' />
                                <p className='text-xl text-blue-50 leading-relaxed font-light'>
                                    {service.detailedText?.right}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {service.technologies && service.technologies.length > 0 && (
                    <section className='py-20 bg-gradient-to-b from-primary-50/50 to-transparent rounded-3xl'>
                        <div className='text-center mb-12'>
                            <div className='inline-flex items-center gap-2 px-5 py-2 bg-primary-100 rounded-full mb-6'>
                                <span className='text-sm font-bold text-primary uppercase tracking-widest'>
                                    Technology Stack
                                </span>
                            </div>
                            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>
                                Powered by Modern Technologies
                            </h2>
                        </div>
                        <div className='flex flex-wrap justify-center gap-4'>
                            {service.technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className='flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-primary-200 transform hover:-translate-y-1 transition-all duration-300 cursor-default'
                                >
                                    <div className='relative w-8 h-8 flex-shrink-0'>
                                        <Image
                                            src={tech.logo}
                                            alt={tech.name}
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                    <span className='text-lg font-semibold text-gray-800'>
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {service.stats && service.stats.length > 0 && (
                    <section className='py-20'>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                            {service.stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className='group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-primary-900 p-10 lg:p-12 hover:scale-105 transition-all duration-500 cursor-default'
                                >
                                    <div className='absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                    <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full' />

                                    <div className='relative z-10 text-center'>
                                        <div className='text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-4'>
                                            {stat.value}
                                        </div>
                                        <div className='text-lg font-semibold text-blue-200 uppercase tracking-wider'>
                                            {stat.label}
                                        </div>
                                    </div>

                                    <div className='absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500' />
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className='py-20'>
                    <div className='text-center mb-16 space-y-6'>
                        <div className='inline-flex items-center gap-2 px-5 py-2 bg-secondary-100 rounded-full'>
                            <span className='text-sm font-bold text-secondary-700 uppercase tracking-widest'>
                                Our Pricing
                            </span>
                        </div>
                        <h2 className='text-5xl lg:text-6xl font-extrabold'>
                            <span className='bg-gradient-to-r from-primary via-primary-600 to-secondary bg-clip-text text-transparent'>
                                Discover Clear and Competitive Pricing
                            </span>
                        </h2>
                        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                            Transparent pricing designed to fit your business needs
                        </p>
                    </div>
                    <Pricing />
                </section>

                <section className='py-20'>
                    <Newsletter />
                </section>

                <section className='py-20'>
                    <div className='flex flex-col lg:flex-row items-start gap-16'>
                        <div className='w-full lg:w-2/5 lg:sticky lg:top-24 space-y-6'>
                            <div className='inline-flex items-center gap-2 px-5 py-2 bg-primary-100 rounded-full'>
                                <span className='text-sm font-bold text-primary uppercase tracking-widest'>
                                    Help Center
                                </span>
                            </div>
                            <h2 className='text-5xl lg:text-6xl font-extrabold leading-tight'>
                                <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                                    Get Answers to Your Questions
                                </span>
                            </h2>
                            <p className='text-lg text-gray-600'>
                                Find comprehensive answers to common questions about our{' '}
                                {service.title.toLowerCase()} services.
                            </p>
                        </div>
                        <div className='w-full lg:w-3/5'>
                            <ServiceQandA qAndA={service.QandA} />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ServiceDetails;
