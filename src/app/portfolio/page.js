import HeaderSection from '@/components/global/HeaderSecton';
import SEO from '@/components/global/SEO';
import PortFolioPage from '@/components/home/PortFolioSection';
import portfoliopage from '@/seo/portfolio';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(portfoliopage);
const index = () => {
    return (
        <>
            <HeaderSection />
            <PortFolioPage main={true} />
        </>
    );
};

export default index;
