'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserRound } from 'lucide-react';
import BlogList from './BlogList';

import BlogData from '@/data/BlogData';

const Blogs = () => {
    const featuredBlog = BlogData.filter((blog) => blog.isFeatured);
    const regularBlogs = BlogData.filter((blog) => !blog.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const cardHoverVariants = {
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };

    return (
        <>
            <section className='py-20 container'>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-2xl font-bold mb-10'
                >
                    Featured Blogs
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                    className='flex flex-col md:flex-row gap-8'
                >
                    {featuredBlog?.length > 1 && (
                        <motion.div variants={itemVariants} className='md:w-1/2 flex flex-col'>
                            <motion.div
                                whileHover='hover'
                                variants={cardHoverVariants}
                                className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-1 flex flex-col'
                            >
                                <div className='p-6 flex flex-col flex-1'>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className='overflow-hidden rounded-lg mb-4'
                                    >
                                        <Image
                                            src={featuredBlog[0].image}
                                            alt={featuredBlog[0].title}
                                            width={800}
                                            height={440}
                                            className='rounded-lg w-full h-80 object-cover flex-shrink-0'
                                        />
                                    </motion.div>
                                    <div className='text-xl font-semibold mb-2 text-[#002a57]'>
                                        {featuredBlog[0].title}
                                    </div>
                                    <p className='text-sm text-[#475569] mb-2 flex items-center gap-1'>
                                        <UserRound className='w-4 h-4 text-primary' />
                                        {featuredBlog[0].author}
                                        <span className='mx-2'>•</span>
                                        {featuredBlog[0].date}
                                    </p>

                                    <p className='text-base text-[#475569] mb-4 flex-grow'>
                                        {featuredBlog[0].description}
                                    </p>
                                    <Link
                                        href={'/blogs/' + featuredBlog[0]?.slug}
                                        className='text-sm font-semibold text-[#002a57] hover:text-[#00b3c8] transition-colors mt-auto'
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                    {featuredBlog?.length > 1 && (
                        <motion.div
                            variants={itemVariants}
                            className='md:w-1/2 flex flex-col gap-6'
                        >
                            {featuredBlog.slice(1, 4).map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                                    whileHover='hover'
                                    variants={cardHoverVariants}
                                    className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row flex-1 p-6'
                                >
                                    <div className='sm:w-1/2 h-48 sm:h-auto '>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-hidden rounded-lg h-full'
                                        >
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                width={400}
                                                height={220}
                                                className='w-full rounded-lg h-60 object-cover flex-shrink-0'
                                            />
                                        </motion.div>
                                    </div>
                                    <div className='p-4 sm:w-1/2 flex flex-col'>
                                        <div className='text-base font-semibold mb-1 text-[#002a57]'>
                                            {blog.title}
                                        </div>
                                        <p className='text-xs text-[#475569] mb-2 flex items-center gap-1'>
                                            <UserRound className='w-3 h-3 text-primary' />
                                            {blog.author}
                                            <span className='mx-2'>•</span>
                                            {blog.date}
                                        </p>
                                        <p className='text-sm text-[#475569] mb-3 line-clamp-2 flex-grow'>
                                            {blog.description}
                                        </p>
                                        <Link
                                            href={'/blogs/' + blog.slug}
                                            className='text-xs font-semibold text-[#002a57] hover:text-[#00b3c8] transition-colors'
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </section>

            <section className='pb-20 container'>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-2xl font-bold mb-10'
                >
                    All Blogs
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <BlogList blogData={regularBlogs} />
                </motion.div>
            </section>
        </>
    );
};

export default Blogs;
