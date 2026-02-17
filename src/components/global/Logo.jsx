'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';
const Logo = ({ width = 50, height = 50 }) => {
    return (
        <Link href='/'>
            <Image
                src={logo}
                alt='Brand'
                className={'w-[' + width + 'px] h-auto'}
                width={width}
                height={height}
            />
        </Link>
    );
};

export default Logo;
