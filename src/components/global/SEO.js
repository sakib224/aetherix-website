import { APPNAME } from '@/config';
import Head from 'next/head';

export default function SEO({ seo = {} }) {
  const siteName = APPNAME;
  const defaultImage = 'https://yoursite.com/default-image.jpg';

  const {
    title,
    description,
    keywords,
    canonical,
    og_image,
    twitter_image,
  } = seo;

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:image" content={og_image || defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || ''} />
      <meta name="twitter:image" content={twitter_image || defaultImage} />

      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  );
}
