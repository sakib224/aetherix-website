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
            title: 'RoketBus',
            subtitle: 'Vehicle Scheduling & Ticket-Management',
            backContent:
                'RoketBus is an end-to-end fleet scheduling and ticketing dashboard built with Laravel and Vue.js. It enables dynamic seat-layout configuration, automated trip planning with distance/time validation, and QR-driven ticket issuance via counter and ETIM devices. The MySQL-powered backend handles authentication, role-based access, and real-time GPS telemetry, while the Vue.js frontend delivers analytics, revenue summaries, and detailed booking reports. Dockerized for consistent deployment.',
            technologies: ['Vue.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
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
            subtitle: 'Order management with Live driver fleet',
            backContent:
                'This system streamlines order management and delivery operations with real-time fleet tracking. It includes an iOS app for drivers with live GPS navigation, order updates, and proof of delivery. Admins can assign orders, track drivers, and access performance reports. Customers track orders in real-time with ETA updates. Built with Laravel, Vue.js, React Native, and integrated with Google Maps/Mapbox for tracking and Firebase for notifications, it ensures efficient logistics management.',
            technologies: ['ReactNative', 'Vue.js', 'Laravel', 'Mysql'],
            client: 'Retail Group Inc.',
            year: 2024,
        },
        {
            imageSrc: project_3_1,
            images: [
                project_3_1,
                project_3_2,
                project_3_3
            ],
            title: 'Uplify',
            subtitle: 'AI-Powered Business Growth Platform for Entrepreneurs',
            backContent:
                `Built an interactive coaching platform to guide entrepreneurs through mindset, systems, and marketing mastery. Features include:
                    • Interactive milestone-based learning paths
                    • Habit tracking dashboard
                    • Personalized AI agents (e.g., “Lina”)
                    • Topic-specific paths: Mindset, Finance, Legal, Hiring, Sales
                    • Smart assessments & progress tracking
                    • Seamless UI/UX for daily lesson flows
                Enabled small business owners to transform goals into profitable systems.`,
            technologies: ['Python', 'Vue.js', 'Laravel', 'Tailwind CSS', 'MySQL'],
            client: 'Regional Healthcare Network',
            year: 2024,
        },
        {
            imageSrc: project_4_1,
            images: [
                project_4_1,
                project_4_2,
                project_4_3
            ],
            title: 'Radi8 Health',
            subtitle: 'Wellness Coaching Web App with Scheduling & Chat',
            backContent:
                `Built a complete wellness coaching web app where users can discover, book, and chat with expert coaches. Key features:
                    • Coach search by category
                    • Appointment scheduling with calendar view
                    • Reschedule & cancel options
                    • Integrated chat system
                    • Real-time status tracking (Pending, Scheduled, Paid)
                    • Coach onboarding & verification
                    • Secure payment system
                    • Responsive UI for dashboard, coaches & chats
                Empowered seamless wellness journeys through expert access.`,
            technologies: ['React', 'Laravel', 'Google Calande', 'Mysql'],
            client: 'Industrial Solutions Corp.',
            year: 2024,
        },
        {
            imageSrc: project_5_1,
            images: [
                project_5_1,
                project_5_2,
                project_5_3
            ],
            title: 'Boutikio',
            subtitle: 'Reward Loyalty program with apple and google wallet',
            backContent:
                `Transform customer engagement strategy with Reward Loyalty. This system allows you to create and manage digital savings cards with ease. Gain complete control over your user base through an intuitive, beautiful interface by using apple and google wallet`,
            technologies: ['Laravel', 'jQuery', 'Mysql', 'DigitalOcean'],
            client: 'Industrial Solutions Corp.',
            year: 2021,
        },
        {
            imageSrc: project_6_1,
            images: [
                project_6_1,
                project_6_2,
                project_6_3
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
            imageSrc: project_7_1,
            images: [
                project_7_1,
                project_7_2,
                project_7_3
            ],
            title: 'Visual Discovery',
            subtitle: 'Investor Startup Platform with Video Portfolio Tool',
            backContent:
                `Designed and developed a multi-role SaaS platform connecting startup founders with investors.
                Key roles: Admin, Investor, Founder.
                Key features:
                • Investor profile setup with thesis, cheque size, preferences
                • Portfolio upload (local & URL) – video support up to 512MB
                • Admin dashboard with user, document, and credential management
                • YouTube OAuth token integration
                • Founder document submission and profile enrichment
                • Role-based dashboard views with secure access
                Enables seamless discovery and engagement between founders and investors.`,
            technologies: ['Vue.js', 'Laravel', 'Tailwind CSS', 'MySQL', 'YouTube API'],
            client: 'Industrial Solutions Corp.',
            year: 2021,
        },
        {
            imageSrc: project_8_1,
            images: [
                project_8_1,
                project_8_2
            ],
            title: 'NAF Inventory',
            subtitle: 'Inventory management system',
            backContent:
                `Inventory management system (IMS) is a software platform that enables businesses to manage their inventory efficiently. The system tracks inventory levels, orders, sales, and deliveries, providing real-time visibility into stock levels and inventory movements.`,
            technologies: ['React', 'Laravel', 'Bootstrap', 'Mysql'],
            client: 'Industrial Solutions Corp.',
            year: 2021,
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
