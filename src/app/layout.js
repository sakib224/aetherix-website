import Footer from '@/components/global/Footer';
import Header from '@/components/global/Header';
// import RouteProgressBar from '@/components/global/RouteProgressBar.tsx';
import ScrollToTop from '@/components/global/scrollToTop';
import '@/styles/globals.css';
//import { Montserrat } from 'next/font/google';
// import { Suspense } from 'react';
import PreloaderProvider from './PreloaderProvider';

// Option 1: Inter (Modern, clean, excellent readability)
//import { Inter } from 'next/font/google';

// Option 2: Poppins (Geometric, friendly, popular)
//import { Poppins } from 'next/font/google';

// Option 3: Roboto (Classic, versatile, professional)
// import { Roboto } from 'next/font/google';

// Option 4: Open Sans (Neutral, humanist, highly readable)
//import { Open_Sans } from 'next/font/google';

// Option 5: Nunito (Rounded, friendly, modern)
//import { Nunito } from 'next/font/google';

// Option 6: Work Sans (Contemporary, clean, slightly condensed)
// import { Work_Sans } from 'next/font/google';

// Option 7: Plus Jakarta Sans (Modern, geometric, elegant)
import { Plus_Jakarta_Sans } from 'next/font/google';

// Current: Montserrat
//import { Montserrat } from 'next/font/google';

const interMono = Plus_Jakarta_Sans({
    variable: '--geist-mono',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '800'],
});

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={` ${interMono.variable} antialiased`}>
                <Header />
                {/* <Suspense fallback={null}>
                    <RouteProgressBar />
                </Suspense> */}
                <PreloaderProvider> {children}</PreloaderProvider>

                <ScrollToTop />
                <Footer />
            </body>
        </html>
    );
}
