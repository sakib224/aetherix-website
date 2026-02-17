import cloud_and_devops from '@/assets/services/cloud_and_devops.jpeg';
import custom_software from '@/assets/services/custom_software.jpeg';
import digital_marketing from '@/assets/services/digital_marketing.jpeg';
import uiux_design from '@/assets/services/uiux_design.jpeg';
import web_and_mobile_app from '@/assets/services/web_and_mobile_app.jpg';
import DemoImage from '@/assets/smartFactory.png';

export const servicesData = [
    {
        id: 1,
        slug: 'custom-software-development',
        title: 'Custom Software Development',
        category: 'Services',
        description:
            'Tailored software solutions that align with your business workflows, streamline operations, and accelerate growth.',
        image: custom_software,
        tileImage: custom_software,
        detailImage: DemoImage,
        span: 1,
        longDescription: [
            'At Aetherix Limited, we design and develop custom software applications that solve your unique business challenges. Unlike off-the-shelf products, our solutions are fully tailored to your workflows, processes, and objectives',
            'We employ agile methodologies, cutting-edge technologies, and rigorous testing to deliver scalable, secure, and maintainable applications. ',
            'From initial concept to deployment and ongoing support, we ensure your software drives measurable business growth and competitive advantage.',
        ],
        features: [
            'Requirements analysis and planning',
            'Custom application development',
            'API design and integration',
            'Database architecture and optimization',
            'Quality assurance and testing',
            'Deployment and ongoing maintenance',
        ],
        technologies: [
            { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
            { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
            { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
            { name: 'Java', logo: 'https://cdn.worldvectorlogo.com/logos/java.svg' },
            { name: '.NET', logo: 'https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg' },
            { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
            { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
            { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
        ],
        stats: [
            { value: '95%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Projects Delivered' },
            { value: '40%', label: 'Faster Time-to-Market' },
        ],
        sectionTitles: {
            left: 'Build Software That Fits Your Vision',
            right: 'Scalable and Future-Proof Solutions',
        },
        detailedText: {
            left: 'We create custom applications tailored to your specific business needs, ensuring seamless integration with existing systems and workflows.',
            right: 'Our solutions are built with scalability in mind, allowing your software to grow alongside your business requirements and adapt to future challenges.',
        },
        QandA: [
            {
                title: 'What types of software projects can you deliver from start to finish?',
                content:
                    'We provide end-to-end software solutions, from initial concept and design to development, testing, deployment, and ongoing support. This includes web apps, mobile apps, enterprise software, and cloud-based platforms tailored to your business needs.',
            },
            {
                title: 'Can you integrate third-party APIs and existing systems?',
                content:
                    'Yes! Our team specializes in seamless integration with third-party APIs, legacy systems, and enterprise software to ensure your application works smoothly with your existing technology ecosystem.',
            },
            {
                title: 'How secure are your applications?',
                content:
                    'Security is a top priority. We follow industry-standard best practices, including secure coding, encryption, authentication protocols, and regular security audits to protect your data and ensure compliance with privacy regulations.',
            },
            {
                title: 'Do you provide maintenance and support after project delivery?',
                content:
                    'Absolutely. We offer ongoing support and maintenance packages to keep your software running smoothly, fix bugs, implement updates, and scale your system as your business grows.',
            },
            {
                title: 'What technologies do you use for development?',
                content:
                    'We leverage a wide range of modern technologies, frameworks, and platforms, including JavaScript, React, Node.js, PHP, Python, Flutter, and cloud platforms like AWS and Azure, tailored to your project requirements.',
            },
            {
                title: 'How do you manage project timelines and communication?',
                content:
                    "We follow agile development practices with clear milestones, regular updates, and transparent reporting. You'll have direct access to our project managers and development team to track progress and provide feedback.",
            },
            {
                title: 'Can you scale an application as my business grows?',
                content:
                    'Yes. We design software with scalability in mind, ensuring your application can handle growing user bases, additional features, and higher traffic without compromising performance.',
            },
            {
                title: 'Do you sign NDAs for confidential projects?',
                content:
                    'Yes. We sign Non-Disclosure Agreements to protect your ideas, intellectual property, and sensitive information throughout the development process.',
            },
            {
                title: 'How do we get started with your team?',
                content:
                    "Getting started is simple. Reach out to us with your project idea, and we'll schedule a consultation to understand your goals, provide a project plan, and outline timelines and costs.",
            },
            {
                title: 'How do you structure pricing for custom software projects?',
                content:
                    'We offer flexible pricing models, including fixed-price, hourly, or milestone-based engagements, depending on project scope and complexity. Our goal is to provide transparent, fair, and value-driven pricing.',
            },
        ],
    },
    {
        id: 2,
        slug: 'web-and-mobile-app-development',
        title: 'Web & Mobile App Development',
        category: 'Services',
        description:
            'Professional web and mobile applications delivering seamless experiences across all devices',
        image: web_and_mobile_app,
        tileImage: web_and_mobile_app,
        detailImage: DemoImage,
        span: 1,
        longDescription: [
            'Our Web & Mobile App Development services create powerful, user-friendly applications for desktop, tablet, and mobile.',
            ' We specialize in responsive web design, native iOS and Android development, cross-platform solutions, and progressive web apps (PWAs).',
            'By leveraging modern frameworks and technologies, we ensure fast, secure, and consistent experiences for your users, helping you expand your reach, engage customers effectively, and boost conversions.',
        ],
        features: [
            'Responsive web design',
            'Native iOS development',
            'Native Android development',
            'Cross-platform solutions',
            'Progressive web apps (PWA)',
            'App store optimization',
        ],
        technologies: [
            { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
            {
                name: 'React Native',
                logo: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
            },
            { name: 'Flutter', logo: 'https://cdn.worldvectorlogo.com/logos/flutter.svg' },
            { name: 'Swift', logo: 'https://cdn.worldvectorlogo.com/logos/swift-15.svg' },
            { name: 'Kotlin', logo: 'https://cdn.worldvectorlogo.com/logos/kotlin-1.svg' },
            { name: 'Vue.js', logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg' },
            { name: 'Angular', logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
            { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
        ],
        stats: [
            { value: '1M+', label: 'Active Users' },
            { value: '4.8/5', label: 'App Store Rating' },
            { value: '65%', label: 'User Engagement Increase' },
        ],
        sectionTitles: {
            left: 'Reach Users Everywhere',
            right: 'Seamless Cross-Platform Experience',
        },
        detailedText: {
            left: 'Build web and mobile applications that work perfectly on any device, ensuring maximum reach and accessibility for your users across desktop, tablet, and mobile.',
            right: 'Deliver consistent user experiences across iOS, Android, and web platforms with our cross-platform development expertise and modern frameworks.',
        },
        QandA: [
            {
                title: 'What types of web and mobile apps can you build?',
                content:
                    'We develop custom web and mobile applications for businesses of all sizes, including e-commerce platforms, SaaS products, marketplaces, and enterprise solutions, tailored to your goals and user needs.',
            },
            {
                title: 'Do you offer end-to-end app development?',
                content:
                    'Yes. From conceptualization and UI/UX design to development, testing, deployment, and post-launch support, we deliver complete solutions that are ready for production.',
            },
            {
                title: 'Can you integrate third-party APIs and services?',
                content:
                    'Absolutely. We specialize in API integration with payment gateways, CRMs, analytics tools, social media platforms, and other third-party services to ensure your app works seamlessly within your tech ecosystem.',
            },
            {
                title: 'How secure are your web and mobile applications?',
                content:
                    'Security is integral to our development process. We implement encryption, secure authentication, role-based access, and follow best practices to protect your data and ensure compliance with industry standards.',
            },
            {
                title: 'Do you provide maintenance and support after launch?',
                content:
                    'Yes. Our team offers ongoing maintenance, updates, bug fixes, and performance optimization to ensure your app remains reliable, secure, and scalable as your business grows.',
            },
            {
                title: 'What technologies do you use for development?',
                content:
                    'We use modern and versatile technologies such as React, Angular, Node.js, PHP, Python, Flutter, React Native, and cloud platforms like AWS and Azure, selecting the best stack for your project requirements.',
            },
            {
                title: 'How do you manage project timelines and communication?',
                content:
                    "We follow agile development methodologies with clear milestones, frequent updates, and collaborative communication. You'll have direct access to project managers and developers to monitor progress and provide feedback.",
            },
            {
                title: 'Can you scale my application as my user base grows?',
                content:
                    'Yes. We design apps for high performance and scalability, so your web or mobile application can handle increased traffic, new features, and growing user demand without compromising speed or reliability.',
            },
            {
                title: 'Do you sign NDAs for confidential projects?',
                content:
                    'Yes. We sign Non-Disclosure Agreements to protect your ideas, intellectual property, and sensitive business information throughout the development process.',
            },
            {
                title: 'How do we get started with your team?',
                content:
                    "Simply reach out with your project idea. We'll schedule a consultation to understand your requirements, propose a project plan, timeline, and cost estimate, and begin building your solution.",
            },
        ],
    },
    {
        id: 3,
        slug: 'ui-ux-design-and-prototyping',
        title: 'UI/UX Design & Prototyping',
        category: 'Services',
        description:
            'Intuitive, engaging, and visually appealing designs that delight users and enhance conversions.',
        image: uiux_design,
        tileImage: uiux_design,
        detailImage: DemoImage,
        span: 1,
        longDescription: [
            'We focus on creating digital experiences users love by combining research, strategy, and creative design. Our UI/UX services include user research, wireframing, prototyping, visual design, interaction design, and usability testing',
            'Using design thinking methodologies, we build intuitive interfaces that balance aesthetics with functionality.',
            'Interactive prototypes allow early validation, saving time and resources, and ensuring a seamless user experience before development begins.',
        ],
        features: [
            'User research and personas',
            'Wireframing and prototyping',
            'Visual design systems',
            'Usability testing',
            'Interaction design',
            'Design documentation and handoff',
        ],
        technologies: [
            { name: 'Figma', logo: 'https://cdn.worldvectorlogo.com/logos/figma-icon.svg' },
            { name: 'Adobe XD', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg' },
            { name: 'Sketch', logo: 'https://cdn.worldvectorlogo.com/logos/sketch-2.svg' },
            { name: 'InVision', logo: 'https://cdn.worldvectorlogo.com/logos/invision.svg' },
            {
                name: 'Principle',
                logo: 'https://cdn.worldvectorlogo.com/logos/principle-app-2.svg',
            },
            { name: 'Framer', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
            { name: 'Miro', logo: 'https://cdn.worldvectorlogo.com/logos/miro-2.svg' },
            { name: 'Zeplin', logo: 'https://cdn.worldvectorlogo.com/logos/zeplin.svg' },
        ],
        stats: [
            { value: '80%', label: 'Improved Usability' },
            { value: '55%', label: 'Higher Conversion' },
            { value: '90%', label: 'User Satisfaction' },
        ],
        sectionTitles: {
            left: 'Design That Delights Users',
            right: 'Prototype Before You Build',
        },
        detailedText: {
            left: 'Create beautiful, intuitive interfaces that enhance user satisfaction and drive engagement through thoughtful design decisions and user-centered approaches.',
            right: 'Validate your ideas early with interactive prototypes that allow testing and refinement before development investment, reducing risk and ensuring success.',
        },
        QandA: [
            {
                title: 'What services do you provide in UI/UX design?',
                content:
                    'We create user-centered interfaces and experiences for web and mobile applications, including wireframing, prototyping, visual design, and usability testing to ensure your app is intuitive, engaging, and conversion-focused.',
            },
            {
                title: 'Do you design both web and mobile interfaces?',
                content:
                    'Yes. We specialize in responsive web design, native mobile apps, and cross-platform solutions, ensuring consistent experiences across devices and screen sizes.',
            },
            {
                title: 'How do you approach user research?',
                content:
                    "We conduct user interviews, surveys, analytics reviews, and competitor analysis to understand your audience's needs and behaviors. Insights from research inform every design decision to maximize usability and engagement.",
            },
            {
                title: 'Can you create interactive prototypes before development?',
                content:
                    'Absolutely. We build clickable prototypes using tools like Figma, Adobe XD, or InVision, allowing you to experience the app flow, test usability, and gather feedback before development begins.',
            },
            {
                title: 'How do you ensure accessibility and inclusive design?',
                content:
                    'We follow WCAG 2.1 guidelines, implement color contrast standards, keyboard navigation, screen reader compatibility, and ensure the app is usable by all audiences.',
            },
            {
                title: 'Can you redesign existing apps or websites?',
                content:
                    'Yes. We analyze current interfaces, identify usability issues, and provide a modern, optimized redesign that improves user engagement and conversions.',
            },
            {
                title: 'How do you collaborate with developers?',
                content:
                    'We deliver design assets, style guides, and design systems with detailed specifications to ensure a seamless handoff and maintain design integrity throughout development.',
            },
            {
                title: 'How long does the design process take?',
                content:
                    'The timeline depends on project complexity. Small apps may take 2–4 weeks, while complex platforms can take 6–12 weeks. We provide a clear schedule and regular updates during the design process.',
            },
            {
                title: 'Can you incorporate brand identity into the design?',
                content:
                    'Yes. We align UI/UX with your brand guidelines, tone, and visual identity, ensuring the final product resonates with your audience and reflects your brand consistently.',
            },
            {
                title: 'How do we get started with your design team?',
                content:
                    "Share your project idea, goals, and any existing materials. We'll schedule a consultation to discuss scope, timelines, and deliverables, then start the research and prototyping phase.",
            },
        ],
    },
    {
        id: 4,
        slug: 'cloud-infrastructure-and-devops',
        title: 'Cloud Infrastructure & DevOps',
        category: 'Services',
        description:
            'Reliable cloud solutions and DevOps practices for fast, secure, and scalable systems',
        image: cloud_and_devops,
        tileImage: cloud_and_devops,
        detailImage: DemoImage,
        span: 2,
        longDescription: [
            'Our Cloud Infrastructure & DevOps services empower your business to leverage the full potential of the cloud. We design, build, and manage scalable, secure cloud architectures, implement CI/CD pipelines, container orchestration, and monitoring solutions.',
            'By adopting automation and DevOps practices, we accelerate deployment speed, improve uptime, reduce operational costs, and ensure reliability. ',
            'Whether migrating to the cloud or optimizing existing infrastructure, we help your systems perform optimally while reducing risk.',
        ],
        features: [
            'Cloud architecture design',
            'Infrastructure as Code (IaC)',
            'CI/CD pipeline setup',
            'Container orchestration',
            'Monitoring and logging',
            'Security and compliance',
        ],
        technologies: [
            { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
            { name: 'Azure', logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg' },
            {
                name: 'Google Cloud',
                logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg',
            },
            { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
            { name: 'Kubernetes', logo: 'https://cdn.worldvectorlogo.com/logos/kubernets.svg' },
            {
                name: 'Terraform',
                logo: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg',
            },
            { name: 'Jenkins', logo: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' },
            { name: 'GitLab CI', logo: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg' },
        ],
        stats: [
            { value: '70%', label: 'Deployment Speed Increase' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '45%', label: 'Infrastructure Cost Reduction' },
        ],
        sectionTitles: {
            left: 'Modernize Your Infrastructure',
            right: 'Automate for Speed and Reliability',
        },
        detailedText: {
            left: 'Migrate to the cloud and leverage scalable infrastructure that grows with your business needs while reducing operational costs and improving flexibility.',
            right: 'Implement DevOps practices that enable continuous delivery, automated testing, and faster time-to-market for new features with increased reliability.',
        },
        QandA: [
            {
                title: 'What services do you provide in Cloud & DevOps?',
                content:
                    'We offer cloud strategy, architecture, deployment, and DevOps automation to ensure your applications are scalable, resilient, and continuously delivered with high quality.',
            },
            {
                title: 'Which cloud platforms do you work with?',
                content:
                    'We specialize in AWS, Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions, tailoring infrastructure to your business needs.',
            },
            {
                title: 'How do you ensure application scalability?',
                content:
                    'We design elastic cloud architectures with auto-scaling, load balancing, and containerization to handle growing user traffic efficiently without downtime.',
            },
            {
                title: 'What DevOps practices do you follow?',
                content:
                    'We implement CI/CD pipelines, automated testing, infrastructure-as-code (IaC), monitoring, and logging to accelerate delivery while maintaining system stability and security.',
            },
            {
                title: 'Can you migrate existing applications to the cloud?',
                content:
                    'Yes. We handle cloud migration planning, data transfer, application refactoring, and post-migration optimization to ensure a smooth transition with minimal disruption.',
            },
            {
                title: 'How secure are your cloud deployments?',
                content:
                    'Security is a top priority. We implement role-based access, encryption, network segmentation, vulnerability scanning, and compliance measures to protect your data and applications.',
            },
            {
                title: 'Do you provide monitoring and maintenance services?',
                content:
                    'Absolutely. We offer 24/7 monitoring, incident response, performance optimization, and regular updates to ensure your systems remain secure and reliable.',
            },
            {
                title: 'Can you integrate DevOps into existing teams?',
                content:
                    'Yes. We collaborate with your developers, QA, and operations teams to introduce DevOps workflows and tools, improving deployment speed and reducing errors.',
            },
            {
                title: 'How do you manage costs in the cloud?',
                content:
                    'We provide cost analysis, right-sizing recommendations, and automated scaling to optimize cloud usage and reduce unnecessary expenses.',
            },
            {
                title: 'How do we get started with your Cloud & DevOps team?',
                content:
                    "Share your current infrastructure, business goals, and challenges. We'll schedule a consultation to design a customized strategy, then begin implementation and automation.",
            },
        ],
    },
    {
        id: 5,
        slug: 'digital-marketing-and-growth-strategy',
        title: 'Digital Marketing & Growth Strategy',
        category: 'Services',
        description:
            'Data-driven strategies to boost brand visibility, attract customers, and maximize ROI.',
        image: digital_marketing,
        tileImage: digital_marketing,
        detailImage: DemoImage,
        span: 1,
        longDescription: [
            'Our Digital Marketing & Growth Strategy services combine creative campaigns with data-driven insights to help businesses grow online.',
            'We cover SEO, content marketing, social media, email marketing, paid advertising, analytics, and growth hacking techniques. ',
            'By optimizing the marketing funnel, personalizing campaigns, and leveraging advanced analytics, we help you convert visitors into loyal customers while building sustainable, long-term brand presence.',
        ],
        features: [
            'SEO and content strategy',
            'Social media marketing',
            'Email marketing campaigns',
            'Paid advertising (PPC)',
            'Marketing analytics and reporting',
            'Growth hacking techniques',
        ],
        technologies: [
            {
                name: 'Google Analytics',
                logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg',
            },
            { name: 'Google Ads', logo: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg' },
            {
                name: 'Facebook Ads',
                logo: 'https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg',
            },
            { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg' },
            {
                name: 'Mailchimp',
                logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg',
            },
        ],
        stats: [
            { value: '200%', label: 'Traffic Increase' },
            { value: '3x', label: 'Lead Generation' },
            { value: '150%', label: 'ROI Improvement' },
        ],
        sectionTitles: {
            left: 'Grow Your Online Presence',
            right: 'Convert Visitors into Customers',
        },
        detailedText: {
            left: 'Build brand awareness and reach your target audience through strategic digital marketing campaigns across multiple channels including social media, search, and email.',
            right: 'Optimize your marketing funnel to convert more visitors into leads and customers with data-driven strategies, A/B testing, and conversion rate optimization.',
        },
        QandA: [
            {
                title: 'What services do you provide in Digital Marketing?',
                content:
                    'We offer a full suite of digital marketing services, including SEO, social media marketing, email campaigns, PPC advertising, content marketing, and growth strategy consulting—all tailored to increase your brand visibility, engagement, and conversions.',
            },
            {
                title: 'How do you create a marketing strategy for my business?',
                content:
                    'We begin with a comprehensive audit of your current digital presence, analyze competitors, and define KPIs aligned with your business goals. Then we create a multi-channel strategy combining paid, organic, and content-driven tactics.',
            },
            {
                title: 'Do you handle social media advertising?',
                content:
                    'Yes. We manage Facebook, Instagram, LinkedIn, TikTok, and other social platforms, creating highly targeted ad campaigns, tracking performance, and continuously optimizing to maximize ROI.',
            },
            {
                title: "Can you improve my website's search engine ranking?",
                content:
                    'Absolutely. Our SEO services include keyword research, on-page optimization, technical SEO, link building, and content strategy to improve visibility and drive organic traffic.',
            },
            {
                title: 'Do you provide email marketing services?',
                content:
                    'Yes. We create personalized email campaigns, automation workflows, segmentation strategies, and analytics tracking to nurture leads, reduce churn, and increase conversions.',
            },
            {
                title: 'How do you measure marketing performance?',
                content:
                    'We track key metrics like CTR, conversion rates, ROAS, organic traffic, and engagement rates using platforms like Google Analytics, Google Data Studio, and social ad dashboards to report results transparently.',
            },
            {
                title: 'Do you provide content marketing and copywriting?',
                content:
                    'Yes. We produce blogs, social content, ad copy, landing pages, and multimedia assets that align with your brand voice and marketing goals, optimized for engagement and conversions.',
            },
            {
                title: 'Can you help with growth strategy beyond marketing?',
                content:
                    'Yes. We advise on sales funnel optimization, customer journey mapping, retention strategies, and data-driven experiments to drive sustainable growth for your business.',
            },
            {
                title: 'How do you manage budgets for campaigns?',
                content:
                    'We create a strategic budget allocation plan, test campaigns with small investments, then scale high-performing ads. Our focus is on maximizing ROI and efficient spending.',
            },
            {
                title: 'How do we get started with your marketing team?',
                content:
                    "Reach out with your business goals and current digital presence. We'll schedule a consultation, develop a tailored strategy, and begin implementing campaigns to drive measurable growth.",
            },
        ],
    },
];
