'use client';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        services: [],
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        // if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        // if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        //if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };
    const handlePhoneChange = (value) => {
        setFormData((prev) => ({ ...prev, phone: value }));
        if (errors.phone) {
            setErrors((prev) => ({ ...prev, phone: '' }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length === 0) {
            setIsSubmitting(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setShowSuccess(true);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                services: [],
            });
            setErrors({});
            setIsSubmitting(false);
        } else {
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleServiceToggle = (service) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };
    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Digital Marketing',
        'Cloud Solutions',
        'Other',
    ];

    return (
        <>
            <div className='grid md:grid-cols-2 gap-4'>
                <div>
                    <label className='block text-sm font-semibold text-black mb-2'>
                        First name
                    </label>
                    <input
                        type='text'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='First name'
                        className={`w-full px-4 py-2.5 text-gray-800 rounded-lg border ${
                            errors.firstName ? 'border-red-300' : 'border-gray-500'
                        } focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all`}
                    />
                    {errors.firstName && (
                        <p className='text-red-500 text-xs mt-1'>{errors.firstName}</p>
                    )}
                </div>

                <div>
                    <label className='block text-sm font-semibold text-black mb-2'>Last name</label>
                    <input
                        type='text'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Last name'
                        className={`w-full px-4 py-2.5 text-gray-800 rounded-lg border ${
                            errors.lastName ? 'border-red-300' : 'border-gray-500'
                        } focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all`}
                    />
                    {errors.lastName && (
                        <p className='text-red-500 text-xs mt-1'>{errors.lastName}</p>
                    )}
                </div>
            </div>
            <div>
                <label className='block text-sm font-semibold text-black mb-2'>Email</label>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                    className={`w-full px-4 py-2.5 text-gray-800 rounded-lg border ${
                        errors.email ? 'border-red-300' : 'border-gray-500'
                    } focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all`}
                />
                {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>
            <div>
                <label className='block text-sm font-semibold text-black mb-2'>Phone number</label>
                <PhoneInput
                    international
                    defaultCountry='BD'
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder='Enter phone number'
                    className={`phone-input-custom text-gray-800 ${errors.phone ? 'phone-input-error' : ''}`}
                />
                {errors.phone && <p className='text-red-500 text-xs mt-1'>{errors.phone}</p>}
            </div>
            <div>
                <label className='block text-sm font-semibold text-black mb-3'>Services</label>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    {services.map((service) => (
                        <label key={service} className='flex items-center gap-2 cursor-pointer '>
                            <input
                                type='checkbox'
                                checked={formData.services.includes(service)}
                                onChange={() => handleServiceToggle(service)}
                                className='w-4 h-4 rounded border-gray-500 text-gray-900 focus:ring-1 focus:ring-gray-900'
                            />
                            <span className='font-semibold text-black'>{service}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <label className='block text-sm font-semibold text-black mb-2'>Message</label>
                <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Leave us a message...'
                    rows='4'
                    className={`w-full px-4 text-gray-800 py-2.5 rounded-lg border ${
                        errors.message ? 'border-red-300' : 'border-gray-500'
                    } focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-gray-900 transition-all resize-none`}
                ></textarea>
                {errors.message && <p className='text-red-500 text-xs mt-1'>{errors.message}</p>}
            </div>
            <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className=' group relative w-full px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-500 ease-out transform hover:scale-105 focus:outline-none focus:scale-105 text-gray-200 bg-[#002a57] disabled:opacity-50 disabled:cursor-not-allowed '
            >
                <span className='relative z-10 inline-flex items-center gap-2 font-semibold'>
                    {' '}
                    {isSubmitting ? 'Sending...' : 'Send Message'}{' '}
                </span>{' '}
                <div className=' absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100 ' />{' '}
                <div className=' absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100 ' />{' '}
            </button>
            {showSuccess && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-lg p-8 max-w-md w-full border border-gray-200'>
                        <div className='text-center'>
                            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <CheckCircle2 className='w-10 h-10 text-green-600' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-2'>Message Sent!</h3>
                            <p className='text-gray-600 mb-6'>
                                Thank you for contacting us! Our team will be in touch shortly with next steps.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className='bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactForm;
