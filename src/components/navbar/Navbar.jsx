'use client';
import { Briefcase, FileText, Home, Phone, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '../global/Logo';
import MobileLogo from '../global/MobileLogo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => {
        return pathname === path;
    };
    //    const isActive = (path) => {

    //     if (path === '/') {
    //         return pathname === '/';
    //     }

    //     return pathname.startsWith(path);
    // };

    const navLinks = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/services', label: 'Services', icon: Briefcase },
        { path: '/blogs', label: 'Blog', icon: FileText },
        { path: '/about', label: 'About', icon: User },
        { path: '/contact', label: 'Contact', icon: Phone },
    ];

    return (
        <>
            <div className='fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent z-[1000]' />

            <nav
                className={`fixed w-full top-0 z-[999] transition-all duration-500 ${
                    isScrolled ? 'bg-white/15 backdrop-blur-2xl   shadow-sm' : 'bg-transparent'
                }`}
            >
                <div className='container'>
                    <div className='flex items-center justify-between h-20'>
                        <div className='flex-shrink-0 transform  transition-transform duration-300 hover:scale-105'>
                            <div className='hidden md:block'>
                                <Logo />
                            </div>
                            <div className='md:hidden'>
                                <MobileLogo />
                            </div>
                        </div>

                        {/* Desktop */}
                        <div
                            className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 `}
                        >
                            {navLinks.map((link, index) => {
                                const active = isActive(link.path);
                                const IconComponent = link.icon;
                                return (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className='relative px-4 py-2 rounded-full group'
                                    >
                                        <span
                                            className={`absolute inset-0 bg-white rounded-full transition-all duration-500 shadow-sm ${
                                                active
                                                    ? 'opacity-100 scale-100'
                                                    : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                                            }`}
                                        />

                                        {active && (
                                            <span className='absolute top-1/2 -translate-y-1/2 -left-1 w-1 h-1 bg-blue-600 rounded-full'>
                                                <span className='absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75' />
                                            </span>
                                        )}

                                        <span
                                            className={`relative text-sm font-semibold tracking-wide transition-all duration-300 ${
                                                !isScrolled
                                                    ? active
                                                        ? 'text-gray-900'
                                                        : 'text-white group-hover:text-gray-900'
                                                    : active
                                                    ? 'text-black'
                                                    : 'text-black group-hover:text-gray-900'
                                            }`}
                                        >
                                            {link.label}
                                        </span>

                                        <span
                                            className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent transition-all duration-500 ${
                                                active
                                                    ? 'w-3/4 opacity-100'
                                                    : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                                            }`}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                        <a
                            href='tel:+8801896-061686'
                            className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 overflow-hidden group
                            bg-primary-600 text-white shadow-lg hover:shadow-xl
                            `}
                        >
                            <span className='absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            <Phone size={18} className='relative z-10 animate-pulse' />
                            <span className='relative z-10 hidden sm:inline'>Get in Touch</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile */}
            <div className='lg:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[998] w-[90%] max-w-md'>
                <div className='bg-white/15 backdrop-blur-2xl rounded-2xl border border-gray-200 shadow-lg p-2'>
                    <div className='flex items-center justify-around'>
                        {navLinks.map((link) => {
                            const active = isActive(link.path);
                            const IconComponent = link.icon;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`relative flex flex-col items-center p-3 rounded-xl transition-all duration-300 group ${
                                        active
                                            ? 'text-secondary bg-secondary/10'
                                            : 'text-primary hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    {active && (
                                        <div className='absolute inset-0 rounded-xl bg-blue-50 border border-blue-100 animate-pulse' />
                                    )}

                                    <div className='relative z-10'>
                                        <IconComponent
                                            size={20}
                                            className={`transition-all duration-300 ${
                                                active ? 'scale-110' : 'group-hover:scale-105'
                                            }`}
                                            strokeWidth={active ? 2.5 : 2}
                                        />
                                    </div>

                                    <span
                                        className={`relative z-10 text-xs font-medium mt-1 transition-all duration-300 ${
                                            active
                                                ? 'text-secondary scale-105'
                                                : 'group-hover:text-gray-900'
                                        }`}
                                    >
                                        {link.label}
                                    </span>

                                    {active && (
                                        <span className='absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full'>
                                            <span className='absolute inset-0 bg-blue-600 rounded-full animate-ping' />
                                        </span>
                                    )}

                                    <div
                                        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 ${
                                            active ? 'opacity-100' : 'group-hover:opacity-100'
                                        }`}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
