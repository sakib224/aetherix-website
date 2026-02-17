import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import MarqueSection from './MarqueSection';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
    const items = [
        'AETHERIX LLC',
        'info@aetherixllc.com',
        '+8801896-061686',
        'Plot#362, Road#5, Avenue#4, Mirpur DOHS, Dhaka-1216',
        '74 E Glenwood Ave Unit #5210, Smyrna, DE 19977',
    ];
    return (
        <footer>
            <MarqueSection items={items} />

            <div className='bg-gradient-to-br from-primary to-cyan-500 text-white text-sm pt-12 pb-6'>
                <div className='flex justify-between flex-wrap gap-10 container'>
                    <div className='max-w-sm flex flex-col'>
                        <div className='flex items-center'>
                            <Logo width={80} height={50} />
                            <div>
                                <div className='text-2xl font-bold ml-4'>AETHERIX LLC</div>
                                <div className='text-sm ml-4'>Mastering the Digital Multiverse</div>
                            </div>
                        </div>
                        <hr className='my-2' />
                        <p className='mb-2'>
                            AETHERIX LLC delivers innovative, high-quality solutions, exceeding
                            expectations with a focus on excellence.
                        </p>
                    </div>

                    <div>
                        <h5 className='font-semibold mb-4'>Useful Links</h5>
                        <ul className='space-y-2 '>
                            {/* <li>
                                <Link href='/faq'>FAQ</Link>
                            </li> */}
                            <li>
                                <Link href='/terms-and-conditions'>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href='/privacy-policy'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href='/career'>Career</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className='font-semibold mb-4'>Head Office</h5>
                        <ul className='space-y-2'>
                            <a
                                className='flex items-center'
                                href='https://maps.app.goo.gl/Ka7hcKhNcfLiSjqG6'
                                target='_blank'
                            >
                                <MapPin className='w-4 h-4 mr-2 text-[#00b3c8]' />
                                <div>
                                    <div>74 E Glenwood Ave Unit #5210</div>
                                    <div>Smyrna, DE 19977</div>
                                </div>
                            </a>
                            <a
                                className='flex items-center'
                                href='tel:+8801521466101'
                                target='_blank'
                            >
                                <Phone className='w-4 h-4 mr-2 text-[#00b3c8]' />
                                <div>+8801896-061686</div>
                            </a>
                            <a
                                className='flex items-center'
                                href='mailto:info@aetherixllc.com'
                                target='_blank'
                            >
                                <Mail className='w-4 h-4 mr-2 text-[#00b3c8]' />
                                <div>info@aetherixllc.com</div>
                            </a>
                        </ul>
                    </div>
                    <div>
                        <h5 className='font-semibold mb-4'>Bangladesh Office</h5>
                        <ul className='space-y-2'>
                            <a
                                className='flex items-center'
                                href='https://maps.app.goo.gl/sDTQADHzuS1z9cia7'
                                target='_blank'
                            >
                                <MapPin className='w-4 h-4 mr-2 text-[#00b3c8]' />
                                <div>
                                    <div>Plot# 362, Road# 5, Avenue# 4</div>
                                    <div>Mirpur DOHS, Dhaka-1216</div>
                                </div>
                            </a>
                            <a
                                className='flex items-center'
                                href='tel:+8801521466101'
                                target='_blank'
                            >
                                <Phone className='w-4 h-4 mr-2 text-[#00b3c8]' />
                                <div>+8801896-061686</div>
                            </a>
                            <a
                                className='flex items-center'
                                href='mailto:info@aetherixllc.com'
                                target='_blank'
                            >
                                <Mail className='w-4 h-4 mr-2 text-[#00b3c8]' />
                                <div>info@aetherixllc.com</div>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <SocialMediaIcons />
                </div>
                <div className='mt-10 border-t border-white/20 pt-4 text-center text-white/70'>
                    Copyright © 2025, AETHERIX LLC
                </div>
            </div>
        </footer>
    );
};
export default Footer;
