import BlogDetails from '@/components/blogs/BlogDetails';
import HeaderSection from '@/components/global/HeaderSecton';
import { generateSEOConfig } from '@/components/global/seoConfig';
import blogData from '@/data/BlogData';

export async function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}
export async function generateMetadata({ params }) {
    const { slug } = await params;

    const { default: seoData } = await import('@/seo/blogs');
    const seo = seoData.find((item) => item.slug === slug);

    if (!seo) {
        return {
            title: 'Blog Not Found',
            description: 'The requested blog does not exist.',
        };
    }

    return generateSEOConfig(seo);
}

export default async function BlogPage({ params }) {
    const { slug } = await params;

    const blog = blogData.find((blog) => blog?.slug === slug);
    return (
        <div>
            <HeaderSection title={blog?.title} />
            <BlogDetails blog={blog} />
        </div>
    );
}
