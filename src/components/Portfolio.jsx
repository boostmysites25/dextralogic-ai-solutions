import React from "react";
import { appPortfolio, webPortfolio } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Portfolio = ({ page }) => {
  let portfolio;
  if (page) {
    const isWebDevelopment = Boolean(page === "web-development");
    portfolio = isWebDevelopment ? webPortfolio : appPortfolio;
  } else {
    portfolio = [...webPortfolio, ...appPortfolio].slice(0, 6); // Limit to 6 items on homepage
  }

  return (
    <div id="portfolio" className="relative">
      <div className="blue-bg-shape rotate-[-45deg] top-[2rem] right-3 -z-10"></div>
      <div className="blurred-red-circle h-[25rem] w-[25rem] bottom-[-2rem] left-[-2rem] -z-10"></div>

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
          Portfolio
        </motion.p>
        <motion.h2 variants={fadeIn} className="heading mt-3 mb-4">
          Our Selected Projects
        </motion.h2>
        <motion.p variants={fadeIn} className="max-w-3xl mx-auto text-gray-600">
          Explore our portfolio of successful projects that showcase our
          expertise and innovative solutions.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]"
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-white/80 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {item.description ||
                  "A showcase of our expertise in creating innovative digital solutions."}
              </p>
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                <Link
                  to={item.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary bg-white/90 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors"
                >
                  View Project <FaExternalLinkAlt size={12} />
                </Link>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              {item.category || (page === "web-development" ? "Web" : "App")}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
