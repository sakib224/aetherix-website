import RoketBus from '@/assets/projects/project_1_1.png';
import HeaderSection from '@/components/global/HeaderSecton';
import SEO from '@/components/global/SEO';
import ProductDetails from '@/components/products/ProductDetails';
import servicespage from '@/seo/servicespage';

const exampleProduct = [
    // 1. Rocket Bus
    {
        id: 1,
        name: 'Rocket Bus',
        slug: 'rocket-bus',
        description: 'A modern bus ticketing system with real-time tracking and fleet management',
        category: 'Transportation',
        tags: ['Bus', 'Ticketing', 'Tracking', 'Fleet Management'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
        bannerTitle: 'Rocket Bus - Simplify Your Journey',
        bannerSubtitle: 'Complete bus ticketing solution built with modern technology',
        bannerImage2: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=600&fit=crop',

        problem: 'Transport companies face challenges with manual ticketing, inefficient fleet management, and lack of real-time tracking for passengers. This leads to revenue leakage, poor customer experience, and operational inefficiencies.',
        solution: 'Rocket Bus offers a complete digital solution with online booking, real-time GPS tracking, automated fleet management, and dedicated driver app. It streamlines operations, improves customer satisfaction, and maximizes revenue.',

        features: [
            { title: 'Real-time Tracking', description: 'Live GPS tracking for all vehicles with ETA predictions', icon: 'performance' },
            { title: 'Online Booking', description: 'Seamless online booking system with multiple payment options', icon: 'mobile' },
            { title: 'Fleet Management', description: 'Complete fleet management with maintenance scheduling', icon: 'server' },
            { title: 'Driver App', description: 'Dedicated mobile app for drivers with route optimization', icon: 'api' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '30% Increase in Revenue', description: 'Online booking and reduced no-shows boost overall revenue.' },
                    { percentage: '40% Reduction in Operational Costs', description: 'Optimized fleet management and maintenance scheduling save costs.' },
                    { percentage: '50% Improvement in Customer Satisfaction', description: 'Real-time tracking and reliable service enhance passenger experience.' },
                ]
            }
        ],

        techStack: [
            { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: 'bg-blue-500' },
            { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', color: 'bg-green-500' },
            { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', color: 'bg-green-700' },
            { name: 'Socket.io', logo: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg', color: 'bg-gray-700' },
            { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', color: 'bg-teal-500' },
            { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg', color: 'bg-yellow-400' },
        ],

        impacts: [
            { percentage: '30%', title: 'Increase in Revenue', description: 'Online booking and reduced no-shows boost overall revenue.' },
            { percentage: '40%', title: 'Reduction in Operational Costs', description: 'Optimized fleet management and maintenance scheduling save costs.' },
            { percentage: '50%', title: 'Improvement in Customer Satisfaction', description: 'Real-time tracking and reliable service enhance passenger experience.' },
        ],

        stats: [
            { icon: 'users', number: '500+', label: 'Transport Companies' },
            { icon: 'download', number: '2M+', label: 'Tickets Sold' },
            { icon: 'trophy', number: '98%', label: 'On-time Performance' },
            { icon: 'globe', number: '15+', label: 'Cities' }
        ],

        ctaText: 'Join 500+ transport companies using Rocket Bus',
        client: 'Multiple Transport Companies',
        date: 'January 15, 2023',
        status: 'Live',
        websiteUrl: 'https://rocketbus.example.com',
        demoUrl: 'https://demo.rocketbus.example.com',
    },

    // 2. Courtesy Express
    {
        id: 2,
        name: 'Courtesy Express',
        slug: 'courtesy-exp',
        description: 'Premium transportation service for corporate clients and VIPs',
        category: 'Transportation',
        tags: ['Premium', 'Express', 'Corporate', 'Shuttle'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop',
        bannerTitle: 'Courtesy Express - Premium Travel Experience',
        bannerSubtitle: 'Luxurious transportation for corporate and VIP clients',
        bannerImage2: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?w=1200&h=600&fit=crop',

        problem: 'Corporate clients and VIPs require premium transportation with professional chauffeurs, but managing bookings, billing, and vehicle allocation manually is complex and error-prone.',
        solution: 'Courtesy Express provides an exclusive platform for corporate travel with dedicated chauffeur management, automated corporate billing, and luxury fleet tracking for a seamless premium experience.',

        features: [
            { title: 'VIP Booking', description: 'Exclusive booking system for corporate clients', icon: 'security' },
            { title: 'Chauffeur Management', description: 'Professional chauffeur scheduling and tracking', icon: 'performance' },
            { title: 'Corporate Billing', description: 'Automated billing and invoice generation for companies', icon: 'server' },
            { title: 'Luxury Fleet', description: 'Manage luxury vehicles with special requirements', icon: 'cloud' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '45% Faster Booking Process', description: 'Automated booking reduces administrative time for corporate clients.' },
                    { percentage: '60% Reduction in Billing Errors', description: 'Automated invoicing eliminates manual billing mistakes.' },
                    { percentage: '95% Client Retention Rate', description: 'Premium service experience keeps corporate clients coming back.' },
                ]
            }
        ],

        techStack: [
            { name: 'React Native', logo: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg', color: 'bg-blue-600' },
            { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', color: 'bg-green-500' },
            { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', color: 'bg-blue-700' },
            { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg', color: 'bg-red-500' },
            { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', color: 'bg-orange-500' },
            { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg', color: 'bg-purple-600' },
        ],

        impacts: [
            { percentage: '45%', title: 'Faster Booking Process', description: 'Automated booking reduces administrative time for corporate clients.' },
            { percentage: '60%', title: 'Reduction in Billing Errors', description: 'Automated invoicing eliminates manual billing mistakes.' },
            { percentage: '95%', title: 'Client Retention Rate', description: 'Premium service experience keeps corporate clients coming back.' },
        ],

        stats: [
            { icon: 'users', number: '200+', label: 'Corporate Clients' },
            { icon: 'download', number: '15K+', label: 'VIP Rides' },
            { icon: 'trophy', number: '4.9', label: 'Rating' },
            { icon: 'globe', number: '25+', label: 'Cities' }
        ],

        ctaText: 'Trusted by 200+ corporate clients',
        client: 'Corporate Transport Services',
        date: 'March 20, 2023',
        status: 'Live',
        websiteUrl: 'https://courtesyexpress.example.com',
        demoUrl: 'https://demo.courtesyexpress.example.com',
    },

    // 3. Radi8 Health
    {
        id: 3,
        name: 'Radi8 Health',
        slug: 'radi8-health',
        description: 'Healthcare management system for modern clinics and hospitals',
        category: 'Healthcare',
        tags: ['Healthcare', 'Clinic', 'EMR', 'Patient Management'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
        bannerTitle: 'Radi8 Health - Modern Healthcare Management',
        bannerSubtitle: 'Complete clinic and patient management solution',
        bannerImage2: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&h=600&fit=crop',

        problem: 'Healthcare providers struggle with managing patient records, appointments, and billing efficiently. Manual processes lead to errors, long wait times, and poor patient experience. Compliance with healthcare regulations like HIPAA adds complexity.',
        solution: 'Radi8 Health provides a comprehensive electronic medical records (EMR) system with integrated appointment scheduling, prescription management, and billing. It automates administrative tasks, ensures HIPAA compliance, and improves patient care through better data accessibility.',

        features: [
            { title: 'Patient Records', description: 'Electronic Medical Records (EMR) management with secure storage', icon: 'security' },
            { title: 'Appointment Scheduling', description: 'Smart appointment booking with automated reminders', icon: 'performance' },
            { title: 'Prescription Management', description: 'Digital prescription and medication tracking', icon: 'server' },
            { title: 'Billing & Insurance', description: 'Integrated billing with insurance claims processing', icon: 'mobile' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '40% Reduction in Wait Times', description: 'Smart scheduling reduces patient wait times and improves experience.' },
                    { percentage: '30% Increase in Patient Capacity', description: 'Efficient workflows allow clinics to serve more patients daily.' },
                    { percentage: '50% Faster Insurance Claims', description: 'Automated claims processing speeds up reimbursement.' },
                ]
            }
        ],

        techStack: [
            { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: 'bg-blue-500' },
            { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', color: 'bg-yellow-600' },
            { name: 'Django', logo: 'https://cdn.worldvectorlogo.com/logos/django-community.svg', color: 'bg-green-700' },
            { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', color: 'bg-blue-700' },
            { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', color: 'bg-blue-600' },
            { name: 'FHIR', logo: 'https://cdn.worldvectorlogo.com/logos/fhir.svg', color: 'bg-purple-600' },
        ],

        impacts: [
            { percentage: '40%', title: 'Reduction in Wait Times', description: 'Smart scheduling reduces patient wait times and improves experience.' },
            { percentage: '30%', title: 'Increase in Patient Capacity', description: 'Efficient workflows allow clinics to serve more patients daily.' },
            { percentage: '50%', title: 'Faster Insurance Claims', description: 'Automated claims processing speeds up reimbursement.' },
        ],

        stats: [
            { icon: 'users', number: '150+', label: 'Healthcare Facilities' },
            { icon: 'download', number: '50K+', label: 'Patient Records' },
            { icon: 'trophy', number: '100%', label: 'HIPAA Compliant' },
            { icon: 'globe', number: '3+', label: 'Countries' }
        ],

        ctaText: 'Serving 150+ healthcare facilities',
        client: 'Healthcare Networks',
        date: 'June 10, 2023',
        status: 'Live',
        websiteUrl: 'https://radi8health.example.com',
        demoUrl: 'https://demo.radi8health.example.com',
    },

    // 4. Boutikio
    {
        id: 4,
        name: 'Boutikio',
        slug: 'boutikio',
        description: 'E-commerce platform for boutique businesses and fashion retailers',
        category: 'E-commerce',
        tags: ['E-commerce', 'Fashion', 'Retail', 'Boutique'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
        bannerTitle: 'Boutikio - Your Boutique E-commerce Solution',
        bannerSubtitle: 'Sell fashion and lifestyle products with ease',
        bannerImage2: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop',

        problem: 'Boutique owners struggle to manage inventory across multiple sizes and colors, leading to stockouts or overstocking. They need an easy way to sell online without technical complexity.',
        solution: 'Boutikio offers a tailored e-commerce platform for fashion retailers with advanced inventory management for variants, mobile-optimized shopping, and integrated analytics to drive sales.',

        features: [
            { title: 'Inventory Management', description: 'Track stock levels, sizes, and colors in real-time', icon: 'server' },
            { title: 'Mobile Shopping', description: 'Responsive design optimized for mobile shoppers', icon: 'mobile' },
            { title: 'Secure Payments', description: 'Multiple payment gateway integration', icon: 'security' },
            { title: 'Analytics', description: 'Sales analytics and customer behavior insights', icon: 'api' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '35% Increase in Online Sales', description: 'Mobile-optimized shopping experience boosts conversions.' },
                    { percentage: '50% Reduction in Stockouts', description: 'Real-time inventory tracking prevents overselling.' },
                    { percentage: '25% Higher Average Order Value', description: 'Smart recommendations increase basket size.' },
                ]
            }
        ],

        techStack: [
            { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', color: 'bg-black' },
            { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', color: 'bg-green-500' },
            { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', color: 'bg-green-700' },
            { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg', color: 'bg-purple-600' },
            { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', color: 'bg-teal-500' },
            { name: 'Algolia', logo: 'https://cdn.worldvectorlogo.com/logos/algolia.svg', color: 'bg-blue-600' },
        ],

        impacts: [
            { percentage: '35%', title: 'Increase in Online Sales', description: 'Mobile-optimized shopping experience boosts conversions.' },
            { percentage: '50%', title: 'Reduction in Stockouts', description: 'Real-time inventory tracking prevents overselling.' },
            { percentage: '25%', title: 'Higher Average Order Value', description: 'Smart recommendations increase basket size.' },
        ],

        stats: [
            { icon: 'users', number: '300+', label: 'Fashion Stores' },
            { icon: 'download', number: '100K+', label: 'Products Sold' },
            { icon: 'trophy', number: '4.8', label: 'Seller Rating' },
            { icon: 'globe', number: '12+', label: 'Countries' }
        ],

        ctaText: 'Powering 300+ fashion stores',
        client: 'Fashion Retailers',
        date: 'August 5, 2023',
        status: 'Live',
        websiteUrl: 'https://boutikio.example.com',
        demoUrl: 'https://demo.boutikio.example.com',
    },

    // 5. Uplify (already has correct structure)
    {
        id: 5,
        name: 'Uplify',
        slug: 'uplify',
        description: 'Employee engagement and performance management platform',
        category: 'HR Tech',
        tags: ['HR', 'Employee Engagement', 'Performance', 'Analytics'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
        bannerTitle: 'Uplify - Boost Employee Engagement',
        bannerSubtitle: 'Modern performance management for modern teams',
        bannerImage2: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop',

        problem: 'Companies struggle to track employee performance effectively, leading to low engagement, missed goals, and poor alignment.',
        solution: 'Uplify provides a comprehensive platform for performance reviews, goal tracking, employee surveys, and analytics.',

        features: [
            { title: 'Performance Reviews', description: '360-degree performance feedback', icon: 'security' },
            { title: 'Goal Tracking', description: 'OKR and KPI tracking', icon: 'performance' },
            { title: 'Employee Surveys', description: 'Pulse surveys and engagement metrics', icon: 'server' },
            { title: 'Analytics Dashboard', description: 'HR analytics and insights', icon: 'api' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '40% Increase in Employee Engagement', description: 'Regular feedback and recognition programs boost morale.' },
                    { percentage: '35% Improvement in Goal Achievement', description: 'Clear OKRs and continuous monitoring improve alignment.' },
                    { percentage: '50% Reduction in Performance Review Time', description: 'Automated workflows save HR teams time.' },
                ]
            }
        ],

        techStack: [
            { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: 'bg-blue-500' },
            { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', color: 'bg-green-500' },
            { name: 'Express.js', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', color: 'bg-gray-700' },
            { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', color: 'bg-green-700' },
            { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', color: 'bg-teal-500' },
            { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg', color: 'bg-yellow-400' },
        ],

        impacts: [
            { percentage: '35%', title: 'Reduction in Employee Turnover', description: 'Better performance tracking and development opportunities improve retention.' },
            { percentage: '25%', title: 'Improvement in Productivity', description: 'Clear goal alignment and tracking enhance team performance and output.' },
            { percentage: '40%', title: 'Increase in Employee Engagement', description: 'Regular feedback and recognition programs boost participation.' },
        ],

        stats: [
            { icon: 'users', number: '75+', label: 'Companies' },
            { icon: 'download', number: '10K+', label: 'Employees' },
            { icon: 'trophy', number: '95%', label: 'Engagement Rate' },
            { icon: 'globe', number: '5+', label: 'Countries' },
        ],

        ctaText: 'Used by 75+ companies',
        client: 'Various Enterprises',
        date: 'September 12, 2023',
        status: 'Beta',
        websiteUrl: 'https://uplify.example.com',
        demoUrl: 'https://demo.uplify.example.com',
    },

    // 6. Iaato
    {
        id: 6,
        name: 'Iaato',
        slug: 'iaato',
        description: 'Travel and tourism management platform',
        category: 'Travel',
        tags: ['Travel', 'Tourism', 'Booking', 'Packages'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop',
        bannerTitle: 'Iaato - Your Travel Companion',
        bannerSubtitle: 'Complete travel and tourism management solution',
        bannerImage2: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200&h=600&fit=crop',

        problem: 'Travel agencies struggle to manage complex packages, multiple suppliers, and bookings across different channels, leading to inefficiencies and lost revenue.',
        solution: 'Iaato provides an all-in-one travel management platform with package builder, multi-channel booking engine, customer portal, and supplier management for seamless travel operations.',

        features: [
            { title: 'Package Builder', description: 'Create and manage customizable travel packages', icon: 'server' },
            { title: 'Booking Engine', description: 'Multi-channel booking system for web and mobile', icon: 'performance' },
            { title: 'Customer Portal', description: 'Self-service dashboard for travelers', icon: 'mobile' },
            { title: 'Supplier Management', description: 'Manage hotels, transport, and activities', icon: 'api' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '40% Increase in Bookings', description: 'Multi-channel booking engine captures more customers.' },
                    { percentage: '30% Reduction in Admin Time', description: 'Automated supplier management saves hours daily.' },
                    { percentage: '25% Higher Customer Satisfaction', description: 'Self-service portal improves traveler experience.' },
                ]
            }
        ],

        techStack: [
            { name: 'Vue.js', logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg', color: 'bg-green-600' },
            { name: 'Laravel', logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', color: 'bg-red-500' },
            { name: 'MySQL', logo: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg', color: 'bg-blue-600' },
            { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg', color: 'bg-red-500' },
            { name: 'Google Maps', logo: 'https://cdn.worldvectorlogo.com/logos/google-maps-2020-logo.svg', color: 'bg-green-500' },
            { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-2.svg', color: 'bg-purple-600' },
        ],

        impacts: [
            { percentage: '40%', title: 'Increase in Bookings', description: 'Multi-channel booking engine captures more customers.' },
            { percentage: '30%', title: 'Reduction in Admin Time', description: 'Automated supplier management saves hours daily.' },
            { percentage: '25%', title: 'Higher Customer Satisfaction', description: 'Self-service portal improves traveler experience.' },
        ],

        stats: [
            { icon: 'users', number: '50+', label: 'Travel Agencies' },
            { icon: 'download', number: '25K+', label: 'Bookings' },
            { icon: 'trophy', number: '4.7', label: 'Rating' },
            { icon: 'globe', number: '30+', label: 'Destinations' }
        ],

        ctaText: 'Trusted by 50+ travel agencies',
        client: 'Travel Agencies',
        date: 'October 18, 2023',
        status: 'Live',
        websiteUrl: 'https://iaato.example.com',
        demoUrl: 'https://demo.iaato.example.com',
    },

    // 7. Visual Discovery
    {
        id: 7,
        name: 'Visual Discovery',
        slug: 'visual-discovery',
        description: 'AI-powered visual search and discovery platform',
        category: 'AI/ML',
        tags: ['AI', 'Visual Search', 'Machine Learning', 'Discovery'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=1200&h=600&fit=crop',
        bannerTitle: 'Visual Discovery - See the Future',
        bannerSubtitle: 'AI-powered visual search and product discovery',
        bannerImage2: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=600&fit=crop',

        problem: 'E-commerce sites struggle with text-based search that fails to capture visual preferences. Customers find it hard to discover products when they can\'t describe them in words.',
        solution: 'Visual Discovery uses AI and computer vision to enable visual search - customers can upload images to find similar products, get personalized recommendations, and discover items visually.',

        features: [
            { title: 'Visual Search', description: 'Search products by uploading images', icon: 'api' },
            { title: 'Recommendation Engine', description: 'AI-powered product recommendations', icon: 'performance' },
            { title: 'Image Recognition', description: 'Automatic product tagging and categorization', icon: 'server' },
            { title: 'Analytics', description: 'Visual search analytics and insights', icon: 'mobile' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '45% Increase in Product Discovery', description: 'Visual search helps customers find products they couldn\'t describe.' },
                    { percentage: '30% Higher Conversion Rate', description: 'Better product discovery leads to more purchases.' },
                    { percentage: '25% Reduction in Search Abandonment', description: 'Visual search reduces frustration when text search fails.' },
                ]
            }
        ],

        techStack: [
            { name: 'TensorFlow', logo: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg', color: 'bg-orange-500' },
            { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', color: 'bg-yellow-600' },
            { name: 'PyTorch', logo: 'https://cdn.worldvectorlogo.com/logos/pytorch-2.svg', color: 'bg-red-600' },
            { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: 'bg-blue-500' },
            { name: 'Flask', logo: 'https://cdn.worldvectorlogo.com/logos/flask.svg', color: 'bg-gray-700' },
            { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', color: 'bg-orange-500' },
        ],

        impacts: [
            { percentage: '45%', title: 'Increase in Product Discovery', description: 'Visual search helps customers find products they couldn\'t describe.' },
            { percentage: '30%', title: 'Higher Conversion Rate', description: 'Better product discovery leads to more purchases.' },
            { percentage: '25%', title: 'Reduction in Search Abandonment', description: 'Visual search reduces frustration when text search fails.' },
        ],

        stats: [
            { icon: 'users', number: '25+', label: 'Enterprise Clients' },
            { icon: 'download', number: '1M+', label: 'Images Daily' },
            { icon: 'trophy', number: '95%', label: 'Accuracy' },
            { icon: 'globe', number: '10+', label: 'Countries' }
        ],

        ctaText: 'Processing 1M+ images daily',
        client: 'E-commerce Companies',
        date: 'November 22, 2023',
        status: 'Live',
        websiteUrl: 'https://visualdiscovery.example.com',
        demoUrl: 'https://demo.visualdiscovery.example.com',
    },

    // 8. Lerenjo
    {
        id: 8,
        name: 'Lerenjo',
        slug: 'lerenjo',
        description: 'Learning management system for educational institutions',
        category: 'EdTech',
        tags: ['Education', 'LMS', 'E-learning', 'Courses'],
        image: RoketBus,

        bannerImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop',
        bannerTitle: 'Lerenjo - Learn Without Limits',
        bannerSubtitle: 'Complete learning management for schools and universities',
        bannerImage2: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
        bannerImage3: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=600&fit=crop',

        problem: 'Educational institutions need a centralized platform for online learning, but existing solutions are either too complex or lack essential features for effective teaching and tracking.',
        solution: 'Lerenjo provides a user-friendly learning management system with course creation, student portals, assessment tools, and analytics - everything schools need for modern education.',

        features: [
            { title: 'Course Management', description: 'Create and organize online courses with multimedia', icon: 'server' },
            { title: 'Student Portal', description: 'Dedicated portal for students to access courses', icon: 'mobile' },
            { title: 'Assessment Tools', description: 'Quizzes, assignments, and automated grading', icon: 'security' },
            { title: 'Analytics', description: 'Track student progress and performance', icon: 'api' },
        ],

        specifications: [
            {
                category: 'Impact Metrics',
                items: [
                    { percentage: '50% Reduction in Admin Work', description: 'Automated grading and course management save teacher time.' },
                    { percentage: '35% Improvement in Student Performance', description: 'Better tracking helps identify at-risk students early.' },
                    { percentage: '60% Increase in Course Completion', description: 'Engaging platform keeps students motivated.' },
                ]
            }
        ],

        techStack: [
            { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', color: 'bg-blue-500' },
            { name: 'Django', logo: 'https://cdn.worldvectorlogo.com/logos/django-community.svg', color: 'bg-green-700' },
            { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', color: 'bg-blue-700' },
            { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg', color: 'bg-red-500' },
            { name: 'WebRTC', logo: 'https://cdn.worldvectorlogo.com/logos/webrtc.svg', color: 'bg-gray-700' },
            { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', color: 'bg-teal-500' },
        ],

        impacts: [
            { percentage: '50%', title: 'Reduction in Admin Work', description: 'Automated grading and course management save teacher time.' },
            { percentage: '35%', title: 'Improvement in Student Performance', description: 'Better tracking helps identify at-risk students early.' },
            { percentage: '60%', title: 'Increase in Course Completion', description: 'Engaging platform keeps students motivated.' },
        ],

        stats: [
            { icon: 'users', number: '25+', label: 'Institutions' },
            { icon: 'download', number: '5K+', label: 'Students' },
            { icon: 'trophy', number: '4.8', label: 'Rating' },
            { icon: 'globe', number: '8+', label: 'Countries' }
        ],

        ctaText: 'Used by 25+ educational institutions',
        client: 'Schools & Universities',
        date: 'December 5, 2023',
        status: 'Beta',
        websiteUrl: 'https://lerenjo.example.com',
        demoUrl: 'https://demo.lerenjo.example.com',
    }
];

export async function generateStaticParams() {
    return exampleProduct.map((post) => ({
        slug: post.slug,
    }));
}

function Page({ params }) {
    const slug = params?.slug;

    if (!slug) return <div className='flex justify-center items-center h-screen'>Loading...</div>;

    const productData = exampleProduct.find((s) => s.slug === slug);

    if (!productData) return <p className='text-center mt-20'>Service not found</p>;

    return (
        <>
            <SEO seo={servicespage} />
            <HeaderSection />
            <ProductDetails product={productData} />
        </>
    );
}

export default Page;