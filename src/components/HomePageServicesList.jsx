import React, { useState } from "react";
import { allServices } from "../constants";
import { Link, useLocation } from "react-router-dom";
import { createUrlParam } from "../utils/helper";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HomePageServicesList = () => {
  const [selectedService, setSelectedService] = useState(allServices[0]);
  const { pathname } = useLocation();

  // set active service
  const handleServiceSelect = (item) => {
    setSelectedService(item);
  };

  return (
    <section className="w-full">
      {!pathname.includes("/services") && (
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeIn} className="gradient-text uppercase font-semibold tracking-wider">
            Services We Offer
          </motion.p>
          <motion.h2 variants={fadeIn} className="heading mt-3 mb-4">
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p variants={fadeIn} className="max-w-3xl mx-auto text-gray-600">
            From AI implementation to web development, we offer end-to-end services to transform your business.
          </motion.p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-[35%_65%] gap-8 p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md h-full"
          >
            <h4 className="text-2xl font-bold mb-6 text-gray-800">Our Services</h4>
            <div className="flex flex-col gap-3">
              {allServices.map((item) => (
                <button
                  key={item.title}
                  className={`flex items-center gap-3 text-left px-5 py-4 rounded-lg transition-all duration-300 hover:shadow-md ${
                    item.id === selectedService.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleServiceSelect(item)}
                >
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.id === selectedService.id ? "bg-white/20" : "bg-primary/10"
                  }`}>
                    {item.id === selectedService.id ? (
                      <FaCheck className={item.id === selectedService.id ? "text-white" : "text-primary"} />
                    ) : (
                      <span className="text-primary font-bold">{item.id}</span>
                    )}
                  </span>
                  <span className="font-medium">{item.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white p-8 rounded-xl shadow-md"
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-gray-800">{selectedService.title}</h3>
            
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={selectedService.img1}
                className="w-full aspect-video object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                alt={selectedService.title}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Key Benefits</h4>
              <ul className="space-y-3">
                {selectedService.keyBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                      <FaCheck />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link
              to={`/services/${createUrlParam(selectedService.title)}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-4"
            >
              Learn more about {selectedService.title} <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePageServicesList;