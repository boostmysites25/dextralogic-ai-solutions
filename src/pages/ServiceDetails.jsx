import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { allServices } from "../constants";
import { createUrlParam } from "../utils/helper";
import SEO from "../components/SEO";
import { ServiceStructuredData } from "../components/StructuredData";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const data = allServices.find(
    (item) => createUrlParam(item.title) === serviceName
  );

  if (!data) {
    <Navigate to="/services" />;
  }
  
  // Create a more comprehensive description
  const metaDescription = data.detailsPageContent.firstPara.slice(0, 160) + '...';
  
  // Create a more comprehensive keywords list
  const keywordsList = `${data.title}, technology services, Dextralogic services, ${data.keywords || ''}, professional services, tech solutions, digital transformation`;
  
  return (
    <div className="flex flex-col gap-10 md:px-5">
      <SEO 
        title={data.title} 
        description={metaDescription}
        keywords={keywordsList}
        canonicalUrl={`https://dextralogic.com/services/${serviceName}`}
        ogImage={data.img1}
      />
      
      {/* Add structured data for the service */}
      <ServiceStructuredData 
        name={data.title}
        description={metaDescription}
        url={`https://dextralogic.com/services/${serviceName}`}
        image={data.img1}
        category={data.category || "Technology Services"}
      />
      <img
        data-aos="fade-up"
        src={data.img1}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt={data.title}
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {data.title}
        </h2>
        <p data-aos="fade-up" className="description">
          {data.detailsPageContent.firstPara}
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          Our Services
        </h2>
        <img
          data-aos="fade-up"
          src={data.img2}
          loading="lazy"
          className="h-[25rem] object-cover rounded-3xl object-center my-4"
          alt={data.title}
        />
        <p data-aos="fade-up" className="description">
          {data.detailsPageContent.servicesSection}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
