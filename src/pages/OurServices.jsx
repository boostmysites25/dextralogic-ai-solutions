import React, { lazy, useState, useRef } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import banner from "../assets/services-banner.webp";
import GetInTouch from "../components/GetInTouch";
import { allServices } from "../constants";
import { Link } from "react-router-dom";
import { createUrlParam } from "../utils/helper";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const WorkingProcess = lazy(() => import("../components/WorkingProcess"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const OurServices = () => {
  const [activeService, setActiveService] = useState(allServices[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  
  // Refs for scrolling
  const servicesRef = useRef(null);
  const contactFormRef = useRef(null);
  
  const handleServiceSelect = (service) => {
    setActiveService(service);
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback if ref is not available
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  
  const openCaseStudyModal = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setShowModal(true);
  };
  
  const closeCaseStudyModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <PageBanner 
        title={"Our Services"} 
        banner={banner} 
        position={"left"} 
      />
      
      {/* Hero Section */}
      <section className="py-[4rem] bg-gradient-to-r from-primary/5 to-secondary/10">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Comprehensive Solutions for Modern Businesses
              </h2>
              <p className="text-lg mb-8">
                At Dextralogic, we offer a wide range of cutting-edge services designed to help businesses thrive in the digital age. From AI and machine learning to web development and cloud solutions, our expert team delivers tailored strategies that drive growth and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="primary-btn"
                  onClick={scrollToContactForm}
                >
                  Schedule a Consultation
                </button>
                <button 
                  className="outline-btn"
                  onClick={scrollToServices}
                >
                  Explore Our Services
                </button>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <img 
                  src={activeService?.img1} 
                  alt={activeService?.title} 
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-primary text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-xl">{allServices.length}</p>
                  <p className="text-sm">Service Categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Services Section */}
      <section className="py-[4rem]" ref={servicesRef}>
        <div className="wrapper">
          <h2 data-aos="fade-up" className="heading text-center mb-2">Our Services</h2>
          <p data-aos="fade-up" className="description text-center mb-10 max-w-3xl mx-auto">
            We offer a comprehensive suite of services designed to meet the diverse needs of modern businesses.
          </p>
          
          {/* Service Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {allServices.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeService.id === service.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
          
          {/* Active Service Details */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div data-aos="fade-right">
              <img 
                src={activeService.img1} 
                alt={activeService.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg mb-6"
              />
              <img 
                src={activeService.img2} 
                alt={activeService.title}
                className="w-full h-60 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-6 text-primary">{activeService.title}</h3>
              <div className="mb-8 whitespace-pre-line">
                {activeService.smallPara}
              </div>
              
              <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
              <ul className="space-y-3 mb-8">
                {activeService.keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <Link 
                  to={`/services/${createUrlParam(activeService.title)}`}
                  className="primary-btn"
                >
                  Learn More
                </Link>
                <button 
                  onClick={scrollToContactForm}
                  className="outline-btn"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Features */}
      <section className="py-[4rem] bg-[#f8f9fa]">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="heading text-center mb-2">Why Choose Our Services</h2>
          <p data-aos="fade-up" className="description text-center mb-10 max-w-3xl mx-auto">
            We deliver exceptional results through our commitment to quality, innovation, and client success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div data-aos="fade-up" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="mb-4">Our team consists of industry experts with extensive experience in their respective fields, ensuring high-quality solutions tailored to your specific needs.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-primary rounded-full"></span>
                  <span>Specialized knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-primary rounded-full"></span>
                  <span>Continuous learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-primary rounded-full"></span>
                  <span>Collaborative approach</span>
                </li>
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-secondary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cutting-Edge Technology</h3>
              <p className="mb-4">We stay at the forefront of technological advancements, implementing the latest tools and methodologies to deliver innovative solutions.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-secondary rounded-full"></span>
                  <span>Latest frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-secondary rounded-full"></span>
                  <span>Advanced methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-secondary rounded-full"></span>
                  <span>Optimized performance</span>
                </li>
              </ul>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Client-Centric Approach</h3>
              <p className="mb-4">We prioritize your business goals and requirements, maintaining clear communication throughout the project lifecycle to ensure your satisfaction.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-primary rounded-full"></span>
                  <span>Personalized solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-primary rounded-full"></span>
                  <span>Transparent communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 mt-[.6rem] flex-shrink-0 bg-primary rounded-full"></span>
                  <span>Long-term partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="py-[4rem]">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="heading text-center mb-2">Industries We Serve</h2>
          <p data-aos="fade-up" className="description text-center mb-10 max-w-3xl mx-auto">
            Our services are tailored to meet the unique needs of various industries.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-aos="fade-up" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Healthcare
              </h3>
              <p>Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Retail
              </h3>
              <p>Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fintech
              </h3>
              <p>Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.</p>
            </div>
            
            <div data-aos="fade-up" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Manufacturing
              </h3>
              <p>Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Hospitality
              </h3>
              <p>Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                Logistics
              </h3>
              <p>Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-[4rem] bg-gradient-to-r from-primary/10 to-secondary/15">
        <div className="wrapper">
          <h2 data-aos="fade-up" className="heading text-center mb-2">Success Stories</h2>
          <p data-aos="fade-up" className="description text-center mb-10 max-w-3xl mx-auto">
            See how our services have transformed businesses across industries.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-up" className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={allServices[0]?.img2} 
                alt="Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
                  Healthcare
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Diagnostic Assistant</h3>
                <p className="mb-4">Developed an AI system that analyzes medical images to assist radiologists in detecting abnormalities with 94% accuracy, reducing diagnosis time by 60%.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Results:</p>
                    <ul className="text-sm">
                      <li>60% faster diagnosis</li>
                      <li>94% detection accuracy</li>
                      <li>30% cost reduction</li>
                    </ul>
                  </div>
                  <button 
                    className="outline-btn"
                    onClick={() => openCaseStudyModal('healthcare')}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img 
                src={allServices[1]?.img1} 
                alt="Case Study" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-3">
                  E-Commerce
                </div>
                <h3 className="text-xl font-bold mb-3">Custom E-Commerce Platform</h3>
                <p className="mb-4">Developed a scalable e-commerce solution with integrated AI-powered recommendation engine, resulting in a 45% increase in average order value.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Results:</p>
                    <ul className="text-sm">
                      <li>45% higher order value</li>
                      <li>32% conversion rate increase</li>
                      <li>60% faster page loading</li>
                    </ul>
                  </div>
                  <button 
                    className="outline-btn"
                    onClick={() => openCaseStudyModal('retail')}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WorkingProcess />
      <Testimonials />
      <BrandLogos />
      
      {/* Contact Form Section */}
      <section id="contact-section" className="scroll-mt-20" ref={contactFormRef}>
        <GetInTouch />
      </section>
      
      <Footer />
      
      {/* Case Study Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">
                  {selectedCaseStudy === 'healthcare' ? 'AI-Powered Diagnostic Assistant' : 'Custom E-Commerce Platform'}
                </h3>
                <button 
                  onClick={closeCaseStudyModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <img 
                src={selectedCaseStudy === 'healthcare' ? allServices[0]?.img2 : allServices[1]?.img1} 
                alt="Case Study" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              
              {selectedCaseStudy === 'healthcare' ? (
                <>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                    <p>A leading healthcare provider was struggling with diagnostic efficiency. Radiologists were overwhelmed with the volume of medical images, leading to delays in diagnosis and treatment.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Solution</h4>
                    <p>We developed an AI-powered diagnostic assistant that uses deep learning to analyze medical images and highlight potential abnormalities. The system was trained on a vast dataset of annotated medical images and validated by expert radiologists.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Results</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>60% reduction in diagnosis time</li>
                      <li>94% accuracy in detecting abnormalities</li>
                      <li>30% decrease in operational costs</li>
                      <li>Improved patient outcomes through earlier detection</li>
                      <li>Enhanced radiologist productivity and job satisfaction</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Challenge</h4>
                    <p>An established retailer needed to modernize their online presence with a robust e-commerce platform that could handle high traffic volumes while providing personalized shopping experiences.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Solution</h4>
                    <p>We developed a custom e-commerce platform with an integrated AI recommendation engine, mobile-responsive design, and streamlined checkout process. The solution included advanced analytics to track customer behavior and optimize the shopping experience.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">Results</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>45% increase in average order value</li>
                      <li>32% improvement in conversion rates</li>
                      <li>60% faster page loading times</li>
                      <li>28% reduction in cart abandonment</li>
                      <li>Seamless integration with existing inventory systems</li>
                    </ul>
                  </div>
                </>
              )}
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="primary-btn"
                  onClick={scrollToContactForm}
                >
                  Discuss Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurServices;
