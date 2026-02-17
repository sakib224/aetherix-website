import HeaderSection from '@/components/global/HeaderSecton';
import Services from '@/components/services/Services';
import servicespage from '@/seo/servicespage';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(servicespage);
const index = () => {
    return (
        <>
            <HeaderSection />
            <Services />
        </>
    );
};

export default index;
