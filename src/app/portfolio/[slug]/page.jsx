import RoketBus from '@/assets/projects/project_1_1.png';
import HeaderSection from '@/components/global/HeaderSecton';
import SEO from '@/components/global/SEO';
import ProductDetails from '@/components/products/ProductDetails';
import servicespage from '@/seo/servicespage';

const exampleProduct = [
    {
        name: 'Enterprise Cloud Platform',
        slug: 'rocket-bus',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
    {
        name: 'Enterprise Cloud Platform',
        slug: 'courtesy-exp',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
    {
        name: 'Enterprise Cloud Platform',
        slug: 'radi8-health',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
    {
        name: 'Enterprise Cloud Platform',
        slug: 'boutikio',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
    {
        name: 'Enterprise Cloud Platform',
        slug: 'uplify',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
    {
        name: 'Enterprise Cloud Platform',
        slug: 'iaato',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
    {
        name: 'Enterprise Cloud Platform',
        slug: 'visual-discovery',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
    {
        name: 'Enterprise Cloud Platform',
        slug: 'lerenjo',
        description:
            'A comprehensive cloud solution for businesses of all sizes, offering scalability, security, and performance.',
        category: 'Web Development',
        tags: ['SaaS', 'Enterprise', 'Scalable', 'Secure'],
        image: RoketBus,
        tagline:
            'Our platform provides all the tools you need to manage your business in the cloud with confidence.',
        features: [
            {
                title: 'Military-grade Security',
                description:
                    'End-to-end encryption and advanced threat protection to keep your data safe.',
                icon: 'security',
            },
            {
                title: 'Blazing Fast Performance',
                description: 'Optimized for speed with global CDN and edge computing capabilities.',
                icon: 'performance',
            },
            {
                title: 'Scalable Infrastructure',
                description: 'Grow from 10 to 10 million users without changing your architecture.',
                icon: 'server',
            },
            {
                title: 'Multi-cloud Support',
                description: 'Deploy across AWS, Azure, and Google Cloud with a single interface.',
                icon: 'cloud',
            },
            {
                title: 'Mobile Ready',
                description:
                    'Fully responsive design with dedicated mobile SDKs for iOS and Android.',
                icon: 'mobile',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Comprehensive APIs and documentation to integrate with your existing systems.',
                icon: 'api',
            },
        ],
        specifications: [
            {
                category: 'Compatibility',
                items: [
                    'Windows 10/11',
                    'macOS 10.15+',
                    'Linux (all major distros)',
                    'iOS 14+',
                    'Android 10+',
                ],
            },
            {
                category: 'System Requirements',
                items: [
                    '2GHz dual-core processor',
                    '4GB RAM minimum',
                    '500MB disk space',
                    'Internet connection',
                ],
            },
            {
                category: 'Supported Technologies',
                items: [
                    'Docker & Kubernetes',
                    'REST & GraphQL APIs',
                    'PostgreSQL, MySQL, MongoDB',
                    'OAuth 2.0 & SAML',
                ],
            },
        ],
        ctaText:
            'Join thousands of businesses that trust our platform to power their operations every day.',
    },
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
