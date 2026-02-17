'use client';
function ContactFaq() {
    const faqs = [
        {
            question: 'What services do you provide?',
            answer: 'We offer web development, mobile app development, UI/UX design, digital marketing, and cloud solutions tailored to your business needs.',
        },
        {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on complexity, but most projects are completed within 4-12 weeks. We provide detailed timelines during our initial consultation.',
        },
        {
            question: 'Do you offer ongoing support?',
            answer: 'Yes, we provide comprehensive ongoing support and maintenance services to ensure your digital solutions continue to perform optimally.',
        },
        {
            question: 'What is your pricing structure?',
            answer: 'We offer flexible pricing models including project-based, hourly, and retainer options. Contact us for a customized quote based on your specific requirements.',
        },
    ];
    return (
        <>
            {' '}
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>
                    Frequently Asked <span className='text-secondary'>Questions</span>
                </h2>
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Find answers to common questions about our services, processes, and how we can
                    help your business grow.
                </p>
            </div>
            <div className='grid gap-4 max-w-4xl mx-auto'>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300'
                    >
                        <div className='p-6'>
                            <h3 className='text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3'>
                                <span className='w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0'>
                                    Q
                                </span>
                                {faq.question}
                            </h3>
                            <div className='flex items-start gap-3'>
                                <span className='w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0'>
                                    A
                                </span>
                                <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ContactFaq;
