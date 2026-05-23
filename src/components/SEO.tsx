import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: object | object[];
  noIndex?: boolean;
}

const SEO = ({
  title,
  description = SITE_CONFIG.defaultDescription,
  keywords = SITE_CONFIG.defaultKeywords,
  canonicalPath = '/',
  ogImage = SITE_CONFIG.defaultImage,
  ogType = 'website',
  jsonLd,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = title ?? SITE_CONFIG.defaultTitle;
  const canonical = `${SITE_CONFIG.url}${canonicalPath}`;
  const ogImageFull = ogImage.startsWith('http') ? ogImage : `${SITE_CONFIG.url}${ogImage}`;

  const robotsContent = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  return (
    <Helmet>
      {/* Core */}
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_CONFIG.name} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {/* Canonical — prevents duplicate-content penalties */}
      <link rel="canonical" href={canonical} />

      {/* Language & locale signals */}
      <meta httpEquiv="Content-Language" content="fr" />
      <meta name="language" content="French" />

      {/* Open Graph — controls link previews on Facebook, LinkedIn, WhatsApp… */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="fr_MA" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:image" content={ogImageFull} />
      <meta property="og:image:alt" content={`${SITE_CONFIG.name} - Entreprise de Construction au Maroc`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card — controls link previews on X/Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageFull} />

      {/* Geo / Local SEO — helps Google Maps and local pack ranking */}
      <meta name="geo.region" content="MA-01" />
      <meta name="geo.placename" content="Casablanca, Maroc" />
      <meta name="geo.position" content={`${SITE_CONFIG.geo.lat};${SITE_CONFIG.geo.lng}`} />
      <meta name="ICBM" content={`${SITE_CONFIG.geo.lat}, ${SITE_CONFIG.geo.lng}`} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
