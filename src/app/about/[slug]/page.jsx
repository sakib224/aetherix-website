import founder_1 from '@/assets/about/founder_1.jpeg';
import founder_2 from '@/assets/about/founder_2.jpeg';
import founder_3 from '@/assets/about/founder_3.jpeg';
import CertificationCarousel from '@/components/about/CertificationCarousel';
import HeaderSection from '@/components/global/HeaderSecton';
import teamPage from '@/seo/teamPage';
import { generateSEOMetadata } from '@/utils/metadata';
import { Globe, Linkedin, Mail, Mails, TabletSmartphone, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export async function generateStaticParams() {
    return [
        { slug: 'Managing-Director-and-Co-Founder' },
        { slug: 'Technical-Consultant' },
        { slug: 'Cheif-Executive-Officer-and-Co-Founder' },
    ];
}

export async function generateMetadata(props) {
    const { slug } = await props.params;
    const seoData = teamPage[slug];
    return generateSEOMetadata(seoData);
}

const LeadershipProfile = async ({ params }) => {
    const { slug } = await params;

    const profilesData = [
        {
            slug: 'Managing-Director-and-Co-Founder',
            name: 'SM Robiul Islam',
            role: 'Managing Director & Co-Founder',
            company: 'Tech Solutions Inc.',
            location: 'San Francisco, CA',
            image: founder_1,
            shortBio:
                'SM Robiul Islam is the Managing Director and Co-Founder of Aetherix Limited, leading strategic operations and business development. With a strong vision for growth and a customer-centric approach, he ensures the company’s objectives align with market demands and long-term sustainability. Robiul is passionate about fostering innovation, building high-performing teams, and driving organizational excellence.',
            contact: {
                email: 'smrobiulislam@aetherixllc.com',
                // phone: '+8801896-061686',
                // website: '#',
                // linkedin: '#',
            },
            stats: [
                { label: 'Projects Delivered', value: '150+' },
                { label: 'Team Size', value: '50+' },
                { label: 'Years Experience', value: '12' },
                { label: 'Success Rate', value: '98%' },
            ],
            certifications: [
                'AWS Certified Solutions Architect',
                'Google Cloud Professional',
                'Kubernetes Administrator',
                'TOGAF Certified',
                'Microsoft Azure Architect',
                'DevOps Engineering',
            ],
        },
        {
            slug: 'Technical-Consultant',
            name: 'Md Tauhidul Islam',
            role: 'Technical Consultant',
            company: 'Tech Solutions Inc.',
            location: 'New York, NY',
            image: founder_2,
            shortBio:
                'Md Tauhidul Islam is a Technical Consultant  of Aetherix Limited, specializing in software architecture, systems integration, and innovative digital solutions. With deep technical expertise, he helps clients design, implement, and optimize scalable technology systems. Tauhidul is known for his hands-on problem-solving approach and bridging technical execution with business objectives.',
            contact: {
                email: 'tauhidulislam@aetherixllc.com',
                // phone: '+8801896-061686',
                // website: '#',
                // linkedin: '#',
            },
            stats: [
                { label: 'Deals Closed', value: '$2B+' },
                { label: 'Funding Raised', value: '$500M' },
                { label: 'Years in Finance', value: '15' },
                { label: 'IPO Success', value: '8' },
            ],
            certifications: [
                'Chartered Financial Analyst (CFA)',
                'Certified Public Accountant (CPA)',
                'Financial Risk Manager (FRM)',
                'Chartered Alternative Investment Analyst',
                'Certified Management Accountant',
            ],
        },
        {
            slug: 'Cheif-Executive-Officer-and-Co-Founder',
            name: 'ASM Iftekharul Islam',
            role: ' Chief Executive Officer & Co-Founder',
            company: 'Tech Solutions Inc.',
            location: 'Global',
            image: founder_3,
            shortBio:
                'A S M Iftekharul Islam is the CEO and Co-Founder of Aetherix Limited, driving the company’s vision, strategy, and growth. With both leadership and technical expertise, he combines strategic foresight with hands-on knowledge of digital technologies to deliver impactful solutions. Under his guidance, the company continues to innovate, expand, and deliver measurable value to clients and stakeholders.',
            contact: {
                email: 'iftekharulislam@aetherixllc.com',
                phone: '+8801896-061686',
                // website: 'iftekharul.tech',
                linkedin: 'linkedin.com/in/asmiftekharulislam',
            },
            stats: [
                { label: 'Companies Founded', value: '3' },
                { label: 'Global Team', value: '200+' },
                { label: 'Market Cap Growth', value: '500%' },
                { label: 'Countries', value: '15' },
            ],
            certifications: [
                'Board Leadership Certification',
                'Digital Transformation Strategy',
                'Corporate Governance',
                'Executive Leadership Program',
                'Strategic Management Certification',
            ],
        },
    ];

    const profileData = profilesData?.find((profile) => profile.slug === slug);

    return (
        <>
            <HeaderSection title={profileData?.name} />

            <div className='min-h-screen bg-gradient-to-br from-slate-50 via-primary-50/30 to-cyan-50/20 py-8'>
                <div className='container '>
                    <div className='bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 mb-8 relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-cyan-500/10 rounded-full -translate-y-36 translate-x-36'></div>
                        <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-500/3 to-primary/5 rounded-full translate-y-48 -translate-x-48'></div>

                        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10'>
                            <div className='flex-shrink-0'>
                                <div className='relative'>
                                    {profileData?.image ? (
                                        <Image
                                            src={profileData.image}
                                            alt={profileData.name}
                                            className='w-32 h-32 rounded-2xl object-cover shadow-2xl border-4 border-white/80'
                                        />
                                    ) : (
                                        <div className='w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-2xl border-4 border-white/80'>
                                            {profileData?.name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')}
                                        </div>
                                    )}
                                    <div className='absolute -inset-4 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-3xl blur-xl -z-10'></div>
                                </div>
                            </div>

                            <div className='flex-1 text-center lg:text-left'>
                                <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 mb-4 shadow-sm border border-white/50'>
                                    <Users className='w-4 h-4 text-primary' />
                                    <span className='text-sm font-medium text-gray-700'>
                                        Executive Leadership
                                    </span>
                                </div>

                                <h1 className='text-4xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3'>
                                    {profileData?.name}
                                </h1>

                                <div className='flex flex-col sm:flex-row items-center gap-3 mb-4'>
                                    <span className='text-xl font-semibold bg-gradient-to-br from-primary to-cyan-500 bg-clip-text text-transparent'>
                                        {profileData?.role}
                                    </span>
                                </div>

                                <div className='bg-gradient-to-br from-primary-50 to-cyan-50/50 rounded-2xl p-6 mb-6 border border-primary-100/50'>
                                    <h3 className='text-lg font-semibold text-gray-800 mb-3'>
                                        Professional Overview
                                    </h3>
                                    <p className='text-gray-700 leading-relaxed text-base'>
                                        {profileData?.shortBio}
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <Link
                                    // href={`mailto:${profileData?.contact.email}`}
                                    href='/contact'
                                    className='flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-cyan-500 text-white rounded-2xl hover:from-primary-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm transform hover:-translate-y-0.5'
                                >
                                    <Mail className='w-4 h-4' />
                                    Schedule Meeting
                                </Link>
                                <div className='flex gap-2 justify-center'>
                                    {profileData?.contact.linkedin && (
                                        <a
                                            href={`https://${profileData?.contact.linkedin}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md border border-white/50 hover:scale-105'
                                        >
                                            <Linkedin className='w-5 h-5 text-gray-700' />
                                        </a>
                                    )}
                                    {profileData?.contact.website && (
                                        <a
                                            href={`https://${profileData?.contact.website}`}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md border border-white/50 hover:scale-105'
                                        >
                                            <Globe className='w-5 h-5 text-gray-700' />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 relative overflow-hidden'>
                        <div className='absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-cyan-500/10 rounded-full -translate-y-20 -translate-x-20'></div>
                        <div className='absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-slate-500/3 to-cyan-500/5 rounded-full translate-y-24 translate-x-24'></div>

                        <div className='relative z-10'>
                            <h2 className='text-2xl font-bold text-gray-900 mb-2 text-center'>
                                Professional Certifications
                            </h2>
                            <p className='text-gray-600 text-center mb-8 max-w-2xl mx-auto'>
                                Industry-recognized credentials demonstrating expertise and
                                commitment to professional excellence
                            </p>
                            <CertificationCarousel
                                certifications={profileData?.certifications || []}
                            />
                        </div>
                    </div>

                    <div className='bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 mt-6 relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-500/5 to-primary/10 rounded-full -translate-y-8 translate-x-8'></div>
                        <div className='grid md:grid-cols-2 gap-8 relative z-10'>
                            <div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                                    Get in Touch
                                </h3>
                                <p className='text-gray-600 mb-6'>
                                    Interested in collaborating or learning more about our services?
                                    Reach out directly.
                                </p>

                                <div className='flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:bg-white/70 transition-all duration-300'>
                                    <div className='p-3 rounded-full bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]'>
                                        <Mails className='w-5 h-5 text-primary' />
                                    </div>
                                    <div>
                                        <a
                                            href={`mailto:${profileData?.contact.email}`}
                                            className='text-gray-800 hover:text-primary transition-colors duration-200 font-medium'
                                        >
                                            {profileData?.contact.email}
                                        </a>
                                    </div>
                                </div>
                                {profileData?.contact.phone && (
                                    <div className='flex items-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:bg-white/70 transition-all duration-300'>
                                        <div className='p-3 rounded-full bg-white border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]'>
                                            <TabletSmartphone className='w-5 h-5 text-primary' />
                                        </div>
                                        <div>
                                            <a
                                                href={`tel:${profileData?.contact.phone}`}
                                                className='text-gray-800 hover:text-primary transition-colors duration-200 font-medium'
                                            >
                                                {profileData?.contact.phone}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='flex flex-col justify-center items-center text-center'>
                                <div className='bg-gradient-to-br from-primary to-cyan-500 rounded-2xl p-6 text-white shadow-lg max-w-xs'>
                                    <h4 className='font-semibold mb-2'>Ready to Connect?</h4>
                                    <p className='text-sm opacity-90 mb-4'>
                                        Schedule a meeting to discuss potential opportunities
                                    </p>
                                    <a
                                        href={`mailto:${profileData?.contact.email}`}
                                        className='inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors duration-200'
                                    >
                                        <Mail className='w-4 h-4' />
                                        Contact Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeadershipProfile;
