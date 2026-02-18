import project_1_1 from '@/assets/projects/project_1_1.png';
import project_1_2 from '@/assets/projects/project_1_2.png';
import project_1_3 from '@/assets/projects/project_1_3.png';
import project_2_1 from '@/assets/projects/project_2_1.png';
import project_2_2 from '@/assets/projects/project_2_2.png';
import project_2_3 from '@/assets/projects/project_2_3.png';
import project_3_1 from '@/assets/projects/project_3_1.png';
import project_3_2 from '@/assets/projects/project_3_2.png';
import project_3_3 from '@/assets/projects/project_3_3.png';
import project_4_1 from '@/assets/projects/project_4_1.png';
import project_4_2 from '@/assets/projects/project_4_2.png';
import project_4_3 from '@/assets/projects/project_4_3.png';
import project_5_1 from '@/assets/projects/project_5_1.png';
import project_5_2 from '@/assets/projects/project_5_2.png';
import project_5_3 from '@/assets/projects/project_5_3.png';
import project_6_1 from '@/assets/projects/project_6_1.png';
import project_6_2 from '@/assets/projects/project_6_2.png';
import project_6_3 from '@/assets/projects/project_6_3.png';
import project_7_1 from '@/assets/projects/project_7_1.png';
import project_7_2 from '@/assets/projects/project_7_2.png';
import project_7_3 from '@/assets/projects/project_7_3.png';
import project_8_1 from '@/assets/projects/project_8_1.png';
import project_8_2 from '@/assets/projects/project_8_2.png';
import project_9_1 from '@/assets/projects/project_9_1.png';

export default [
    {
        id: 'Tab1',
        title: 'Web Development',
        projects: [{
            imageSrc: project_1_1,
            images: [
                project_1_1,
                project_1_2,
                project_1_3
            ],
            title: 'Rocket Bus',
            subtitle: 'Fleet Scheduling & Ticketing Software',
            backContent:
                'Rocket Bus is an enterprise-grade transportation management system built for fleet operators and travel companies. The platform centralizes trip scheduling, seat allocation, ticket issuance, and operational reporting within a single, reliable system. Designed for efficiency and scalability, it helps operators reduce operational overhead and improve service reliability.',
            technologies: ['Vue.js', 'Laravel',  'MySQL'],
            client: 'Various SMEs',
            year: 2025,
        },
        {
            imageSrc: project_2_1,
            images: [
                project_2_1,
                project_2_2,
                project_2_3
            ],
            title: 'Courtesy EXP',
            subtitle: 'Logistics & Delivery Management Platform',
            backContent:
                'Courtesy EXP is a full-scale logistics and order management solution enabling real-time delivery tracking and operational coordination. The platform provides live visibility for administrators, drivers, and customers, ensuring transparency across the entire delivery lifecycle while optimizing logistics workflows.',
            technologies: ['React Native', 'Vue.js', 'Laravel', 'Mysql','Python'],
            client: 'Retail Group Inc.',
            year: '2024–2025',
        },
        {
            imageSrc: project_3_1,
            images: [
                project_3_1,
                project_3_2,
                project_3_3
            ],
            title: 'Uplify',
            subtitle: 'AI-Powered Business Growth Platform',
            backContent:
                `Uplify is an intelligent business development platform designed to support entrepreneurs and growing teams. Through AI-driven coaching, structured learning paths, and habit tracking, the system delivers personalized insights that help users build sustainable, scalable businesses.`,
            technologies: ['Python', 'Vue.js', 'Laravel', 'MySQL'],
            client: 'Regional Healthcare Network',
            year: '2024–2026',
        },
        {
            imageSrc: project_4_1,
            images: [
                project_4_1,
                project_4_2,
                project_4_3
            ],
            title: 'Radi8 Health',
            subtitle: 'Digital Wellness & Coaching Platform',
            backContent:
                `Radi8 Health is a secure digital platform that connects individuals with professional wellness coaches. The system supports coach discovery, session scheduling, and private communication, enabling a seamless and compliant coaching experience built around trust and accessibility.`,
            technologies: ['React', 'Laravel',  'Mysql'],
            client: 'Industrial Solutions Corp.',
            year:  2025,
        },
        {
            imageSrc: project_5_1,
            images: [
                project_5_1,
                project_5_2,
                project_5_3
            ],
            title: 'Boutikio',
            subtitle: 'Digital Loyalty & Rewards Platform',
            backContent:
                `Boutikio enables businesses to launch and manage digital loyalty programs with wallet-based savings cards. Integrated with Apple Wallet and Google Wallet, the platform helps brands increase retention while providing customers with frictionless access to rewards.`,
            technologies: ['Laravel', 'jQuery', 'Mysql'],
            client: 'Industrial Solutions Corp.',
            year: 2024,
        },
        {
            imageSrc: project_6_1,
            images: [
                project_6_1,
                project_6_2,
                project_6_3
            ],
            title: 'IAATO',
            subtitle: 'Trading Mentorship & Community Platform',
            backContent:
                `IAATO is a mentorship and community platform designed for options trading networks. It offers real-time alerts, educational resources, subscription management, and collaborative discussion tools—supporting both learning and community engagement at scale.`,
            technologies: ['React Native', 'React', 'Laravel', 'Mysql'],
            client: 'Industrial Solutions Corp.',
            year: '2025–2026',
        },
        {
            imageSrc: project_7_1,
            images: [
                project_7_1,
                project_7_2,
                project_7_3
            ],
            title: 'Visual Discovery',
            subtitle: 'Founder–Investor Matching Platform',
            backContent:
                `Visual Discovery connects startup founders with investors through structured profiles, secure document sharing, and video-based pitch portfolios. The platform streamlines early-stage discovery while maintaining data privacy and controlled access.`,
            technologies: ['Vue.js', 'Laravel', 'MySQL'],
            client: 'Industrial Solutions Corp.',
            year: 2025,
        },
        {
            imageSrc: project_8_1,
            images: [
                project_8_1,
                project_8_2
            ],
            title: 'Lerenjo',
            subtitle: 'Solar Program Operations Management System',
            backContent:
                `Lerenjo is an operations management platform built for large-scale solar initiatives. It tracks applications, approvals, payments, and operational milestones across the full program lifecycle, enabling teams to manage complexity with clarity and precision.`,
            technologies: [ 'Laravel (Blade)',  'Mysql'],
            client: 'Industrial Solutions Corp.',
            year: 2025,
        }]
    },
    {
        id: 'Tab2',
        title: 'Mobile Development',
        projects: [
            {
            imageSrc: project_2_3,
            images: [
                project_2_3,
                project_2_1,
                project_2_2,
            ],
            title: 'Courtesy EXP',
            subtitle: 'Order management with Live driver fleet',
            backContent:
                'This system streamlines order management and delivery operations with real-time fleet tracking. It includes an iOS app for drivers with live GPS navigation, order updates, and proof of delivery. Admins can assign orders, track drivers, and access performance reports. Customers track orders in real-time with ETA updates. Built with Laravel, Vue.js, React Native, and integrated with Google Maps/Mapbox for tracking and Firebase for notifications, it ensures efficient logistics management.',
            technologies: ['ReactNative', 'Vue.js', 'Laravel', 'Mysql'],
            client: 'Retail Group Inc.',
            year: 2024,
        },
        {
            imageSrc: project_6_3,
            images: [
                project_6_3,
                project_6_1,
                project_6_2,
            ],
            title: 'IAATO',
            subtitle: 'Options Trading Mentorship Web & Mobile Platform',
            backContent:
                `Built a cross-platform web and mobile app for an Options Trading Mentorship program serving 4,000+ users. Features include real-time alerts, subscription billing, chat groups, content access, and user dashboards. Integrated with Stripe, PayPal, and WhatsApp for seamless payments and support.

                Key Features:
                - Web & mobile responsive interface
                - Real-time trade alerts & chat rooms
                - Login via social & email auth
                - Subscription billing (Stripe, PayPal)
                - Course & market data access
                - 7-day trial & plan management
                - Admin & user dashboards`,
            technologies: ['ReactNative', 'React', 'Laravel', 'Polygon API', 'Mysql'],
            client: 'Industrial Solutions Corp.',
            year: 2021,
        },
        {
            imageSrc: project_9_1,
            title: 'Aqua Life',
            subtitle: 'Gamified Hydration Tracker App with Health Analytics',
            backContent:
                `Developed Aqua Life, a wellness app that sets personalized daily water goals based on user data (gender, weight, height). Users log drinks visually via a body-fill interface and earn trophies for progress.
                Key Features:
                • Smart goal calculation
                • Animated body water-level tracker
                • Drink type selector (water, tea, juice, etc.)
                • Visual progress & stats (charts, rings)
                • Gamification with points/trophies
                • Multilingual (German)
                • Mobile-friendly UX with smooth onboarding
                `,
            technologies: ['React Native', 'Animation', 'Websockets', 'API Integration', ''],
            client: 'Industrial Solutions Corp.',
            year: 2021,
        },
        ]
    },
    {
        id: 'Tab3',
        title: 'UI/UX Design',
        projects: []
    }
]
