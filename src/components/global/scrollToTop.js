'use client';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className='fixed bottom-8 right-8 z-50'>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='group bg-[#002a57] hover:bg-primary-700 text-roket-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out cursor-pointer'
                    aria-label='Scroll to top'
                >
                    <ChevronUp className='w-5 h-5 text-white transition-colors duration-300 group-hover:text-white' />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
