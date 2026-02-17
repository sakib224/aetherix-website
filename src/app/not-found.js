'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Construction, Home, ArrowLeft, Wrench, HardHat, Zap } from 'lucide-react';

export default function UnderConstruction() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            // Check if there's a previous page in history
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // Fallback to home page if no history
                window.location.href = '/';
            }
        }
    };

    const floatingIcons = [
        { icon: Wrench, delay: 0 },
        { icon: HardHat, delay: 0.5 },
        { icon: Construction, delay: 1 },
        { icon: Zap, delay: 1.5 },
    ];

    return (
        <div
            className='min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden flex items-center justify-center p-4'
            style={{
                background: 'linear-gradient(135deg, #001a38 0%, #002a57 50%, #1a4480 100%)',
            }}
        >
            <div className='absolute inset-0 opacity-20'>
                <div
                    className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12'
                    style={{
                        background: `linear-gradient(90deg, transparent, rgba(0, 151, 178, 0.1) 50%, transparent)`,
                        transform: `translateX(${mousePosition.x * 0.01}px) translateY(${
                            mousePosition.y * 0.01
                        }px) rotate(12deg)`,
                    }}
                />
            </div>

            {floatingIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className='absolute animate-bounce opacity-20'
                        style={{
                            left: `${20 + index * 20}%`,
                            top: `${15 + index * 15}%`,
                            animationDelay: `${item.delay}s`,
                            animationDuration: '3s',
                        }}
                    >
                        <Icon className='w-8 h-8' style={{ color: '#0097b2' }} />
                    </div>
                );
            })}

            <div className='text-center z-10 max-w-2xl mx-auto'>
                <div className='relative mb-8'>
                    <h1
                        className='text-8xl md:text-9xl font-black text-transparent bg-clip-text animate-pulse'
                        style={{
                            background: 'linear-gradient(135deg, #0097b2, #4dc9db, #0097b2)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        404
                    </h1>
                    <Construction
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 animate-spin'
                        style={{ color: '#0097b2', animationDuration: '3s' }}
                    />
                </div>

                <div className='relative'>
                    <div
                        className='text-black px-6 py-3 rounded-lg font-bold text-lg md:text-xl mb-6 transform -rotate-1 shadow-2xl'
                        style={{
                            background: 'linear-gradient(135deg, #0097b2, #1abbd0)',
                        }}
                    >
                        🚧 UNDER CONSTRUCTION 🚧
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <Link href='/'>
                        <button
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className='group relative text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3'
                            style={{
                                background: 'linear-gradient(135deg, #002a57, #2f5a9e)',
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.background =
                                    'linear-gradient(135deg, #1a4480, #4d76b8)')
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.style.background =
                                    'linear-gradient(135deg, #002a57, #2f5a9e)')
                            }
                        >
                            <Home className='w-5 h-5 group-hover:animate-bounce' />
                            Go Home
                            <div className='absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </button>
                    </Link>

                    {/* <button
                        onClick={handleGoBack}
                        className='group bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-semibold py-4 px-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3'
                    >
                        <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
                        Go Back
                    </button> */}
                </div>

                <div className='mt-8 text-gray-400 text-sm'>
                    <p>Questions? Contact our support team while we build!</p>
                    <p className='font-semibold mt-1' style={{ color: '#0097b2' }}>
                        info@weaetherix.com
                    </p>
                </div>
            </div>

            <div className='absolute inset-0 pointer-events-none'>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className='absolute w-2 h-2 rounded-full opacity-30 animate-ping'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: '#0097b2',
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
