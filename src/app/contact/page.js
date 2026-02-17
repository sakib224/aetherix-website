import Contact from '@/components/contact/Contact';
import HeaderSection from '@/components/global/HeaderSecton';
import contactpage from '@/seo/contactpage';

import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(contactpage);
const index = () => {
    return (
        <>
            <HeaderSection />
            <Contact />
        </>
    );
};
export default index;
