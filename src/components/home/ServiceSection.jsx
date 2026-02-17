import ArrowIcon from '@/assets/arrow.png';
import Image from 'next/image';
import Link from 'next/link';
import ServiceCategory from '../services/ServiceCategory';
function ServiceSection() {
    return (
        <div className='container'>
            {/*   <div className='flex justify-center items-center flex-col flex-wrap gap-4'>
                <div className='px-3 py-1 bg-secondary/75 rounded-full text-white text-sm font-light'>
                    Our Services
                </div>
                <div className=' text-4xl font-bold flex flex-col items-center gap-0'>
                    <div className='text-black'>Solutions Crafted for</div>
                    <div className='text-secondary'>Success</div>
                </div>
                <div className='text-center text-gray-600 text-lg max-w-2xl'>
                    Innovative technology solutions tailored to your business challenges and growth
                    objectives
                </div>
            </div> */}
            <div className='flex justify-between items-center gap-2 flex-wrap pb-6'>
                <div>
                    <p className='text-base text-[#9ca3af] uppercase font-semibold'>Portfolio</p>
                    <h2 className='text-3xl font-bold mb-2'>Our Services</h2>
                </div>
                <div className='text-[#475569] max-w-2xl'>
                    Innovative technology solutions tailored to your business challenges and growth
                    objectives
                </div>
            </div>
            <ServiceCategory />
            <div className='flex justify-end items-center mt-10'>
                <Link
                    href='/services'
                    className='border text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-secondary hover:text-white transition-colors'
                >
                    View All Services
                    <Image src={ArrowIcon} alt='Arrow Icon' height={20} width={20} />
                </Link>
            </div>
        </div>
    );
}

export default ServiceSection;
