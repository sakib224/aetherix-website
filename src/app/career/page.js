import CareerListingsPage from '@/components/career/CareerPage';
import HeaderSection from '@/components/global/HeaderSecton';
import careerDetailsPage from '@/seo/careerPage';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(careerDetailsPage);
const Career = () => {
    return (
        <div className=' bg-gray-50'>
            <HeaderSection />
            <CareerListingsPage />
        </div>
    );
};

export default Career;
