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
    ]
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
export const ServiceStructuredData = ({ name, description, url, image }) => {
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
    "url": url,
    "image": image
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
export const ArticleStructuredData = ({ title, description, url, image, datePublished, dateModified, authorName }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
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
      "@id": url
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

export default {
  OrganizationStructuredData,
  ServiceStructuredData,
  ArticleStructuredData,
  FAQStructuredData
};