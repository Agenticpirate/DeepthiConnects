import React from 'react';

const JsonLd: React.FC = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Deepthi Lakkaraju",
    "jobTitle": "Talent Acquisition Specialist",
    "url": "https://deepthiconnects.com",
    "sameAs": [
      "https://www.linkedin.com/in/deepthiconnects/"
    ],
    "knowsAbout": ["Recruitment", "Talent Sourcing", "HR Compliance", "Resume Writing", "ATS Optimization"],
    "workLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DeepthiConnects",
    "description": "Strategic Talent Sourcing, Resume Expert, and Startup HR Solutions.",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
    },
    "email": "HR@deepthiconnects.com"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, serviceSchema]) }}
    />
  );
};

export default JsonLd;