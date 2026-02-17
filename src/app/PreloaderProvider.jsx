'use client';

import PagePreloader from '@/components/PagePreloader';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function PreloaderProvider({ children }) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const visitedRoutes = useRef(new Set());
    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
                setIsInitialLoad(false);

                visitedRoutes.current.add(pathname);
            }, 300);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, [pathname]);

    useEffect(() => {
        if (!isInitialLoad) {
            if (!visitedRoutes.current.has(pathname)) {
                setIsLoading(true);

                const timer = setTimeout(() => {
                    setIsLoading(false);

                    visitedRoutes.current.add(pathname);
                }, 1500);

                return () => clearTimeout(timer);
            }
        }
    }, [pathname, isInitialLoad]);

    return (
        <>
            {isLoading && <PagePreloader />}
            {children}
        </>
    );
}
