'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRef, useState } from 'react';

const QandAitem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className='border border-gray-200 rounded-xl overflow-hidden mb-4 shadow-sm transition-all duration-300'>
            <button
                className='flex justify-between items-center w-full px-6 py-4 bg-white hover:bg-gray-200 transition-colors duration-200 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='text-left font-medium text-gray-800'>{title}</span>
                {isOpen ? <ChevronUp className='h-5 w-5' /> : <ChevronDown className='h-5 w-5' />}
            </button>

            <div
                ref={contentRef}
                className={`px-6 overflow-hidden bg-white text-gray-700 transition-all duration-500 ease-in-out`}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div className='py-4'>{content}</div>
            </div>
        </div>
    );
};

const ServiceQandA = ({ qAndA }) => {
    const data = [
        {
            title: 'What services does your software company provide?',
            content:
                'We offer web and mobile application development, UI/UX design, cloud solutions, DevOps, QA testing, and custom software development tailored to your business needs.',
        },
        {
            title: 'Do you offer end-to-end software development?',
            content:
                'Yes, we handle everything from requirement analysis and prototyping to development, testing, deployment, and post-launch support.',
        },
        {
            title: 'Can you integrate third-party APIs into existing systems?',
            content:
                'Absolutely. We have experience integrating various APIs, including payment gateways, social media platforms, and enterprise tools like Salesforce or SAP.',
        },
        {
            title: 'How secure are your applications?',
            content:
                'We follow best security practices including data encryption, secure authentication, regular security audits, and compliance with industry standards like GDPR.',
        },
        {
            title: 'Do you provide maintenance and support after project delivery?',
            content:
                'Yes, we offer ongoing support, maintenance, and optimization services to ensure your application stays up-to-date and performs efficiently.',
        },
        {
            title: 'What technologies do you use for development?',
            content:
                'We work with a wide range of technologies including React, Next.js, Angular, Node.js, Python, Java, MySQL, MongoDB, AWS, and more.',
        },
        {
            title: 'How do you manage project timelines and deadlines?',
            content:
                'We follow agile methodologies, use tools like Jira or Trello, and ensure regular communication with clients to keep projects on track and transparent.',
        },
        {
            title: 'Can you scale an application as my business grows?',
            content:
                'Yes, our solutions are built with scalability in mind. We can optimize performance and scale infrastructure as your user base and data grow.',
        },
        {
            title: 'Do you sign NDAs for confidential projects?',
            content:
                'Yes, we prioritize client confidentiality and are happy to sign NDAs before discussing project details.',
        },
        {
            title: 'How do we get started with your team?',
            content:
                'Simply reach out to us through our contact page or email. We’ll schedule a free consultation to understand your needs and provide a tailored solution roadmap.',
        },
    ];

    return (
        <div className='flex flex-col'>
            {qAndA.map((item, index) => (
                <QandAitem key={index} {...item} />
            ))}
        </div>
    );
};

export default ServiceQandA;
