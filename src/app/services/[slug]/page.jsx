import SEO from '@/components/global/SEO';
import servicespage from '@/seo/servicespage';
import ServiceDetails from './ServiceDetails';
import { servicesData } from '@/data/service-data';

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

function Page({ params }) {
    const slug = params?.slug;
    const service = servicesData.find((s) => s.slug === slug);
    if (!service) {
        return (
            <div className='container mx-auto py-20 text-center'>
                <h1 className='text-4xl font-bold mb-4'>Service Not Found</h1>
                <p className='text-gray-600'>The service you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <>
            <SEO seo={servicespage} />
            <ServiceDetails service={service} />
        </>
    );
}

export default Page;
