'use client';
import { UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function BlogList({ blogData }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
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
            y: -10,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-100px' }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        >
            {blogData.map((blog, index) => (
                <motion.div
                    key={blog.id}
                    variants={cardVariants}
                    whileHover='hover'
                    className='bg-white rounded-xl shadow hover:shadow-xl transition-shadow p-4'
                >
                    <motion.div variants={cardHoverVariants} className='relative'>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className='overflow-hidden rounded-lg mb-4'
                        >
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={200}
                                className='h-60 object-cover rounded-lg'
                            />
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                            className='text-base font-semibold mb-1'
                        >
                            {blog?.title}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className='text-xs text-[#475569] mb-2 flex items-center gap-1'
                        >
                            <UserRound className='w-3 h-3 text-primary' />
                            {blog?.author}
                            <span className='mx-2'>•</span>
                            {blog?.date}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className='text-sm text-[#475569] mb-4'
                        >
                            {blog?.description}
                        </motion.p>
                        <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <Link
                                href={'/blogs/' + blog.slug}
                                className='text-sm font-semibold text-[#002a57] hover:text-[#00b3c8] transition-colors'
                            >
                                Read More →
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default BlogList;
