import CareerDetails from '@/components/career/CareerDetails';
import HeaderSection from '@/components/global/HeaderSecton';
import careerDetailsPage from '@/seo/careerPage';
import { generateSEOMetadata } from '@/utils/metadata';
import { jobListings } from '../jobData';
export const metadata = generateSEOMetadata(careerDetailsPage);
export async function generateStaticParams() {
    return jobListings.map((job) => ({
        id: job.id.toString(),
    }));
}
export default async function CareerApplicationPage({ params }) {
    const idParams = await params;

    const job = jobListings.find((item) => item.id.toString() === idParams.id);

    return (
        <>
            <HeaderSection title={job.title} />
            <CareerDetails jobListings={job} />
        </>
    );
}
