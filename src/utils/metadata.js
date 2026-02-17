export function generateSEOMetadata(seo = {}) {
    const siteName = 'Aetherix';
    const defaultImage = 'https://yoursite.com/default-og-image.jpg';
    const baseUrl = 'https://yoursite.com';

    const {
        title,
        description,
        keywords,
        canonical,
        og_image,
        twitter_image,
        og_title,
        og_description,
        twitter_title,
        twitter_description,
        robots = 'index, follow',
        author,
        publisher,
    } = seo;

    return {
        title: title ? `${title} | ${siteName}` : siteName,
        description: description || `Welcome to ${siteName}`,
        keywords: keywords || 'default, keywords, here',
        authors: author ? [{ name: author }] : [{ name: siteName }],
        creator: author || siteName,
        publisher: publisher || siteName,
        robots: {
            index: robots.includes('index'),
            follow: robots.includes('follow'),
        },
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: canonical || baseUrl,
            title: og_title || title || siteName,
            description: og_description || description || `Welcome to ${siteName}`,
            siteName: siteName,
            images: [
                {
                    url: og_image || defaultImage,
                    width: 1200,
                    height: 630,
                    alt: og_title || title || siteName,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: twitter_title || title || siteName,
            description: twitter_description || description || `Welcome to ${siteName}`,
            images: [twitter_image || og_image || defaultImage],
        },
        alternates: {
            canonical: canonical || baseUrl,
        },
    };
}
