// 'use client';
// import LogoIcon from '@/assets/logo.webp';
// import Image from 'next/image';

// export default function PagePreloader() {
//     return (
//         <div className='fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white'>
//             <div className='relative z-10 flex flex-col items-center'>
//                 <div className='relative w-36 h-36 flex items-center justify-center'> {/* সাইজ বাড়িয়ে 36 (144px) করা হয়েছে */}
                    
//                     {/* Facebook Style Spinner Rings with Icon */}
//                     <div className="absolute inset-0">
//                         {/* Outer Background Gray Ring */}
//                         <svg className='absolute inset-0 w-full h-full' viewBox='0 0 100 100'>
//                             <circle
//                                 cx='50'
//                                 cy='50'
//                                 r='45'
//                                 fill='none'
//                                 stroke='#E4E6EB'
//                                 strokeWidth='4'
//                             />
//                         </svg>
                        
//                         {/* Outer Blue Progress Ring - Animated */}
//                         <svg 
//                             className='absolute inset-0 w-full h-full animate-spin' 
//                             style={{ 
//                                 animationDuration: '1.2s', 
//                                 animationTimingFunction: 'linear'
//                             }}
//                             viewBox='0 0 100 100'
//                         >
//                             <circle
//                                 cx='50'
//                                 cy='50'
//                                 r='45'
//                                 fill='none'
//                                 stroke='#1877F2'
//                                 strokeWidth='4'
//                                 strokeLinecap='round'
//                                 strokeDasharray='70 220'
//                                 strokeDashoffset='0'
//                                 transform='rotate(-90 50 50)'
//                             />
//                         </svg>

//                         {/* Inner Background Gray Ring */}
//                         <svg className='absolute inset-0 w-full h-full' viewBox='0 0 100 100'>
//                             <circle
//                                 cx='50'
//                                 cy='50'
//                                 r='45'
//                                 fill='none'
//                                 stroke='#E4E6EB'
//                                 strokeWidth='4'
//                                 strokeOpacity='0.3'
//                             />
//                         </svg>

//                         {/* Inner Blue Progress Ring - Animated opposite direction */}
//                         <svg 
//                             className='absolute inset-0 w-full h-full animate-spin' 
//                             style={{ 
//                                 animationDuration: '1.8s', 
//                                 animationTimingFunction: 'linear',
//                                 animationDirection: 'reverse'
//                             }}
//                             viewBox='0 0 100 100'
//                         >
//                             <circle
//                                 cx='50'
//                                 cy='50'
//                                 r='45'
//                                 fill='none'
//                                 stroke='#1877F2'
//                                 strokeWidth='4'
//                                 strokeLinecap='round'
//                                 strokeDasharray='45 250'
//                                 strokeDashoffset='0'
//                                 transform='rotate(-90 50 50)'
//                                 strokeOpacity='0.5'
//                             />
//                         </svg>
//                     </div>

//                     {/* Center Logo with Facebook-style Icon */}
//                     <div className='relative flex items-center justify-center z-20'>
//                         {/* White Background Circle */}
//                         <div className='absolute inset-0 rounded-full bg-white scale-110'></div>
                        
//                         {/* Main Logo Container - Facebook Style */}
//                         <div className='relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 shadow-md border-2 border-white flex items-center justify-center'>
//                             {/* Facebook-style Icon (Small Logo) */}
//                             <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner'>
//                                 <Image 
//                                     src={LogoIcon} 
//                                     alt='Logo' 
//                                     width={60}
//                                     height={60}
//                                     className='w-14 h-14 object-contain rounded-full'
//                                     priority
//                                 />
//                             </div>
                            
//                             {/* Small decorative elements like Facebook */}
//                             <div className='absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full border-2 border-blue-600'></div>
//                             <div className='absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-blue-300 rounded-full opacity-60'></div>
//                         </div>
                        
//                         {/* Subtle Glow Effect */}
//                         <div className='absolute inset-0 rounded-full bg-blue-400/20 blur-md -z-10 scale-125'></div>
//                     </div>
//                 </div>
                
               
//             </div>
//         </div>
//     );
// }

// 'use client';
// import LogoIcon from '@/assets/logo.webp';
// import Image from 'next/image';

// export default function PagePreloader() {
//     return (
//         <div className='fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#ffffff]'>
//             {/* Subtle Animated Background Radial Glow */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent animate-pulse" />

//             <div className='relative z-10 flex flex-col items-center'>
//                 <div className='relative w-72 h-72 flex items-center justify-center'> 
                    
//                     {/* 1. Background Static Ring (Track) */}
//                     <div className="absolute inset-0 rounded-full border-[3px] border-gray-100" />

//                     {/* 2. Outer Gradient Glow (Slow Rotation) */}
//                     <div className='absolute inset-0 rounded-full border-t-2 border-primary/30 animate-spin' 
//                          style={{ animationDuration: '8s' }} />

//                     {/* 3. Primary Fast Arc (Clockwise) */}
//                     <svg
//                         className='absolute inset-0 w-full h-full animate-spin'
//                         style={{ animationDuration: '1.5s' }}
//                         viewBox='0 0 100 100'
//                     >
//                         <defs>
//                             <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                                 <stop offset="0%" stopColor="transparent" />
//                                 <stop offset="100%" stopColor="currentColor" />
//                             </linearGradient>
//                         </defs>
//                         <path
//                             d="M 50 2 A 48 48 0 0 1 98 50"
//                             fill='none'
//                             stroke='url(#arcGradient)'
//                             strokeWidth='4'
//                             strokeLinecap='round'
//                             className='text-primary'
//                         />
//                         {/* Glowing Tip Arrow */}
//                         <circle cx="98" cy="50" r="2.5" fill="currentColor" className="text-primary shadow-lg" />
//                     </svg>

//                     {/* 4. Secondary Reverse Arc (Counter-Clockwise) */}
//                     <svg
//                         className='absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] animate-spin'
//                         style={{ 
//                             animationDuration: '3s',
//                             animationDirection: 'reverse'
//                         }}
//                         viewBox='0 0 100 100'
//                     >
//                         <path
//                             d="M 50 98 A 48 48 0 0 1 2 50"
//                             fill='none'
//                             stroke='currentColor'
//                             strokeWidth='2'
//                             strokeDasharray="20 10"
//                             strokeLinecap='round'
//                             className='text-primary/40'
//                         />
//                     </svg>

//                     {/* 5. Center Logo Area */}
//                     <div className='relative flex items-center justify-center z-10'>
//                         {/* Floating Glow behind logo */}
//                         <div className="absolute w-40 h-40 rounded-full bg-primary/20 blur-3xl animate-pulse" />
                        
//                         <div className='relative p-2 bg-white/40 backdrop-blur-sm rounded-full border border-white/50 shadow-2xl'>
//                             <Image 
//                                 src={LogoIcon} 
//                                 alt='Logo' 
//                                 className='w-36 h-36 rounded-full object-contain' 
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>
                
//                 {/* Modern Loading Text with Character Spacing */}
//                 <div className="mt-12 flex flex-col items-center gap-2">
//                     <span className="text-sm font-bold tracking-[0.3em] text-gray-800 uppercase">
//                         Loading
//                     </span>
//                     <div className="w-24 h-[2px] bg-gray-100 overflow-hidden relative">
//                         <div className="absolute inset-0 bg-primary animate-[loading_2s_ease-in-out_infinite]" />
//                     </div>
//                 </div>
//             </div>

//             <style jsx>{`
//                 @keyframes loading {
//                     0% { transform: translateX(-100%); }
//                     50% { transform: translateX(0); }
//                     100% { transform: translateX(100%); }
//                 }
//             `}</style>
//         </div>
//     );
// }



'use client';
import LogoIcon from '@/assets/logo.webp';
import Image from 'next/image';

export default function PagePreloader() {
    return (
        <div className='fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white'>
            <div className='relative z-10 flex flex-col items-center'>
                <div className='relative w-36 h-36 flex items-center justify-center'> 
                    
                    {/* Facebook Style Spinner Rings with Icon */}
                    <div className="absolute inset-0">
                        {/* Outer Background Gray Ring (Full Circle) */}
                        <svg className='absolute inset-0 w-full h-full' viewBox='0 0 100 100'>
                            <circle
                                cx='50'
                                cy='50'
                                r='45'
                                fill='none'
                                stroke='#E4E6EB'
                                strokeWidth='4'
                            />
                        </svg>
                        
                        {/* Outer Blue Progress Ring - Animated with curved top using clipPath */}
                        <svg 
                            className='absolute inset-0 w-full h-full animate-spin' 
                            style={{ 
                                animationDuration: '1.2s', 
                                animationTimingFunction: 'linear'
                            }}
                            viewBox='0 0 100 100'
                        >
                            {/* ডিফাইন clipPath যাতে রিং এর মাথা বাঁকা দেখায় */}
                            <defs>
                                <clipPath id="curvedClip">
                                    <circle cx="50" cy="50" r="45" />
                                </clipPath>
                                <clipPath id="curvedHead">
                                    <path d="M 50 5 A 45 45 0 0 1 95 50 L 50 50 Z" fill="white" />
                                </clipPath>
                            </defs>
                            
                            {/* পুরো রিং আঁকা, কিন্তু clipPath এর মাধ্যমে শুধু মাথার অংশ দেখানো */}
                            <circle
                                cx='50'
                                cy='50'
                                r='45'
                                fill='none'
                                stroke='#1877F2'
                                strokeWidth='4'
                                strokeLinecap='round'
                                clipPath="url(#curvedHead)"
                            />
                            
                            {/* বাকি অংশ হালকা করে দেখানোর জন্য দ্বিতীয় রিং (ঐচ্ছিক) */}
                            <circle
                                cx='50'
                                cy='50'
                                r='45'
                                fill='none'
                                stroke='#1877F2'
                                strokeWidth='4'
                                strokeOpacity='0.2'
                                strokeLinecap='round'
                                clipPath="url(#curvedClip)"
                            />
                        </svg>

                        {/* Inner Background Gray Ring */}
                        <svg className='absolute inset-0 w-full h-full' viewBox='0 0 100 100'>
                            <circle
                                cx='50'
                                cy='50'
                                r='45'
                                fill='none'
                                stroke='#E4E6EB'
                                strokeWidth='4'
                                strokeOpacity='0.3'
                            />
                        </svg>

                        {/* Inner Blue Progress Ring - Animated opposite direction with curved top */}
                        <svg 
                            className='absolute inset-0 w-full h-full animate-spin' 
                            style={{ 
                                animationDuration: '1.8s', 
                                animationTimingFunction: 'linear',
                                animationDirection: 'reverse'
                            }}
                            viewBox='0 0 100 100'
                        >
                            <defs>
                                <clipPath id="innerCurvedHead">
                                    <path d="M 50 5 A 45 45 0 0 1 95 50 L 50 50 Z" fill="white" />
                                </clipPath>
                            </defs>
                            
                            <circle
                                cx='50'
                                cy='50'
                                r='45'
                                fill='none'
                                stroke='#1877F2'
                                strokeWidth='4'
                                strokeLinecap='round'
                                strokeOpacity='0.5'
                                clipPath="url(#innerCurvedHead)"
                            />
                        </svg>
                    </div>

                    {/* Center Logo with Facebook-style Icon */}
                    <div className='relative flex items-center justify-center z-20'>
                        {/* White Background Circle */}
                        <div className='absolute inset-0 rounded-full bg-white scale-110'></div>
                        
                        {/* Main Logo Container - Facebook Style */}
                        <div className='relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 shadow-md border-2 border-white flex items-center justify-center'>
                            {/* Facebook-style Icon (Small Logo) */}
                            <div className='w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner'>
                                <Image 
                                    src={LogoIcon} 
                                    alt='Logo' 
                                    width={60}
                                    height={60}
                                    className='w-14 h-14 object-contain rounded-full'
                                    priority
                                />
                            </div>
                            
                            {/* Small decorative elements like Facebook */}
                            <div className='absolute -top-0.5 -right-0.5 w-3 h-3 bg-white rounded-full border-2 border-blue-600'></div>
                            <div className='absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-blue-300 rounded-full opacity-60'></div>
                        </div>
                        
                        {/* Subtle Glow Effect */}
                        <div className='absolute inset-0 rounded-full bg-blue-400/20 blur-md -z-10 scale-125'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}