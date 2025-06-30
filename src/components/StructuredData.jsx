import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization structured data
export const OrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dextralogic AI solutions",
    "url": "https://dextralogic.com",
    "logo": "https://dextralogic.com/logo.png",
    "description": "From Concept to Completion, We Provide a Full Spectrum of Technology Services Tailored to Your Needs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Your City",
      "addressRegion": "Your Region",
      "postalCode": "Your Postal Code",
      "addressCountry": "Your Country"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-123-456-7890",
      "contactType": "customer service",
      "email": "info@dextralogic.com"
    },
    "sameAs": [
      "https://www.facebook.com/dextralogic",
      "https://www.twitter.com/dextralogic",
      "https://www.linkedin.com/company/dextralogic",
      "https://www.instagram.com/dextralogic"
    ],
    "foundingDate": "2020",
    "founders": [
      {
        "@type": "Person",
        "name": "Dextralogic Founder"
      }
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "30+"
    },
    "slogan": "Pioneering intelligent solutions for tomorrow's challenges",
    "areaServed": "Worldwide"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Service structured data
export const ServiceStructuredData = ({ name, description, url, image, category }) => {
  // Ensure URL is absolute
  const absoluteUrl = url.startsWith('http') ? url : `https://dextralogic.com${url.startsWith('/') ? '' : '/'}${url}`;
  
  // Ensure image URL is absolute
  const absoluteImage = image.startsWith('http') ? image : `https://dextralogic.com${image.startsWith('/') ? '' : '/'}${image}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Dextralogic AI solutions",
      "url": "https://dextralogic.com"
    },
    "url": absoluteUrl,
    "image": absoluteImage,
    "category": category || "Technology Services",
    "areaServed": "Worldwide",
    "serviceType": name,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "description": "Contact for pricing details"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Article structured data for blog posts
export const ArticleStructuredData = ({ title, description, url, image, datePublished, dateModified, authorName, category }) => {
  // Ensure URL is absolute
  const absoluteUrl = url.startsWith('http') ? url : `https://dextralogic.com${url.startsWith('/') ? '' : '/'}${url}`;
  
  // Ensure image URL is absolute
  const absoluteImage = image.startsWith('http') ? image : `https://dextralogic.com${image.startsWith('/') ? '' : '/'}${image}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": absoluteImage,
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": authorName || "Dextralogic Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dextralogic AI solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dextralogic.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": absoluteUrl
    },
    "articleSection": category || "Technology",
    "wordCount": description.split(' ').length,
    "url": absoluteUrl
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// FAQ structured data
export const FAQStructuredData = ({ questions }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// BreadcrumbList structured data
export const BreadcrumbStructuredData = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `https://dextralogic.com${item.url.startsWith('/') ? '' : '/'}${item.url}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// WebSite structured data
export const WebsiteStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dextralogic AI solutions",
    "url": "https://dextralogic.com",
    "description": "From Concept to Completion, We Provide a Full Spectrum of Technology Services Tailored to Your Needs.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dextralogic.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default {
  OrganizationStructuredData,
  ServiceStructuredData,
  ArticleStructuredData,
  FAQStructuredData,
  BreadcrumbStructuredData,
  WebsiteStructuredData
};