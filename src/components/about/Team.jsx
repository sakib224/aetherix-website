'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Team({ start_line = '', title = '', title_2 = '', description = '', teamMembers = [] }) {
    return (
        <motion.section
            className='pb-20 bg-white container'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className='flex justify-between items-center gap-2 flex-wrap'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <motion.p
                        className='text-xs text-[#9ca3af] font-semibold uppercase'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {start_line}
                    </motion.p>
                    <motion.h2
                        className='text-3xl text-[#475569]  font-bold'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {title}
                    </motion.h2>
                    <motion.h2
                        className='text-3xl text-[#475569] font-bold'
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {title_2}
                    </motion.h2>
                </div>
                <motion.div
                    className='text-[#475569] max-w-2xl'
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {description}
                </motion.div>
            </motion.div>

            <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[80px] mt-10'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={member.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    ease: 'easeOut',
                                },
                            },
                        }}
                    >
                        <Link
                            href={`/about/${member.slug}`}
                            className='relative rounded-xl overflow-hidden h-[320px] block group'
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className='w-full h-full'
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    className='w-full h-full object-cover'
                                    width={400}
                                    height={320}
                                />
                            </motion.div>

                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>

                            {/* Full Name Overlay on Hover */}
                            <motion.div
                                className='absolute inset-0 flex items-center justify-center opacity-0'
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className='text-center'>
                                    <motion.p
                                        className='text-white font-semibold text-xl mb-1'
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                    >
                                        {member.name}
                                    </motion.p>
                                    <motion.p
                                        className='text-white/80 text-sm'
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: 0.2 }}
                                    >
                                        {member.designation}
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Original Bottom Info Card */}
                            <div className='absolute bottom-4 left-4 right-4'>
                                <div className='w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 flex items-center justify-between'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-white font-semibold'>{member.name}</p>
                                        <p className='text-white/80 text-xs'>
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}

export default Team;
