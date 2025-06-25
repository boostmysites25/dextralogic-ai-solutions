import React, { lazy, memo, useState } from "react";
import Header from "../../components/LandingPage/Header";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../constants";
import Footer from "../../components/LandingPage/Footer";
import CallToAction from "../../components/CallToAction";
import Form from "../../components/Form";
import webImg from "../../assets/landingpage-services-imgs/web-development.webp";
import appImg from "../../assets/landingpage-services-imgs/app-development.webp";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import SEO from "../../components/SEO";

const GetInTouch = lazy(() => import("../../components/GetInTouch"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const HomePageServicesList = lazy(() =>
  import("../../components/HomePageServicesList")
);
const TrustWorthySection = lazy(() =>
  import("../../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() =>
  import("../../components/IndustriesWeServe")
);
const BrandLogos = lazy(() => import("../../components/BrandLogos"));
const Portfolio = lazy(() => import("../../components/Portfolio"));
const Banner = lazy(() => import("../../components/LandingPage/Banner"));

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const servicesList = isWebDevelopment
    ? webDevelopmentServices
    : appDevelopmentServices;

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // SEO content based on page type
  const seoContent = {
    "web-development": {
      title: "Web Development Services",
      description:
        "Transform your digital presence with our expert web development services. We create responsive, high-performance websites tailored to your business needs.",
      keywords:
        "web development, website design, responsive websites, custom web applications, ecommerce websites, CMS development, frontend development, backend development",
    },
    "app-development": {
      title: "Mobile App Development Services",
      description:
        "Elevate your mobile experience with our cutting-edge app development services. We build native and cross-platform mobile applications for iOS and Android.",
      keywords:
        "mobile app development, iOS app development, Android app development, cross-platform apps, React Native, Flutter, mobile UI/UX, app maintenance",
    },
  };

  return (
    <>
      <SEO
        title={seoContent[page].title}
        description={seoContent[page].description}
        keywords={seoContent[page].keywords}
        canonicalUrl={`https://dextralogic.com/${page}`}
        ogImage={page === "web-development" ? webImg : appImg}
      />
      <Header />
      <Banner page={page} />

      {/* Consultation Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeIn}
              className="gradient-text uppercase font-semibold tracking-wider"
            >
              {isWebDevelopment ? "Web Development" : "App Development"}
            </motion.p>
            <motion.h2 variants={fadeIn} className="heading mt-3 mb-4">
              {isWebDevelopment
                ? "Transform Your Digital Presence"
                : "Elevate Your Mobile Experience"}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="max-w-3xl mx-auto text-gray-600"
            >
              {isWebDevelopment
                ? "Create a powerful online presence with our custom web solutions designed to engage visitors and drive conversions."
                : "Deliver exceptional mobile experiences with our custom app development services tailored to your business needs."}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={isWebDevelopment ? webImg : appImg}
                className="absolute inset-0 w-full h-full object-cover"
                alt={isWebDevelopment ? "Web Development" : "App Development"}
              />
              <div className="relative z-10 h-full bg-gradient-to-r from-primary/80 to-black/70 flex items-center justify-center">
                <div className="text-white space-y-6 text-center p-8">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {isWebDevelopment
                      ? "Expert Web Development Solutions"
                      : "Professional App Development Services"}
                  </h3>
                  <p className="text-lg max-w-lg mx-auto">
                    Dextralogic AI solutions specializes in creating{" "}
                    {isWebDevelopment ? "websites" : "mobile apps"} that deliver
                    exceptional user experiences and tangible business results.
                    Our team of experts combines technical expertise with
                    creative design to build solutions that stand out in today's
                    competitive digital landscape.
                  </p>
                  <button
                    onClick={toggleForm}
                    className="px-6 py-3 bg-white text-primary hover:bg-gray-100 font-medium rounded-full transition-colors inline-flex items-center gap-2"
                  >
                    Book Your Free Consultation <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>

            {isFormVisible && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:block"
              >
                <Form />
              </motion.div>
            )}

            {!isFormVisible && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Our {isWebDevelopment ? "Web" : "App"} Development
                  Services?
                </h3>
                <ul className="space-y-4">
                  {[
                    isWebDevelopment
                      ? "Custom designs tailored to your brand identity"
                      : "Native and cross-platform app development expertise",
                    isWebDevelopment
                      ? "Responsive layouts that work on all devices"
                      : "Intuitive UI/UX design for maximum user engagement",
                    isWebDevelopment
                      ? "SEO-optimized structure for better visibility"
                      : "Seamless integration with existing systems",
                    isWebDevelopment
                      ? "Fast loading speeds and optimal performance"
                      : "Robust security features to protect user data",
                    "Ongoing support and maintenance",
                    "Transparent development process",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                        <FaCheck />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={toggleForm}
                  className="mt-8 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Get Started Now <FaArrowRight />
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white">
        <TrustWorthySection />
      </section>

      {/* Services Showcase Section - Redesigned */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-white to-gray-50 relative"
      >
        <div className="blue-bg-shape -z-10 left-[-5%] rotate-45 -translate-y-1/2"></div>
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-45 top-1/2 -translate-y-1/2"></div>

        <div className="wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeIn}
              className="gradient-text uppercase font-semibold tracking-wider"
            >
              Our Specialized Services
            </motion.p>
            <motion.h2 variants={fadeIn} className="heading mt-3 mb-4">
              {isWebDevelopment
                ? "Comprehensive Web Development Solutions"
                : "End-to-End Mobile App Development"}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="max-w-3xl mx-auto text-gray-600"
            >
              {isWebDevelopment
                ? "Your website is your digital identity—we ensure it captures the true essence of your brand while delivering exceptional performance."
                : "In today's mobile-first world, a well-designed app serves as a powerful gateway to enhanced customer engagement and business growth."}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {servicesList.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-tertiary/70 to-primary/40 group-hover:opacity-95 transition-opacity duration-300">
                  <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-white">
                    <h3 className="text-2xl font-bold mb-4 text-center">
                      {item.title}
                    </h3>
                    <p className="text-center mb-6">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Services List */}
      <section className="py-16 wrapper">
        <HomePageServicesList />
      </section>

      {/* Industries We Serve */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <IndustriesWeServe />
      </section>

      {/* Call to Action */}
      <section className="pb-10">
        <CallToAction />
      </section>

      {/* Portfolio Section */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper py-20">
          <Portfolio page={page} />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Brand Logos Section */}
      <section className="bg-white py-16">
        <BrandLogos />
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <GetInTouch />
      </section>

      <Footer />
    </>
  );
};

export default memo(LandingPage);
