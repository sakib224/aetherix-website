'use client';
import Image from 'next/image';
import SocialShare from './SocialShare';
function BlogDetails({ blog }) {
    return (
        <>
            {/* Main Content */}
            <div className='container py:10 md:py-20'>
                {/* Featured Image */}
                <div className='mb-8'>
                    <Image
                        src={blog?.thumbnail || blog?.image}
                        alt='Business professionals consulting'
                        className='w-full h-100 object-fit rounded-xl shadow-lg'
                    />
                </div>

                <section>
                    <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
                </section>

                <div className='flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-200'>
                    <div className='flex flex-wrap gap-2 mb-4 md:mb-0 items-center'>
                        <span className='text-sm font-bold text-black mr-2'>TAGS</span>
                        {blog?.tags?.map((tag, index) => (
                            <span
                                className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors'
                                key={index}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <SocialShare />
                </div>
            </div>
        </>
    );
}
export default BlogDetails;
