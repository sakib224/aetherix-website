'use client';
import LogoIcon from '@/assets/logo.webp';
import Image from 'next/image';

export default function PagePreloader() {
    return (
        <div className='fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white'>
            <div className='relative z-10 flex flex-col items-center'>
                <div className='relative w-32 h-32'>
                    <svg
                        className='absolute inset-0 w-full h-full animate-[spin_2s_linear_infinite]'
                        viewBox='0 0 100 100'
                    >
                        <circle
                            cx='50'
                            cy='50'
                            r='45'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='7'
                            strokeDasharray='70 213'
                            strokeLinecap='round'
                            className='text-primary'
                        />
                    </svg>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <Image src={LogoIcon} alt='Logo' className='w-28 h-28' />
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* No custom animations needed - using Tailwind's animate-spin */
            `}</style>
        </div>
    );
}
