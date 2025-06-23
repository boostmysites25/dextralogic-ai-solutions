import React from "react";
import bgImg from "../assets/testimonial-bg.png";
import { useKeenSlider } from "keen-slider/react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { FaStar, FaUserCircle } from "react-icons/fa";

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

const animation = { duration: 30000, easing: (t) => t };

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3,
      spacing: 30,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 30,
        },
      },
      "(min-width: 769px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      "(min-width: 1550px)": {
        slides: {
          perView: 4,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div
      className="py-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70"></div>
      <div className="blue-bg-shape left-0 top-0 rotate-45"></div>
      <div className="blue-bg-shape right-0 bottom-3 rotate-45"></div>
      <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-1/2 -z-10"></div>

      <div className="wrapper relative z-10">
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
            Testimonials
          </motion.p>
          <motion.h2 variants={fadeIn} className="heading mt-3 mb-4">
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="max-w-3xl mx-auto text-gray-600"
          >
            Hear from businesses that have transformed their operations with our
            technology solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={sliderRef}
          className="keen-slider"
        >
          {testimonials
            .concat(testimonials)
            .map(({ id, img, title, name, review }, index) => (
              <div key={id + index} className="keen-slider__slide px-2">
                <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <RiDoubleQuotesR className="text-5xl text-primary/10" />
                    </div>

                    <p className="text-gray-700 italic flex-grow">"{review}"</p>

                    <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                      {img ? (
                        <img
                          src={img}
                          alt={name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <FaUserCircle className="text-primary w-8 h-8" />
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-gray-800">{name}</h4>
                        <p className="text-sm text-gray-500">{title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
