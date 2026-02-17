// lib/seoConfig.js
import { APPNAME } from '@/config';

const defaultImage = 'https://yoursite.com/default-image.jpg';

export function generateSEOConfig(seo = {}) {
  const siteName = APPNAME;

  return {
    title: seo?.title ? `${seo.title} | ${siteName}` : siteName,
    description: seo?.description || '',
    keywords: seo?.keywords || '',
    openGraph: {
      title: seo?.title || siteName,
      description: seo?.description || '',
      images: [{ url: seo?.og_image || defaultImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.title || siteName,
      description: seo?.description || '',
      images: [seo?.twitter_image || defaultImage],
    },
    alternates: {
      canonical: seo?.canonical,
    },
  };
}
