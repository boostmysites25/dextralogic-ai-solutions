import React, { useState, useMemo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import { appPortfolio, webPortfolio } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SEO from "../components/SEO";
import banner from "../assets/services-banner.webp";
import { lazy } from "react";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Combine all portfolios with category labels
  const allPortfolios = useMemo(() => {
    const webWithCategory = webPortfolio.map((item) => ({
      ...item,
      category: "web",
    }));
    const appWithCategory = appPortfolio.map((item) => ({
      ...item,
      category: "app",
    }));
    return [...webWithCategory, ...appWithCategory];
  }, []);

  // Filter portfolios based on active filter
  const filteredPortfolios = useMemo(() => {
    if (activeFilter === "all") {
      return allPortfolios;
    }
    return allPortfolios.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter, allPortfolios]);

  const filters = [
    { id: "all", label: "All Projects", count: allPortfolios.length },
    { id: "web", label: "Web Development", count: webPortfolio.length },
    { id: "app", label: "App Development", count: appPortfolio.length },
  ];

  return (
    <>
      <SEO
        title="Portfolio - Our Projects"
        description="Explore our portfolio of successful web and mobile app development projects. See how we've helped businesses transform their digital presence with innovative solutions."
        keywords="portfolio, web development projects, mobile app projects, case studies, dextralogic projects, web applications, mobile applications"
        canonicalUrl="https://dextralogic.com/portfolio"
      />
      <Header />
      <PageBanner
        title={"Our Portfolio"}
        banner={banner}
        position={"center"}
      />

      <div className="py-[4rem] relative min-h-screen">
        <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div>
        <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div>

        <div className="wrapper">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeIn}
              className="gradient-text uppercase font-semibold tracking-wider text-sm mb-3"
            >
              Portfolio
            </motion.p>
            <motion.h2 variants={fadeIn} className="heading mt-3 mb-4">
              Our Selected Projects
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="max-w-3xl mx-auto text-gray-600 mb-8"
            >
              Explore our portfolio of successful projects that showcase our
              expertise and innovative solutions across web and mobile
              development.
            </motion.p>

            {/* Filter Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter.label}
                  {/* <span className="ml-2 text-sm opacity-75">
                    ({filter.count})
                  </span> */}
                </button>
              ))}
            </motion.div>
          </motion.div>

          {/* Portfolio Grid */}
          {filteredPortfolios.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPortfolios.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={`${item.category}-${item.id}`}
                  className="group relative overflow-hidden rounded-xl shadow-lg h-[300px] bg-white"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="mb-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                          item.category === "web"
                            ? "bg-blue-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {item.category === "web" ? "Web" : "App"}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/80 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-sm">
                      {item.description ||
                        "A showcase of our expertise in creating innovative digital solutions."}
                    </p>
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary bg-white/90 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"
                      >
                        View Project <FaExternalLinkAlt size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Category Badge - Always Visible */}
                  <div
                    className={`absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full ${
                      item.category === "web"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  >
                    {item.category === "web" ? "Web" : "App"}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found for the selected filter.
              </p>
            </div>
          )}

          {/* Stats Section */}
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">
                {allPortfolios.length}+
              </h3>
              <p className="text-gray-600 font-medium">Total Projects</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">
                {webPortfolio.length}+
              </h3>
              <p className="text-gray-600 font-medium">Web Projects</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-6 rounded-xl text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">
                {appPortfolio.length}+
              </h3>
              <p className="text-gray-600 font-medium">App Projects</p>
            </div>
          </motion.div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Portfolio;

