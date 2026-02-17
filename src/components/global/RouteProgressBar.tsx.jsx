// // components/RouteProgressBar.jsx
// 'use client';

// import { useEffect, useState } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';

// export default function RouteProgressBar() {
//     const pathname = usePathname();
//     const searchParams = useSearchParams();
//     const [progress, setProgress] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setProgress(100);

//         const timer = setTimeout(() => {
//             setIsLoading(false);
//             setProgress(0);
//         }, 200);

//         return () => clearTimeout(timer);
//     }, [pathname, searchParams]);

//     useEffect(() => {
//         let interval;

//         if (isLoading && progress < 90) {
//             interval = setInterval(() => {
//                 setProgress((prev) => {
//                     const increment = Math.random() * 10;
//                     return Math.min(prev + increment, 90);
//                 });
//             }, 300);
//         }

//         return () => clearInterval(interval);
//     }, [isLoading, progress]);

//     // Detect route change start
//     useEffect(() => {
//         const handleClick = (e) => {
//             const target = e.target;
//             const anchor = target.closest('a');

//             if (anchor && anchor.href && !anchor.target) {
//                 const url = new URL(anchor.href);
//                 if (url.origin === window.location.origin && url.pathname !== pathname) {
//                     setIsLoading(true);
//                     setProgress(20);
//                 }
//             }
//         };

//         document.addEventListener('click', handleClick);
//         return () => document.removeEventListener('click', handleClick);
//     }, [pathname]);

//     if (!isLoading && progress === 0) return null;

//     return (
//         <div className='fixed top-0 left-0 right-0 h-1 bg-transparent z-[9999] pointer-events-none'>
//             <div
//                 className='h-full bg-primary shadow-lg transition-all duration-300 ease-out'
//                 style={{
//                     width: `${progress}%`,
//                     opacity: progress === 0 ? 0 : 1,
//                 }}
//             />
//         </div>
//     );
// }
// components/RouteProgressBar.jsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function RouteProgressBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Route change completed
        setProgress(100);

        const timer = setTimeout(() => {
            setIsLoading(false);
            setProgress(0);
        }, 400);

        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    useEffect(() => {
        let interval;

        if (isLoading && progress < 90) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    const increment = Math.random() * 10;
                    return Math.min(prev + increment, 90);
                });
            }, 300);
        }

        return () => clearInterval(interval);
    }, [isLoading, progress]);

    // Detect route change start
    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target;
            const anchor = target.closest('a');

            if (anchor && anchor.href && !anchor.target) {
                const url = new URL(anchor.href);
                if (url.origin === window.location.origin && url.pathname !== pathname) {
                    setIsLoading(true);
                    setProgress(20);
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [pathname]);

    if (!isLoading && progress === 0) return null;

    return (
        <>
            {/* Top Progress Bar */}
            <div className='fixed top-0 left-0 right-0 h-1 bg-transparent z-[9999] pointer-events-none'>
                <div
                    className='h-full bg-secondary shadow-lg transition-all duration-300 ease-out'
                    style={{
                        width: `${progress}%`,
                        opacity: progress === 0 ? 0 : 1,
                    }}
                />
            </div>

            {/* Center Modal */}
            {/* <div className='fixed inset-0 z-[9998] flex items-center justify-center bg-black/20 pointer-events-none'>
                <div className='bg-white/40 dark:bg-gray-800 rounded-2xl shadow-2xl p-8 min-w-[200px] transform transition-all duration-300'>
                    <div className='relative w-32 h-32 mx-auto'>
                        <svg className='transform -rotate-90 w-32 h-32'>
                            <circle
                                cx='64'
                                cy='64'
                                r='56'
                                stroke='currentColor'
                                strokeWidth='8'
                                fill='none'
                                className='text-gray-200 dark:text-gray-700'
                            />
                            <circle
                                cx='64'
                                cy='64'
                                r='56'
                                stroke='url(#gradient)'
                                strokeWidth='8'
                                fill='none'
                                strokeLinecap='round'
                                className='transition-all duration-300 ease-out'
                                style={{
                                    strokeDasharray: `${2 * Math.PI * 56}`,
                                    strokeDashoffset: `${2 * Math.PI * 56 * (1 - progress / 100)}`,
                                }}
                            />
                            <defs>
                                <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                                    <stop offset='0%' stopColor='#002a57' />
                                    <stop offset='50%' stopColor='#a855f7' />
                                    <stop offset='100%' stopColor='#002a57' />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className='absolute inset-0 flex items-center justify-center'>
                            <span className='text-3xl font-bold bg-primary bg-clip-text text-transparent'>
                                {Math.round(progress)}%
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}
