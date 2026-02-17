import Navbar from '../navbar/Navbar';

const Header = () => {
    return (
        /*   <header
            id='siteHeader'
            className='fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-[#002a57] to-[#0097b2]'
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <div className='text-white text-xl font-bold'> Aetherix LTD</div>
                    <nav className='space-x-6 text-white'>
                        <Link href='/' className='hover:text-gray-200'>
                            Home
                        </Link>
                        <Link href='/about' className='hover:text-gray-200'>
                            About
                        </Link>
                        <Link href='/services' className='hover:text-gray-200'>
                            Services
                        </Link>
                        <Link href='/blogs' className='hover:text-gray-200'>
                            Blog
                        </Link>
                        <Link href='/contact' className='hover:text-gray-200'>
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
            <Navbar />
        </header> */
        <>
            <Navbar />
        </>
    );
};
export default Header;
