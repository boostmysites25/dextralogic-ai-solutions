import React, { lazy, memo, useState, useEffect } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.webp";
import aboutImg2 from "../assets/why-ai-matters.webp";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import { FaArrowRight, FaLightbulb, FaChartLine, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { OrganizationStructuredData } from "../components/StructuredData";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

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

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEO 
        title="Home" 
        description="Dextralogic AI solutions - Pioneering intelligent solutions for tomorrow's challenges. We specialize in AI & ML, Web & Mobile Development, Blockchain & Web3, UI/UX Design, and Cloud Services."
        keywords="AI solutions, machine learning, web development, mobile app development, blockchain, web3, UI/UX design, cloud services, digital transformation"
        canonicalUrl="https://dextralogic.com/"
      />
      <Header />
      <Banner />

      {/* Floating Quick Links */}
      <div
        className={`fixed right-5 z-40 flex flex-col gap-3 transition-all duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#about-us"
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <FaLightbulb />
        </a>
        <a
          href="#services"
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <FaCode />
        </a>
        <a
          href="#industries"
          className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        >
          <FaChartLine />
        </a>
      </div>

      {/* About Us Section - Redesigned */}
      <section
        id="about-us"
        className="relative pt-20 pb-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 h-full"
              >
                <img
                  src={aboutImg}
                  alt="about"
                  className="w-full h-full aspect-video rounded-xl object-cover shadow-xl"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h3 variants={fadeIn} className="heading">
                Pioneering intelligent solutions for tomorrow's challenges.
              </motion.h3>
              <motion.p variants={fadeIn} className="text-gray-600">
                At Dextralogic, we specialize in delivering cutting-edge
                solutions that drive innovation and efficiency. Our expertise
                spans across AI & ML, Web & Mobile Development, Blockchain &
                Web3, UI/UX Design, and Cloud Services, ensuring your business
                stays ahead in the digital era.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-600">
                Dextralogic AI solutions stands as your strategic partner in
                navigating the evolving technological landscape. We specialize
                in crafting bespoke AI implementations that seamlessly integrate
                with your existing infrastructure. Our team of experts combines
                deep technical knowledge with creative problem-solving to
                deliver solutions that drive measurable results across your
                enterprise.
              </motion.p>
              <motion.div variants={fadeIn}>
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn more about our approach <FaArrowRight />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section id="services" className="py-16 bg-white">
        <div className="wrapper">
          <HomePageServicesList />
        </div>
      </section>

      {/* Trust Section - Redesigned */}
      <section className="py-20 bg-gradient-to-r from-white to-white">
        <TrustWorthySection />
      </section>

      {/* AI Impact Section - Redesigned */}
      <section className="bg-white">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h3 variants={fadeIn} className="heading">
                The Impact of AI Technology
              </motion.h3>
              <motion.img
                variants={fadeIn}
                src={aboutImg2}
                alt="about"
                className="md:hidden w-full rounded-xl object-cover shadow-lg mb-4"
              />
              <motion.p variants={fadeIn} className="text-gray-600">
                In today's digital ecosystem, AI technology serves as a
                fundamental catalyst for business transformation. By
                implementing intelligent systems, organizations can analyze
                complex datasets, automate routine processes, and gain valuable
                competitive insights.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-600">
                Our solutions harness these capabilities to create adaptive
                systems that learn and evolve alongside your business, ensuring
                long-term value and sustainable growth in an increasingly
                data-driven marketplace.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex sm:flex-row flex-col gap-4 mt-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">Data Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm font-medium">
                    Process Automation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">
                    Predictive Insights
                  </span>
                </div>
              </motion.div>
            </motion.div>

            <div className="relative hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <img
                  src={aboutImg2}
                  alt="about"
                  className="w-full rounded-xl object-cover shadow-xl"
                />
              </motion.div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Redesigned */}
      <section
        id="industries"
        className="bg-gradient-to-b from-white to-gray-50"
      >
        <div className="wrapper">
          <IndustriesWeServe />
        </div>
      </section>

      {/* Call to Action - Redesigned */}
      <section className="py-20 bg-white">
        <CallToAction />
      </section>

      {/* Portfolio Section - Redesigned */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <Portfolio />
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <Testimonials />

      {/* Leadership Vision Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="wrapper">
          <div className="max-w-7xl mx-auto grid md:grid-cols-[30%_auto] items-center gap-12">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg"
                  loading="lazy"
                  alt="ceo"
                  className="w-full rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.h3 variants={fadeIn} className="heading">
                A Vision for Innovation
              </motion.h3>
              <motion.p variants={fadeIn} className="text-gray-600">
                At Dextralogic, we believe in the transformative potential of
                intelligent technologies to reshape industries and create new
                possibilities. Our dedicated team works tirelessly to bridge the
                gap between cutting-edge research and practical business
                applications.
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-600">
                We're passionate about empowering our clients with solutions
                that not only address current challenges but anticipate future
                needs in an ever-evolving digital landscape.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section - Redesigned */}
      <section className="bg-white">
        <BrandLogos />
      </section>

      {/* Contact Section - Redesigned */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <GetInTouch />
      </section>

      <Footer />
    </>
  );
};

export default memo(Home);
