import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/logo.png', 
  ogType = 'website',
  canonicalUrl,
  author = 'Dextralogic Team',
  publishedDate,
  modifiedDate
}) => {
  // Create a full title with brand name
  const fullTitle = title ? `${title} | Dextralogic AI solutions` : 'Dextralogic AI solutions';
  
  // Default description if none provided
  const defaultDescription = 'From Concept to Completion, We Provide a Full Spectrum of Technology Services Tailored to Your Needs.';
  
  // Ensure ogImage has absolute URL
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://dextralogic.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
  
  // Ensure canonicalUrl is absolute
  const absoluteCanonicalUrl = canonicalUrl || 'https://dextralogic.com/';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:url" content={absoluteCanonicalUrl} />
      <meta property="og:site_name" content="Dextralogic AI solutions" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:site" content="@dextralogic" />
      
      {/* Article specific meta tags */}
      {ogType === 'article' && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {ogType === 'article' && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Canonical URL - essential for SEO */}
      <link rel="canonical" href={absoluteCanonicalUrl} />
    </Helmet>
  );
};

export default SEO;