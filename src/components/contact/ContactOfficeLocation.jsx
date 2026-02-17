'use client';
'use client';
import { Clock, Mail, MapPin, MoveRight, Phone } from 'lucide-react';
function ContactOfficeLocation() {
    const offices = [
        {
            title: 'Corporate Office',
            location: 'Delaware, USA',
            // company: 'WEAETHERIX CORP',
            address: '74 E Glenwood Ave Unit #5210, Smyrna, DE 19977',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.261448587642!2d-75.60938901078718!3d39.30499674860647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c771375d1ae6c5%3A0x2b42722885c0c376!2s74%20E%20Glenwood%20Ave%20%235210%2C%20Smyrna%2C%20DE%2019977%2C%20USA!5e0!3m2!1sen!2sbd!4v1752175112448!5m2!1sen!2sbd',
            timezone: 'EST',
        },
        {
            title: 'Regional Office',
            location: 'Dhaka, Bangladesh',
            // company: 'WEAETHERIX CORP',
            address: 'Plot# 362, Road# 5, Avenue# 4, Mirpur DOHS, Dhaka-1216',
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d912.3819525472925!2d90.36888710185241!3d23.835384384569654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c100372fe10d%3A0x62b9df195ebcf15f!2sAETHERIX%20LLC%20%7C%20Software%20Development%20%26%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sbd!4v1765216925606!5m2!1sen!2sbd',
            timezone: 'BST',
        },
    ];
    const contactInfo = [
        { icon: Phone, text: '+8801896-061686', type: 'USA' },
        { icon: Phone, text: '+8801896-061686', type: 'BD Office' },
        { icon: Mail, text: 'info@aetherixllc.com', type: 'Email' },
    ];
    const handleGetDirections = (address) => {
        const mapsUrl = address;
        window.open(mapsUrl, '_blank');
    };
    return (
        <>
            {' '}
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                    Our <span className='text-secondary'>Locations</span>
                </h2>
                <p className='text-gray-600'>Visit us at our offices around the world</p>
            </div>
            {offices.map((office, idx) => (
                <div
                    key={idx}
                    className='bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500'
                >
                    <div
                        className={`grid lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
                            }`}
                    >
                        {/* Map */}
                        <div
                            className={`relative h-80 lg:h-auto ${idx % 2 === 1 ? 'lg:col-start-2' : ''
                                }`}
                        >
                            <iframe
                                src={office.mapSrc}
                                width='100%'
                                height='100%'
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen
                                loading='lazy'
                                className='w-full h-full'
                            />
                        </div>

                        {/* Info */}
                        <div className='p-8 lg:p-12 flex flex-col justify-center'>
                            <div className='inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit'>
                                <MapPin className='w-4 h-4' />
                                {office.location}
                            </div>

                            <h3 className='text-3xl font-bold text-gray-900 mb-6'>
                                {office.title}
                            </h3>

                            <div className='space-y-4 mb-6'>
                                <div>
                                    {/* <h4 className='text-sm font-bold text-gray-800 mb-2 uppercase tracking-wider'>
                                        {office.company}
                                    </h4> */}
                                    <p className='text-gray-600 leading-relaxed'>
                                        {office.address}
                                    </p>
                                </div>

                                <div className='pt-4 border-t border-gray-200'>
                                    <h4 className='text-sm font-bold text-gray-800 mb-3 uppercase tracking-wider'>
                                        Contact
                                    </h4>
                                    <div className='space-y-2'>
                                        {contactInfo.slice(1, 3).map((item, i) => (
                                            <div
                                                key={i}
                                                className='flex items-center gap-3 text-gray-600'
                                            >
                                                <item.icon className='w-4 h-4 text-primary' />
                                                <span className='text-sm'>{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='pt-4 border-t border-gray-200'>
                                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                                        <Clock className='w-4 h-4 text-primary' />
                                        <span>
                                            Timezone: {office.timezone} | Working Hours: 9 AM - 6 PM
                                        </span>

                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleGetDirections(office.mapSrc)}
                                className='group flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 hover:text-secondary'
                            >
                                Get Directions
                                <MoveRight className='w-5 h-5' />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ContactOfficeLocation;
