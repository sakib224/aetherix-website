'use client';
import { MoveRight } from 'lucide-react';
import { useState } from 'react';
const pricingPlans = [
    {
        id: 1,
        name: 'Basic',
        description: 'Essential features to get started',
        price: '$19',
        period: '/month',
        features: ['Up to 5 projects', 'Basic analytics', 'Email support'],
        featured: false,
    },
    {
        id: 2,
        name: 'Standard',
        description: 'Perfect for growing teams',
        price: '$49',
        period: '/month',
        features: ['Up to 20 projects', 'Advanced analytics', 'Priority support', 'API access'],
        featured: false,
    },
    {
        id: 3,
        name: 'Premium',
        description: 'For enterprise solutions',
        price: '$99',
        period: '/month',
        features: [
            'Unlimited projects',
            'Advanced analytics',
            '24/7 priority support',
            'Full API access',
            'Dedicated account manager',
        ],
        featured: false,
    },
];

export default function GradientPricingSection() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <section className='pb-16 pt-8'>
            <div className='max-w-6xl  grid grid-cols-1 md:grid-cols-3 gap-8'>
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`h-full flex flex-col ${
                            plan.featured ? 'md:-translate-y-4' : ''
                        }`}
                    >
                        <div
                            className={`bg-white rounded-xl overflow-hidden h-full flex flex-col
                ${
                    plan.featured
                        ? 'shadow-lg border-2 border-primary-500'
                        : 'shadow-sm border border-gray-200'
                }
                ${selectedPlan === plan.id ? 'ring-2 ring-primary-500' : ''}
                transition-all duration-300 hover:shadow-md`}
                            onClick={() => setSelectedPlan(plan.id)}
                        >
                            <div className='flex justify-between items-start  p-8 bg-gradient-to-r from-[#1a4b6d] to-secondary-600'>
                                <h3 className='text-2xl font-bold text-white'>{plan.name}</h3>
                                {plan.featured && (
                                    <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-secondary-100 text-secondary-700'>
                                        POPULAR
                                    </span>
                                )}
                            </div>
                            <div className='p-8 flex flex-col flex-grow '>
                                <div className='mb-2'>
                                    <span className='text-5xl font-bold text-primary-800'>
                                        {plan.price}
                                    </span>
                                    <span className='text-lg font-bold text-primary-800'>
                                        {plan.period}
                                    </span>
                                </div>
                                <div className='text-gray-600 mb-6'>{plan.description}</div>

                                <ul className='space-y-4 mb-8 flex-grow'>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className='flex items-start'>
                                            <div className='flex-shrink-0 bg-secondary-400 rounded-full  mr-3'>
                                                <div className='h-6 w-6 flex items-center justify-center bg-secondary-400 rounded-full'>
                                                    <svg
                                                        className='h-4 w-4 text-white'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'
                                                    >
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clipRule='evenodd'
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className='text-gray-700'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className='w-full group relative px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-500 ease-out transform hover:scale-[1.02] focus:outline-none text-white bg-[#002a57] border border-white/20 flex items-center justify-center gap-2 cursor-pointer mx-auto'>
                                    <span className='relative z-10'>Subscribe Now</span>
                                    <MoveRight className='relative z-10 w-4 h-4' />

                                    {/* Animated gradient background */}
                                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-95 group-hover:opacity-100 group-hover:scale-100' />

                                    {/* Glow effect */}
                                    <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
