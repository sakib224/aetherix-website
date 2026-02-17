'use client';
import founder_1 from '@/assets/about/founder_1.jpeg';
import founder_2 from '@/assets/about/founder_2.jpeg';
import founder_3 from '@/assets/about/founder_3.jpeg';
import Image from 'next/image';
import Link from 'next/link';
function ContactTeam() {
    // Team Section Data
    const teamMembers = [
        {
            name: 'SM Robiul Islam',
            role: 'Managing Director & Co-Founder',
            email: 'robiul@weaetherix.com',
            propic: founder_1,
            slug: 'Managing-Director-and-Co-Founder',
        },
        {
            name: 'Md Tauhidul Islam',
            role: 'Technical Consultant',

            email: 'tauhidul@weaetherix.com',
            propic: founder_2,
            slug: 'Technical-Consultant',
        },
        {
            name: 'ASM Iftekharul Islam',
            role: 'Chief Executive Officer & Co-Founder',
            email: 'iftekharul@weaetherix.com',
            propic: founder_3,
            slug: 'Cheif-Executive-Officer-and-Co-Founder',
        },
    ];
    return (
        <>
            {' '}
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                    Meet Our <span className='text-secondary'>Founder</span>
                </h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Get to know the top dedicated professionals who will be working on your project
                    and helping your business succeed.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-6'>
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                    >
                        <Link href={`/about/${member.slug}`}>
                            <div className=' flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4'>
                                <Image
                                    src={member.propic}
                                    alt={member.name}
                                    className='w-30 h-30 rounded-full object-cover'
                                />
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-2'>{member.name}</h3>
                            <p className='text-primary font-semibold mb-1'>{member.role}</p>

                            {/* <div className='text-gray-500 hover:text-primary text-sm transition-colors duration-300'>
                                {member.email}
                            </div> */}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ContactTeam;
