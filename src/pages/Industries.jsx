import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import PageBanner from "../components/Website/PageBanner";
import IndustriesWeServe from "../components/IndustriesWeServe";
import GetInTouch from "../components/GetInTouch";
import banner from "../assets/industries-banner.webp";
import BrandLogos from "../components/BrandLogos";
import SEO from "../components/SEO";

const Industries = () => {
  return (
    <>
      <SEO 
        title="Industries We Serve" 
        description="Discover how Dextralogic AI solutions delivers specialized technology services across various industries including healthcare, finance, retail, education, and more."
        keywords="technology for healthcare, fintech solutions, retail technology, edtech solutions, manufacturing technology, logistics tech solutions, industry-specific AI"
        canonicalUrl="https://dextralogic.com/industries"
      />
      <Header />
      <PageBanner
        title={"Industries We Serve"}
        banner={banner}
        position={"center"}
      />
      <div className="mt-[3rem]">
        <IndustriesWeServe />
      </div>
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Industries;
