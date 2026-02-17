import { UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import newsData from '@/data/NewsData';

function LatestNewsSection() {
    return (
        <section className='py-20 container'>
            <div className='flex justify-between items-center gap-2 flex-wrap'>
                <div>
                    <div className='text-base text-[#9ca3af] uppercase font-semibold'>
                        Latest News
                    </div>
                    <div className='text-3xl font-bold text-[#475569] mb-2'>Get the Latest News</div>
                </div>
                <div className='text-[#475569] max-w-2xl'>
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-8 mt-10'>
                <div className='md:w-1/2 flex flex-col'>
                    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex-1 flex flex-col'>
                        <div className='p-6 flex flex-col flex-1'>
                            <Image
                                src={newsData[0].image}
                                alt={newsData[0].title}
                                width={800}
                                height={440}
                                className='rounded-lg mb-4 w-full'
                            />
                            <div className='text-xl font-semibold mb-2 text-[#002a57]'>
                                {newsData[0].title}
                            </div>
                            <p className='text-sm text-[#475569] mb-2 flex items-center gap-1'>
                                <UserRound className='w-4 h-4 text-primary' />
                                {newsData[0].author}
                                <span className='mx-2'>•</span>
                                {newsData[0].date}
                            </p>

                            <p className='text-base text-[#475569] mb-4 flex-grow'>
                                {newsData[0].excerpt}
                            </p>
                            <Link
                                href={newsData[0].link}
                                className='text-sm font-semibold text-[#002a57] hover:text-[#00b3c8] transition-colors mt-auto'
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 flex flex-col gap-6'>
                    {newsData.slice(1, 3).map((blog) => (
                        <div
                            key={blog.id}
                            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col sm:flex-row flex-1 p-6'
                        >
                            <div className='sm:w-1/2 h-48 sm:h-auto '>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={400}
                                    height={220}
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </div>
                            <div className='p-4 sm:w-1/2 flex flex-col'>
                                <div className='text-base font-semibold mb-1 text-[#002a57]'>
                                    {blog.title}
                                </div>
                                <p className='text-xs text-[#475569] mb-2 flex items-center gap-1'>
                                    <UserRound className='w-3 h-3 text-primary' />
                                    {newsData.author}
                                    <span className='mx-2'>•</span>
                                    {newsData.date}
                                </p>
                                <p className='text-sm text-[#475569] mb-3 line-clamp-2 flex-grow'>
                                    {blog.excerpt}
                                </p>
                                <Link
                                    href={blog.link}
                                    className='text-xs font-semibold text-[#002a57] hover:text-[#00b3c8] transition-colors'
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*   <div className='text-center mt-10'>
                <button className='px-6 py-3 rounded-full border text-white bg-[#002a57] font-normal flex items-center gap-2 mx-auto cursor-pointer'>
                    View All
                    <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
                </button>
            </div> */}
        </section>
    );
}

export default LatestNewsSection;
