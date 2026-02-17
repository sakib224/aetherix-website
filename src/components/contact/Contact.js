'use client';
import { Clock, Facebook, HeadphonesIcon, MessageSquare, Phone, Send, Zap } from 'lucide-react';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import ContactFaq from './contactFaq';
import ContactForm from './ContactForm';
import ContactOfficeLocation from './ContactOfficeLocation';
import ContactTeam from './ContactTeam';

const Contact = () => {
    const handleSendEmail = () => {
        const subject = encodeURIComponent('Contact Inquiry');
        const body = encodeURIComponent('Hello, I would like to get in touch with your team.');
        window.location.href = `mailto:info@aetherixllc.com?subject=${subject}&body=${body}`;
    };

    const handleFacebookMessage = () => {
        window.open('https://www.facebook.com/profile.php?id=61572936163500', '_blank');
    };

    const handleXMessage = () => {
        window.open('https://twitter.com/messages/compose?recipient_id=Aetherix025', '_blank');
    };

    const features = [
        { icon: Clock, title: '24/7 Support', desc: 'Round the clock assistance' },
        { icon: MessageSquare, title: 'Quick Response', desc: 'Reply within 2 hours' },
        { icon: HeadphonesIcon, title: 'Expert Team', desc: 'Professional guidance' },
        { icon: Zap, title: 'Fast Delivery', desc: 'Quick turnaround time' },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=61572936163500',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png',
            hoverColor: 'hover:bg-[#1877F2]',
        },
        {
            name: 'X',
            url: 'https://x.com/Aetherix025',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/twitterx.png',
            hoverColor: 'hover:bg-[#000000]',
        },
        // {
        //     name: 'Instagram',
        //     url: 'https://instagram.com/yourprofile',
        //     icon: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png',
        //     hoverColor: 'hover:bg-[#E4405F]',
        // },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.etom/company/aetherix-limited/?viewAsMember=true',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png',
            hoverColor: 'hover:bg-[#0A66C2]',
        },
    ];
    return (
        <div className='container  py-16'>
            <div className='flex items-center justify-center flex-col gap-2 pb-20 '>
                <div className='text-4xl text-black font-bold'>Contact Our Team</div>
                <div className='text-base text-gray-800 flex justify-center items-center flex-col'>
                    <span className='text-center font-extrabold pb-4 '>
                        Turn Your Vision into Reality
                    </span>
                    <span className='text-center max-w-5xl'>
                        Tell us about your idea. Our specialized team turns your imagination into
                        powerful digital experiences that inspire and engage — across web, mobile,
                        design, marketing, and cloud solutions.
                    </span>
                </div>
            </div>
            {/* Contact Form Section */}
            <div className='grid lg:grid-cols-3 gap-8 lg:gap-12 pb-12  max-w-5xl mx-auto '>
                <div className='space-y-6 col-span-2'>
                    <ContactForm />
                </div>

                {/* Contact Information */}
                <div className='space-y-6 col-span-1'>
                    <div className=' p-6 '>
                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Get in Touch</h3>
                        <p className='text-gray-600 text-sm mb-4'>
                            We’d love to hear from you — reach our team by email or connect with us
                            on social media
                        </p>
                        <div className='space-y-2.5'>
                            <button
                                onClick={handleSendEmail}
                                className='flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors cursor-pointer font-semibold'
                            >
                                <Send className='w-4 h-4' />
                                <span className='underline'>Shoot us an email</span>
                            </button>
                            <button
                                onClick={handleFacebookMessage}
                                className='flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors cursor-pointer font-semibold'
                            >
                                <Facebook className='w-4 h-4' />
                                <span className='underline'>Connect with Us</span>
                            </button>
                            <button
                                onClick={handleXMessage}
                                className='flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors cursor-pointer font-semibold'
                            >
                                <Image
                                    src='https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=000000'
                                    alt='x'
                                    width={16}
                                    height={16}
                                    unoptimized
                                    className='w-4 h-4 text-black'
                                />
                                <span className='underline'>Share Your Ideas with Us</span>
                            </button>
                        </div>
                    </div>

                    <div className='p-6 '>
                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Call us</h3>
                        <p className='text-gray-600 text-sm mb-4'>
                            Call our team Mon-Fri from 8am to 5pm.
                        </p>
                        <a
                            href='tel:+15551000000'
                            className='flex items-center gap-2 text-sm text-gray-900 hover:text-gray-600 transition-colors font-semibold'
                        >
                            <Phone className='w-4 h-4' />
                            <span className='underline'>+8801896-061686</span>
                        </a>
                    </div>

                    {/* Visit us */}
                    {/* <div className='p-6 '>
                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Visit us</h3>
                        <p className='text-gray-600 text-sm mb-4'>
                            Chat to us in person at our Melbourne HQ.
                        </p>
                        <a
                            href='https://www.google.com/maps/search/?api=1&query=100+Smith+Street+Collingwood+VIC+3066'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-sm text-gray-900 hover:text-gray-600 transition-colors underline'
                        >
                            100 Smith Street, Collingwood VIC 3066
                        </a>
                    </div> */}

                    <div className=' p-6 '>
                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                            Get in Touch via Social Media
                        </h3>
                        <p className='text-gray-600 text-sm mb-4'>
                            Connect us on social media for updates.
                        </p>
                        <div className='flex gap-4'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 rounded-lg border border-gray-500 flex items-center justify-center hover:bg-gray-700 bg-black'
                                    aria-label={social.name}
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={24}
                                        height={24}
                                        unoptimized
                                        className='w-6 h-6'
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16  max-w-5xl mx-auto'>
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'
                    >
                        <div className='w-12 h-12 bg-gradient-to-br from-primary to-teal-500 rounded-xl flex items-center justify-center mb-4'>
                            <feature.icon className='w-6 h-6 text-white' />
                        </div>
                        <h3 className='text-lg font-bold text-gray-900 mb-2'>{feature.title}</h3>
                        <p className='text-gray-600 text-sm'>{feature.desc}</p>
                    </div>
                ))}
            </div>
            <div className='mb-20'>
                <ContactFaq />
            </div>

            <div className='mb-20'>
                <ContactTeam />
            </div>

            <div className='max-w-6xl mx-auto space-y-8'>
                <ContactOfficeLocation />
            </div>
        </div>
    );
};

export default Contact;
