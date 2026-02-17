'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.png';
const MobileLogo = () => {
    return (
        <Link href='/'>
            <Image src={logo} alt='Brand' className='w-[40px] h-auto' width={40} />
        </Link>
    );
};

export default MobileLogo;
