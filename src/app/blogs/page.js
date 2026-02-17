import Blogs from '@/components/blogs/Blogs';
import HeaderSection from '@/components/global/HeaderSecton';
import blogpage from '@/seo/blogPage';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(blogpage);
const index = () => {
    return (
        <>
            <HeaderSection />
            <Blogs />
        </>
    );
};
export default index;
