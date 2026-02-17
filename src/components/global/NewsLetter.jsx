import Link from 'next/link';
const Newsletter = () => {
    return (
        <div className='rounded-2xl shadow-xl overflow-hidden bg-gradient-to-r from-[#1a4b6d] to-[#00b4d8] px-4 py-4'>
            <div className='flex flex-col md:flex-row'>
                <div className='p-4  md:w-1/2'>
                    <h2 className='text-3xl font-bold text-white mb-4'>Book a Free Consultation</h2>
                    <div className='text-white mb-6 text-sm'>
                        Schedule a free consultation with our experts to discuss your project needs
                        and how we can help you achieve your goals.
                    </div>
                    <div className='mt-2'>
                        <Link
                            href='/contact'
                            className='group relative px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-500 ease-out transform hover:scale-105 focus:outline-none focus:scale-105 text-gray-200 bg-secondary'
                        >
                            <span className='relative z-10 inline-flex items-center gap-2'>
                                Contact Us
                            </span>

                            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100' />

                            <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100' />
                        </Link>
                    </div>
                </div>

                <div className='p-4  md:w-1/2'>
                    <div className='bg-white rounded-2xl h-full p-8'>
                        <div className='flex h-full'>
                            <div className='w-1/2 pr-4 flex flex-col justify-center'>
                                <div className='text-lg font-semibold text-primary mb-2'>
                                    Our Email
                                </div>

                                <div className='text-gray-600 text-sm'>info@aetherixllc.com</div>
                            </div>

                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 flex items-center'>
                                    <div className='h-3/4 w-px bg-gray-200'></div>
                                </div>
                            </div>

                            <div className='w-1/2 pl-4 flex flex-col justify-center'>
                                <div className='text-lg font-semibold text-primary mb-2'>
                                    Contact
                                </div>
                                <div className='text-gray-600 text-sm space-y-1'>
                                    +8801896-061686
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
