import SEO from '@/components/global/SEO';
import Home from '@/components/home/Home';
import homepage from '@/seo/homepage';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(homepage);
export default async function index() {
    return (
        <>
            <Home />
        </>
    );
}
