'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const HeaderSection = ({ title }) => {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === '/') return null;

    const autoTitle = pathname
        .split('/')
        .filter(Boolean)
        .pop()
        ?.replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

    const finalTitle = title || autoTitle;

    const segments = pathname.split('/').filter(Boolean);

    const breadcrumbItems = segments.map((segment, index) => {
        const path = '/' + segments.slice(0, index + 1).join('/');
        const name = segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

        return {
            name,
            path,
            isLast: index === segments.length - 1,
        };
    });

    return (
        <section className='animated-gradient-diagonal-herosection overflow-hidden text-white py-20 md:py-30'>
            <div className='container px-4'>
                <h1 className='text-3xl md:text-4xl font-bold mb-2'>{finalTitle}</h1>
                <div className='flex items-center text-sm text-white/80'>
                    <Link href='/' className='hover:text-white transition-colors duration-200'>
                        Home
                    </Link>
                    {breadcrumbItems.map((item, index) => (
                        <div key={index}>
                            <span className='mx-1'>/</span>
                            <Link
                                href={item.path}
                                className='hover:text-white transition-colors duration-200
                                    text-white font-medium'
                                aria-current={item.isLast ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
